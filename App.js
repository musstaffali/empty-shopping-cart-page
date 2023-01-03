

import React from "react";
import type { Node, useState } from 'react';
import { NativeBaseProvider, Box, Center, Container, Flex, usePropsResolution } from 'native-base';
import { Home } from './app/pages/Home'


/**
 * Comment back in to ignore/suppress warnings (for demoing)
 */


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ign

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  Image,
  Pressable,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// const images = [
//     {
//         id: "0",
//         image: "",
//         name: "el gato #1"
//     }
// ]
// const Cart = () => {
//     const [cart,setCart] = useState([]);
//     console.log("cart items",cart)
//     return (
//       <>
//         <Text style={{ textAlign: "center", fontSize: 20 }}>
//           cart system react native
//         </Text>
//         {images.map((item) => (
//           <Pressable
//             key={item.id}
//             style={{ flexDirection: "row", alignItems: "center", backgroundColor:"lightblue" }}
//           >
//             <View style={{ margin: 10 }}>
//               <Image
//                 style={{ width: 100, height: 100, borderRadius: 8 }}
//                 source={{ uri: item.image }}
//               />
//             </View>
//             <View>
//               <Text style={{ fontWeight: "bold", backgroundColor: "pink" }}>{item.name}</Text>
//               {cart.includes(item) ? (
//                  <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.id))}>
//                  <Text
//                    style={{
//                      borderColor: "gray",
//                      borderWidth: 1,
//                      marginVertical: 10,
//                      padding: 5,
//                    }}
//                  >
//                   REMOVE FROM CART
//                  </Text>
//                </Pressable>
//               ):(
//                 <Pressable onPress={() => setCart([...cart,item])}>
//                 <Text
//                   style={{
//                     borderColor: "gray",
//                     borderWidth: 1,
//                     marginVertical: 10,
//                     padding: 5,
//                   }}
//                 >
//                   ADD TO CART
//                 </Text>
//               </Pressable>
//               )}
             
//             </View>
//           </Pressable>
//         ))}
//         <View style={{ height: 1, borderColor: "gray", borderWidth: 2 }} />
//         <Text>CART ITEMS ADDED: </Text>
//         {cart.map((item) => (
//           <View style={{margin:10}}>
//             <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri:item.image}}/>
//             <Text>{item.name}</Text>
//           </View>
//         ))}
//       </>
//     );
//   };

const SafeAreaWrapper = (props) => {
  return (
    <Center safeAreaTop={5} flex={1} bg="light.100" >
      <Box height="90%" width="95%" bg="light.100" rounded='xl'>
        {props.children}
      </Box>
    </Center>

  );
}


const Section = ({ children, title }): item => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.safeAreaContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <NativeBaseProvider>
        <SafeAreaWrapper>
          <Home/>
        </SafeAreaWrapper>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: "95%",
    height: "90%",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
// export default Cart;