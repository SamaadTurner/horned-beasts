import React from 'react';
import blackHeart from './images/heart-icon.png';
import emptyHeart from './images/heart-line-icon.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      favoriteCounter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
      favoriteCounter: prevState.isFavorite ? prevState.favoriteCounter - 1 : prevState.favoriteCounter + 1,
    }));
  };

  render() {
    // deconstruction
    const { item, openModal } = this.props;

    return (
      <Card style={{width: '18rem', backgroundColor: '#710c04', color: 'white'}}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Img src={item.image_url} alt={item.keyword} title={item.title} />
          <Card.Text>{item.description}</Card.Text>
          <Button variant='light' onClick={() => openModal(item)}>
            More Info
          </Button>
          <Button variant='light' onClick={this.handleClick}>
            <img
              id='small'
              className='img-fluid'
              src={this.state.isFavorite ? blackHeart : emptyHeart}
              alt={this.state.isFavorite ? 'Black Heart' : 'Empty Heart'}
            />
            {this.state.favoriteCounter} Favorites
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;


// If isFavorite is true:
// blackHeart(icon) <favoriteCount> Favorites


//If isFavorite is false:
// emptyHeart(icon) <favoriteCount> Favorites
