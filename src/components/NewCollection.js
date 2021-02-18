import React from 'react';
import New1 from "../assets/images/new1.png"
import New2 from "../assets/images/new2.png"
import New3 from "../assets/images/new3.png"
import New4 from "../assets/images/new4.png"
import New5 from "../assets/images/new5.png"

const NewCollection = () => {
    return (
        <section className="new section" id="new">
            <h2 className="section-title">NEW COLLECTION</h2>
            <div className="new__container bd-grid">
                <div className="new__mens">
                    <img src={New1} alt="" className="new__mens-img"/>
                    <h3 className="new__title">Men Shoes</h3>
                    <span className="new__preci">From $79.99</span>
                    <a href="#" className="button-light">View Collection <i className='bx bx-right-arrow-alt button-icon'/></a>
                </div>
                <div className="new__sneaker">
                    <div className="new__sneaker-card">
                        <img src={New2} alt="" className="new__sneaker-img"/>
                        <div className="new__sneaker-overlay">
                            <a href="#" className="button">Add to Cart</a>
                        </div>
                    </div>
                    <div className="new__sneaker-card">
                        <img src={New3} alt="" className="new__sneaker-img"/>
                        <div className="new__sneaker-overlay">
                            <a href="#" className="button">Add to Cart</a>
                        </div>
                    </div>
                    <div className="new__sneaker-card">
                        <img src={New4} alt="" className="new__sneaker-img"/>
                        <div className="new__sneaker-overlay">
                            <a href="#" className="button">Add to Cart</a>
                        </div>
                    </div>
                    <div className="new__sneaker-card">
                        <img src={New5} alt="" className="new__sneaker-img"/>
                        <div className="new__sneaker-overlay">
                            <a href="#" className="button">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCollection;