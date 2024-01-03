"use client";
import { Select, Spin, DatePicker, Space, InputNumber, Collapse } from "antd";
import { useEffect, useState } from "react";
import {
  AirplaneInFlight,
  AirplaneLanding,
  AirplaneTilt,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/utils/supabase";

const Tiket = () => {
  const [returnDateEnabled, setReturnDateEnabled] = useState(false);

  const [optionsFrom, setOptionsFrom] = useState([]);
  const [optionsTo, setOptionsTo] = useState([]);
  const [dari, setDari] = useState("");
  const [ke, setKe] = useState("");
  const [Keberangatan, setKeberangkatan] = useState();
  const [pulang, setPulang] = useState();
  const router = useRouter();

  const [passengerCounts, setPassengerCounts] = useState({
    adults: 1,
    teenagers: 0,
    children: 0,
  });

  const { Panel } = Collapse;

  useEffect(() => {
    console.log(pulang);
  }, [pulang]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ganti 'your_table_name' dan 'field_name' dengan nama tabel dan kolom yang sesuai di Supabase
        const { data: dataFrom, error: errorFrom } = await supabase
          .from("cities")
          .select("name");
        const { data: dataTo, error: errorTo } = await supabase
          .from("cities")
          .select("name");

        if (errorFrom || errorTo) {
          console.error(
            "Error fetching data:",
            errorFrom?.message || errorTo?.message
          );
          return;
        }

        setOptionsFrom(
          dataFrom.map((item) => ({ value: item.name, label: item.name }))
        );
        setOptionsTo(
          dataTo.map((item) => ({ value: item.name, label: item.name }))
        );
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    const query = new URLSearchParams();
    query.append("departure", dari);
    query.append("arrival", ke);
    query.append("departure_at", Keberangatan.format("YYYY-MM-DD"));
    const { adults, teenagers, children } = passengerCounts;
    const totalQuantity = adults + teenagers + children;
    query.append("quantity", totalQuantity);
    router.push("/detail?" + query);
  };
  return (
    <>
      <div className="mb-40">
        <div className="grid grid-cols-2">
          <div className="flex mt-32 items-center flex-col">
            <div className="flex items-center hover:scale-125 hover:rotate-3 cursor-pointer">
              <h1 className="teks text-6xl font-bold ">Plane Reservations</h1>
              <div className="ml-2">
                <AirplaneTilt size={48} className="text-primary" />
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 text-secondary hover:scale-75 font-semibold text-lg cursor-pointer">
              <p>Eksplorasi Dunia</p>
              <p>
                Platform perjalanan all-in-one untuk petualangan tak terlupakan
              </p>
            </div>
            <Image
              src="/img/pesawat.com (1).png"
              width={450}
              height={50}
              alt="tailwind logo"
              className="rounded-xl object-contain object-top h-40 mt-3 cursor-pointer"
            />
          </div>

          {/*kotak 2*/}
          <div className=" mx-10 mt-8 p-4 bg-ghost-white rounded shadow-md hover:border-primary border">
            <h1 className="text-2xl font-bold mb-4 text-center text-primary">
              Pesan Tiket Pesawat
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
                  <div className="flex items-center bg-white">
                    <AirplaneInFlight
                      size={24}
                      className="absolute mr-60 text-gray-500 "
                    />
                    <Select
                      showSearch
                      id="from"
                      name="from"
                      value={dari}
                      onChange={(value) => setDari(value)}
                      options={optionsFrom}
                      className="w-full border rounded-md "
                      placeholder="Jakarta"
                      notFoundContent={
                        optionsFrom.length === 0 ? <Spin size="small" /> : null
                      }
                    />
                  </div>
                </div>

                <div className="flex-grow relative ">
                  <label
                    htmlFor="to"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Ke
                  </label>
                  <div className="flex items-center">
                    <AirplaneLanding
                      size={24}
                      className="absolute text-gray-500 top-1/2 left-2 mt-2  transform -translate-y-1/2"
                    />
                    <div className="w-full">
                      <Select
                        showSearch
                        id="to"
                        name="to"
                        value={ke}
                        onChange={(value) => setKe(value)}
                        options={optionsTo}
                        className="w-full border rounded-md"
                        placeholder="Surabaya"
                        notFoundContent={
                          optionsTo.length === 0 ? <Spin size="small" /> : null
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <label
                    htmlFor="departure"
                    className="block text-sm font-semibold text-gray-600"
                  >
                    Keberangkatan
                  </label>
                  <DatePicker
                    type="date"
                    id="departure"
                    onChange={(e) => setKeberangkatan(e)}
                    value={Keberangatan}
                    name="departure"
                    className=" px-2 py-1 mt-1 w-full border rounded-md"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center">
                    <label
                      htmlFor="return"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Pulang
                    </label>
                    <div className="ml-2">
                      <input
                        type="checkbox"
                        id="returnCheckbox"
                        onChange={(e) => setReturnDateEnabled(e.target.checked)}
                        className="block"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mt-1">
                    <DatePicker
                      type="date"
                      id="return"
                      name="return"
                      disabled={!returnDateEnabled}
                      onChange={(e) => setPulang(e)}
                      value={pulang}
                      className="px-2 py-1 w-full border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <Collapse defaultActiveKey={["passengerPanel"]} ghost>
                    <Panel header="Jumlah Penumpang" key="passengerPanel">
                      <div className="flex-grow">
                        <label
                          htmlFor="adults"
                          className="block text-sm font-semibold text-gray-600"
                        >
                          Dewasa
                        </label>
                        <InputNumber
                          id="adults"
                          min={1}
                          value={passengerCounts.adults}
                          onChange={(value) =>
                            setPassengerCounts((prevCounts) => ({
                              ...prevCounts,
                              adults: value,
                            }))
                          }
                          className="w-full border rounded-md"
                        />
                      </div>

                      <div className="flex-grow">
                        <label
                          htmlFor="teenagers"
                          className="block text-sm font-semibold text-gray-600"
                        >
                          Remaja
                        </label>
                        <InputNumber
                          id="teenagers"
                          min={0}
                          value={passengerCounts.teenagers}
                          onChange={(value) =>
                            setPassengerCounts((prevCounts) => ({
                              ...prevCounts,
                              teenagers: value,
                            }))
                          }
                          className="w-full border rounded-md"
                        />
                      </div>

                      <div className="flex-grow">
                        <label
                          htmlFor="children"
                          className="block text-sm font-semibold text-gray-600"
                        >
                          Anak-anak
                        </label>
                        <InputNumber
                          id="children"
                          min={0}
                          value={passengerCounts.children}
                          onChange={(value) =>
                            setPassengerCounts((prevCounts) => ({
                              ...prevCounts,
                              children: value,
                            }))
                          }
                          className="w-full border rounded-md"
                        />
                      </div>
                    </Panel>
                  </Collapse>
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

export default Tiket;
