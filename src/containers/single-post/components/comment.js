import { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Modal, Button } from "react-bootstrap";
// import * as postsApi from "../../apis/posts-api";


const Comment = (props) => {

    const { comment: { postId, name, email, body } } = props;

    const [show, setShow] = useState(false);
    // const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteConfirm = () => {
        //setLoading(true);

    };

    return (
        <>
            <Card className="mb-4 bg-white border-0">
                <Card.Body className="px-0">
                    <Card.Title as="h6" className="title fw-bold">{name}</Card.Title>
                    <Card.Text className="post-body">
                        <small>
                            <a className="d-block mb-4 text-decoration-none text-secondary" href={`mailto:${email}`}>{email}</a>
                            {body}
                        </small>
                    </Card.Text>
                    <Button
                        variant="link"
                        className="text-error text-decoration-none ms-n2"
                        onClick={handleShow}
                        // disable={loading}
                        size="sm"
                    >
                        <small>Delete This Comment</small>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Are you sure to delete this comment?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary-outline" size="sm" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" size="sm" onClick={handleDeleteConfirm}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
            <hr />
        </>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        postId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }),
};

export default Comment;

