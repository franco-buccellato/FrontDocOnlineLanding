import Modal from "react-bootstrap/Modal";

const ModalExitoso = ({ info, mostrar, ocultar}) => {

    return (
        <Modal
            size="sm"
            show={mostrar}
            onHide={ocultar}
            aria-labelledby="example-modal-sizes-title-sm"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                Operación Exitosa!
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {info}
            </Modal.Body>
        </Modal>
    );
};

export default ModalExitoso;
