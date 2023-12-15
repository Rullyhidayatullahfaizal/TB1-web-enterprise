"use client";

import { supabase } from "@/utils/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [order, setOrder] = useState({});
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const id = params["id"];
    const { data } = await supabase
      .from("orders")
      .select(
        `*, 
      users(*),
      tickets(*)
      `
      )
      .eq("id", id);

    // console.log(data[0]);

    setOrder(data[0]);
  };

  const handlePayment = () => {};

  if (!order || !order.id) return <>loading...</>;

  return (
    <main className="flex flex-col px-4 py-8 bg-ghost-white min-h-screen text-raisin-black ">
      {/* card */}
      <div className="bg-white rounded-lg px-4 py-3 mx-auto">
        <div className="flex flex-row gap-4">
          <div className="flex items-center mb-6">
            <div className="ml-4">
              <p className="text-xl font-semibold">
                Review & Pembayaran <span className="text-lg font-semibold">Tripmu ke {order.tickets?.arrival}</span>
              </p>
              <p className="text-gray-500">Hampir selesai! Double-check semuanya sebelum konfirmasi bookingmu.</p>
            </div>
          </div>

          <div className="flex flex-col space-y-6 mb-8">
            <div className="border rounded-lg px-4 py-2">
              <p className="text-lg font-semibold">Flight (GA-789)</p>
              <ul className="text-gray-500 mt-2">
                <li>
                  {order.tickets.departure} ({order.tickets.departure_airport}) - {order.tickets.arrival} (
                  {order.tickets.arrival_airport})
                </li>
                <li>Departure : {new Date(order.tickets?.departure_at).toLocaleString()}</li>
                <li>Arrive : {new Date(order.tickets?.arrival_estimation_at).toLocaleDateString()}</li>
                {/* <li>1 hour 30 minutes</li> */}
              </ul>
            </div>

            <div className="border rounded-lg px-4 py-2">
              <p className="text-lg font-semibold">Informasi lainnya</p>
              <ul className="text-gray-500 mt-2">
                <li>Bagasi : {order.tickets?.baggage}</li>
                <li>Kabin : {order.tickets?.cabin}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* form pembayaran */}
        <form>
          <h2 class="text-2xl font-semibold mb-6">Detail Kontak</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label class="block mb-2" for="fullname">
                Full Name:
              </label>
              <input type="text" id="fullname" name="fullname" class="w-full px-4 py-2 border rounded-md" required />
            </div>

            <div>
              <label class="block mb-2" for="email">
                Email:
              </label>
              <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md" required />
            </div>

            <div>
              <label class="block mb-2" for="phone">
                Phone Number:
              </label>
              <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border rounded-md" required />
            </div>

            <div>
              <label class="block mb-2" for="card">
                Credit Card Number:
              </label>
              <input type="text" id="card" name="card" class="w-full px-4 py-2 border rounded-md" required />
            </div>

            <div>
              <label class="block mb-2" for="expiration">
                Expiration Date:
              </label>
              <input
                type="text"
                id="expiration"
                name="expiration"
                class="w-full px-4 py-2 border rounded-md"
                placeholder="MM/YY"
                required
              />
            </div>

            <div>
              <label class="block mb-2" for="cvv">
                CVV:
              </label>
              <input type="text" id="cvv" name="cvv" class="w-full px-4 py-2 border rounded-md" required />
            </div>
          </div>

          <button
            type="submit"
            class="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 mb-2 float-right"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </main>
  );
}
