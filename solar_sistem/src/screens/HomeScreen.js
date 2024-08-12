import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { LanguageContext } from '../context/LanguageContext';
import { planets, planetas } from '../data/planet';

export default function HomeScreen({ navigation }) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const data = language === 'en' ? planets : planetas;

  return (
    <View style={styles.container}>
      <Button title={`Switch to ${language === 'en' ? 'Español' : 'English'}`} onPress={toggleLanguage} />
      
      <View style={styles.solarSystemContainer}>
        <Image source={require('../../assets/solar_system.jpg')} style={styles.solarSystemImage} />
        <Text style={styles.solarSystemDescription}>
          {language === 'en' ? 'Explore the wonders of our Solar System! Click on any planet below to learn more about it.' : '¡Explora las maravillas de nuestro Sistema Solar! Haz clic en cualquier planeta para saber más sobre él.'}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.planetCard} onPress={() => navigation.navigate('PlanetDetail', { planet: item })}>
            <Image source={item.image} style={styles.planetImage} />
            <Text style={styles.planetName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  solarSystemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  solarSystemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  solarSystemDescription: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  planetCard: {
    backgroundColor: '#222',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  planetImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  planetName: {
    color: '#fff',
    fontSize: 18,
  },
});
