import {ColorMode, HStack, IconButton, Link} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";

interface ActionMenuProps {
    colorMode: ColorMode;
    toggleColorMode: () => void
}

const ActionMenu: React.FC<ActionMenuProps> = ({ colorMode, toggleColorMode }) => {
    return (
        <HStack spacing={4}>
            <IconButton
                aria-label="Email"
                as={Link}
                icon={<FaEnvelope />}
                size="md"
                variant="ghost"
                href="mailto:contact@mail.flum.tech"
            />
            <IconButton
                aria-label="LinkedIn Profile"
                as={Link}
                icon={<FaLinkedin />}
                size="md"
                variant="ghost"
                href="https://www.linkedin.com/in/silvan-flum"
                target="_blank"
                rel="noopener noreferrer"
            />
            <IconButton
                aria-label="GitHub Profile"
                as={Link}
                icon={<FaGithub />}
                size="md"
                variant="ghost"
                href="https://www.github.com/floomm"
                target="_blank"
                rel="noopener noreferrer"
            />
            <IconButton
                aria-label="Toggle Dark/Light mode"
                icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                size="md"
                variant="ghost"
                onClick={toggleColorMode}
            />
        </HStack>
    )
}

export default ActionMenu;