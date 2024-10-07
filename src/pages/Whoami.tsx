import {
    Card,
    CardBody,
    CardHeader,
    Center,
    Heading,
    Icon,
    Image,
    List,
    ListItem,
    Spinner,
    Text, VStack
} from "@chakra-ui/react";
import {FaBook} from "react-icons/fa6";

export default function Whoami() {
    return (
        <Center>
            <Card maxW={1600} width="100%" align="center" margin={4}>
                <CardHeader>
                    <Image
                        borderRadius="full"
                        boxSize="250px"
                        src="/img/Flum_Silvan_Cropped.jpg"
                        alt="Silvan Flum"
                        fallback={
                            <Spinner
                                thickness='4px'
                                speed='0.7s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        }
                    />
                </CardHeader>
                <CardBody>
                    <Text align="center">
                        Hey! I'm Silvan. When I'm not tinkering with software or playing cybersecurity CTFs, you'll probably find me on the football pitch, reading tech and psychology books, hanging out with friends or even skiing in the Swiss Alps.
                    </Text>
                    <VStack mt={16}>
                        <Heading size="lg" mb={4}>
                            Books I love
                        </Heading>
                        <Text align="center" mb={8}>
                            A small selection of books I have read and which I think reflect my way of thinking and my understanding of the world.
                        </Text>
                        <List spacing={3}>
                            <ListItem>
                                <Icon as={FaBook} color="blue.500" mr={2} />
                                <Text as="span" fontWeight="medium">"Thinking, Fast and Slow: " - by Daniel Kahneman</Text>
                            </ListItem>
                            <ListItem>
                                <Icon as={FaBook} color="blue.500" mr={2} />
                                <Text as="span" fontWeight="medium">"The Black Swan: The Impact of the Highly Improbable" - by Nassim Nicholas Taleb</Text>
                            </ListItem>
                            <ListItem>
                                <Icon as={FaBook} color="blue.500" mr={2} />
                                <Text as="span" fontWeight="medium">"Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think" - by Hans Rosling</Text>
                            </ListItem>
                        </List>
                    </VStack>
                </CardBody>
            </Card>
        </Center>
    )
}