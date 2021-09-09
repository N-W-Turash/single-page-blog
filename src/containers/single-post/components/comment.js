import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";

const Comment = (props) => {

    const { comment: { postId, name, email, body } } = props;

    return (
        <>
        <Card className="mb-4 bg-white border-0">
            <Card.Body className="px-0">
                <Card.Title as="h6" className="title fw-bold">{name}</Card.Title>
                <Card.Text className="post-body">
                    <small>
                        <a className="d-block mb-4 text-decoration-none" href={`mailto:${email}`}>{email}</a> 
                        {body}
                    </small>
                </Card.Text>
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

