import React, { Component } from 'react';
import {getGiphy} from '../redux/giphy';

class SearchButton extends Component {

    buttonClick = () => {
        getGiphy('random');
    }

    render() {
        return (
            <button onClick={this.buttonClick}/>
        );
    }
}

export default SearchButton;