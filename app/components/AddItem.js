
import React from 'react';
import {Box, Center, Pressable, Heading , Button} from 'native-base';

export const AddItem = (props) => {


    const styles = ({
        baseText: {
            fontFamily: "Cochin"
        },
        titleText: {
            fontSize: 20,
            fontWeight: "bold"
        }
    });

    const ModelContainer = (props) => {
        return (
            <Center position="relative" bottom={100}>
            <Box>
                    <Button _text={{
                        color: "#1f2937", fontFamily: "Cochin", fontSize: 24,
                    }} background={"coolGray.100"}>+ Add to Closet</Button>
            </Box>
            </Center>

        );
    }

    return (
        <ModelContainer />
    );
}

export default () => {
    return <AddItem></AddItem>
}