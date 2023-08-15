import React from 'react';
import HornedBeast from './HornedBeast';


class Gallery extends React.Component {
    render() {
        let data = [
          {
            num: 1,
            image_url:
              '(enter image url here (i havent found one yet)',
            title: 'enter title of pic',
            description: 'enter stuff here',
            keyword: 'enter keyword here',
            horns: 1,
          },
    
          {
            num: 2,
            image_url:
            '(enter image url here (i havent found one yet)',
          title: 'enter title of pic',
          description: 'enter stuff here',
          keyword: 'enter keyword here',
          horns: 2,
          },
    
          {
            num: 3,
            image_url:
              '(enter image url here (i havent found one yet)',
            title: 'enter title of pic',
            description: 'enter stuff here',
            keyword: 'enter keyword here',
            horns: 1,
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