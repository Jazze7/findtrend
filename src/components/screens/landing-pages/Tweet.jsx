import React from "react";

// package
import styled from "styled-components";

export default function Tweet() {
    // storing logo's in the social variable
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
            <Wrapper>
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
                        <Tweeter src={require("../../../assets/images/tweet.jpg")} alt="tweet" />
                    </TweeterContainer>
                    <TeslaTweetContainer>
                        <TeslaTweet
                            src={require("../../../assets/images/teslatweet.jpg")}
                            alt="tweet"
                        />
                    </TeslaTweetContainer>
                    <TweeterContainer className="tweet">
                        <Tweeter src={require("../../../assets/images/tweet.jpg")} alt="tweet" />
                    </TweeterContainer>
                    <Registration>
                        <Anchor>Register</Anchor>
                    </Registration>
                </TweetSection>
            </Wrapper>
        </MainContainer>
    );
}
const MainContainer = styled.section`
    background-color: #f5f5f5;
    padding: 100px 0;
    @media all and (max-width: 980px) {
        padding: 80px 0;
    }
    @media all and (max-width: 768px) {
        padding: 60px 0;
    }
    @media all and (max-width: 480px) {
        padding: 40px 0;
    }
`;
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    @media all and (max-width: 480px) {
        width: 85%;
    }
`;
const Head = styled.h1`
    font-size: 56px;
    font-family: "InterBold";
    text-align: center;
    margin-bottom: 80px;
    @media all and (max-width: 1080px) {
        font-size: 48px;
        margin-bottom: 50px;
    }
    @media all and (max-width: 980px) {
        font-size: 38px;
        margin-bottom: 30px;
    }
    @media all and (max-width: 768px) {
        font-size: 32px;
    }
    @media all and (max-width: 480px) {
        font-size: 26px;
    }
`;
const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 30px;
    margin-bottom: 50px;
    @media all and (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
const BrandContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 30px;
    :hover {
        background-color: var(--theme-color);
    }
    @media all and (max-width: 1280px) {
        padding: 20px;
    }
    @media all and (max-width: 1080px) {
        padding: 15px;
    }
    @media all and (max-width: 980px) {
        padding: 12px;
    }
    @media all and (max-width: 768px) {
        padding: 25px;
    }
    @media all and (max-width: 640px) {
        padding: 20px;
    }
    @media all and (max-width: 480px) {
        padding: 10px
    }
`;
const ImageContainer = styled.div``;
const Brand = styled.img``;
const TweetSection = styled.div`
    width: 60%;
    margin: 0 auto;
    @media all and (max-width: 1080px) {
        width: 70%;
    }
    @media all and (max-width: 980px) {
        width: 75%;
    }
    @media all and (max-width: 768px) {
        width: 85%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const TweeterContainer = styled.div`
    margin-bottom: 25px;
    &.tweet {
        margin-bottom: 50px;
        @media all and (max-width: 640px) {
        margin-bottom: 30px;
    }
    }
`;
const Tweeter = styled.img``;
const TeslaTweetContainer = styled.div`
    margin-bottom: 25px;
`;
const Registration = styled.div`
    background-color: #000;
    padding: 20px 30px;
    border-radius: 30px;
    width: 20%;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        width: 25%;
    }
    @media all and (max-width: 980px) {
        width: 32%;
    }  @media all and (max-width: 640px) {
        padding: 15px;
    }
`;
const Anchor = styled.a`
    color: #fff;
    font-family: "InterSemiBold";
    text-align: center;
    display: block;
    @media all and (max-width: 480px) {
       font-size: 14px;
    }
`;
const TeslaTweet = styled.img``;
