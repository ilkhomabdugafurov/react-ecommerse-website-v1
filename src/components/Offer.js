import React from 'react';
import OfferImg from "../assets/images/offert.png"

const Offer = () => {
    return (
        <section className="offer section">
            <div className="offer__container bd-grid">
                <div className="offer__data">
                    <h3 className="offer__title">50% OFF</h3>
                    <p className="offer__description">In Adidas Superstar sneakers</p>
                    <a href="#" className="button">Shop Now</a>
                </div>
                <img className="offer__img" src={OfferImg} alt=""/>
            </div>
        </section>
    );
};

export default Offer;