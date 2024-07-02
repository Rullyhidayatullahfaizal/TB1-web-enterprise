import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import PassengerTable from "./tabelpdf";

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
  order: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 0,
   
    
  },
  // section kedua
  sectionkedua: {
    margin: 2,
    padding: 10,
    flexGrow: 1,
    borderBottom:2
  },
  containerinformasi: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottom:2,
    alignItems:"center",
    
  },
  additionalText: {
    fontSize: 14,
    fontWeight: "bold",
    borderBottom:1,
    borderBottomColor:"#a4a4eb"
  },
  containeroder: {
    borderTop:2
  },
  daftarPenumpang: {
    fontSize:"20",
    marginTop:20,
    textAlign:"center"
  },
});


const PdfDocument = ({ data }) => {
 
  const passengerFirstNames = data.passengers.map((passenger) => passenger.firstName);

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>E-ticket</Text>
          <View>
            <Text style={styles.content}>
              Departure Airport : {data.flights.departure_airport.name}
            </Text>
          </View>
          <View>
            <Text style={styles.content}>
              Arrival Airport : {data.flights.arrival_airport.name}
            </Text>
          </View>
          <View>
            <Text style={styles.content}>
              Jenis Pesawat : {data.flights.airlines.name}
            </Text>
          </View>
          <View>
            <Text style={styles.content}>Harga : Rp.{data.total}</Text>
          </View>
          <View>
            <Text style={styles.content}>Quantity : {data.quantity} Penumpang</Text>
          </View>

          {/* section kedua */}
          <View style={styles.sectionkedua}>
            <View style={styles.containeroder}>
              <Text style={styles.order}>Orderer</Text>
            </View>
            <View style={styles.containerinformasi}>
                <View>
                  <Text style={styles.content}>{name}</Text>
                  <Text style={styles.content}>email        : {data.email}</Text>
                  <Text style={styles.content}>phone       : {data.phone}</Text>
                </View>
                <View style={styles.additionalText}>
                  <Text>Jangan lupa chekin sebelum 1 jam keberangkatan</Text>
                </View>             
            </View>
            <View>
              <Text style={styles.daftarPenumpang}>Daftar Penumpang</Text>
            </View>
            <PassengerTable  data={data} />
          </View>
          {/* Customize the content based on your needs */}
          {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
