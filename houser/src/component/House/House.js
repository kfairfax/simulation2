import React from 'react';

const House = (props) => {

const{house}=props;
    return (
        <div>
            House
            <span>{house.propertyname}</span>
            <span>{house.address}</span>
            <span>{house.city}</span>
            <span>{house.state}</span>
            <span>{house.zip}</span>

            <delete>Delete</delete>
        </div>
    )

};

export default House;