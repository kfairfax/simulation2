import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Rent extends Component {
    constructor() {
        super();
        this.state = {
            mortgage: '',
            rent: ''
        }
    }

    handleMortgageChange(val) {
        this.setState({ mortgage: val })
    }

    handleRentChange(val) {
        this.setState({ rent: val })
    }

    createHouse() {
        axios.post('/api/house', {
            propertyname: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zipcode

        }).then(res => {

            this.props.history.push('/')
        })
    }


    render() {
        const { mortgage, rent } = this.state;
        return (

            <div>
                Recommended Rent
                <input value={mortgage} onChange={(e) => { this.handleMortgageChange(e.target.value) }} />
                <input value={rent} onChange={(e) => { this.handleRentChange(e.target.value) }} />

                <Link to='/wizard'>
                    <button>Complete</button>
                </Link>


                <button onClick={(e) => { this.createHouse() }}>Complete</button>
            </div>
        );
    }
}