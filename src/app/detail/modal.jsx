import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import React from "react";
import Modal from "react-modal";

const FlightDetailsModal = ({ isOpen, onClose, flightDetails }) => {
  const router = useRouter();
  const handleBayar = async () => {
    const userId = 1;

    const result = await supabase
      .from("orders")
      .insert([{ ticket_id: flightDetails.id, user_id: userId, amount: 1, order_date: new Date(), stok: 1 }]);

    if (result.error) return alert(result.error.message);

    router.push("/my-booking");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Flight Details Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // warna latar belakang overlay
        },
        content: {
          width: "50%", // ubah ukuran modal sesuai kebutuhan
          height: "60%",
          margin: "auto", // untuk membuat modal berada di tengah
        },
      }}
    >
      <div>
        <h2 className="text-xl font-bold mb-4 border-b pb-2 border-solid border-blue-200">Resume Flight : </h2>
        <div className="space-y-6 mb-5 flex flex-col ">
          <p className="">Pesawat : {flightDetails?.flight}</p>
          <p>Stock : {flightDetails?.stok}</p>
          <p>Destination : {flightDetails?.arrival}</p>
          <p>Departure At : {flightDetails?.departure_at}</p>
          <p>Baggage : {flightDetails?.baggage}</p>
          <p>Cabin : {flightDetails?.cabin}</p>
        </div>
      </div>
      <p className="font-semibold text-xl">Are you sure about ordering the tickets ?</p>
      <div className="modal-buttons flex justify-end gap-2 border-t pt-6 border-solid border-blue-200">
        <button onClick={onClose} className="bg-primary rounded px-5 text-white py-2 hover:bg-red-800">
          Close
        </button>
        {/* Tombol bayar didalam modal */}
        <button className="bg-primary rounded px-5 text-white py-2 hover:bg-red-800" onClick={handleBayar}>
          Bayar
        </button>
      </div>
    </Modal>
  );
};

export default FlightDetailsModal;
