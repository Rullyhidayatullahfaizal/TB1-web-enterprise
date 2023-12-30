"use client";

import DaftarPenerbangan from "./daftar-penerbangan";

import { useSearchParams } from "next/navigation";
import PromoTabs from "./promo-tabs";
import CustomDatePicker from "./date-picker";
import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { supabase } from "@/utils/supabase";
import FlightDetailsModal from "./modal";

const Page = () => {
  const queryParams = useSearchParams();
  const departureDate = queryParams.get("departure-date");
  const [list, setList] = useState([]);
  const [modalFlightDetails, setModalFlightDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = useCallback(async () => {
    let query = supabase.from("flights_list").select();

    const departureCity = queryParams.get("departure");
    if (departureCity) {
      query.eq("departure_city_name", departureCity);
    }

    const arrivalCity = queryParams.get("arrival");
    if (arrivalCity) {
      query.eq("arrival_city_name", arrivalCity);
    }

    const departureAt = queryParams.get("departure_at");
    if (departureAt) {
      query.gte("departure_at", departureAt);
    }

    const { data, error } = await query;

    if (error && error.message) {
      alert(error.message);
      return router.back();
    }

    setList(data);
  }, [queryParams]);

  useEffect(() => {
    getData();
  }, [getData]);

  const customNearDate = () => {
    const departure = dayjs(departureDate);

    return (
      <div className="flex flex-row overflow-x-auto gap-2 flex-nowrap">
        {[...new Array(5)].map((_, index) => (
          <div className="rounded-md flex-shrink-0 text-center bg-blue-400 p-2 bg-opacity-60 text-gray-50" key={index}>
            <p className="text-xs font-light">{departure.add(index + 1, "day").format("ddd, D MMM")}</p>
            <span className="text-xs">Rp 1.544.542</span>
          </div>
        ))}
      </div>
    );
  };

  const openModal = (selectedFlightDetails) => {
    setIsModalOpen(true);
    setModalFlightDetails(selectedFlightDetails);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-2 py-2 mx-16 md:mx-32 my-10">
      {/* Kotak 1: Daftar Penerbangan */}
      <div className="w-1/4">
        <PromoTabs />
        <DaftarPenerbangan />
      </div>

      {/* Kotak 2: Penumpang */}
      <div className="flex flex-col w-3/4  rounded max-h-[48rem]  overflow-y-scroll scrollbar-none ">
        {/* header */}
        <div className="relative overflow-hidden">
          <div className="relative flex-nowrap overflow-hidden -z-10">
            <svg viewBox="0 0 672 185" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M672 20c0-11.046-8.954-20-20-20H20C8.954 0 0 8.954 0 20v92.139c0 10.408 7.983 19.076 18.355 19.932l632 52.143c11.655.962 21.645-8.238 21.645-19.932V20Z"
                fill="#007CE8"
              ></path>
              <mask
                id="a"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="669"
                height="137"
                style={{ maskType: "alpha" }}
              >
                <path
                  d="M0 9.846C0 4.408 4.408 0 9.846 0h639.109c12.166 0 21.514 10.77 19.801 22.815l-.668 4.698c-9.345 65.723-67.73 113.161-133.974 108.855L91.608 107.602C40.08 104.253 0 61.482 0 9.846Z"
                  fill="#007CE8"
                ></path>
              </mask>
              <g mask="url(#a)">
                <path
                  d="M394.274 240.769c56.942-8.607 131.375-19.858 190.987-31.654C638.51 198.577 672 151.355 672 97.073V18c0-74.006-59.994-134-134-134H122C47.994-116-12-56.006-12 18v134.052c0 92.044 90.826 156.837 180.049 134.223 74.288-18.828 149.646-33.931 226.225-45.506Z"
                  fill="#1870C9"
                ></path>
                <path
                  d="M-127-301.319s111.381 69.475 209.934 146.083c52.883 41.156 161.504 107.483 175.94 176.688 19.846 87.361-94.025 175.741-161.296 220.019L.11 308.018-127-301.319Z"
                  fill="#29A5FE"
                ></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 672 185"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 z-10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M433.019 0H20C19.6349 0 19.2721 0.0097821 18.9118 0.0290985H252.515H253.312H253.463H331.002H331.392H383.12C399.211 0.00962341 416.007 0 433.019 0ZM281.629 120.446C284.363 120.628 287.204 120.817 290.144 121.011C313.718 122.615 343.095 124.531 373.571 126.466C379.226 126.832 384.97 127.203 390.783 127.578C480.188 133.344 520.528 135.895 541.641 136.398C547.244 136.653 550.786 136.767 551.783 136.71C553.749 136.598 555.693 136.445 557.618 136.251C562.361 135.944 565.555 135.356 569.283 134.569C570.312 134.352 571.339 134.121 572.365 133.876C587.129 130.555 600.921 124.473 614.692 115.306C617.821 113.223 620.855 110.993 623.784 108.627C632.84 101.416 640.815 93.1064 647.196 84.0291C649.286 81.0566 651.285 77.8758 653.172 74.5617C654.529 72.26 655.812 69.9144 657.018 67.5291C660.958 59.7351 664.181 51.3075 666.461 43.3115C670.355 30.0943 671.605 18.1973 668.943 11.8434C668.929 11.8112 668.916 11.7791 668.902 11.7471C668.102 9.8823 666.454 7.70711 664.535 5.78348L664.534 5.78224L664.53 5.77876C662.414 3.65869 659.969 1.84486 657.968 1.0901C657.968 1.08994 657.967 1.08977 657.967 1.08961C657.919 1.07202 657.837 1.05466 657.72 1.03754C657.109 0.948053 655.543 0.864935 652.992 0.788025C637.585 0.32354 586.23 0.0854605 491.97 0.0380229C472.533 0.0127908 452.632 0 433.019 0H652C663.046 0 672 8.95431 672 20V164.282C672 175.976 662.01 185.176 650.355 184.214L18.3555 132.071C7.98267 131.215 0 122.547 0 112.139V20C0 17.4547 0.475473 15.0204 1.34245 12.7812L1.565 17.2311C1.7564 21.0587 2.08152 24.5222 2.59295 27.8183C3.90253 36.3759 6.46515 43.7209 11.255 53.5291C20.2624 71.9749 34.6517 86.7524 52.2552 96.2373C62.2344 101.715 73.142 105.453 84.436 107.054C85.3372 107.182 91.204 107.63 101.14 108.338C114.638 109.426 133.585 110.784 153.283 112.047C164.256 112.751 181.996 113.898 203.956 115.323C227.721 116.904 253.954 118.634 281.629 120.446Z"
                fill="#007CE8"
              ></path>
            </svg>
            <div className="absolute top-5 -right-14 z-20">
              <div className="opacity-100 origin-[0%_0%]">
                <svg viewBox="0 0 187 50" fill="none" xmlns="http://www.w3.org/2000/svg" width={182}>
                  <path
                    d="M25.895 35.042s127.02 13.23 147.81 3.56c0 0 4.51-5.78 3.58-7.15-1.33-1.96-4.63-1.95-4.63-1.95l9.54-28.62s-6.04-.97-8.21-.87h-.02c-.35.01-.6.05-.7.14-.02.02-.06.05-.12.1l-.01.01c-.74.64-4.09 3.66-8.08 7.25-7.05 6.34-16.05 14.47-16.05 14.47-11.61-.95-117.87-9.68-117.87-9.68s-10.18-1.3-17.55 1.85c-1.35.58-2.6 1.3-3.68 2.2 0 0-1.33.3-3.02.82-2.67.83-6.26 2.2-6.8 3.73-.89 2.51 5.07 12.22 25.81 14.14Z"
                    fill="#85D6FF"
                  ></path>
                  <path
                    d="M143.555 42.102c14.03-.18 25.16-1.18 30.15-3.5 0 0 4.51-5.78 3.58-7.15-1.33-1.96-4.63-1.95-4.63-1.95l9.54-28.62s-8.21-1.32-8.93-.73c-.02.02-.06.05-.12.1l-.01.01c-3.08 8.74-11.39 27.41-29.58 41.84Z"
                    fill="#1BA0E2"
                  ></path>
                  <path
                    d="M5.922 28.932c4.06 2.71 10.46 5.23 19.96 6.11 0 0 62.55 6.52 107.05 7.05"
                    stroke="#0194F3"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M43.793 24.492c1.08.09 2.04-.72 2.12-1.8l.15-1.83c.09-1.08-.72-2.04-1.8-2.12-1.08-.09-2.04.72-2.12 1.8l-.15 1.83c-.1 1.08.72 2.04 1.8 2.12ZM54.085 25.342l2.57.21c.37.03.71-.25.74-.62l.36-4.39a.69.69 0 0 0-.62-.74l-2.57-.21a.69.69 0 0 0-.74.62l-.36 4.39c-.04.38.24.71.62.74ZM66.932 26.402c1.08.09 2.04-.72 2.12-1.8l.15-1.83c.09-1.08-.72-2.04-1.8-2.12-1.08-.09-2.04.72-2.12 1.8l-.15 1.83c-.09 1.07.72 2.03 1.8 2.12ZM78.51 27.352c1.08.09 2.04-.72 2.12-1.8l.15-1.83c.09-1.08-.72-2.04-1.8-2.12-1.08-.09-2.04.72-2.12 1.8l-.15 1.83c-.09 1.07.72 2.03 1.8 2.12ZM90.08 28.302c1.08.09 2.04-.72 2.12-1.8l.15-1.83c.09-1.08-.72-2.04-1.8-2.12-1.08-.09-2.04.72-2.12 1.8l-.15 1.83c-.09 1.07.72 2.03 1.8 2.12ZM101.651 29.252c1.08.09 2.04-.72 2.12-1.8l.15-1.83c.09-1.08-.72-2.04-1.8-2.12-1.08-.09-2.04.72-2.12 1.8l-.15 1.83c-.09 1.07.72 2.03 1.8 2.12ZM113.237 30.202c1.08.09 2.04-.72 2.12-1.8l.15-1.83c.09-1.08-.72-2.04-1.8-2.12-1.08-.09-2.04.72-2.12 1.8l-.15 1.83c-.09 1.07.72 2.03 1.8 2.12ZM124.799 31.152c1.08.09 2.04-.72 2.12-1.8l.15-1.83c.09-1.08-.72-2.04-1.8-2.12-1.08-.09-2.04.72-2.12 1.8l-.15 1.83a1.97 1.97 0 0 0 1.8 2.12ZM19.074 14.592l-2.91 3.34 2.38.2 3.32-3.31-2.79-.23ZM13.577 14.142c-1.25.58-3.17 1.31-4.18 2.22 0 0-2.35.74-3.92 1.27l8.35.11 2.91-3.34M30.122 26.662c1.64.13 3.07-1.08 3.21-2.72l.42-5.16a2.978 2.978 0 0 0-2.72-3.21 2.978 2.978 0 0 0-3.21 2.72l-.42 5.16a2.966 2.966 0 0 0 2.72 3.21ZM133.465 35.152c1.64.13 3.07-1.08 3.21-2.72l.42-5.16a2.978 2.978 0 0 0-2.72-3.21 2.978 2.978 0 0 0-3.21 2.72l-.42 5.16a2.966 2.966 0 0 0 2.72 3.21ZM81.048 47.912l1.95.16c1.53.13 2.96-1.35 3.09-2.93l-.09.3c.13-1.58-1-2.95-2.53-3.08l-1.95-.16c-1.53-.13-2.87 1.05-3 2.62-.13 1.58 1 2.96 2.53 3.09ZM59.432 39.602l-.57 6.94c-.13 1.54.99 2.9 2.48 3.02l2.42-.02c-.95-.5-1.55-1.55-1.46-2.72l.57-6.94c.1-1.17.86-2.11 1.88-2.45l-2.39-.41c-1.48-.12-2.8 1.03-2.93 2.58Z"
                    fill="#1870C9"
                  ></path>
                  <path
                    d="m62.87 39.882-.57 6.93c-.13 1.54.99 2.9 2.48 3.02l1.78-.02 7.08-.05 6.21-.05c1.5.12 2.81-1.03 2.94-2.57l.35-4.25c.13-1.54-.98-2.89-2.48-3.01l-6.12-1.06-6.98-1.21-1.76-.31c-1.48-.11-2.8 1.04-2.93 2.58Z"
                    fill="#85D6FF"
                  ></path>
                  <path d="m67.57 37.622-1 12.2 7.08-.05.9-10.95-6.98-1.2Z" fill="#BDE9FF"></path>
                  <path
                    d="m65.785 42.072 32.47 2.67c1.22.1 2.3-.81 2.4-2.03l.48-5.8a.856.856 0 0 0-.79-.93l-33.83-2.78a.856.856 0 0 0-.93.79l-.59 7.15c-.04.47.32.89.79.93Z"
                    fill="#1BA0E2"
                  ></path>
                  <path
                    d="m160.207 32.972 24.05 1.98c.84.07 1.58-.56 1.65-1.4l.26-3.19a.163.163 0 0 0-.16-.18l-25.41-2.09a.163.163 0 0 0-.18.16l-.37 4.55c0 .08.07.16.16.17Z"
                    fill="#1870C9"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute top-0 h-full flex flex-col gap-4 my-4 mx-4">
            <div className="bg-white px-6 py-2 rounded-xl lg:w-2/4">
              <h6 className="font-semibold text-[10]">Jakarta (JKTA) -{">"} Bali (DPS)</h6>
              <p className="text-sm text-gray-700 opacity-80 ">Wed, 20 Dec 2023 | 1 Pasangger(s) | Economy</p>
            </div>
            <div className="bg-primary rounded-md px-4 py-2 flex flex-row justify-between items-center gap-4">
              {/* recomended near date */}
              {customNearDate()}
              {/* date picker */}
              <CustomDatePicker />
            </div>
          </div>
        </div>

        <div className="flex-col w-full p-4">
          {list &&
            list.map((row, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4 border hover:border-cinereous">
                <h3 className="tracking-wider font-semibold mb-2 capitalize">{row.airlines_name}</h3>
                <p className="text-xs text-gray-700 opacity-80 mb-2">
                  {row.departure_city_name} ({row.departure_airport_name}) - {row.arrival_city_name} (
                  {row.arrival_airport_name})
                </p>
                <p className="text-xs text-gray-700 opacity-80 mb-2">
                  {new Date(row.departure_at).toLocaleTimeString()} -{" "}
                  {new Date(row.arrival_estimation_at).toLocaleTimeString()}
                </p>
                {/* <p className="text-sm my-2">Keberangatan :{new Date(row.departure_at).toLocaleString()}</p>
                <p className="text-sm">kedatangan : {new Date(row.arrival_estimation_at).toLocaleString()}</p> */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm">Harga: Rp. {row.price.toLocaleString("id-ID")}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-blue-500 px-4 py-1 rounded text-white" onClick={() => openModal(row)}>
                      Bayar
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <FlightDetailsModal isOpen={isModalOpen} onClose={closeModal} flightDetails={modalFlightDetails} />
      </div>
    </div>
  );
};

export default Page;
