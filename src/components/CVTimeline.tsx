import { Box, Flex, Text, Divider, VStack, Heading, Collapse, useDisclosure, useColorModeValue, Tag, Wrap, HStack } from "@chakra-ui/react";
import React from "react";
import { FaBuilding, FaCalendar, FaGraduationCap, FaLocationDot } from "react-icons/fa6";

const CVTimeline: React.FC = () => {

    interface CVEntry {
        title: string;
        company: string;
        timePeriod: string;
        location: string;
        skills: string[];
        description?: string;
        degree?: string;
    }
    
  const cvEntries: CVEntry[] = [
    {
        title: "Full-Stack Software Developer",
        company: "HCLTech Confinale Wealth Solutions (formerly Confinale AG)",
        timePeriod: "Sep 2023 - Present",
        location: "Zurich, Switzerland",
        skills: ["Java", "Kotlin", "TypeScript", "Angular", "Dropwizard", "Ktor", "Hibernate", "SQL Server",],
    },
    {
        title: "Computer Science Student",
        company: "York University",
        timePeriod: "Aug 2022 - Dec 2022",
        location: "Toronto, Canada",
        skills: ["Software Engineering", "Software Testing", "Java", "C#", "ASP.NET Core", "ANTLR", "Matlab", "Scapy"],
        description: "Semester abroad.",
    },
    {
        title: "Computer Science Student",
        company: "ZHAW School of Engineering",
        timePeriod: "Sep 2020 - Jul 2023",
        location: "Zurich (Winterthur), Switzerland",
        skills: ["Software Engineering", "Scrum", "Java", "C#", "Python", "JavaScript", "C", "Haskell", "SQL", "HTML/CSS", "ARM Cortex-M0 Assembly", ".NET", "Linux", "Robot Operating System (ROS)", "Git", "Ghidra", "Wireshark"],
        degree: "Bachelor of Science ZHAW"
    },
    {
        title: "Intern",
        company: "Swiss Marketing",
        timePeriod: "Feb 2020 - Jan 2021",
        location: "Zurich, Switzerland",
        skills: ["FreeMarker"],
        description: "Part-time."
    },
    {
        title: "Banking Apprentice",
        company: "Thurgauer Kantonalbank",
        timePeriod: "Aug 2016 - Aug 2019",
        location: "Thurgau, Switzerland",
        skills: ["Banking", "Customer Advisory", "Asset Management", "Forex", "Microsoft Office"],
        degree: "Commercial Employee (Kaufmann EFZ) with vocational baccalaureate (mit Berufsmaturität)"
    },
  ];

    return (
        <VStack
            spacing={4}
            width={{ "2xl": "88em", xl: "72em", lg: "54em", md: "40em", sm: "22em", base: "100%" }}
        >
            {cvEntries.map((cvEntry, cvIndex) => {
                const {isOpen, onToggle} = useDisclosure();
                const hoverColor = useColorModeValue("gray.100", "gray.600");

                return (
                    <Flex key={cvIndex} width="100%">
                        {/* Timeline Marker */}
                        <Flex flexDir="column" align="center" mr={8}>
                            <Box w={4} h={4} bg="blue.500" borderRadius="full" mb={2} />
                            {cvIndex < cvEntries.length && (
                                <Divider orientation="vertical" borderWidth={2} borderColor="blue.500" />
                            )}
                        </Flex>
            
                        {/* CV Entry */}
                        <Flex
                            width="100%"
                            direction="column"
                            p={4}
                            borderRadius={10}
                            _hover={{ bg: hoverColor }}
                            onClick={onToggle}
                        >
                            <Box>
                                <Heading size="md">{cvEntry.title}</Heading>
                                <Divider mt={1} mb={2} />
                                <HStack>
                                    <FaBuilding size="16px" />
                                    <Text flex="1">{cvEntry.company}</Text>
                                </HStack>
                                <HStack>
                                    <FaCalendar size="16px" />
                                    <Text flex="1" fontSize="sm" color="gray.500">{cvEntry.timePeriod}</Text>
                                </HStack>
                                <HStack>
                                    <FaLocationDot size="16px" />
                                    <Text flex="1" fontSize="sm" color="gray.500">{cvEntry.location}</Text>
                                </HStack>
                                {cvEntry.degree && (
                                    <HStack>
                                        <FaGraduationCap size="16px" />
                                        <Text flex="1">{cvEntry.degree}</Text>
                                    </HStack>
                                )}
                            </Box>
                            <Box mt={4}>
                                <Collapse
                                    in={isOpen}
                                    transition={{ enter: {duration: 0.5}, exit: {duration: 0.5} }}
                                >
                                    <Wrap>
                                        {cvEntry.skills?.map((skill, skillIndex) => (
                                            <Tag key={skillIndex} bg="blue.500" color="white">{skill}</Tag>
                                        ))}
                                    </Wrap>
                                    <Text mt={2}>{cvEntry.description}</Text>
                                </Collapse>
                            </Box>
                        </Flex>
                    </Flex>
                )
            })}
        </VStack>
    );
};

export default CVTimeline;