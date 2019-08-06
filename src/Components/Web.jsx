import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Web.css';

export default class Web extends Component{

    render(){
        return(

            <div className={this.props.WebOn ? "Web" : "Web none"}>
                <>
                <div className={this.props.WebOn ? "cover" : "cover gone2"}>
                <FontAwesomeIcon icon={faPlay} flip="horizontal" size="xs" /> Web Portfolio
                </div>
                <img className="browser" src="/browsergraphic.png"></img>
                <img className="tablet" src="/tabletgraphic.png"></img>
                <img className="phone" src="/phonegraphic.png"></img>
                </>
            </div>
            
        )
    }
}