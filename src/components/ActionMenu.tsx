import { ColorMode, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

interface ActionMenuProps {
    colorMode: ColorMode;
    toggleColorMode: () => void
}

const ActionMenu: React.FC<ActionMenuProps> = ({ colorMode, toggleColorMode }) => {
    return (
        <HStack spacing={4}>
            <IconButton
                aria-label="Toggle Dark/Light mode"
                icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                size="md"
                variant="ghost"
                onClick={toggleColorMode}
            />
            <IconButton
                aria-label="LinkedIn"
                as={Link}
                icon={<FaLinkedin />}
                size="md"
                variant="ghost"
                href="https://www.linkedin.com/in/silvan-flum/"
                target="_blank"
                rel="noopener noreferrer"
            />
            <IconButton
                aria-label="Email"
                as={Link}
                icon={<FaEnvelope />}
                size="md"
                variant="ghost"
                href="mailto:contact@mail.flum.tech"
            />
        </HStack>
    )
}

export default ActionMenu;