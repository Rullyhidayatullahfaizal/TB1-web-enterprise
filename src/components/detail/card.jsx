import { useEffect, useState } from "react";
import FlightDetailsModal from "./pesan";
import { supabase } from "@/utils/supabase";
import { useSearchParams } from "next/navigation";
const CardDetail = () => {
  const [list, setList] = useState([]);
  const [modalFlightDetails, setModalFlightDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useSearchParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await supabase
      .from("flights")
      .select(
        `*`
      )
      .eq("departure", params.get("departure"))
      .eq("arrival", params.get("arrival"))
      // .eq("departure_at", params.get("departure_at"));
    console.log(data);

    setList(data);
  };

  const openModal = (selectedFlightDetails) => {
    setIsModalOpen(true);
    setModalFlightDetails(selectedFlightDetails);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      {list &&
        list.map((row, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md mb-4 border hover:border-cinereous"
          >
            <h3 className="text-lg font-semibold  mb-2">
              Penerbangan :<span className="text-primary">{row.flight}</span>
            </h3>
            <p className="text-sm my-2">
              Keberangkatan :{new Date(row.departure_at).toLocaleString()}
            </p>
            <p className="text-sm">
              kedatangan :{" "}
              {new Date(row.arrival_estimation_at).toLocaleString()}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Harga: $200</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 px-4 py-1 rounded text-white">
                  Booking
                </button>
                {/* tombol bayar diluar */}
                <button
                  className="bg-blue-500 px-4 py-1 rounded text-white"
                  onClick={() => openModal(row)}
                >
                  Bayar
                </button>
              </div>
            </div>
            <FlightDetailsModal
              isOpen={isModalOpen}
              onClose={closeModal}
              flightDetails={modalFlightDetails}
            />
          </div>
        ))}
    </>
  );
};

export default CardDetail;
