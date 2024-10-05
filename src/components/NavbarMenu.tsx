import { Box, ComponentWithAs, Heading, StackProps } from "@chakra-ui/react"
import NavbarMenuItem from "./NavbarMenuItem"

interface NavbarMenuProps {
    as: ComponentWithAs<"div", StackProps>;
    align?: "normal" | "start";
    spacing?: number;
    onClick?: () => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ as, align = "normal", spacing = 8, onClick }) => {
    return(
        <Box as={as} align={align} spacing={spacing}>
            <NavbarMenuItem to="/whoami" tooltip="Learn more about me" disabled={true} onClick={onClick}>
                <Heading size='md'>Whoami</Heading>
            </NavbarMenuItem>
            <NavbarMenuItem to="https://flum.tech/docs/blog" tooltip="Read my blog posts" disabled={false} onClick={onClick}>
                <Heading size='md'>Blog</Heading>
            </NavbarMenuItem>
            <NavbarMenuItem to="/projects" tooltip="Check out my projects" disabled={true} onClick={onClick}>
                <Heading size='md'>Projects</Heading>
            </NavbarMenuItem>
        </Box>
    );
}

export default NavbarMenu;