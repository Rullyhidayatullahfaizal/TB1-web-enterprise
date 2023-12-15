import ModalPesan from "./pesan";

const CardDetail = () => {
    return(
        <div className="bg-white p-4 rounded-md shadow-md mb-4 border hover:border-cinereous">
        <h3 className="text-lg font-semibold mb-2">Penerbangan 1 :ASF35F</h3>
        <p className="text-sm">Jam: 08:00</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Harga: $200</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-500 px-4 py-1 rounded text-white">Booking</button>
            <ModalPesan></ModalPesan>
          </div>
        </div>
      </div>

    )
}

export default CardDetail