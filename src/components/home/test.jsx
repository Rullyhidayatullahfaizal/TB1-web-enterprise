"use client";

import { useState } from "react";
import {
  AirplaneInFlight,
  AirplaneLanding,
  AirplaneTilt,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Test = () => {
  const [returnDateEnabled, setReturnDateEnabled] = useState(false);

  const [dari, setDari] = useState("");
  const [ke, setKe] = useState("");
  const [Keberangatan, setKeberangkatan] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    event.preventDefault();

    const query = new URLSearchParams();
    query.append("departure", dari);
    query.append("arrival", ke);
    query.append("departure_at", Keberangatan);
    router.push("/detail?" + query);
  };
  return (
    <>
      <div className="mb-60">
        <div className="grid grid-cols-2">
          <div className="flex mt-32 items-center flex-col">
            <div className="flex items-center hover:scale-125 hover:rotate-3 cursor-pointer">
              <h1 className="teks text-6xl font-bold ">Plane Reservations</h1>
              <div className="ml-2">
                <AirplaneTilt size={48} className="text-primary"  />
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 text-secondary hover:scale-75 font-semibold text-lg cursor-pointer">
            <p>Eksplorasi Dunia</p>
            <p>Platform perjalanan all-in-one untuk petualangan tak terlupakan</p>
            </div>
            <Image
             src="/img/pesawat.com (1).png"
             width={450}
             height={50}
             alt="tailwind logo"
             className="rounded-xl object-contain object-top h-40 mt-3 cursor-pointer"/>
          </div>

          {/*kotak 2*/}
          <div className=" mx-10 mt-8 p-4 bg-ghost-white rounded shadow-md hover:border-primary border">
            <h1 className="text-2xl font-bold mb-4 text-center text-primary">
              Pemesanan Tiket Pesawat
            </h1>

            {/* Form Pencarian */}
            <form className="my-8 mx-10">
              <div className="flex flex-col md:flex-col space-y-4 md:space-y-0 gap-y-4">
                <div className="flex-grow relative">
                  <label
                    htmlFor="from"
                    className="block text-sm font-semibold text-gray-600 "
                  >
                    Dari
                  </label>
                  <div className="flex items-center">
                    <AirplaneInFlight
                      size={24}
                      className="absolute text-gray-500 top-1/2 left-2 mt-2  transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      id="from"
                      name="from"
                      value={dari}
                      onChange={(e) => setDari(e.target.value)}
                      className="pl-10 pr-2 py-2 w-full border rounded-md"
                      placeholder="Jakarta"
                    />
                  </div>
                </div>

                <div className="flex-grow relative ">
                  <label
                    htmlFor="to"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Ke
                  </label>
                  <div className="flex items-center">
                    <AirplaneLanding
                      size={24}
                      className="absolute text-gray-500 top-1/2 left-2 mt-2  transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      id="from"
                      name="from"
                      value={ke}
                      onChange={(e) => setKe(e.target.value)}
                      className="pl-10 pr-2 py-2 w-full border rounded-md"
                      placeholder="Surabaya"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <label
                    htmlFor="departure"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Keberangkatan
                  </label>
                  <input
                    type="date"
                    id="departure"
                    onChange={(e) => setKeberangkatan(e.target.value)}
                    name="departure"
                    className=" p-2 w-full border rounded-md"
                  />
                </div>

                <div className="flex-grow">
                  <label
                    htmlFor="return"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Pulang
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="returnCheckbox"
                      onChange={(e) => setReturnDateEnabled(e.target.checked)}
                      className="mr-2"
                    />
                    <input
                      type="date"
                      id="return"
                      name="return"
                      disabled={!returnDateEnabled}
                      className=" p-2 w-full border rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Opsi Jumlah Penumpang */}
              <div className="flex-grow">
                {/* <Link href={'/detail'}> */}
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="bg-primary hover:scale-105 text-white p-2 rounded-md mt-5"
                >
                  Cari Tiket
                </button>
              </div>
            </form>

            {/* Hasil Pencarian */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tambahkan hasil pencarian tiket pesawat di sini */}
            </div>

            {/* Ringkasan Pemesanan */}
            <div className="mt-8">
              {/* Tambahkan ringkasan pemesanan di sini */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
