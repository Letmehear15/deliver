import React from 'react'
import PromoItem from "./PromoItem/PromoItem";

export default class PromoItems extends React.Component{
    render() {
        return(
            <nav>
                <ul className="promo__items">
                    <PromoItem text="Преимущества"/>
                    <PromoItem text="Наша работа"/>
                    <PromoItem text="Цены"/>
                    <PromoItem text="Схема работы"/>
                    <PromoItem text="Отзывы"/>
                    <PromoItem text="Контакты"/>
                </ul>
            </nav>
        )
    }
}