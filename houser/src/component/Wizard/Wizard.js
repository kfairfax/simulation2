import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Wizard extends Component {
    constructor(){
        super();
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    render() {
        return (

            <div>
                Wizard
      
                <Link to ='/'>
                    <button>Cancel</button>
                </Link>

                <input value={name} onChange={(e)=>{this.handleNameChange(e.target.value)}}/>
                <input value={address} onChange={(e)=>{this.handleAddressChange(e.target.value)}}/>
                <input value={city} onChange={(e)=>{this.handleCityChange(e.target.value)}}/>
                <input value={state} onChange={(e)=>{this.handleStateChange(e.target.value)}}/>
                <input value={zipcode} onChange={(e)=>{this.handleZipcodeChange(e.target.value)}}/>

            </div>


        );
    }
}
