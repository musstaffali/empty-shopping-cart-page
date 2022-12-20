import React from "react"
import {
    Box,
    Pressable,
    Image,
    Text,
    Center,
} from "native-base"

export const ItemCard = (props) => {

    let bgColor = "gray.800"
    let currSize = "md"

    const textStyles = ({
        baseText: {
            fontFamily: "Cochin"
        },
        titleText: {
            fontSize: 20,
            fontWeight: "bold"
        }
    });

    const styles = ({
        container: {
            borderRadius: 6,
            flex: 1,
            marginVertical: 4,
            marginHorizontal: 6,
            overflow: "hidden",
            borderColor: "coolGray.500",
            borderWidth: 1,
            aspectRatio: 1 / 1,
            shadowColor: '#333',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 3,
        },
        containerPressed: {
            borderRadius: 6,
            // flex: 1,
            marginVertical: 4,
            marginHorizontal: 2,
            overflow: "hidden",
            borderColor: "coolGray.500",
            borderWidth: 1,
            aspectRatio: 1 / 1,
            shadowColor: '#333',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
        }
    });

    const checkStyle = (selected) => {
        if (selected === true) {
            bgColor = "blue.400"
            return styles.containerPressed
        }
        else {
            return styles.container
        }
    }

    return (
      <Pressable onPress={props.onPress} style={checkStyle(props.selected)}>
            <Center
                bg={bgColor}

                _dark={{
                    bg: "violet.400",
                }}
                _text={textStyles.baseText}
            >
                {props.text}
            </Center>
            <Image
                size={currSize}
                resizeMode="cover"
                source={props.source}
                alt="Product card"
            />

            <Center width="100%">

            </Center>
        </Pressable>
    )
}

export default (ItemCard)
