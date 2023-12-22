import Image from "next/image";

const DaftarPenerbangan = () => {
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-2 text-primary ">Daftar Penerbangan</h2>
      <div className="mt-4 font-semibold">
        <ul className="">
          <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">
            AirAsia
          </li>
          <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">
            Garuda Indonesia
          </li>
          <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">
            Lion Air
          </li>
          <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">
            batik
          </li>
          <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">
            Super Jet
          </li>
          <li className="hover:underline hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300">
            Citilink
          </li>
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
  );
};

export default DaftarPenerbangan;
