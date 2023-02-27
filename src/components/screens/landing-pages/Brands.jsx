import React from "react";

// packages
import styled from "styled-components";

export default function Brands() {
    // storing images to brand
    const brand = [
        {
            id: 1,
            image: require("../../../assets/images/google.svg").default,
        },
        {
            id: 2,
            image: require("../../../assets/images/porsche.svg").default,
        },
        {
            id: 3,
            image: require("../../../assets/images/algolia.png"),
        },
        {
            id: 4,
            image: require("../../../assets/images/volvo.png"),
        },
        {
            id: 5,
            image: require("../../../assets/images/grab.svg").default,
        },
        {
            id: 6,
            image: require("../../../assets/images/upwork.png"),
        },
        {
            id: 7,
            image: require("../../../assets/images/coinbase.png"),
        },
        {
            id: 8,
            image: require("../../../assets/images/google.svg").default,
        },
        {
            id: 9,
            image: require("../../../assets/images/grab.svg").default,
        },
        {
            id: 10,
            image: require("../../../assets/images/coinbase.png"),
        },
        {
            id: 11,
            image: require("../../../assets/images/google.svg").default,
        },
        {
            id: 12,
            image: require("../../../assets/images/volvo.png"),
        },
        {
            id: 13,
            image: require("../../../assets/images/grab.svg").default,
        },
        {
            id: 14,
            image: require("../../../assets/images/algolia.png"),
        },
        {
            id: 15,
            image: require("../../../assets/images/upwork.png"),
        },
        {
            id: 16,
            image: require("../../../assets/images/porsche.svg").default,
        },
    ];
    return (
        <MainContainer>
            <Wrapper>
                <Heading>
                    Findtrend helps youto increase your productivity and reduce your computer's
                    memory load,{" "}
                    <Decorate>
                        an application that can <br />
                        fulfill your daily browsing needs.
                    </Decorate>
                </Heading>
                <SubHead>Findtrend make +1000 Startup grow</SubHead>
                <Content>
                    {brand.map((tech) => {
                        return (
                            <BrandContainer key={tech.id}>
                                <ImageContainer>
                                    <Image src={tech.image} alt="Company logo" />
                                </ImageContainer>
                            </BrandContainer>
                        );
                    })}
                </Content>
            </Wrapper>
        </MainContainer>
    );
}
const MainContainer = styled.section`
    padding: 100px 0;
    @media all and (max-width: 768px) {
        padding: 80px 0;
    }
`;

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        width: 85%;
    }
    @media all and (max-width: 768px) {
        width: 90%;
    }
`;
const Heading = styled.h2`
    font-size: 52px;
    font-family: "InterBold";
    display: inline-block;
    margin-bottom: 150px;
    @media all and (max-width: 1080px) {
        font-size: 39px;
        margin-bottom: 120px;
    }
    @media all and (max-width: 980px) {
        font-size: 32px;
        margin-bottom: 100px;
    }
    @media all and (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 60px;
    }
`;
const Decorate = styled.span`
    color: #60625d;
`;
const SubHead = styled.h4`
    font-family: "InterBold";
    font-size: 48px;
    text-align: center;
    margin-bottom: 50px;
    @media all and (max-width: 1080px) {
        font-size: 38px;
    }
    @media all and (max-width: 980px) {
        font-size: 36px;
    }
    @media all and (max-width: 768px) {
        font-size: 32px;
    }
`;
const Content = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    width: 100%;
    @media all and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
const BrandContainer = styled.li`
    background-color: #f5f5f5;
    padding: 30px;
    border-radius: 8px;
    :last-child {
        @media all and (max-width: 768px) {
            display: none;
        }
    }
`;
const ImageContainer = styled.div`
    width: 75%;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Image = styled.img``;
