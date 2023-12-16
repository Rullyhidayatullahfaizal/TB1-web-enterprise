"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar } from "@ant-design/plots";

const Statistik = () => {
  const data = [
    {
      type: "palembang",
      jumlah_Penerbangan: 38,
    },
    {
      type: "purwokerto",
      jumlah_Penerbangan: 52,
    },
    {
      type: "yongyakarta",
      jumlah_Penerbangan: 61,
    },
    {
      type: "bali",
      jumlah_Penerbangan: 145,
    },
    {
      type: "semarang",
      jumlah_Penerbangan: 48,
    },
    {
      type: "kalimantan",
      jumlah_Penerbangan: 38,
    },
    {
      type: "papua",
      jumlah_Penerbangan: 38,
    },
    {
      type: "sulawesi",
      jumlah_Penerbangan: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "jumlah_Penerbangan",
    legend: {
      position: "top-left",
    },
    barBackground: {
      style: {
        fill: "rgba(0,0,0,0.1)",
      },
    },
    
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
  };

  return (
    <>
    <div >
      <h3 className="text-center text-xl md:text-2xl mt-10 mb-5 font-semibold text-primary">Stastik Penerbangan Di indonesia</h3>  
      <div className="px-3 ">
        <Bar {...config} />;
      </div>
    </div>  
    </>
  );
};

export default Statistik;
