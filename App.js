

import React from 'react';
import type { Node } from 'react';
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
  Text,
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
