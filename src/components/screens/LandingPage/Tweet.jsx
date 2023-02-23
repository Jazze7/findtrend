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
            <TweetSection>
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
                <TweeterContainer className="tweet">
                    <Tweeter
                        src={require("../../../assets/images/tweet.jpg")}
                        alt="tweet"
                    />
                </TweeterContainer>
                <Registration>
                    <Anchor>Register</Anchor>
                </Registration>
            </TweetSection>
        </MainContainer>
    );
}
const MainContainer = styled.section`
    background-color: #f5f5f5;
    padding: 100px;
`;
const Head = styled.h1`
    font-size: 56px;
    font-family: "InterBold";
    text-align: center;
    margin-bottom: 80px;
`;
const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 30px;
    margin-bottom: 50px;
`;
const BrandContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 30px;
    :hover {
        background-color: var(--theme-color);
    }
`;
const ImageContainer = styled.div``;
const Brand = styled.img``;
const TweetSection = styled.div`
    width: 60%;
    margin: 0 auto;
`;
const TweeterContainer = styled.div`
    margin-bottom: 25px;
    &.tweet {
        margin-bottom: 50px;
    }
`;
const Tweeter = styled.img``;
const TeslaTweetContainer = styled.div`
    margin-bottom: 25px;
`;
const Registration = styled.div`
    background-color: #000;
    padding: 20px 30px;
    border-radius: 20px;
    width: 20%;
    margin: 0 auto;
`;
const Anchor = styled.a`
    color: #fff;
    font-family: "InterSemiBold";
    text-align: center;
    display: block;
`;
const TeslaTweet = styled.img``;
