import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";
// import * as postsApi from "../../apis/posts-api";

const DeleteConfirmationModal = (props) => {

    const { show, handleClose, title, confirmationText, handleDeleteConfirmation } = props;

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title as="h6" className="title">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary-outline" size="sm" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" size="sm" onClick={handleDeleteConfirmation}>
                        {confirmationText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

DeleteConfirmationModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    confirmationText: PropTypes.string.isRequired,
    handleDeleteConfirmation: PropTypes.func.isRequired
};

export default DeleteConfirmationModal;



