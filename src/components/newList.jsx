import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import {useRef, useState} from "react"


export const Newlist = () => {
    const [word, setWord] = useState(["Coding","Eat","Repent","Sleep"]);
    const input = useRef() //--- refrensi dari hooks
    
    
    function addWord() {
        let simpen = input.current.value
        setWord([...word,simpen])
        input.current.value = "" //--Agar ketika diinput langsung ilang
    }

    function delWord(index) {
        const arr = [...word]
        arr.splice(index,1)
        setWord(arr)
    }
    

    return (
        <>
        <Box>
            <Flex justifyContent={"center"}>
                <Box>
                    <Input id="input" mt={"20px"} placeholder='Enter your list' w={"500px"} border={"1px solid"} borderColor={"black"} ref={input}/>
                    {/* ref adalah refrensi dari const input */}
                </Box>
                <Button onClick={addWord} bg={"teal"} mt={"20px"} ml={"10px"} border={"1px solid"} borderColor={"black"} w={"80px"}> Add </Button>
                
            </Flex>
            <Box display={"flex"} justifyContent={"center"}>
                <Box alignItems={"center"} pt={"10px"} pr={"89px"} >

                    {word.map((item) => {
                        return (
                            <Flex>

                                <Text mt={"5px"} pl={"15px"} fontSize={"20px"} color={"teal"} border={"2px solid"} borderColor={"10px"} borderRadius={"10px"} w={"502px"} pt={"2px"} h={"40px"}> 
                                
                                {item}
                                
                                </Text>
                                <Button onClick={delWord} bg={"teal"} mt={"20px"} ml={"10px"} border={"1px solid"} borderColor={"black"} w={"80px"}> Delete </Button>
                            </Flex>
                        )
                    })}

                </Box>
            </Box>
        </Box>
            </>
    )
}

