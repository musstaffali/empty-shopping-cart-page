
import React from 'react';
import { Text, Image, Box, Stack, Center, Heading, Container, Modal } from 'native-base';
import { Image as BaseImage } from 'react-native';

const testOne = require("../assets/images/shirt-1.png")
const testTwo = require("../assets/images/shirt-2.png");

import { ItemCard } from "../components/ItemCard"

export const HomeAdvertisement = (props) => {

    const styles = ({
        baseText: {
            fontFamily: "Cochin"
        },
        titleText: {
            fontSize: 20,
            fontWeight: "bold"
        }
    });



    const DailyStyleContainer = (props) => {
        return (
            <Stack position="absolute" left={180} top={400} width={"40%"}>

                <Center><ItemCard source={testOne} selected={true} />
                    <Text>Trending</Text>
                </Center>
            </Stack>
        );
    }

    const TrendingContainer = (props) => {
        return (
            <Stack position="absolute" right={180} top={400} width={"40%"}>

                <Center><ItemCard source={testTwo} selected={true} />
                    <Text>Buy Now</Text>
                </Center>
            </Stack>
        );
    }



    const AdvertisementContainer = (props) => {
        return (
            <Center position="absolute" top={5}>
                <Stack>
                    <Box width={"100%"}>
                        <Heading  size="xl" style={styles.baseText}>Today's Fit</Heading>
                    </Box>
                    <TrendingContainer />
                    <DailyStyleContainer />
                </Stack>
            </Center>

        );
    }

    return (
        <AdvertisementContainer />
    );
}

export default () => {
    return <HomeAdvertisement />
}