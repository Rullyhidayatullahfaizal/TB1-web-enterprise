import { useState } from "react";
import FlightDetailsModal from "./pesan";

const CardDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flightDetails = {
    id: 1,
    pesawat: "Garuda Indonesia",
    stock: 10,
    destination: "Bali",
    departure_at: "2023-12-31 08:00",
    baggage: "20kg",
    cabin: "Economy Class",
    created_at: "2023-12-01 12:00",
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 border hover:border-cinereous">
      <h3 className="text-lg font-semibold mb-2">Penerbangan 1 :ASF35F</h3>
      <p className="text-sm">Jam: 08:00</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Harga: $200</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 px-4 py-1 rounded text-white">Booking</button>
          {/* tombol bayar diluar */}
          <button className="bg-blue-500 px-4 py-1 rounded text-white" onClick={openModal}>
            Bayar
          </button>
        </div>
      </div>
      <FlightDetailsModal isOpen={isModalOpen} onClose={closeModal} flightDetails={flightDetails} />
    </div>
  );
};

export default CardDetail;
