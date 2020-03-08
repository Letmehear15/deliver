import React from "react";
import DescrItems from "./DescrItems/DescrItems";

export default class Descr extends React.Component{
    render() {
        return (
            <section className='descr'>
                <div className="container">
                    <h2 className="descr__title">Наша работа - больше чем просто доставка</h2>
                    <hr/>
                    <h3 className="descr__subtitle">Мы организуем перевозки из Китая - оперативно и надежно, с учетом
                        особенностей груза
                        и ваших требований по срокам и бюджету.</h3>
                    <DescrItems/>
                </div>
            </section>
        )
    }
}