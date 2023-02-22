import React from "react";
import styled from "styled-components";

export default function Tweet() {
    const Social = [
        {
            id: 1,
            image: require("../../../assets/images/facebook.svg").default,
        },
        {
            id: 2,
            image: require("../../../assets/images/twitter.svg").default,
        },
        {
            id: 3,
            image: require("../../../assets/images/dribble.svg").default,
        },
        {
            id: 4,
            image: require("../../../assets/images/git.svg").default,
        },
        {
            id: 5,
            image: require("../../../assets/images/mk.svg").default,
        },
        {
            id: 6,
            image: require("../../../assets/images/pintrest.svg").default,
        },
        {
            id: 7,
            image: require("../../../assets/images/linkedin.svg").default,
        },
        {
            id: 8,
            image: require("../../../assets/images/vk.svg").default,
        },
    ];
    return (
        <MainContainer>
            <Head>All platorm connect to Findtrend</Head>
            <SocialContainer>
                {Social.map((brand) => {
                    return (
                        <BrandContainer key={brand.id}>
                            <ImageContainer>
                                <Brand src={brand.image} alt="logo" />
                            </ImageContainer>
                        </BrandContainer>
                    );
                })}
            </SocialContainer>
            <TweeterContainer>
                <Tweeter
                    src={require("../../../assets/images/tweet.jpg")}
                    alt="tweet"
                />
            </TweeterContainer>
            <TeslaTweetContainer>
                <TeslaTweet
                    src={require("../../../assets/images/teslatweet.jpg")}
                    alt="tweet"
                />
            </TeslaTweetContainer>
            <TweeterContainer>
                <Tweeter
                    src={require("../../../assets/images/tweet.jpg")}
                    alt="tweet"
                />
            </TweeterContainer>
            <Registration>
                <Anchor>Register</Anchor>
            </Registration>
        </MainContainer>
    );
}
const MainContainer = styled.section`
    background-color: #f5f5f5;
`;
const Head = styled.h1``;
const SocialContainer = styled.div``;
const BrandContainer = styled.div``;
const ImageContainer = styled.div``;
const Brand = styled.img``;
const TweeterContainer = styled.div``;
const Tweeter = styled.img``;
const TeslaTweetContainer = styled.div``;
const Registration = styled.div``;
const Anchor = styled.a``;
const TeslaTweet = styled.img``;
