"use client";
import Image from "next/image";
import CardDetail from "./card";
import ModalPesan from "./pesan";

const DaftarTiket = () => {
  return (
    <>
      <div className="mb-7">
        <h1 className="text-2xl font-bold mb-4 text-center overflow-hidden mt-4">
          Detail Penerbangan
        </h1>
        <div className="flex gap-2 px-7 py-2">
          {/* Kotak 1: Daftar Penerbangan */}
          <div className="flex w-1/4 mr-4  hover:border-cinereous border-secondary border-2  ">
            <div className="text-center w-full mt-3">
              <h2 className="text-xl font-bold mb-2 text-primary ">
                Daftar Penerbangan
              </h2>
              <div className="mt-4 font-semibold">
                <ul className="">
                  <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">AirAsia</li>
                  <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">Garuda Indonesia</li>
                  <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">Lion Air</li>
                  <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">batik</li>
                  <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">Super_Jet</li>
                  <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">Citilink</li>
                  {/* Tambahkan nama pesawat lainnya sesuai kebutuhan */}
                </ul>
              </div>
              <div className="w-full  bg-white grid place-items-center mt-9">
              <Image
                src="/img/BALI.jpg"
                width={450}
                height={350}
                alt="tailwind logo"
                className="object-cover object-top h-full w-full"
              />
               <Image
                src="/img/BALI.jpg"
                width={450}
                height={350}
                alt="tailwind logo"
                className="object-cover object-top h-full w-full"
              />
              
            </div>
            </div>
            {/* gambar penerbangan */}
            
            
          </div>

          {/* Kotak 2: Penumpang */}
          <div className="flex flex-col w-3/4 border border-cinereous rounded max-h-[48rem]  overflow-y-scroll scrollbar-none ">
            <div className="">
              <h2 className="text-xl font-semibold  px-4 pt-4">
                Detail Tiket : Jakarta-surabaya
              </h2>
            </div>
            <div className="flex-col w-full p-4 ">
              <CardDetail></CardDetail>
              <CardDetail></CardDetail>
              <CardDetail></CardDetail>
              <CardDetail></CardDetail>
              <CardDetail></CardDetail>
              <CardDetail></CardDetail>
              <CardDetail></CardDetail>

              {/* ... Tambahkan kartu lainnya sesuai kebutuhan */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarTiket;
