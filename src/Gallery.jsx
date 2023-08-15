import React from 'react';
import HornedBeast from './HornedBeast';
import hornedBeastPics from '../src/assets/data.json';

class Gallery extends React.Component {
  render() {
    return (
      <div>
        {hornedBeastPics.map((item) => (
          <HornedBeast
            key={item._id}
            title={item.title}
            image_url={item.image_url}
            keyword={item.keyword}
            description={item.description}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;









// task 1: Create state inside of the HornedBeast component that keeps track 
//of the number of times each beast has been favorited.

//task 2: Put a heart in each HornedBeast component 
//with the number of “Favorites” next to it.
