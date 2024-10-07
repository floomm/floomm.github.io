import { Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Image, Spinner, Text, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CVTimeline from "../components/CVTimeline";

interface Quote {
    quote: string;
    author: string;
    source: string;
}

export default function Welcome() {
    const quotes: readonly Quote[] = [
        {
            quote: "Nothing in life is as important as you think it is, while you are thinking about it.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "Our comforting conviction that the world makes sense rests on a secure foundation: our almost unlimited ability to ignore our ignorance.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "The idea that the future is unpredictable is undermined every day by the ease with which the past is explained.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "Odd as it may seem, I am my remembering self, and the experiencing self, who does my living, is like a stranger to me.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "This is the essence of intuitive heuristics: when faced with a difficult question, we often answer an easier one instead, usually without noticing the substitution.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "We are prone to overestimate how much we understand about the world and to underestimate the role of chance in events.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "We can be blind to the obvious, and we are also blind to our blindness.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "The confidence that individuals have in their beliefs depends mostly on the quality of the story they can tell about what they see, even if they see little.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "A reliable way of making people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "The illusion that we understand the past fosters overconfidence in our ability to predict the future.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "We are prone to blame decision makers for good decisions that worked out badly and to give them too little credit for successful moves that appear obvious only after the fact.",
            author: "Daniel Kahnemann",
            source: "Thinking, Fast and Slow",
        },
        {
            quote: "Wherever there is judgment, there is noise — and more of it than you think.",
            author: "Daniel Kahnemann",
            source: "Noise: A Flaw in Human Judgment",
        },
        {
            quote: "Life is often more complex than the stories we like to tell about it.",
            author: "Daniel Kahnemann",
            source: "Noise: A Flaw in Human Judgment",
        },
        {
            quote: "When the facts change, I (try to - and probably fail to) change my mind. What do you do?",
            author: "Inspired by Daniel Kahnemann",
            source: "Noise: A Flaw in Human Judgment",
        },
        {
            quote: "Missing a train is only painful if you run after it! Likewise, not matching the idea of success others expect from you is only painful if that's what you are seeking.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "Remember that you are a Black Swan.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "When you develop your opinions on the basis of weak evidence, you will have difficulty interpreting subsequent information that contradicts these opinions, even if this new information is obviously more accurate.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "I will repeat the following until I am hoarse: it is contagion that determines the fate of a theory in social science, not its validity.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "The inability to predict outliers implies the inability to predict the course of history.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "Categorizing is necessary for humans, but it becomes pathological when the category is seen as definitive, preventing people from considering the fuzziness of boundaries.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "If you survive until tomorrow, it could mean that either a) you are more likely to be immortal or b) that you are closer to death.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "Consider a turkey that is fed every day. Every single feeding will firm up the bird's belief that it is the general rule of life to be fed every day by friendly members of the human race 'looking out for its best interests,' as a politician would say. On the afternoon of the Wednesday before Thanksgiving, something unexpected will happen to the turkey. It will incur a revision of belief.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "We are quick to forget that just being alive is an extraordinary piece of good luck, a remote event, a chance occurrence of monstrous proportions.",
            author: "Nassim Nicholas Taleb",
            source: "The Black Swan: The Impact of the Highly Improbable",
        },
        {
            quote: "No matter how sophisticated our choices, how good we are at dominating the odds, randomness will have the last word.",
            author: "Nassim Nicholas Taleb",
            source: "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets",
        },
        {
            quote: "A mistake is not something to be determined after the fact, but in light of the information available until that point.",
            author: "Nassim Nicholas Taleb",
            source: "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets",
        },
        {
            quote: "Mild success can be explainable by skills and labor. Wild success is attributable to variance.",
            author: "Nassim Nicholas Taleb",
            source: "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets",
        },
        {
            quote: "We favor the visible, the embedded, the personal, the narrated, and the tangible; we scorn the abstract.",
            author: "Nassim Nicholas Taleb",
            source: "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets",
        },
        {
            quote: "When things go our way we reject the lack of certainty.",
            author: "Nassim Nicholas Taleb",
            source: "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets",
        },
        {
            quote: "Too much success is the enemy, too much failure is demoralizing.",
            author: "Nassim Nicholas Taleb",
            source: "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets",
        },
        {
            quote: "One of history's few iron laws is that luxuries tend to become necessities and to spawn new obligations.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "Biology enables, Culture forbids.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "Happiness does not really depend on objective conditions of either wealth, health or even community. Rather, it depends on the correlation between objective conditions and subjective expectations.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "There are no gods, no nations, no money and no human rights, except in our collective imagination.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "Evolution has made Homo sapiens, like other social mammals, a xenophobic creature. Sapiens instinctively divide humanity into two parts, 'we' and 'they'.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "A meaningful life can be extremely satisfying even in the midst of hardship, whereas a meaningless life is a terrible ordeal no matter how comfortable it is.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "In order to change an existing imagined order, we must first believe in an alternative imagined order.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "When we break down our prison walls and run towards freedom, we are in fact running into the more spacious exercise yard of a bigger prison.",
            author: "Yuval Noah Harari",
            source: "Sapiens: A Brief History of Humankind",
        },
        {
            quote: "Remember: things can be bad, and getting better.",
            author: "Hans Rosling",
            source: "Factfulness: Ten Reasons We're Wrong About the World — and Why Things Are Better Than You Think",
        },
    ];

    const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    useEffect(() => {
        const randomQuote = getRandomQuote();
        setSelectedQuote(randomQuote);
    }, []); // Empty dependency array ensures this runs only once on mount

    if (!selectedQuote) return null; // Handle the initial render where quote might not be selected yet

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
                    <Divider />
                    <Tooltip hasArrow placement="top" openDelay={500} label={"A quote Silvan likes, from a book he has read."}>
                        <Flex m={2} direction="column">
                            <Text as="cite" textAlign="center">{selectedQuote.quote}</Text>
                            <Flex direction="column">
                                <Text textAlign="center" fontWeight={200}>{selectedQuote.author}</Text>
                                <Text textAlign="center" fontWeight={200}>{selectedQuote.source}</Text>
                            </Flex>
                        </Flex>
                    </Tooltip >
                    <Divider />
                </CardBody>
                <CardFooter>
                    <CVTimeline />
                </CardFooter>
            </Card>
        </Center>
    );
}