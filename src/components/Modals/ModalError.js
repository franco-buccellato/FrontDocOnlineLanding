import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalError = ({showError, handleCloseError, info}) => {

    return(
        <Modal show={showError} onHide={handleCloseError}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{info}<br></br>Intentelo nuevamente!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseError}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalError;