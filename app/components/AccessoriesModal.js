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

export const AccessoriesDisplay = (props) => {
    let currList = []


    let id = 0
    top1 = require("../assets/images/shirt-1.png")
    top2 = require("../assets/images/shirt-2.png")
    top3 = require("../assets/images/shirt-3.png")
    top4 = require("../assets/images/shirt-4.png")

    const closetItems = [
        {
            id: id += 1, source: top1
        },
        {
            id: id += 1, source: top2
        },
        {
            id: id += 1, source: top3
        },
        {
            id: id += 1, source: top4
        },
    ];


    const ClosetItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => alert("you clicked on closet card")}>
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


export default () => {
    return <AccessoriesDisplay />
}