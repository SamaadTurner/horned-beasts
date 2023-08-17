import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeasts from './SelectedBeasts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedBeast: null,
    };
  }

  openModal = (item) => {
    this.setState({
      showModal: true,
      selectedBeast: item,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedBeast: null,
    });
  };

  render() {
    const { hornedBeasts } = this.props; // Make sure to pass this prop

    return (
      <div className='gallery'>
        <Row xs={1} md={3} lg={4}>
        {hornedBeasts.map((item) => (
          <Col  key={item._id}>
          <HornedBeast
            item={item}
            openModal={this.openModal}
            title={item.title}
            image_url={item.image_url}
            keyword={item.keyword}
            description={item.description}
            onSelect={() => this.props.onBeastSelection(item)}
          />
          </Col>
        ))}
        </Row>
        {this.state.showModal && (
          <SelectedBeasts
            showModal={this.state.showModal}
            selectedBeast={this.state.selectedBeast}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default Gallery;


