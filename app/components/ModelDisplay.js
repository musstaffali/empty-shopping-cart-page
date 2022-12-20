
import React, {useState} from 'react';
import { Text, Image, Box, HStack, Center, Container } from 'native-base';
import { Image as BaseImage } from 'react-native';
import defaultFig from "../assets/images/gym-combo-transparent.gif"
const defaultFigure = BaseImage.resolveAssetSource(defaultFig).uri


const defaultItem =  {
        id: -1,
        modelFigure: defaultFigure,
        selected: 'false',
        source: defaultFigure,
        text: "default",

};


export const ModelDisplay = (props) => {
    let item = defaultItem
    if (props.item){
        item = props.item
    }


    return (
        <Center left={1}>
            <Image
                key={item.modelFigure}
                source={{
                    uri: item.modelFigure,
                    cache: 'reload'
                }}                alt="model display"
                width="95%" height="100%"
                aspectRatio={1 / 3.4}
                alt={"Model display"}
                zIndex={0}
            />
        </Center>
    )
}
