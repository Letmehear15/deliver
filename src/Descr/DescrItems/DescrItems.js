import React from "react";
import insurance from './../../img/descr__insurance.jpg'
import logistics from './../../img/descr__logistics.jpg'
import look from './../../img/descr__look.jpg'
import DescrItem from "./DescrItem/DescrItem";

export default class DescrItems extends React.Component{
    render() {
        return(
            <div className='descr__items'>
                <DescrItem src={insurance} alt='insurance' text='Все грузы, логистику которых осуществляет Global Opt, застрахованы. Мы гарантируем полное возмещение стоимости груза в случаях, предусмотренных страхо- вым соглашением. Все ваши тревоги наша компания берет на себя.' spanText='Страховка груза'/>
                <DescrItem src={logistics} alt='logistics' text='Мы осуществляем доставку вашего груза до конкретного адреса. Привоз согласовывается менед- жерами по телефону, предварительно за сутки и за час до доставки. Также мы предоставляем услуги грузчи- ков по месту доставки груза.' spanText='Логистика последней мили'/>
                <DescrItem src={look} alt='look' text='Философия нашей компании, делать себя и своих партнеров по всему миру, успешными и богатыми. Поэтому мы всегда открыты к диалогу о партнерстве и инвестициях.' spanText='Мы всегда смотрим вперед'/>
            </div>
        )
    }

}