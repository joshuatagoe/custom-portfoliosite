import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Art.css';

export default class Art extends Component{

    render(){
        return(
            <div className="Art">
                {
                this.props.ArtOn &&
                <>
                <button onClick={this.props.artportfolioclick} className="cover">
                Art Portfolio <FontAwesomeIcon icon={faPlay} size="xs" />
                </button>
                <img className="mebig" src='/me.png'></img>
                </>
                }
            </div>

        )
    }
}