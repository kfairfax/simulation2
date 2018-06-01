import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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

    createHouse() {
        axios.post( '/api/house', {
          propertyname: this.state.name, 
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zipcode
    
        }).then(res =>{
          
          
        })
      }

    handleNameChange(val){
        this.setState({name:val})
    }

    handleAddressChange(val){
        this.setState({address:val})
    }

    handleCityChange(val){
        this.setState({city:val})
    }

    handleStateChange(val){
        this.setState({state:val})
    }

    handleZipcodeChange(val){
        this.setState({zipcode:val})
    }

    render() {
        const{name, address, city, state, zipcode}=this.state;
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

                <button onClick={(e)=>{this.createHouse()}}>Complete</button>
            </div>


        );
    }
}
