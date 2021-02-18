import React from 'react';
import Women1 from "../assets/images/women1.png";
import Women2 from "../assets/images/women2.png";
import Women3 from "../assets/images/women3.png";
import Women4 from "../assets/images/women4.png";

const WomenSneakers = () => {
    return (
        <section className="women section" id="women">
            <h2 className="section-title">WOMEN SNEAKERS</h2>
            <div className="women__container bd-grid">
                <article className="sneaker">
                    <img className="sneaker__img" src={Women1} alt=""/>
                    <span className="sneaker__name">Nike Free TR</span>
                    <span className="sneaker__preci">$129.99</span>
                    <a href="#" className="button-light">Add to Cart <i className='bx bx-right-arrow-alt button-icon'/></a>
                </article>
                <article className="sneaker">
                    <img className="sneaker__img" src={Women2} alt=""/>
                    <span className="sneaker__name">Nike Free TR</span>
                    <span className="sneaker__preci">$129.99</span>
                    <a href="#" className="button-light">Add to Cart <i className='bx bx-right-arrow-alt button-icon'/></a>
                </article>
                <article className="sneaker">
                    <img className="sneaker__img" src={Women3} alt=""/>
                    <span className="sneaker__name">Nike GS Pink</span>
                    <span className="sneaker__preci">$129.99</span>
                    <a href="#" className="button-light">Add to Cart <i className='bx bx-right-arrow-alt button-icon'/></a>
                </article>
                <article className="sneaker">
                    <img className="sneaker__img" src={Women4} alt=""/>
                    <span className="sneaker__name">Nike Get 5</span>
                    <span className="sneaker__preci">$129.99</span>
                    <a href="#" className="button-light">Add to Cart <i className='bx bx-right-arrow-alt button-icon'/></a>
                </article>
            </div>
        </section>
    );
};

export default WomenSneakers;