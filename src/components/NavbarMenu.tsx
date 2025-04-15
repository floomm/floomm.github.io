import { Box, ComponentWithAs, StackProps } from "@chakra-ui/react"

interface NavbarMenuProps {
    as: ComponentWithAs<"div", StackProps>;
    align?: "normal" | "start";
    spacing?: number;
    onClick?: () => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ as, align = "normal", spacing = 8 }) => {

    return(
        <Box as={as} align={align} spacing={spacing}>
            {/* <NavbarMenuItem
                to="/whoami"
                tooltip="Learn more about me"
                disabled={true}
                onClick={onClick}
            >
                <Heading size='md'>Whoami</Heading>
            </NavbarMenuItem>
            <NavbarMenuItem
                to={docusaurusUrl + "/blog"}
                tooltip="Read my blog posts"
                disabled={true}
                external={true}
                onClick={onClick}
            >
                <Heading size='md'>Blog</Heading>
            </NavbarMenuItem>
            <NavbarMenuItem
                to="/projects"
                tooltip="Check out my projects"
                disabled={true}
                onClick={onClick}
            >
                <Heading size='md'>Projects</Heading>
            </NavbarMenuItem> */}
        </Box>
    );
}

export default NavbarMenu;