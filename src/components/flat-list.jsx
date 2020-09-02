import React from 'react';
import Flat from './flat';



const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      { flats.map((flat) => {
        return <Flat name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
          key={flat.lat + flat.lng}
        />;
      })
      }
    </div>
    );
}


export default FlatList;
