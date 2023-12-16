"use client";

import CardDetail from "@/components/detail/card";
import Image from "next/image";
import DaftarPenerbangan from "./daftar-penerbangan";

import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {

  const searchParams = useSearchParams();
  const tipe = searchParams.get('tipe');

  return (
    <>
      <div className="mb-7">
        <h1 className="text-2xl font-bold mb-4 text-center overflow-hidden mt-4">Detail Penerbangan</h1>
        <div className="flex gap-2 px-7 py-2">
          {/* Kotak 1: Daftar Penerbangan */}
          <DaftarPenerbangan />

          {/* Kotak 2: Penumpang */}
          <div className="flex flex-col w-3/4 border border-cinereous rounded max-h-[48rem]  overflow-y-scroll scrollbar-none ">
            <div className="">
              <h2 className="text-xl font-semibold  px-4 pt-4">
                List Tiket yang tersedia pada jalur :{tipe}
              </h2>
            </div>
            <div className="flex-col w-full p-4 ">
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />

              {/* ... Tambahkan kartu lainnya sesuai kebutuhan */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
