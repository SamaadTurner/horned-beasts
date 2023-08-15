import React from 'react';
import HornedBeast from './HornedBeast';
import Image1 from './images/HornedBeast_1.jpeg';
import Image2 from './images/HornedBeast_2.jpeg';
import Image3 from './images/HornedBeast_3.jpeg';


class Gallery extends React.Component {
    render() {
        let data = [
          {
            num: 1,
            image_url:
              Image1,
            title: 'RPG HornedBeast',
            description: 'Got this picture from google',
            keyword: 'hornedBeast_1',
            horns: 1,
          },
    
          {
            num: 2,
            image_url:
            Image2,
          title: 'Horsed Beast',
          description: 'white beast',
          keyword: 'hornedBeast_2',
          horns: 2,
          },
    
          {
            num: 3,
            image_url:
              Image3,
            title: 'Fantasy Horned Beast',
            description: 'cool mythical beast',
            keyword: 'hornedBeast_3',
            horns: 6,
          },
        ];
        return (
          <div>
            {data.map((item, num) => 
              <HornedBeast key={num} title={item.title} image_url={item.image_url} keyword={item.keyword} description={item.description} />
            )}
          </div>
        );
      }
    }
    
export default Gallery;