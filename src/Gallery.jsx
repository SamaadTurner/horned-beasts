import React from 'react';
import HornedBeast from './HornedBeast';

class Gallery extends React.Component {
  render() {
    const { hornedBeasts, onBeastSelection } = this.props;

    return (
      <div>
        {hornedBeasts.map((item) => (
          <HornedBeast
            key={item._id}
            title={item.title}
            image_url={item.image_url}
            keyword={item.keyword}
            description={item.description}
            onSelect={() => onBeastSelection(item)}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;









