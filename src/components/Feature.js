import React from 'react';
import fImg1 from "../assets/images/featured1.png";
import fImg2 from "../assets/images/featured2.png";
import fImg3 from "../assets/images/featured3.png";

const Feature = () => {
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED</h2>
            <div className="featured__container bd-grid">
                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                    <img className="sneaker__img" src={fImg1} alt=""/>
                    <span className="sneaker__name">Nike Jordan</span>
                    <span className="sneaker__preci">$149.99</span>
                    <a href="#" className="button-light">Add to Cart <i className='bx bx-right-arrow-alt button-icon'/></a>
                </article>
                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                    <img className="sneaker__img" src={fImg2} alt=""/>
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__preci">$149.99</span>
                    <a href="#" className="button-light">Add to Cart <i className='bx bx-right-arrow-alt button-icon'/></a>
                </article>
                <article className="sneaker">
                    <div className="sneaker__sale">Sale</div>
                    <img className="sneaker__img" src={fImg3} alt=""/>
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__preci">$149.99</span>
                    <a href="#" className="button-light">Add to Cart <i className='bx bx-right-arrow-alt button-icon'/></a>
                </article>
            </div>
        </section>
    );
};

export default Feature;