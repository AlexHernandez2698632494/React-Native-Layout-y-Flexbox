import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView>
      {/* Banner y contenido horizontal */}
      <View>
        <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué hacer en El Salvador</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad1.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad3.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad4.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad5.jpg")}
              />
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Sección de platillos */}
      <Text style={styles.titulo}>Platillos Salvadoreños</Text>
      <View>
        <View>
          <Image
            style={styles.mejores}
            source={require("./src/img/mejores1.jpg")}
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require("./src/img/mejores2.jpg")}
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require("./src/img/mejores3.jpg")}
          />
        </View>
      </View>

      {/* Sección de rutas */}
      <Text style={styles.titulo}>Rutas Turísticas</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/ruta1.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/ruta2.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/ruta3.jpg")}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require("./src/img/ruta4.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    width: "100%", // Asegúrate de que ocupe todo el ancho
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center", // Centrado para estética
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default App;
