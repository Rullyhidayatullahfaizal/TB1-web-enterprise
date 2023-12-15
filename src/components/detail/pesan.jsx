import React, { useState } from 'react';
import Modal from 'react-modal';

const FlightDetailsModal = ({ isOpen, onClose, flightDetails }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Flight Details Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // warna latar belakang overlay
        },
        content: {
          width: '50%', // ubah ukuran modal sesuai kebutuhan
          height:"60%",
          margin: 'auto', // untuk membuat modal berada di tengah
          
        },
      }}
    >
      <div>
        <h2 className="text-xl font-bold mb-4 border-b pb-2 border-solid border-blue-200">Resume Flight:</h2>
        <div className="space-y-6 mb-5 flex flex-col ">
        <p className=''>Pesawat         : {flightDetails.pesawat}</p>
        <p>Stock                        : {flightDetails.stock}</p>
        <p>Destination                  : {flightDetails.destination}</p>
        <p>Departure At                 : {flightDetails.departure_at}</p>
        <p>Baggage                      : {flightDetails.baggage}</p>
        <p>Cabin                        : {flightDetails.cabin}</p>
        
        </div>
      </div>
      <p className='font-semibold text-xl' >Are you sure about ordering the tickets ?</p>
      <div className='modal-buttons flex justify-end gap-2 border-t pt-6 border-solid border-blue-200'>
      <button onClick={onClose} className='bg-primary rounded px-5 text-white py-2 hover:bg-red-800'>Close</button>
      <button className='bg-primary rounded px-5 text-white py-2 hover:bg-red-800' >Bayar</button>
      </div>
    </Modal>
  );
};

const YourComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flightDetails = {
    pesawat: 'Garuda Indonesia',
    stock: 10,
    destination: 'Bali',
    departure_at: '2023-12-31 08:00',
    baggage: '20kg',
    cabin: 'Economy Class',
    created_at: '2023-12-01 12:00',
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="bg-blue-500 px-4 py-1 rounded text-white" onClick={openModal}>
        Bayar
      </button>
      <FlightDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        flightDetails={flightDetails}
      />
    </div>
  );
};

export default YourComponent;
