import { Avatar, Box, Button, Flex, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import { CiHome } from "react-icons/ci";
import { RiLogoutBoxFill } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';
import SidebarItems from './SidebarItems';

const Sidebar = () => {

    const {handleLogout,isLoggingOut} = useLogout()

    
  return <Box
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2,md:4}}
    >
    <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor={'pointer'}>
            <InstagramLogo/>
        </Link>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"block",md:"none"}} 
        borderRadius={6}
        hover={{
            bg:"whiteAlpha.200"
        }}
        w={10}
        cursor={"pointer"}
         >
            <InstagramMobileLogo/>
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
            <SidebarItems/>
        </Flex>
        {/* logout */}
        <Tooltip
                hasArrow
                label={"logout"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{base:'block',md:'none'}}
                >
                    <Flex
                    onClick={handleLogout}
                    alignItems={"center"}
                    gap={4}
                    hover={{bg:"whiteAlpha.400"}}
                    borderRadius={6}
                    p={2}
                    w={"Full"}
                    marginTop={"auto"}
                   
                
                    >
                        <RiLogoutBoxFill size={25} />
                        <Button display={{base:"none",md:"block"}} variant={"ghost"} _hover={{bg:"transparent"}} isLoading={isLoggingOut}>
                           Log out
                        </Button>
                    </Flex>
                </Tooltip>
    </Flex>
    </Box>
}

export default Sidebar