import React, { useState } from 'react';
import { Image, AddIcon, ArrowUpIcon, ArrowDownIcon, Slide } from 'native-base';
import { View, StyleSheet, Pressable, Animated, SafeAreaView } from 'react-native';
import { ClosetBottomModal } from './ClosetBottomModal'

const defaultFigure = require("../assets/images/shorts-transparent.gif");
const modelHoodie = require("../assets/images/hoodie-transparent.gif");

export const Closet = (props) => {

    const [modelFigure, setModelFigure] = useState(defaultFigure)

    const handleModelUpdate = (item) =>{
        setModelFigure(item.modelFigure)
    }

    const ExpandButton = () => {
        return (
            <ArrowUpIcon size="6" marginTop="auto" marginBottom="5" paddingLeft="8" />
        );
    }

    const CollapseButton = () => {
        return (
            <ArrowDownIcon size="6" marginTop="auto" marginBottom="5" paddingLeft="8" />
        );
    }

    const AddButton = () => {
        return (

            <Pressable onPress={() => { alert("Prepare to take photo") }}>
                <AddIcon size="6" marginTop="auto" marginBottom="5" paddingRight="8" />
            </Pressable>
        );
    }

    const ClosetImage = () => {

        return (
            <View style={styles.inputWrap}>
                <Image
                    source={modelFigure}
                    resizeMode="contain"
                    alt="Alternate Text"
                    alignSelf="center"
                    size="100%"
                />
            </View>
        );
    }


    animatedBox = () => {
        Animated.timing(this.animatedWidth, {
            toValue: 200,
            duration: 1000
        }).start()
        Animated.timing(this.animatedHeight, {
            toValue: 500,
            duration: 500
        }).start()
    }



    const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }

    const [showModal, setShowModal] = useState(true)
    return (
        <>
            <View style={styles.row}>
                <Pressable onPress={() => { setShowModal(!showModal); }}>
                    {
                        showModal ? <ExpandButton /> : <CollapseButton />
                    }
                </Pressable>
                {/* <ClosetImage /> */}
                {/* <AddButton /> */}
            </View>
            {
                showModal ? null : <Animated.View style={styles.main}><ClosetBottomModal updateModal={setShowModal} setFigure={handleModelUpdate} /></Animated.View>
            }

        </>
    );
}


const styles = StyleSheet.create({
    MainContainer: {
        display: 'none'
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    main: {
        height: '75%'
    },
    inputWrap: {
        flex: 5,
        borderColor: "#cccccc",
        marginBottom: 10
    },
    image: {
        marginTop: 150,
        marginBottom: 10,
        width: '50%',
        height: 350,
        flex: 3
    }
});