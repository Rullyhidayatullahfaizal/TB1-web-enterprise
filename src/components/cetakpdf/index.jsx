"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "../viewpdf/pdfcomponent";

const Cetak = ({data}) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#000000",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <>
      <div className="mt-2">
        <PDFDownloadLink
          document={<PdfDocument data={data} />}
          fileName="document.pdf"
          className="bg-primary px-2 py-1 text-white rounded"
        >
          {({ blob, url, loading, error }) =>
            loading  ? "Loading document..." : "Cetak!"
          }
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default Cetak;
