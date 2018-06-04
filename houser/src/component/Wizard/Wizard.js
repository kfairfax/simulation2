import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import{Route} from 'react-router-dom';
import NewListing from './NewListing/NewListing';
import ImageUrl from './ImageUrl/ImageUrl';
import Rent from './Rent/Rent';

export default class Wizard extends Component {
    render() {

        return (
            <div>
                Wizard
                <NewListing/>
                <Route component={NewListing} path='/wizard/step1'/>

                <ImageUrl/>
                <Route component={ImageUrl} path='/wizard/step2'/>

                <Rent/>
                <Route component={Rent} path='/wizard/step3'/>

                <Link to='/'>
                    <button>Cancel</button>
                </Link>

            </div>
        );
    }
}
