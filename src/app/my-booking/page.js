"use client";

import { supabase } from "@/utils/supabase";
import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";
import { Typography } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

export default function Page() {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await supabase
      .from("orders")
      .select(
        `*, 
      users(*),
      tickets(*)
      `
      )
      .order("id", { ascending: false });

    setHistories(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-ghost-white text-raisin-black">
      <div className="grid min-w-[780px] grid-cols-3 gap-4">
        {/* left */}
        <div className="col-span-1 border-gray-200 border-2 p-4 rounded">
          <div id="header" className="flex flex-row gap-2">
            <Avatar size="large" icon={<UserOutlined />} />

            <div className="">
              <Title level={4} style={{ marginBottom: 0 }}>
                Nama User
              </Title>
              <Text type="secondary" style={{ fontSize: 13 }}>
                google
              </Text>
            </div>
          </div>
          <Divider />

          <div>
            <Button type="link" icon={<HistoryOutlined />}>
              My Booking
            </Button>
          </div>
        </div>

        {/* right */}
        <div className="col-span-2 flex flex-col gap-5">
          <div style={{ marginBottom: "32px" }}>
            <a href="/en-id/reschedule/flight" target="_blank" className="css-4rbku5">
              <div className="bg-primary w-full px-10 py-8 rounded-lg shadow-lg text-ghost-white grid grid-cols-2 overflow-hidden">
                <Image
                  importance="low"
                  loading="lazy"
                  src="/images/1523941664489-1f98d3a1485460f5a9ba7ced54fa97ac.webp"
                  alt="gambar tambahan"
                  decoding="async"
                  width="160"
                  className="object-fill col-span-1 items-center my-auto"
                  height={100}
                />
                <div dir="auto" className="flex-wrap whitespace-pre-wrap max-w-xs order-last" id="rescheduleBannerText">
                  <h3 className="text-lg mb-5 font-semibold">Traveloka Easy Reschedule</h3>
                  <p className="text-gray-50 text-sm">
                    Changes are unavoidable. Make this one easy. <span className="font-bold">Learn more</span>
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Tiket Aktif */}
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">Active E-tickets</h1>

          {/* card Tiket Aktif */}
          {histories.length === 0 ? (
            <div className="bg-white rounded-lg px-4 py-3 flex flex-row gap-4">
              <Image
                importance="low"
                loading="lazy"
                src="/images/1594367281441-5ec1b573d106b7aec243b19efa02ac56.svg"
                alt="icon 1"
                decoding="async"
                width="96"
                height="96"
                className="object-fill"
              />
              <div className="p-5">
                <h3 aria-level="3" dir="auto" role="heading" className="text-gray-800 font-semibold mb-2">
                  No Active Bookings Found
                </h3>
                <div dir="auto" className="text-sm">
                  Anything you booked shows up here, but it seems like you haven&apos;t made any. Let&apos;s create one
                  via homepage!
                </div>
              </div>
            </div>
          ) : (
            histories.map((history) => (
              <div key={history.id} class="border-2 p-3 rounded">
                <div class="mb-2">
                  <div class="flex flex-row items-center">
                    <Image
                      src="/images/4e4ae9f6-723c-401f-9575-331bd94db641-1641796637554-b13f668a643fcb5d3596f35d7b0f198b.webp"
                      width={40}
                      height={40}
                      alt="vertical-icon"
                    />
                    <div class="font-semibold leading-loose text-lg">
                      <span class="TiketCard_truncate__MIEmZ TiketCard_text_black__N5pYX HcPVsG_text HcPVsG_size_b1 HcPVsG_weight_bold">
                        {history.tickets.departure} - {history.tickets.arrival}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="ml-4 mb-2">
                  <span class="font-semibold text-gray-500 opacity-80">Finished</span>
                </div>
                <div class="ml-4 text-gray-500">
                  <div class="font-light">
                    <div class="">
                      <span class="">
                        {new Date(history.tickets.departure_at).toLocaleString()} -{" "}
                        {new Date(history.tickets.arrival_estimation_at).toLocaleTimeString()}
                      </span>
                    </div>
                    <div class="">
                      <span class="">
                        {history.tickets.flight} * {history.tickets.departure_airport} -{" "}
                        {history.tickets.arrival_airport}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="TiketCard_divider_mobile_layout__NoepM">
                  <div class="TiketCard_bottom_row__L563a"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
