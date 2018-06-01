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
    // this.getHouses=this.getHouses.bind(this);
  }

  componentDidMount(){
    this.getHouses();
  }
  
  getHouses() {
    axios.get('/api/houses').then(res => {
      this.setState({ houseList: res.data })
    });
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
              house={house} />
          ))
        }

      </div>

    );
  }
}

