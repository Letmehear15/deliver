import React from 'react'
import shipping from './../../icon/shiping.png'
import scan from './../../icon/scan.png'
import deliver from './../../icon/deliver.png'
import express from './../../icon/express.png'
import PromoDescription from "./PromoDescription/PromoDescription";

export default class PromoAdv extends React.Component{
    render() {
        return(
            <div className='promo__adv'>
            <PromoDescription src={shipping} alt="shipping" text="Перевозка негабаритных и крупнотоннажных грузов"/>
            <PromoDescription src={scan} alt="scan" text="Самостоятельно декларируем и проаодим таможенную очистку с оптимизацией кодов и ставок"/>
            <PromoDescription src={deliver} alt="deliver" text="Осуществляем прямые поставки с заводов от двери до двери"/>
            <PromoDescription src={express} alt="express" text="Экспресс доставка 1-2 дня из Гуанчжоу в Москву от 25$/кг"/>
            </div>
    )
    }
}