import PropTypes from 'prop-types';
import { Card, Button } from "react-bootstrap";

const Comment = (props) => {
    const {
        comment: { id, name, email, body },
        setShowCommentDeleteModal,
        setDeleteId
    } = props;

    const showDeleteModal = (commentId) => {
        setShowCommentDeleteModal(true);
        setDeleteId(commentId);
    }

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
                        onClick={() => showDeleteModal(id)}
                        size="sm"
                    >
                        <small>Delete This Comment</small>
                    </Button>
                </Card.Body>
            </Card>
            <hr />
        </>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }),
    setShowCommentDeleteModal: PropTypes.func.isRequired,
    setDeleteId: PropTypes.func.isRequired
};

export default Comment;

