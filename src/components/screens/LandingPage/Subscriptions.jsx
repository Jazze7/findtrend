import React, { useState } from "react";

// package
import styled from "styled-components";

export default function Subscriptions() {
    const [green, setGreen] = useState(false);
    return (
        <MainContainer>
            <Head>Get your best deal </Head>
            <SwitchContainer>
                <Month className={green ? "light" : ""}>Month</Month>
                <ButtonContainer onClick={() => setGreen(!green)}>
                    <Button className={green ? "move" : ""}></Button>
                </ButtonContainer>
                <Year className={green ? "" : "light"}>Year</Year>
                <ImageContainer>
                    <Image
                        src={
                            require("../../../assets/images/arrowithtext.svg")
                                .default
                        }
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
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <TickArrowBox>
                        <Tick
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <TickArrowBox>
                        <Tick
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <ButtonContainer>
                        <FreeButton className={green ? "black" : ""}>
                            For Free
                        </FreeButton>
                    </ButtonContainer>
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
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <TickArrowBox>
                        <Tick
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <TickArrowBox>
                        <Tick
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <ButtonContainer>
                        <FreeButton className={green ? "black" : ""}>
                            For Free
                        </FreeButton>
                    </ButtonContainer>
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
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <TickArrowBox>
                        <Tick
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <TickArrowBox>
                        <Tick
                            src={
                                require("../../../assets/images/tick-icon.svg")
                                    .default
                            }
                            alt="tick-image"
                        />
                        <MiddlePara>Vivamus sed libero ornare</MiddlePara>
                    </TickArrowBox>
                    <ButtonContent>
                        <FreeButton className={green ? "black" : ""}>
                            For Free
                        </FreeButton>
                    </ButtonContent>
                </CardContainer>
            </Card>
        </MainContainer>
    );
}
const MainContainer = styled.section`
    padding: 100px;
    background-color: #000;
`;
const Head = styled.h1`
    font-size: 48px;
    font-family: "InterBold";
    text-align: center;
    color: #fff;
    margin-bottom: 50px;
`;
const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto;
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
        left: 58%;
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
`;
const Image = styled.img``;
const Card = styled.div``;
const CardContainer = styled.div``;
const CardTitle = styled.h3``;
const CardSubtitle = styled.h6``;
const Line = styled.line``;
const Price = styled.h4``;
const Duration = styled.span``;
const TickArrowBox = styled.div``;
const Tick = styled.img``;
const ButtonContent = styled.div``;
const FreeButton = styled.span``;
const MiddlePara = styled.h6``;
