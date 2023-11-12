'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

//memanggil supabase
import { supabase } from '../../database'

export default function CRUDUpdate() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get('id')
  const [nama, setNama] = useState('')
  const [tipe, setTipe] = useState('') // Menambah state untuk hobi


  //first time running
  useEffect(() => {
    getData()
  }, []);

  //get data based on id
  async function getData() {
    const { data, error } = await supabase
      .from('kota')
      .select('id, nama,tipe')
      .eq('id', id)
      .single()
      
      if (data) {
        setNama(data.nama);
        setTipe(data.tipe);
      } else {
        console.error("Data not found"); // Tambahkan pesan kesalahan atau tindakan yang sesuai
      }

  }

  //update data ke supabase
  async function onSubmit(event) {
    event.preventDefault()
    
    const { data, error } = await supabase
      .from('kota')
      //field db : state
      .update({ nama:nama,tipe: tipe })
      .eq('id', id)
    
    router.push('/list')
  }

  async function onDelete() {
    const { data, error } = await supabase
      .from('kota')
      .delete()
      .eq('id', id)
    
    router.push('/list')
  }

  return (
    // <div>
    //   <h3>Update</h3>

    //   {/* display if listData not null */}
    //   <form onSubmit={onSubmit}>
    //     {/* onchange : isi state nama sesuai input */}
    //     <input type='text' name='nama' value={nama} onChange={(event) => setNama(event.target.value)} required />
    //     <input type='text' name='hobi' value={hobi} onChange={(event) => setHobi(event.target.value)} required /> {/* Input untuk hobi */}
    //     <br />
    //     <button type='submit'>Save</button>
    //     <button type='button' onClick={onDelete}>Delete</button>
    //   </form>

    // </div>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
    <h3 className="text-2xl font-semibold mb-4">Update Nama kota  </h3>

    {/* Display if listData not null */}
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label htmlFor="nama" className="block text-sm font-medium text-gray-600">
          Nama Kota
        </label>
        <input
          type="text"
          name="nama"
          id="nama"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="hobi" className="block text-sm font-medium text-gray-600">
          Tipe -- Kabupaten/kota
        </label>
        <input
          type="text"
          name="tipe"
          id="tipe"
          value={tipe}
          onChange={(event) => setTipe(event.target.value)}
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 px-6 py-3"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 px-6 py-3"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
  )
}



// 'use client'

// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'

// //memanggil supabase
// import { supabase } from '../../database'

// export default function CRUDInsert() {
//   const router = useRouter()
//   const [nama, setNama] = useState('')
//   const [tipe, setTipe] = useState('')


//   //insert data ke supabase
//   async function onSubmit(event) {
//     event.preventDefault()
    
//     const { data, error } = await supabase
//       .from('kota')
//       //field db : state
//       .insert([
//         { nama: nama, tipe: tipe } // Memasukkan kedua field dalam satu objek
//       ]);
      
    
//     router.push('/list')
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
//     <h3 className="text-2xl font-semibold mb-4">Insert Daftar Kota</h3>

//     <form onSubmit={onSubmit}>
//       <div className="mb-4">
//         <label htmlFor="nama" className="block text-sm font-medium text-gray-600">
//           Nama Kota
//         </label>
//         <input
//           type="text"
//           name="nama"
//           id="nama"
//           value={nama}
//           onChange={(event) => setNama(event.target.value)}
//           required
//           className="mt-1 p-2 w-full border rounded-md"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="tipe" className="block text-sm font-medium text-gray-600">
//           Tipe -- Kabupaten/Kota
//         </label>
//         <input
//           type="text"
//           name="tipe"
//           id="tipe"
//           value={tipe}
//           onChange={(event) => setTipe(event.target.value)}
//           required
//           className="mt-1 p-2 w-full border rounded-md"
//         />
//       </div>

//       <div className="mt-4">
//         <button
//           type="submit"
//           className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 px-6 py-3"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   </div>
//   )
// }