import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';

const Post = (props) => {

    const { postId, title, body } = props;

    return (

        <Card className="mb-4 bg-light border-0">
            <Card.Body>
                <Card.Title as="h4" className="title fw-bold">{title}</Card.Title>
                <Card.Text className="post-body">
                    {body}
                </Card.Text>
                <Link to={`/posts/${postId}`} className="stretched-link"></Link>
            </Card.Body>
        </Card>
    );
}

Post.propTypes = {
    postId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;
