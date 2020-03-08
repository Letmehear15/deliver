import React from "react";
import Header from "./Header/Header";
import PromoAdv from "./PromoAdv/PromoAdv";

export default class Promo extends React.Component{
    render() {
        return(
            <section className='promo'>
                <div className="container">
                    <Header/>
                    <span className="promo__subheader">
                        Global Opt логистика полного цикла из Китая в Россию
                    </span>
                    <h1 className="promo__title">доставка грузов из Китая</h1>
                    <h2 className="promo__subtitle">в Россию и снг всеми видами транспорта</h2>
                    <div className="promo__lines">
                        <hr/>
                        <div className="before">
                        </div>
                        <hr/>
                    </div>
                    <PromoAdv/>
                </div>
                <button className="btn btn_promo">Получить расчет</button>
            </section>
        )
    }
}