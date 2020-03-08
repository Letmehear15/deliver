import React from 'react'

export default class PromoDescription extends React.Component{
    render() {
        return(
            <div className='promo__descr'>
                <img src={this.props.src} alt={this.props.alt}/>
                {this.props.text}
            </div>
        )
    }
}