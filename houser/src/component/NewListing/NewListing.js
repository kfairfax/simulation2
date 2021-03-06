import React, { Component } from 'react';


export default class NewListing extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleNameChange(val) {
        this.setState({ name: val })
    }

    handleAddressChange(val) {
        this.setState({ address: val })
    }

    handleCityChange(val) {
        this.setState({ city: val })
    }

    handleStateChange(val) {
        this.setState({ state: val })
    }

    handleZipcodeChange(val) {
        this.setState({ zipcode: val })
    }

    render() {
        const { name, address, city, state, zipcode } = this.state;
        return (

            <div>
                New Listing
                <input value={name} onChange={(e) => { this.handleNameChange(e.target.value) }} />
                <input value={address} onChange={(e) => { this.handleAddressChange(e.target.value) }} />
                <input value={city} onChange={(e) => { this.handleCityChange(e.target.value) }} />
                <input value={state} onChange={(e) => { this.handleStateChange(e.target.value) }} />
                <input value={zipcode} onChange={(e) => { this.handleZipcodeChange(e.target.value) }} />
            </div>
        );
    }
}