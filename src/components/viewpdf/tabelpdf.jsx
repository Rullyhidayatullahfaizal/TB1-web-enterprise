import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderRightWidth: 0, 
        borderBottomWidth: 0, 
        marginTop:20,
      }, 
      tableRow: { 
        margin: "auto", 
        flexDirection: "row" 
      }, 
      tableCol: { 
        width: "25%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0 
      }, 
      tableCell: { 
        margin: "auto", 
        marginTop: 5, 
        fontSize: 10 
      }
});

const PassengerTable = ({ data  }) => {
    const { passengers = [], flights = {} } = data;

  return (
    <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Nama</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Nama Pesawat</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Cabin</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Nama bandara</Text> 
          </View> 
        </View>
        {passengers.map((passenger, index) => (
        <View key={index} style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{`${passenger.firstName} ${passenger.lastName}`}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{flights.airlines.name}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{flights.cabin}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{flights.departure_airport.name}</Text>
          </View>
        </View>
      ))}
      </View>
  );
};

export default PassengerTable;
