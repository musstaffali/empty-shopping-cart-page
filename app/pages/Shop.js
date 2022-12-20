
import React, { useState } from 'react';
import { Stack, VStack, Box } from 'native-base'
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, StyleSheet, Dimensions, StatusBar, Animated, Pressable } from 'react-native';
import { ShopList } from "../components/ShopList"
import { ModelDisplay } from '../components/ModelDisplay';
import { Image as BaseImage } from 'react-native';
import { slide as Menu } from 'react-burger-menu'


import defaultFig from "../assets/images/shorts-transparent.gif"
const defaultFigure = BaseImage.resolveAssetSource(defaultFig).uri

const defaultItem = {
    id: -1,
    modelFigure: defaultFigure,
    selected: 'false',
    source: defaultFigure,
    text: "default",

};

const textStyles = ({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});


const ShopTabs = props => {

    const GenerateHamMenu = () =>{
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={console.log("")} className="menu-item--small" href="">Settings</a>
            </Menu>
        )}


    const initialLayout = { width: Dimensions.get('window').width };


    const [index, setIndex] = React.useState(0);
    const [currItem, setItem] = React.useState(defaultItem);


    const updateModel = (item) =>{
        setItem(item)
    }


    const TopsRoute = () => <ShopList update={updateModel}/>;
    const BottomsRoute = () => <ShopList update={updateModel} />;
    const AccessoriesRoute = () => <ShopList update={updateModel} />;

    const renderScene = SceneMap({
        tops: TopsRoute,
        bottoms: BottomsRoute,
        accessories: AccessoriesRoute,
    });

    const [routes] = React.useState([
        { key: 'tops', title: 'Tops' },
        { key: 'bottoms', title: 'Bottoms' },
        { key: 'accessories', title: 'Accessories' },
    ]);

    const renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <Box flexDirection="column" position="static">
                {props.navigationState.routes.map((route, i) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex) =>
                            inputIndex === i ? 1 : 0.5
                        ),
                    });
                    const color = index === i ? '#1f2937' : '#a1a1aa';
                    const borderColor = index === i ? 'coolGray.800' : 'coolGray.200';
                    const fontFamily = "Cochin"
                    return (
                        <Box
                            borderBottomWidth="3"
                            borderColor={borderColor}
                            // flex={1}
                            alignItems="center"
                            p={1}
                            cursor="pointer"
                            >
                            <Pressable
                                onPress={() => {
                                    setIndex(i);
                                }}>
                                <Animated.Text style={{ color, fontFamily }}>{route.title}</Animated.Text>
                            </Pressable>
                        </Box>
                    );
                })}
            </Box>
        );
    };
    return (
        <Stack direction="row">
            <ModelDisplay item={currItem} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </Stack>
    );
}


export const Shop = () => {

    return (
        <ShopTabs />
    );
}

