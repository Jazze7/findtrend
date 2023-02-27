import React from "react";

// packages
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <Wrapper>
                <FooterContent>
                    <FooterLogo>
                        <FooterLogoContainer>
                            <Image src={require("../../../assets/images/logo.png")} alt="logo" />
                        </FooterLogoContainer>
                    </FooterLogo>
                    <Nav>
                        <Menu>
                            <Anchor>How it work</Anchor>
                        </Menu>
                        <Menu>
                            <Anchor>Pricing</Anchor>
                        </Menu>
                        <Menu>
                            <Anchor>Solution</Anchor>
                        </Menu>
                        <Menu>
                            <Anchor>Feature</Anchor>
                        </Menu>
                    </Nav>
                </FooterContent>
            </Wrapper>
        </FooterContainer>
    );
}
const FooterContainer = styled.footer``;
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const FooterContent = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
`;
const FooterLogo = styled.h1`
    width: 50%;
`;
const FooterLogoContainer = styled.a`
    display: block;
    width: 40%;
    @media all and (max-width: 980px) {
        width: 50%;
    }
`;
const Image = styled.img``;
const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 30%;
    @media all and (max-width: 1280px) {
        width: 40%;
    }
    @media all and (max-width: 980px) {
        width: 60%;
    }
`;
const Menu = styled.li``;
const Anchor = styled.a``;
