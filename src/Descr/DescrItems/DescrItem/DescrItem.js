import React from "react";

export default class DescrItem extends React.Component{
    render() {
        return(
            <div className='descr__item'>
                <img src={this.props.src} alt={this.props.alt}/>
                    <span>{this.props.spanText}</span>
                    {this.props.text}
            </div>
        )

    }

}