import React from "react";
import offices from './../../icon/adv_offices.png'
import paper from './../../icon/adv_paper.png'
import persons from './../../icon/adv_persons.png'
import search from './../../icon/adv_search.png'
import warehouse from './../../icon/adv_warehouse.png'
import exchange from './../../icon/adv_exchange.png'
import wholesale from './../../icon/adv_wholesale.png'
import trip from './../../icon/adv_trip.png'
import AdvantagesItem from "./AdvantagesItem/AdvantagesItem";


export default class AdvatagesItems extends React.Component{
    render() {
        return(
            <div className='advantages__items'>
                <AdvantagesItem src={offices} alt='offices' spanText='Офисы в Китае и России' text='Офисы расположены в Москве, столице России.  И в Гуанчжоу, мировом торговом мегаполисе Китая.'/>
                <AdvantagesItem src={paper} alt='paper' spanText='Декларируем груз с оптимизацией' text='Идем на встречу своим клиентам и помогаем растаможить груз с оптимизацией кодов и ставок.'/>
                <AdvantagesItem src={persons} alt='persons' spanText='Квалифицированные кадры' text='Наши сотрудники имеют большой опыт в логистике с Китаем и в совершенстве владеют китайским и английским языками.'/>
                <AdvantagesItem src={search} alt='search' spanText='Осуществляем поиск производителей' text='Помогаем нашим клиентам найти интересующий вас товар или производителя в Китае.'/>
                <AdvantagesItem src={warehouse} alt='warehouse' spanText='Собственный склад в Китае' text='Свой склад в Китае, позволяет собирать и проверять и упаковывать  ваши товары, перед отправкой.'/>
                <AdvantagesItem src={exchange} alt='exchange' spanText='Перевод денег в Китай' text='Помогаем переводить и оплачивать товар в Китае на льготных условиях'/>
                <AdvantagesItem src={wholesale} alt='wholesale' spanText='Делаем оптовые поставки под ключ' text='Берём на себя все заботы связанные с  закупкой, проверкой на качество, логистикой и растаможкой. От вас требуется лишь заполнить техническое задание, одобрить  образцы товаров и после принять товар на своём складе!'/>
                <AdvantagesItem src={trip} alt='trip' spanText='Поездка на производство в Китай' text='У нас большой опыт в бизнес поездках по Китаю. Мы с большой радостью и желанием организуем вам такую поездку в Китай под ключ. Сделаем визу, трансфер из аэропорта, забронируем отель, предоставим переводчика. Организуем поездку на производство. Шоп тур. Мебельный тур.'/>
            </div>
        )
    }
}