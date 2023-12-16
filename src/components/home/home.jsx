"use client";

import {  useState } from "react";
import { AirplaneInFlight, AirplaneLanding } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Tiket = () => {
  const [returnDateEnabled, setReturnDateEnabled] = useState(false);

  const [dari, setDari] = useState("");
  const [ke, setKe] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    event.preventDefault();

    const query = new URLSearchParams();
    query.append("departure", dari);
    query.append("arrival", ke);
    router.push("/detail?" + query);
  };
  return (
    <>
      <div className="">
        <div className=" mx-10 mt-8 p-4 bg-ghost-white rounded shadow-md hover:border-primary border">
          <h1 className="text-2xl font-bold mb-4 text-center text-primary">
            Pemesanan Tiket Pesawat
          </h1>

          {/* Form Pencarian */}
          <form className="my-8 mx-10">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-grow relative">
                <label
                  htmlFor="from"
                  className="block text-sm font-medium text-gray-600"
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
                    className="pl-8 pr-2 py-2 w-full border rounded-md"
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
                    className="pl-8 pr-2 py-2 w-full border rounded-md"
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
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="flex-grow">
                <label
                  htmlFor="passengers"
                  className="block text-sm font-medium text-gray-600"
                >
                  Jumlah Penumpang
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  className="mt-1 p-2 w-full border rounded-md"
                >
                  <option value="1">1 Penumpang</option>
                  <option value="2">2 Penumpang</option>
                  {/* Tambahkan lebih banyak opsi jika diperlukan */}
                </select>
              </div>

              <div className="flex-grow">
                <label
                  htmlFor="className"
                  className="block text-sm font-medium text-gray-600"
                >
                  Kelas
                </label>
                <select
                  id="className"
                  name="className"
                  className="mt-1 p-2 w-full border rounded-md"
                >
                  <option value="economy">Ekonomi</option>
                  <option value="business">Bisnis</option>
                  {/* Tambahkan lebih banyak opsi jika diperlukan */}
                </select>
              </div>
            </div>
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
    </>
  );
};

export default Tiket;
