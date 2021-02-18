import React from 'react';
import HomeImg from "../assets/images/imghome.png";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__sneaker">
                    <div className="home__shape"/>
                    <img className="home__img" src={HomeImg} alt=""/>
                </div>

                <div className="home__data">
                    <span className="home__new">New in</span>
                    <h1 className="home__title">YEEZY BOOST <br/> SPLY - 350</h1>
                    <p className="home__description">Explore the new collection of sneakers </p>
                    <a href="#" className="button">Explore now</a>
                </div>
            </div>
        </section>
    );
};

export default Home;