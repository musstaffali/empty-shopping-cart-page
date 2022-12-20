import React from 'react';
import { Box, NativeBaseProvider, Stack, AddIcon, Center, Image } from 'native-base';
import { View, StyleSheet, Dimensions, StatusBar, Animated, Pressable, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Card from './ClosetCard';

const styles = StyleSheet.create({
    cardImage: {
        resizeMode: "contain",
        aspectRatio: 1 / 1,
        alt: "Closet item",
        width: 110,
        height: 125,
    },
})

export const TopsModal = (props) => {

    let currList = []

    let id = 0
    const top1 = require("../assets/images/hoodie-icon.png")
    const top3 = require("../assets/images/reve-shirt-icon.png")
    const top2 = require("../assets/images/collared-shirt-icon.png")
    const top4 = require("../assets/images/vest-icon.png")



    const closetItems = [
        {
            id: id += 1, source: top1, modelFigure: require("../assets/images/hoodie-transparent.gif")
        },
        {
            id: id += 1, source: top2, modelFigure: require("../assets/images/collared-shirt-transparent.gif")
        },
        {
            id: id += 1, source: top3, modelFigure: require("../assets/images/logo-shirt-transparent.gif")
        },
        {
            id: id += 1, source: top4, modelFigure: require("../assets/images/vest-transparent.gif")
        },
    ];

    const updateClosetView = (item) =>{
        props.updateModal(true)
        props.setFigure(item)
    }


    const ClosetItem = ({item}) => {
        return (
            <TouchableOpacity  onPress={() => updateClosetView(item)}>
                <Card>
                    <Center>
                        <Image style={styles.cardImage}
                            source={item.source}
                            Image />
                    </Center>
                </Card>
            </TouchableOpacity>
        )

    }

    const GenerateItems = () => {
        if (currList.length === 0) {
            closetItems.map((item) => {
                currList.push(<ClosetItem key={item.id} item={item} />)
            })
        }
        return currList
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#373737' }}>
            <Stack flex={1} direction="row" flexWrap={1}>
                <GenerateItems />
            </Stack>
        </ScrollView>
    );
}


export default (props) => {
    return <TopsModal updateModal={props.updateModal} setFigure={props.setFigure} />
}