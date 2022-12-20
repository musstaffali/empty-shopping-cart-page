
import React , {useState} from 'react';
import { View, Dimensions, StatusBar, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Box, Text, Heading, Center, Button, HStack, Modal } from 'native-base';
import { Image as BaseImage } from 'react-native';

import { ModelDisplay } from '../components/ModelDisplay'
import { Shop } from './Shop'
import { Closet } from '../components/ClosetUpperModal'
import { AddItem } from '../components/AddItem'
import { HomeAdvertisement } from '../components/HomeAdvertisement';



import defaultFigure from "../assets/images/shirt-jeans-transparent.gif"
import randTwo from "../assets/images/logo-shirt-transparent.gif"
import randThree from "../assets/images/gym-combo-transparent.gif"


const defaultFig = BaseImage.resolveAssetSource(defaultFigure).uri



const defaultItem = {
    id: -1,
    modelFigure: defaultFig,
    selected: 'false',
    source: defaultFig,
    text: "default",

};

const randItem = {
    id: 1,
    modelFigure: randTwo,
    source: randTwo,
    text: "rand",
}


const HomeWrapper = () => {

    const [currItem, setModel] = useState(defaultItem)

    const textStyles = ({
        baseText: {
            fontFamily: "Cochin"
        },
        titleText: {
            fontSize: 20,
            fontWeight: "bold"
        }
    });

    const RandomFit = () => {

        const getFit = () =>{
        const fitsList = []
        fitsList.push(defaultItem, randTwo, randThree)
        const randItem = Math.floor(Math.random * fitsList.length)
        setModel(randItem)
        }

        return (

            <Button onPress={getFit} _text={{
                color: "#1f2937", fontFamily: "Cochin", fontSize: 24,
            }} background={"coolGray.100"} bottom={130}>⟳ Fit Roulette</Button>
        )
    }

    const HomeRoute = () => (
        <View>
            <Center>
                <ModelDisplay item={currItem}/>
                <HomeAdvertisement />
                <HStack alignItems={"center"} space={2}>
                    <RandomFit />
                    <AddItem />
                </HStack>
            </Center>
        </View>
    );

    const ShopRoute = () => (
        //Insert Shop Compone`nt here
        <Shop />
    );

    const ClosetRoute = () => (
        //Insert Closet Component here
        <Closet />
    );

    const CommunityRoute = () => (
        //Insert Community component here
        <Box flex={1} bg="blue.400" />
    );

    const LazyPlaceholder = ({ route }) => (
        <View style={styles.scene}>
            <Text>Loading {route.title}…</Text>
        </View>
    );

    const initialLayout = { width: Dimensions.get('window').width };

    const renderScene = SceneMap({
        home: HomeRoute,
        shop: ShopRoute,
        closet: ClosetRoute,
        // community: CommunityRoute
    });

    const MenuButtons = props => {

        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: 'home', title: 'Home' },
            { key: 'shop', title: 'Shop' },
            { key: 'closet', title: 'Closet' },
            // { key: 'community', title: 'Community' },

        ]);

        const renderTabBar = (props) => {
            const fontFamily = "Cochin"
            const fontSize = 20
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

                        return (
                            <Box
                                flex={1}
                                alignItems='center'
                                p={2}
                                cursor="pointer"
                            >
                                <Pressable

                                    onPress={() => {
                                        setIndex(i);
                                    }}>
                                    <Animated.Text style={{ opacity, fontFamily, fontSize }}>{route.title}</Animated.Text>
                                </Pressable>
                            </Box>

                        );
                    })}
                </Box>
            );
        };
        return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={{ marginTop: StatusBar.currentHeight }}
                tabBarPosition={"bottom"}
            />
        );
    }
    return <MenuButtons/>
}

export const Home = (props) => {

    const HomeContainer = (props) => {
        return (
            <Box height="100%" >
                {props.children}
            </Box>

        );
    }

    return (
        <HomeContainer>
            <HomeWrapper />
        </HomeContainer>
    );
}