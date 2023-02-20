import React from 'react'

// packages
import styled from 'styled-components'


export default function Spotlight() {
  return (
    <>
        <Home>
            <Wrapper>
                <Header>
                    <Nav>
                        <NavLeft>
                            <LogoContainer>
                                <Logo src={require("../../../assets/images/findtrend.svg").default} />
                            </LogoContainer>
                        </NavLeft>
                        <NavMiddle>
                            <NavMenu><Anchor>About</Anchor></NavMenu>
                            <NavMenu><Anchor>How it work</Anchor></NavMenu>
                            <NavMenu><Anchor>Pricing</Anchor></NavMenu>
                            <NavMenu><Anchor>Solution</Anchor></NavMenu>
                            <NavMenu><Anchor>Features</Anchor></NavMenu>
                        </NavMiddle>
                        <NavRight>
                            <NavRightMenu><Anchor>Login</Anchor></NavRightMenu>
                            <NavRightMenu><Anchor>Register</Anchor></NavRightMenu>
                        </NavRight>
                    </Nav>
                </Header>
            </Wrapper>
        </Home>
    </>
  )
}
const Home=styled.section``
const Wrapper=styled.div``
const Header=styled.header``
const Nav=styled.nav``
const NavLeft=styled.h1``
const LogoContainer=styled.a``
const Logo=styled.img``
const NavMiddle=styled.ul``
const NavMenu=styled.li``
const Anchor=styled.a``
const NavRight=styled.ul``
const NavRightMenu=styled.li``
