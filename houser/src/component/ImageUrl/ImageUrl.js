import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImageUrl extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
        }
    }

    handleImageUrlChange(val) {
        this.setState({ imageUrl: val })
    }

    render() {
        const { imageUrl } = this.state;
        return (

            <div>
                Image Url
                <input value={imageUrl} onChange={(e) => { this.handleImageUrlChange(e.target.value) }} />
            </div>


        );
    }
}

