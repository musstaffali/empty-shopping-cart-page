
import React, { useState, useEffect } from 'react';
import { Stack, Box, FlatList, Pressable, Modal, Text, Button, Image, Center} from 'native-base'
import { Image as BaseImage } from 'react-native';
import { ItemCard } from '../components/ItemCard.js';


let id = 0;

import hoodie from "../assets/images/hoodie-transparent.gif"
import tee from "../assets/images/logo-shirt-transparent.gif"
import vest from "../assets/images/vest-transparent.gif"
import collaredShirt from "../assets/images/collared-shirt-transparent.gif"



const hoodieIcon = require("../assets/images/hoodie-icon.png")
const teeIcon = require("../assets/images/reve-shirt-icon.png")
const vestIcon = require("../assets/images/vest-red-icon.png")
const collaredShirtIcon = require("../assets/images/collared-shirt-icon.png")

const reveLogo = require("../assets/images/reve-logo.png")
const fiascoLogo = require("../assets/images/fiasco-logo.png")
const moderndayLogo = require("../assets/images/modernday-logo.png")
const pollylogoLogo = require("../assets/images/pollylolly-logo.png")




const displayHoodie = BaseImage.resolveAssetSource(hoodie).uri;
const displayTee = BaseImage.resolveAssetSource(tee).uri;
const displayVest = BaseImage.resolveAssetSource(vest).uri;
const displayCollaredShirt = BaseImage.resolveAssetSource(collaredShirt).uri;



const shopItems = [
    { id: id += 1, text: 'Tee', source: teeIcon, selected: false, modelFigure: displayTee, logo:reveLogo  },
    { id: id += 1, text: 'Hoodie', source: hoodieIcon, selected: false, modelFigure: displayHoodie, logo: fiascoLogo },
    { id: id += 1, text: 'Vest', source: vestIcon, selected: false, modelFigure: displayVest, logo: pollylogoLogo },
    { id: id += 1, text: 'Shirt', source: collaredShirtIcon, selected: false, modelFigure: displayCollaredShirt, logo: moderndayLogo },
    { id: id += 1, text: 'Hoodie', source: hoodieIcon, selected: false, modelFigure: displayHoodie, logo: fiascoLogo },
    { id: id += 1, text: 'Tee', source: teeIcon, selected: false, modelFigure: displayTee, logo: reveLogo },
    { id: id += 1, text: 'Shirt', source: collaredShirtIcon, selected: false, modelFigure: displayCollaredShirt, logo: moderndayLogo },
    { id: id += 1, text: 'Vest', source: vestIcon, selected: false, modelFigure: displayVest, logo: pollylogoLogo },
    { id: id += 1, text: 'Hoodie', source: hoodieIcon, selected: false, modelFigure: displayHoodie, logo: fiascoLogo },
    { id: id += 1, text: 'Tee', source: teeIcon, selected: false, modelFigure: displayTee, logo: reveLogo },


];


const defaultItem = {
    id: -1,
    modelFigure: -1,
    selected: 'false',
    source: -1,
    text: "default",

};

const styles = ({
    modal: {
        marginLeft: "auto",
        marginRight: 0,
    },

})

const CreateItems = (props) => {

    const [selectedItem, setSelectedItem] = useState(defaultItem)
    const [modalVisible, setModalVisible] = React.useState(false)


    const handleModal = (item) => {
        setModalVisible(!modalVisible)

    }


    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(shopItems)
    }, [])


    const setSelection = (id) => {
        shopItems.map((item, index) => {
            if (index === id-1) {
                item.selected = true
                handleModal(item)
                setSelectedItem(item)
                //Current update causes entire list to rerender -> possible solution: https://github.com/reduxjs/reselect
                props.update(item)

            }
            else {
                item.selected = false
            }
        }
        ), setItems([...shopItems])
    }


    //onPressed={(setSelectedId(id))}
    const renderItem = ({ item, index }) => {

        return (

            <ItemCard updateItem={item}  onPressIn={() => handleModal()} onPress={() => { setSelection(item.id)}} selected={item.selected} index={index} key={item.id} text={item.text} source={item.source} modelFigure={item.modelFigure} ></ItemCard>
        )
    };

    const GenerateModal = (props)=>{

        const randPriceGen = () => {
            const nums = ["$59.99", "$99.99", "$35.99", "459.99"]
            const randIdx = Math.floor(Math.random() * nums.length);
            return nums[randIdx]
        }

        return (
        <Modal backdropVisible={false} isOpen={modalVisible} onClose={setModalVisible} size={"lg"}>
            <Modal.Content maxH="80%" maxW="55%" style={styles.modal}>
                <Modal.CloseButton />
                <Center>
                    <Image width={"100%"} resizeMode={"contain"} height ={"100"} source={selectedItem.logo} aspectRatio={3/ 1}></Image>
                <Text> {selectedItem.text} {randPriceGen()} </Text>
                    </Center>
                <Modal.Body>
                        <Image source={selectedItem.source} alt={"Product page"}>
                        </Image>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={1}>
                        <Button
                            variant="ghost"
                            colorScheme="blueGray"
                            onPress={() => {
                                setModalVisible(false)
                            }}
                        >
                            Close
                        </Button>
                            <Button background={"black"}
                                onPress={() => {
                                    setModalVisible(false)
                                }}
                            >
                                Buy
                            </Button>
                        <Button background={"gray.500"}
                            onPress={() => {
                                setModalVisible(false)
                            }}
                        >
                            Wishlist
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
        )
    }


    return (
        <Stack>
        <GenerateModal/>
        <Box bg="coolGray.200">
            <FlatList data={items} keyExtractor={(item) => (item.id)} numColumns={2} columnWrapperStyle={{ justifyContent: 'space-around' }} renderItem={renderItem} />
        </Box>
        </Stack>
    );
}

export const ShopList = (props) => {
    return (

        <CreateItems update={props.update} />
    );

}
