import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { NavLink as ReactRouterNavLink } from 'react-router-dom';

interface SilvanProps {
    onClick?: () => void;
}

const Silvan: React.FC<SilvanProps> = ({ onClick }) => {
    return (
        <Button
            as={ReactRouterNavLink}
            to="/"
            padding={6}
            fontWeight="bold"
            variant="ghost"
            onClick={onClick}
        >
            <Flex alignItems="center">
                <Avatar name="Silvan Flum" src="/img/Flum_Silvan_Cropped.jpg"  size="sm"/>
                <Box ml='3'>
                    <Text fontSize="lg">Silvan Flum</Text>
                    <Text fontSize="sm">Software Developer</Text>
                </Box>
            </Flex>
        </Button>
    );
}

export default Silvan;