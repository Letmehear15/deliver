import React from "react";

export default class AdvatagesItem extends React.Component{
    render() {
        return(
                <div className="advantages__item">
                    <img src={this.props.src} alt={this.props.alt}/>
                    <div className="advantages__descr">
                        <span>{this.props.spanText}</span>
                        {this.props.text}
                    </div>
                </div>
        )

    }

}