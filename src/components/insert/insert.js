'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../database';

export default function CRUDInsert() {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [tipe, setTipe] = useState('');

  // insert data ke supabase
  async function onSubmit(event) {
    event.preventDefault();

    const { data, error } = await supabase
      .from('kota')
      // field db : state
      .insert([
        { nama: nama, tipe: tipe } // Memasukkan kedua field dalam satu objek
      ]);

    router.push('/list');
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Insert Daftar Kota</h3>

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
    <label htmlFor="tipe" className="block text-sm font-medium text-gray-600">
      Tipe -- Kabupaten/Kota
    </label>
    <select
      name="tipe"
      id="tipe"
      value={tipe}
      onChange={(event) => setTipe(event.target.value)}
      required
      className="mt-1 p-2 w-full border rounded-md"
    >
      <option value="" disabled>
        Pilih Tipe
      </option>
      <option value="kota">Kota</option>
      <option value="kabupaten">Kabupaten</option>
    </select>
  </div>

  <div className="mt-4">
    <button
      type="submit"
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 px-6 py-3"
    >
      Save
    </button>
  </div>
</form>
    </div>
  );
}
