import { supabase } from "@/utils/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
import { Modal, Timeline } from "antd";
import dayjs from "dayjs";

const FlightModal = ({ isOpen, onClose, flight }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(null);
  const queryParams = useSearchParams();

  const handleBayar = async () => {
    setIsLoading(true);

    console.log("book");
    router.push(`/booking/${flight.id}?quantity=${queryParams.get("quantity")}`);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      onOk={handleBayar}
      okType="primary"
      confirmLoading={isLoading}
      okButtonProps={{ style: { backgroundColor: "#0770CD", color: "white" } }}
    >
      <h2 className="text-xl font-bold mb-4 border-b pb-2 border-solid border-blue-200">Your Trip</h2>
      {flight && (
        <div className="space-y-6 mb-5 flex flex-col">
          <div className="w-full flex gap-5 flex-nowrap justify-start items-center">
            <h4 className="font-semibold text-gray-900">
              {flight.departure_city_name} → {flight.arrival_city_name}
            </h4>
            <span className="text-gray-900 opacity-70">{dayjs(flight.departure_at).format("ddd, DD MMM YYYY")}</span>
          </div>
          <div className="flex flex-nowrap justify-between">
            {/* Airlin's name */}
            <div>
              <p className="capitalize">{flight.airlines_name}</p>
              <p className="capitalize">baggage → {flight.baggage}</p>
              <p className="capitalize">price → Rp. {flight.price.toLocaleString("id-ID")}</p>
            </div>

            <Timeline
              items={[
                {
                  color: "blue",
                  children: `${flight.departure_airport_name} - ${dayjs(flight.departure_at).format("HH:mm")}`,
                },
                {
                  color: "green",
                  children: `Direct - ${dayjs(flight.arrival_estimation_at).diff(
                    dayjs(flight.departure_at),
                    "minute"
                  )} minutes`,
                },
                {
                  color: "blue",
                  children: `${flight.arrival_airport_name} - ${dayjs(flight.arrival_estimation_at).format("HH:mm")}`,
                },
              ]}
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default FlightModal;
