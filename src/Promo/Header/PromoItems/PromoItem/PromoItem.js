import React from 'react'

export default class PromoItem extends React.Component{
    render(){
        return(
            <li className="promo__item">
                <a href={this.props.link||"."}>{this.props.text}</a>
            </li>
        )
    }
}