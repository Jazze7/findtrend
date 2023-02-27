import React from "react";

// packages
import styled from "styled-components";

// media
import spotlightimage from "../../../assets/images/spotlight.jpg";

export default function Spotlight() {
    return (
        <>
            <Home>
                <Wrapper>
                    <Header>
                        <Nav>
                            <NavLeft>
                                <LogoContainer>
                                    <Logo
                                        src={
                                            require("../../../assets/images/findtrend.svg").default
                                        }
                                        alt="logo"
                                    />
                                </LogoContainer>
                            </NavLeft>
                            <NavMiddle>
                                <NavMenu>
                                    <Anchor>About</Anchor>
                                </NavMenu>
                                <NavMenu>
                                    <Anchor>How it work</Anchor>
                                </NavMenu>
                                <NavMenu>
                                    <Anchor>Pricing</Anchor>
                                </NavMenu>
                                <NavMenu>
                                    <Anchor>Solution</Anchor>
                                </NavMenu>
                                <NavMenu>
                                    <Anchor>Features</Anchor>
                                </NavMenu>
                            </NavMiddle>
                            <NavRight>
                                <NavRightMenu>
                                    <Anchor>Login</Anchor>
                                </NavRightMenu>
                                <NavRightMenu>
                                    <Anchor className="register">Register</Anchor>
                                </NavRightMenu>
                            </NavRight>
                            <HamburgerContainer>
                                <HamburgerImage
                                    src={require("../../../assets/images/humbergimage.svg").default}
                                    alt="Hamburger Icon"
                                />
                            </HamburgerContainer>
                        </Nav>
                    </Header>
                    <HomePage>
                        <Heading>
                            Minimize your tabs.
                            <br />
                            Find the trends
                        </Heading>
                        <SubHeading>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi
                            reiciendis ratione autem quo magni, aperiam molestias eum doloremque et
                            quaerat culpa, repellendus sunt nisi iste aspernatur dicta sed
                            consectetur.
                        </SubHeading>
                        <MiddlePortion>
                            <ButtonContainer>
                                <ButtonName>Get started</ButtonName>
                                <FireContainer>
                                    <Fire
                                        src={require("../../../assets/images/fire.svg").default}
                                        alt="fire image"
                                    />
                                </FireContainer>
                            </ButtonContainer>
                            <TextImageContainer>
                                <TextImage
                                    src={require("../../../assets/images/arrowithtext.svg").default}
                                    alt="arrow with text"
                                />
                            </TextImageContainer>
                        </MiddlePortion>
                        <BottomPortion>
                            <ImageContainer>
                                <Image
                                    src={require("../../../assets/images/frame1.png")}
                                    alt="frame of social media"
                                />
                            </ImageContainer>
                            <ImageContainer>
                                <Image
                                    src={require("../../../assets/images/frame2.png")}
                                    alt="frame of social media"
                                />
                            </ImageContainer>
                            <ImageContainer>
                                <Image
                                    src={require("../../../assets/images/frame3.png")}
                                    alt="frame of social media"
                                />
                            </ImageContainer>
                            <ImageContainer>
                                <Image
                                    src={require("../../../assets/images/frame4.png")}
                                    alt="frame of social media"
                                />
                            </ImageContainer>
                        </BottomPortion>
                    </HomePage>
                </Wrapper>
            </Home>
        </>
    );
}
const Home = styled.section`
    background: url(${spotlightimage});
    background-size: cover;
    background-position: center center;
    padding-bottom: 100px;
    border-bottom: 3px solid #fff;
    @media all and (max-width: 980px) {
        padding-bottom: 80px;
    }
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Header = styled.header`
    height: 100px;
`;
const Nav = styled.nav`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavLeft = styled.h1`
    width: 20%;
    @media all and (max-width: 768px) {
        width: 30%;
    }
    @media all and (max-width: 640px) {
        width: 40%;
    }
    @media all and (max-width: 360px){
        width: 50%;
}
`;
const LogoContainer = styled.a`
    display: block;
`;
const Logo = styled.img``;
const NavMiddle = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 40%;
    @media all and (max-width: 1080px) {
        width: 43%;
    }
    @media all and (max-width: 980px) {
        width: 48%;
    }
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const NavMenu = styled.li``;
const Anchor = styled.a`
    display: block;
    color: #fff;
    &.register {
        color: #000;
        font-family: "InterSemiBold";
    }
    @media all and (max-width: 1280px) {
        font-size: 16px;
    }
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
`;
const NavRight = styled.ul`
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 18%;
    }
    @media all and (max-width: 980px) {
        width: 20%;
    }
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const NavRightMenu = styled.li`
    :last-child {
        background: #fff;
        border-radius: 30px;
        padding: 10px 20px;
        @media all and (max-width: 980px) {
            padding: 8px 16px;
        }
    }
`;
const HamburgerContainer = styled.div`
    display: none;
    @media all and (max-width: 768px) {
        display: block;
        width: 15%;
    }
    @media all and (max-width: 360px){
        width: 20%;
}
`;
const HamburgerImage = styled.img``;
const HomePage = styled.section`
    padding-top: 5%;
`;
const Heading = styled.h2`
    color: #e8e8e8;
    text-align: center;
    font-size: 60px;
    font-family: "InterBold";
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
        font-size: 52px;
    }
    @media all and (max-width: 768px) {
        font-size: 45px;
    }
    @media all and (max-width: 640px) {
        font-size: 38px;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
`;
const SubHeading = styled.h6`
    color: #777;
    font-size: 16px;
    width: 65%;
    margin: 0 auto 80px auto;
    text-align: center;
    line-height: 1.5;
    @media all and (max-width: 1280px) {
        margin: 0 auto 60px auto;
    }
    @media all and (max-width: 980px) {
        width: 75%;
        font-size: 14px;
        margin: 0 auto 50px auto;
    }
    @media all and (max-width: 768px) {
        width: 80%;
        font-size: 12px;
        margin: 0 auto 40px auto;
    }
    @media all and (max-width: 640px) {
        font-size: 11px;
    }
    @media all and (max-width: 480px) {
        width: 90%;
    }
`;
const MiddlePortion = styled.div`
    position: relative;
    margin-bottom: 100px;
    @media all and (max-width: 640px) {
        margin-bottom: 60px;
    }
`;
const ButtonContainer = styled.div`
    background: var(--theme-color);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15%;
    margin: 0 auto;
    padding: 15px 20px;
    border-radius: 30px;
    @media all and (max-width: 1280px) {
        width: 18%;
    }
    @media all and (max-width: 980px) {
        width: 23%;
    }
    @media all and (max-width: 768px) {
        width: 28%;
    }
    @media all and (max-width: 640px) {
        width: 37%;
        padding: 10px 15px;
    }
    @media all and (max-width: 480px) {
        width: 46%;
    }
`;
const ButtonName = styled.span`
    display: block;
    font-family: "InterBold";
    @media all and (max-width: 360px){
        font-size: 14px;
}
`;
const FireContainer = styled.div``;
const Fire = styled.img``;
const TextImageContainer = styled.div`
    width: 7%;
    position: absolute;
    right: 31%;
    top: -80%;
    @media all and (max-width: 1280px) {
        width: 8%;
        right: 30%;
        top: -32%;
    }
    @media all and (max-width: 980px) {
        width: 12%;
        right: 23%;
    }
    @media all and (max-width: 768px) {
        width: 14%;
        right: 18%;
    }
    @media all and (max-width: 640px) {
        width: 18%;
        right: 10%;
    }
    @media all and (max-width: 480px) {
        width: 22%;
        right: 2%;
    }
`;
const TextImage = styled.img``;
const BottomPortion = styled.ul`
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    @media all and (max-width: 768px) {
        width: 80%;
    }
    @media all and (max-width: 640px) {
        width: 95%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const ImageContainer = styled.li`
    width: 28%;
    :first-child {
        transform: rotate(-12deg);
        transform-origin: left;
    }
    :nth-child(2) {
        position: absolute;
        right: 50%;
    }
    :nth-child(3) {
        position: absolute;
        right: 28%;
        top: -62%;
        transform: rotate(-3deg);
    }
    :last-child {
        transform: rotate(4deg);
        position: absolute;
        right: 4%;
        width: 25%;
    }
`;
const Image = styled.img``;
