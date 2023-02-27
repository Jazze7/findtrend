import React, { useState } from "react";

// package
import styled from "styled-components";

export default function Subscriptions() {
    const [green, setGreen] = useState(false);

    return (
        <MainContainer>
            <Wrapper>
                <Head>Get your best deal </Head>
                <SwitchContainer>
                    <Month className={green ? "light" : ""}>Month</Month>
                    <ButtonContainer onClick={() => setGreen(!green)}>
                        <Button className={green ? "move" : ""}></Button>
                    </ButtonContainer>
                    <Year className={green ? "" : "light"}>Year</Year>
                    <ImageContainer>
                        <Image
                            src={require("../../../assets/images/arrowithtext.svg").default}
                            alt="arrow with text"
                        />
                    </ImageContainer>
                </SwitchContainer>
                <Card>
                    <CardContainer>
                        <CardTitle>Personal</CardTitle>
                        <CardSubtitle>Get a subscription here</CardSubtitle>
                        <Line></Line>
                        <Price>
                            $8<Duration>/month</Duration>
                        </Price>
                        <TickArrowBox>
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <TickArrowBox>
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <TickArrowBox className="text">
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <ButtonContent>
                            <FreeButton className={green ? "black" : ""}>For Free</FreeButton>
                        </ButtonContent>
                    </CardContainer>
                    <CardContainer>
                        <CardTitle>Personal</CardTitle>
                        <CardSubtitle>Get a subscription here</CardSubtitle>
                        <Line></Line>
                        <Price>
                            $8<Duration>/month</Duration>
                        </Price>
                        <TickArrowBox>
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <TickArrowBox>
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <TickArrowBox className="text">
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <ButtonContent>
                            <FreeButton className={green ? "black" : ""}>For Free</FreeButton>
                        </ButtonContent>
                    </CardContainer>
                    <CardContainer>
                        <CardTitle>Personal</CardTitle>
                        <CardSubtitle>Get a subscription here</CardSubtitle>
                        <Line></Line>
                        <Price>
                            $8<Duration>/month</Duration>
                        </Price>
                        <TickArrowBox>
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <TickArrowBox>
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <TickArrowBox className="text">
                            <Tick
                                src={require("../../../assets/images/tick-icon.svg").default}
                                alt="tick-image"
                            />
                            <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                        </TickArrowBox>
                        <ButtonContent>
                            <FreeButton className={green ? "black" : ""}>For Free</FreeButton>
                        </ButtonContent>
                    </CardContainer>
                </Card>
            </Wrapper>
        </MainContainer>
    );
}
const MainContainer = styled.section`
    padding: 100px 0;
    background-color: #000;
    border-bottom: 2px solid #fff;
    @media all and (max-width: 1080px) {
        padding: 80px 0;
    }
`;
const Wrapper = styled.div`
    width: 75%;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        width: 80%;
    }
    @media all and (max-width: 980px) {
        width: 85%;
    }
`;
const Head = styled.h1`
    font-size: 56px;
    font-family: "InterBold";
    text-align: center;
    color: #fff;
    margin-bottom: 50px;
    @media all and (max-width: 1080px) {
        font-size: 48px;
        margin-bottom: 40px;
    }
`;
const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto 50px auto;
    @media all and (max-width: 980px) {
        width: 55%;
    }
`;
const Month = styled.span`
    color: #fff;
    font-size: 16px;
    &.light {
        color: #777;
    }
`;
const ButtonContainer = styled.div`
    background-color: #fff;
    border-radius: 30px;
    position: relative;
    width: 20%;
    height: 40px;
    @media all and (max-width: 1080px) {
        width: 25%;
    }
`;
const Button = styled.div`
    padding: 18px;
    border-radius: 50%;
    background: var(--theme-color);
    position: absolute;
    left: 5%;
    bottom: 2px;
    transition: all 0.4s ease;
    &.move {
        position: absolute;
        left: 55%;
        @media all and (max-width: 1080px) {
            left: 50%;
        }
    }
`;
const Year = styled.span`
    color: #fff;
    font-size: 16px;
    &.light {
        color: #777;
    }
`;
const ImageContainer = styled.div`
    width: 20%;
    @media all and (max-width: 1080px) {
        width: 25%;
    }
`;
const Image = styled.img``;
const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media all and (max-width: 1280px) {
        gap: 20px;
    }
`;
const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 25px;
    &:hover {
        background-color: var(--theme-color);
    }
    &:hover small {
        background: #000;
        color: #fff;
    }
    @media all and (max-width: 1280px) {
        padding: 30px 20px;
    }
    @media all and (max-width: 980px) {
        padding: 20px 10px;
    }
`;
const CardTitle = styled.h3`
    font-family: "InterBold";
    font-size: 34px;
    margin-bottom: 5px;
    @media all and (max-width: 1080px) {
        font-size: 32px;
    }
    @media all and (max-width: 980px) {
        font-size: 30px;
    }

`;
const CardSubtitle = styled.h6`
    font-size: 16px;
    margin-bottom: 10px;
    @media all and (max-width: 1080px) {
        font-size: 14px;
    }
    @media all and (max-width: 980px) {
        font-size: 12px;
    }
`;
const Line = styled.hr`
    border: 1px solid #f5f5f5;
    margin-bottom: 20px;
`;
const Price = styled.h4`
    font-size: 56px;
    font-family: "InterBold";
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;
const Duration = styled.span`
    font-family: "InterRegular";
    font-size: 20px;
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
`;
const TickArrowBox = styled.div`
    display: flex;
    width: 93%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    &.text {
        margin-bottom: 120px;
        @media all and (max-width: 1280px) {
            margin-bottom: 100px;
        }
        @media all and (max-width: 1080px) {
            margin-bottom: 80px;
        }
        @media all and (max-width: 980px) {
            margin-bottom: 35px;
        }
    }
`;
const Tick = styled.img`
    width: 7%;
`;
const MiddlePara = styled.h6`
    font-size: 20px;
    @media all and (max-width: 1280px) {
        font-size: 16px;
    }
    @media all and (max-width: 1080px) {
        font-size: 14px;
    }
    @media all and (max-width: 980px) {
        font-size: 12px;
    }
`;
const ButtonContent = styled.div`
    text-align: center;
`;
const FreeButton = styled.small`
    color: #000;
    display: inline-block;
    background: var(--theme-color);
    font-family: "InterSemiBold";
    padding: 10px 50px;
    border-radius: 30px;
`;
