import React from "react";

// components
import Spotlight from "./landing-pages/Spotlight";
import Tab from "./landing-pages/Tab";
import Brands from "./landing-pages/Brands";
import Tweet from "./landing-pages/Tweet";
import Subscriptions from "./landing-pages/Subscriptions";
import Join from "./landing-pages/Join";
import Footer from "./landing-pages/Footer";

export default function HomePage() {
    return (
        <>
            <Spotlight />
            <Tab />
            <Brands />
            <Tweet />
            <Subscriptions />
            <Join />
            <Footer />
        </>
    );
}
