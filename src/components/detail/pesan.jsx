import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Modal from "react-modal";

const FlightDetailsModal = ({ isOpen, onClose, flightDetails }) => {
  const router = useRouter();
  const handleBayar = () => {
    router.push(`/booking/${flightDetails.id}`);
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
        <h2 className="text-xl font-bold mb-4 border-b pb-2 border-solid border-blue-200">Resume Flight:</h2>
        <div className="space-y-6 mb-5 flex flex-col ">
          <p className="">Pesawat : {flightDetails.pesawat}</p>
          <p>Stock : {flightDetails.stock}</p>
          <p>Destination : {flightDetails.destination}</p>
          <p>Departure At : {flightDetails.departure_at}</p>
          <p>Baggage : {flightDetails.baggage}</p>
          <p>Cabin : {flightDetails.cabin}</p>
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
