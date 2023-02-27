import React from "react";

// package
import styled from "styled-components";

export default function Join() {
    return (
        <MainContainer>
            <Head>Join us on email for</Head>
            <SubHead>more trending topics</SubHead>
            <Registration>
                <Anchor>Register</Anchor>
            </Registration>
        </MainContainer>
    );
}
const MainContainer = styled.section`
    background: var(--theme-color);
    padding: 100px 0;
    @media all and (max-width: 768px) {
        padding: 60px 0;
    }
    @media all and (max-width: 640px) {
        padding: 50px 0;
    }
    @media all and (max-width: 360px){
        padding: 40px 0;
}
`;
const Head = styled.h1`
    font-size: 52px;
    font-family: "InterBold";
    text-align: center;
    @media all and (max-width: 1080px) {
        font-size: 48px;
    }
    @media all and (max-width: 980px) {
        font-size: 38px;
    }
    @media all and (max-width: 640px) {
        font-size: 32px;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
`;
const SubHead = styled.h2`
    font-size: 52px;
    font-family: "InterBold";
    text-align: center;
    color: #777;
    margin-bottom: 50px;
    @media all and (max-width: 1080px) {
        font-size: 48px;
    }
    @media all and (max-width: 980px) {
        font-size: 40px;
    }
    @media all and (max-width: 640px) {
        font-size: 32px;
        margin-bottom: 30px;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
`;
const Registration = styled.div`
    background-color: #000;
    padding: 20px 30px;
    border-radius: 30px;
    width: 10%;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        width: 12%;
    }
    @media all and (max-width: 1080px) {
        width: 13%;
    }
    @media all and (max-width: 980px) {
        width: 22%;
    }
    @media all and (max-width: 640px) {
        width: 30%;
        padding: 15px 25px;
    }
    @media all and (max-width: 480px) {
        padding: 12px 20px;
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
