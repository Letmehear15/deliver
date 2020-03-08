import React from "react";
import logo from './../../icon/glopt.png'
import PromoItems from "./PromoItems/PromoItems";

export default class Header extends React.Component{
    render() {
        return(
            <header className="promo__head">
                <div className="promo__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <PromoItems />
                <div className="promo__phone">
                    Есть вопросы? <br/>
                    <a href="tel:+79264230100">+7 (926) 423 01 00</a>
                </div>
                <button className="btn">Звоните</button>
            </header>
        )
    }
}