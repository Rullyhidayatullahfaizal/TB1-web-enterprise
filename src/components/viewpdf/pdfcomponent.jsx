import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
  },
});

const PdfDocument = ({ data }) => {
  const metaObject = JSON.parse(data.meta);
  const email = metaObject.email;
  const hp = metaObject.phone

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Detail penerbangan</Text>
          <View>
            <Text style={styles.label}>Departure Airport:</Text>
            <Text style={styles.content}>
              {data.flights.departure_airport.name}
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Arrival Airport:</Text>
            <Text style={styles.content}>
              {data.flights.arrival_airport.name}
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Jenis Pesawat :</Text>
            <Text style={styles.content}>{data.flights.airlines.name}</Text>
          </View>
          <View>
            <Text style={styles.label}>Nama pemesan:</Text>
            <Text style={styles.content}>email:{email}</Text>
            <Text style={styles.content}>phone:{hp}</Text>
          </View>
          {/* Customize the content based on your needs */}
          {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
