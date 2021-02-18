import React from 'react';
import CollectionImg1 from "../assets/images/collection1.png";
import CollectionImg2 from "../assets/images/collection2.png";

const Collection = () => {
    return (
        <section className="collection section">
            <div className="collection__container bd-grid">
                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Nike</h3>
                        <p className="collection__description">New collection 2021</p>
                        <a href="#" className="button-light">Buy now <i className='bx bx-right-arrow-alt button-icon'/></a>
                    </div>
                    <img src={CollectionImg1} alt="" className="collection__img"/>
                </div>
                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Adidas</h3>
                        <p className="collection__description">New collection 2021</p>
                        <a href="#" className="button-light">Buy now <i className='bx bx-right-arrow-alt button-icon'/></a>
                    </div>
                    <img src={CollectionImg2} alt="" className="collection__img"/>
                </div>
            </div>
        </section>
    );
};

export default Collection;