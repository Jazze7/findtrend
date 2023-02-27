import React from "react";

// package
import styled from "styled-components";

export default function Tab() {
    return (
        <>
            <MainContainer>
                <Heading>Open new tabs is sh*t</Heading>
                <MiddlePortion>
                    <ImageContainer className="text">
                        <Image
                            src={require("../../../assets/images/arrowblack.svg").default}
                            alt="arrow with text"
                        />
                    </ImageContainer>
                    <TagContainer>
                        <FrameContainer>
                            <Frame
                                src={require("../../../assets/images/frame1.png")}
                                alt="find_trend frame"
                            />
                        </FrameContainer>
                    </TagContainer>
                    <ImageContainer>
                        <Image
                            src={require("../../../assets/images/arrowblack.svg").default}
                            alt="arrow with text"
                        />
                    </ImageContainer>
                </MiddlePortion>
                <Para>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et, totam
                    voluptatibus doloribus autem facilis in error.
                </Para>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.section`
    background-color: var(--theme-color);
    padding: 100px 0;
    @media all and (max-width: 980px) {
        padding: 80px 0;
    }
    @media all and (max-width: 768px) {
        padding: 50px 0;
    }
`;
const Heading = styled.h1`
    font-family: "InterBold";
    font-size: 48px;
    text-align: center;
    margin-bottom: 80px;
    @media all and (max-width: 980px) {
        margin-bottom: 60px;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 40px;
        font-size: 42px;
    }

`;
const MiddlePortion = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 80px;
    @media all and (max-width: 980px) {
        margin-bottom: 60px;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 40px;
    }
`;
const ImageContainer = styled.div`
    width: 8%;
    position: absolute;
    right: 25%;
    top: 10%;
    &.text {
        transform: rotate(-45deg);
        right: 68%;
        top: 10%;
        @media all and (max-width: 980px) {
            width: 12%;
        }
    }
    @media all and (max-width: 980px) {
        width: 12%;
        right: 17%;
    }
`;
const Image = styled.img``;
const TagContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 60px;
    width: 30%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        padding: 50px;
    }
    @media all and (max-width: 980px) {
        padding: 35px;
    }
    @media all and (max-width: 768px) {
        width: 35%;
    }
`;
const FrameContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Frame = styled.img``;
const Para = styled.div`
    text-align: center;
    width: 60%;
    color: #60625d;
    margin: 0 auto;
    line-height: 1.9em;
    font-size: 16px;
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        width: 70%;
        line-height: 1.8em;
    }
`;
