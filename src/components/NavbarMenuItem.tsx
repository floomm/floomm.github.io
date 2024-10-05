import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { Button, Tooltip, useColorModeValue } from "@chakra-ui/react";

interface NavbarMenuItemProps {
    children: React.ReactNode;
    to: string;
    tooltip?: string;
    disabled?: boolean;
    external?: boolean;
    onClick?: () => void;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ children, to, tooltip, disabled = false, external = false, onClick }) => {

    const activeBgColor = useColorModeValue("gray.100", "gray.700");
    const tooltipDelay: number = 500;

    if (disabled) {
        return (
            <Tooltip hasArrow openDelay={tooltipDelay} label="Coming soon">
                <Button
                    width="100%"
                    color="gray.500"
                    cursor="not-allowed"
                    variant="ghost"
                    disabled={true}
                    _hover="none"
                    _active="none"
                >
                    {children}
                </Button>
            </Tooltip>
        )
    }

    if (external) {
        return (
            <Tooltip hasArrow openDelay={tooltipDelay} label={tooltip}>
                <Button
                    width="100%"
                    as="a"
                    href={to}
                    onClick={onClick}
                    variant="ghost"
                    _hover={{
                        bg: activeBgColor,
                    }}
                >
                    {children}
                </Button>
            </Tooltip>
        );
    }

    return (
        <Tooltip hasArrow openDelay={tooltipDelay} label={tooltip}>
            <Button
                width="100%"
                as={ReactRouterNavLink}
                to={to}
                onClick={onClick}
                variant="ghost"
                _activeLink={{
                    bg: activeBgColor
                }}
            >
                {children}
            </Button>
        </Tooltip>
    );
};

export default NavbarMenuItem;
