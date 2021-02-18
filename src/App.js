import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Collection from "./components/Collection";
import WomenSneakers from "./components/WomenSneakers";
import Offer from "./components/Offer";
import NewCollection from "./components/NewCollection";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header/>
            <main className="main">
                <Home/>
                <Feature/>
                <Collection/>
                <WomenSneakers/>
                <Offer/>
                <NewCollection/>
                <NewsLetter/>
            </main>
            <Footer/>
            <p className="footer__copy">&#169; <a href="https://github.com/ilkhomabdugafurov/react-ecommerse-website-v1">2021 ILHOM ABDUGAFUROV.</a> All right reserved</p>
        </div>
    );
}

export default App;
