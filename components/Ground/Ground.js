import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native"

const Ground = ({ route }) => {
  const { g } = route.params

  const [favori, setFavori] = useState(g.favori)

  const renderFavButton = () => {
    if (!favori) {
      return (
        <Button
          title="AJOUTER AUX FAVORIS"
          onPress={() => favAdded()}
          style={styles.favButton}
        />
      )
    }
    return <Text>⭐ Ce terrain a été ajouté à mes favoris ⭐</Text>
  }

  const favAdded = () => {
    setFavori(!favori)
    g.favori = !g.favori
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{g.groundName}</Text>
      {renderFavButton()}
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.subtitle}>Localisation:</Text>
        <Text> {g.address} </Text>
        <Text style={styles.subtitle}>Détails du terrain:</Text>
        <Text>Accessibilité: Terrain {g.limit}</Text>
        <Text>Nombre de paniers (demi-terrains) : {g.basketNumber}</Text>
        <Text>Accès en transports: {g.transport}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
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
    padding: 10,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
  },
})

export default Ground
