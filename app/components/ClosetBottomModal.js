import React, {useState} from 'react';
import { Box, NativeBaseProvider } from 'native-base';
import {View, StyleSheet, Dimensions, StatusBar, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TopsDisplay from './TopsModal';
import { BottomsDisplay } from './BottomsModal';
import { AccessoriesDisplay } from './AccessoriesModal';

export const ClosetBottomModal = (props) => {


const [index, setIndex] = React.useState(0);


const TopsRoute = () => <TopsDisplay updateModal={props.updateModal} setFigure={props.setFigure}/>;

const BottomsRoute = () => <BottomsDisplay/>;

const AccessoriesRoute = () => <AccessoriesDisplay/>;

const initialLayout = {width: Dimensions.get('window').width};


const renderScene = SceneMap({
  tops: TopsRoute,
  bottoms: BottomsRoute,
  accessories: AccessoriesRoute,
});


const ClosetTabs = props => {
  const [routes] = React.useState([
    { key: 'tops', title: 'Tops' },
    { key: 'bottoms', title: 'Bottoms' },
    { key: 'accessories', title: 'Accessories' },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
            <Box flexDirection="row" position="static">
                {props.navigationState.routes.map((route, i) => {
                const opacity = props.position.interpolate({
                    inputRange,
                    outputRange: inputRange.map((inputIndex) =>
                    inputIndex === i ? 1 : 0.5
                    ),
                });

                const fontFamily = "Cochin"
                const fontSize = 20
                const color = index === i ? '#1f2937' : '#a1a1aa';
                const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

                return (
                    <Box
                    borderBottomWidth="3"
                    borderColor={borderColor}
                    flex={1}
                    alignItems="center"
                    p={1}
                    cursor="pointer">
                    <Pressable
                        onPress={() => {
                        setIndex(i);
                        }}>
                        <Animated.Text style={{ color, fontFamily, fontSize }}>{route.title}</Animated.Text>
                    </Pressable>
                    </Box>
                );
                })}
            </Box>
    );
  };

  return (
        <NativeBaseProvider>
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={styles.MainContainer}
        />
        </NativeBaseProvider>
  );
}
  return (
    <ClosetTabs />
  );
}


// export const ClosetBottomModal = (props) => {

//         return (
//                 <ClosetTabs/>
//         );
// }

const styles = StyleSheet.create({
    MainContainer :
    {
        display: 'flex',
        flex:1,
        paddingTop: 10,
        padding: 5,
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: StatusBar.currentHeight,
        press: {
            display: 'none'
        }
    },
    button: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        shadowOpacity: 0.35,
      },
    ButtonContainer: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        justifyContent: 'center',
    }
  });