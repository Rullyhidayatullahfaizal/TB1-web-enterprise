"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

//memanggil supabase
import { supabase } from "../../database";

export default function CRUDList() {
  //define state : format [namaState, fungsiUbahState] = useState(default [])
  const [listData, setListData] = useState([]);

  //agar ketika screen diakses, langsung memanggil getdata
  useEffect(() => {
    getData();
  }, []);

  //cara akses api via libary supabase
  async function getData() {
    const { data, error } = await supabase
      .from("kota")
      .select("id, nama,tipe")
      .order("id", { ascending: false });

    setListData(data);
  }

  return (
    <div>
      <h3 className="text-black text-2xl font-semibold text-center my-5">
        List(Tampilan Daftar kota )
      </h3>

      <br />

      {/* display if listData not null */}
      <div className="relative overflow-x-auto">
        <table
          border="1"
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Kota
              </th>
              <th scope="col" className="px-6 py-3">
                tipe(Kota/Kabupaten)
              </th>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Fitur
              </th>
            </tr>
          </thead>
          <tbody>
            {listData &&
              listData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td
                    cope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {row.nama}
                  </td>
                  <td className="px-6 py-4">{row.tipe}</td>
                  <td className="px-6 py-4">{row.id}</td>
                  <td className="px-6 py-4">
                    <Link href={{ pathname: "/update", query: { id: row.id } }}>
                    <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 px-6 py-3">
                    Update
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-20 ">
        <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 px-6 py-3 ">
          <Link href="/insert">Insert</Link>
        </button>
      </div>
    </div>
  );
}
