import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function PlanetDetailScreen({ route }) {
  const { planet } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={planet.image} style={styles.image} />
      <Text style={styles.title}>{planet.name}</Text>
      <Text style={styles.info}>Size: {planet.size}</Text>
      <Text style={styles.info}>Mass: {planet.mass}</Text>
      <Text style={styles.info}>Distance from Sun: {planet.distance}</Text>
      <Text style={styles.description}>{planet.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  info: {
    color: '#ccc',
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 10,
  },
});
