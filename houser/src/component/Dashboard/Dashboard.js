import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    }
    this.deleteHouse=this.deleteHouse.bind(this);
   
  }

  componentDidMount(){
    this.getHouses();
  }
  
  getHouses() {
    axios.get('/api/houses').then(res => {
      this.setState({ houseList: res.data })
    });
  }

  deleteHouse(id){
    axios.delete('/api/house/'+ id).then(res=>{
      this.getHouses();
    })
  }

  render() {
    const { houseList } = this.state;
  
    return (

      <div>
      
        Dashboard

          <Link to='/wizard'>
          <button>Add New Property</button>

        </Link>
        {
          houseList.map((house, i) => (
            <House key={i}
              house={house} 
              deleteHouseFn={this.deleteHouse}/>
          ))
        }

      </div>

    );
  }
}

