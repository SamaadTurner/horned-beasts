import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    const { selectedBeast, onClose } = this.props;

    if (!selectedBeast) {
      return null;
    }

    return (
      <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBeast.image_url} alt={selectedBeast.title} />
          <p>{selectedBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
