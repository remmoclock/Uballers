import React from 'react';
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, SafeAreaView, Button} from "react-native"

const Ground = ({route, navigation}) => {

  const { g } = route.params;

  console.log(g);
  
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{g.groundName}</Text>
      <Button
        title="AJOUTER AUX FAVORIS"
        onPress={() => alert('Terrain ajouté')}
        style={styles.favButton}
      />
      <Text>Localisation</Text>
      <Text> {g.address} </Text>
      <Text>Détails du terrain</Text>
  <Text>Accessibilité: Terrain {g.limit}</Text>
  <Text>Nombre de paniers (demi-terrains) : {g.basketNumber}</Text>
  <Text>Accès en transports: {g.transport}</Text>
  <Text></Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: 35,
    },
  })

export default Ground;
