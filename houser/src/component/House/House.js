import React from 'react';

const House = (props) => {

const{house, deleteHouseFn}=props;
    return (
        <div>
            <span>{house.propertyname}</span>
            <span>{house.address}</span>
            <span>{house.city}</span>
            <span>{house.state}</span>
            <span>{house.zip}</span>

            <button onClick={()=>{deleteHouseFn(house.propertyid)}}>Delete</button>
        </div>
    )

};

export default House;