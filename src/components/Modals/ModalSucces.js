import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalSucces = ({showSucces, handleCloseSucces, info}) => {

    return(
        <Modal show={showSucces} onHide={handleCloseSucces}>
            <Modal.Header closeButton>
                <Modal.Title>{info}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseSucces}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalSucces;