import React from "react";
import AdvantagesItems from "./AdvantagesItems/AdvantagesItems";

export default class Advatages extends React.Component{
    render() {
        return(
            <section className="advantages">
                <div className="container">
                    <h2 className="advantages__title">Преимущества работы с GlobalOpt</h2>
               <AdvantagesItems/>
                </div>
            </section>
        )
    }
}