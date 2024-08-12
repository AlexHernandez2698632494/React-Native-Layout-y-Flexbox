import React from "react";
import { View, StyleSheet, Image,Text, ScrollView } from "react-native";
const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
          <View style = {styles.contenedor}>
            <Text >Que hacer en El Salvador</Text>
            <ScrollView horizontal>
            <View>
              <Image style = {styles.ciudad} source={require('./src/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image style = {styles.ciudad} source={require('./src/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image style = {styles.ciudad} source={require('./src/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image style = {styles.ciudad} source={require('./src/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image style = {styles.ciudad} source={require('./src/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          </View>
          
        </View>
      </ScrollView>
      <Text style = {styles.titulo}>Platillos Salvadoreños</Text>
      <View>
        <View>
          <Image style = {styles.mejores} source={require('./src/img/mejores1.jpg')} />
        </View>

        <View>
          <Image style = {styles.mejores} source={require('./src/img/mejores2.jpg')} />
        </View>

        <View>
          <Image style = {styles.mejores} source={require('./src/img/mejores3.jpg')} />
        </View>
      </View>

      <Text style = {styles.titulo}>Rutas Turisticas</Text>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight:'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:"100%",
    height: 200,
    marginVertical: 5
  }
});
export default App;
