import React from 'react';
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native"

const Home = ({navigation}) => {

    const GroundsData = [
        {
          groundId: "2",
          address: "77-101 Quai Branly, Paris, France",
          groundName: "Bir-Hakeim",
          basketNumber: "4",
          limit: "public",
          transport:
            "RER C, station Champ de Mars - Tour Eiffel ; métro ligne 6, station Bir-Hakeim",
            favori: false
        },
        {
          groundId: "26585",
          address: "1 Rue du Petit Cardinal, Bordeaux, France",
          groundName: "1 Rue du Petit Cardinal",
          basketNumber: "2",
          limit: "public",
          transport:
            "Métro ligne 1, station Bir-Hakeim",
            favori: false
        },
        {
          groundId: "43555",
          address: "16 avenue jean bouin, Issy, France",
          groundName: "Issy",
          basketNumber: "6",
          limit: "privé",
          transport:
            "RER C, Issy val de seine - Tour Eiffel ; métro ligne 12, mairie d'Issy",
            favori: false
        },
      ]


    const Item = ({ item }) => (
        <View style={styles.item}>
          <Text onPress={() => navigation.navigate('Terrain', {g: item} )} style={styles.list}>{item.groundName}</Text>
        </View>
      )
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Liste des terrains</Text>
      <StatusBar style="auto" />
      <FlatList
        data={GroundsData}
        renderItem={Item}
        keyExtractor={(item) => item.groundId}
        />
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
    list: {
      fontSize: 20,
      color: "white",
    },
    item: {
      backgroundColor: "red",
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 15,
      alignItems: "center",
    },
  })

export default Home;
