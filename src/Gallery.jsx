import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeasts from './SelectedBeasts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



class Gallery extends React.Component {
  constructor() {
    super();
    // state: the status of the component
    // this. means literally the component you are in
    this.state = {
      showModal: false,
      selectedBeast: null,
      hornFilterCount: '',
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


  filterHornedBeasts = (beasts) => {
    if(this.state.hornFilterCount === ''){
      return beasts;
    }
    return beasts.filter((beast) => beast.horns.toString() === this.state.hornFilterCount);

  };

  changeFilter = (e) => {
    this.setState({
      hornFilterCount: e.target.value,
      
    })
    console.log(this.state);
  }

  render() {
    const { hornedBeasts } = this.props; // Make sure to pass this prop
    const filteredBeasts = this.filterHornedBeasts(hornedBeasts);
    console.log(filteredBeasts);


    return (
      <div className='gallery'>
        <Form> 
          <Form.Group as= {Row} className='mb-3'
          controlId='hornFiler'>
            <Form.Label>
              Filter By Horn Count
            </Form.Label>
            <Form.Control as="select" value={this.state.hornFilterCount} onChange = {this.changeFilter}>
            <option value=''>None</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value='100'>One Hundred</option>

              
              
            </Form.Control>
          </Form.Group>
        </Form>
        <Row xs={1} md={3} lg={4}>
        {filteredBeasts.map((item) => (
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


