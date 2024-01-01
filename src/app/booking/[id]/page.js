"use client";

import { supabase } from "@/utils/supabase";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select, Space } from "antd";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Page() {
  const [ticket, setTIcket] = useState(null);
  const params = useParams();
  const queryParams = useSearchParams();
  const router = useRouter();
  const passengerQuantity = queryParams.get("quantity");

  const getData = useCallback(async () => {
    const id = params["id"];

    const { data } = await supabase.from("flights_list").select().eq("id", id).single();
    if (!data) return alert("data not found");

    setTIcket(data);
  }, [params]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handlePayment = async (value) => {
    const userId = 1;

    // insert orders
    // ga ada transaction di SDK supabase ??
    const totalAmount = ticket.price * parseInt(passengerQuantity);
    const ordersPayload = {
      firstName: value.firstName,
      lastName: value.lastName,
      phone: value.mobileNumber,
      email: value.email,
      ticket_id: ticket.id,
      user_id: userId,
      quantity: parseInt(passengerQuantity),
      total: totalAmount,
      order_date: new Date(),
    };

    const { data: order, error } = await supabase
      .from("orders")
      .insert({ ...ordersPayload, meta: JSON.stringify(ordersPayload) })
      .select()
      .single();
    if (error) return alert(error.message);

    // insert passengers
    const passengers = value.passengers.map((row) => ({
      order_id: order.id,
      ...row,
    }));
    const { error: passengerError } = await supabase.from("passengers").insert(passengers);
    if (error) return alert(passengerError.message);

    // if success, redirect
    router.push("/my-booking");
  };

  if (!ticket) return <>loading...</>;
  if (!passengerQuantity) return <>invalid query params</>;

  console.log(passengerQuantity);

  return (
    <main className="flex flex-col px-4 py-8 bg-ghost-white min-h-screen text-raisin-black ">
      <Form
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        colon={false}
        className="mx-auto max-w-2xl"
        onFinish={handlePayment}
      >
        {/* card */}
        <h5 className="text-lg mb-2 mt-5 font-semibold">
          Review & Pembayaran <span className="text-lg font-semibold">Tripmu ke {ticket.arrival}</span>
        </h5>
        <Card>
          <h6 className="mb-2">
            <p className="text-gray-500">Hampir selesai! Double-check semuanya sebelum konfirmasi bookingmu.</p>
          </h6>

          <div className="flex flex-row gap-4">
            <div className="border rounded-lg px-4 py-2">
              <p className="text-lg font-semibold">Flight (GA-789)</p>
              <ul className="text-gray-500 mt-2">
                <li>
                  {ticket.departure_city_name} ({ticket.departure_airport_name}) - {ticket.arrival_city_name} (
                  {ticket.arrival_airport_name})
                </li>
                <li>Departure : {new Date(ticket.departure_at).toLocaleString()}</li>
                <li>Arrive : {new Date(ticket.arrival_estimation_at).toLocaleDateString()}</li>
              </ul>
            </div>

            <div className="border rounded-lg px-4 py-2">
              <p className="text-lg font-semibold">Informasi lainnya</p>
              <ul className="text-gray-500 mt-2">
                <li>Bagasi : {ticket.baggage}</li>
                <li>Kabin : {ticket.cabin}</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* form pembayaran */}
        <h5 className="text-lg mb-2 mt-5 font-semibold">Detail Kontak</h5>

        {/* General Info */}
        <Card>
          <Space
            style={{
              display: "flex",
              marginBottom: 8,
              justifyContent: "space-between",
            }}
            align="baseline"
          >
            <Form.Item
              name="firstName"
              label="First mame"
              rules={[
                {
                  required: true,
                  message: "Please input your First name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last name"
              rules={[
                {
                  required: true,
                  message: "Please input your Last name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Space>
          <Space
            style={{
              display: "flex",
              marginBottom: 8,
              justifyContent: "space-between",
            }}
            align="baseline"
          >
            <Form.Item
              name="mobileNumber"
              label="Mobile Number"
              rules={[
                {
                  required: true,
                  message: "Please input your Mobile phone number",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email",
                  email: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Space>
        </Card>

        {/* Passenger info */}
        <h5 className="text-lg mb-2 mt-5 font-semibold">Traveler Details</h5>
        <Card>
          <h6>
            Make sure that the passenger&apos;s name is exactly as written in the government issued ID/Passport/Driving
            License. Avoid any mistake, because some airlines don&apos;t allow name corrections after booking.
          </h6>

          <Form.List
            name="passengers"
            initialValue={[...new Array(parseInt(passengerQuantity))].map(() => ({
              title: "",
              firstName: "",
              lastName: "",
            }))}
          >
            {(fields) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <p className="mr-2">Passengger {index + 1}</p>
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing title",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Title"
                        style={{ width: 120 }}
                        options={[
                          { value: "mr", label: "Mr." },
                          { value: "mrs", label: "Mrs." },
                          { value: "ms", label: "Ms." },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "firstName"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing first name",
                        },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "lastName"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </Space>
                ))}
              </>
            )}
          </Form.List>
        </Card>

        <Button
          htmlType="submit"
          type="primary"
          className="mt-4 bg-primary text-white hover:bg-blue-700 mb-2 float-right"
        >
          Complete Purchase
        </Button>
      </Form>
    </main>
  );
}
