import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import withLayout from "../../components/layout/";
import DeleteConfirmationModal from "../../components/modals/delete-confirmation-modal";
import Loader from "../../components/loader";
import Comment from "./components/comment";
import * as postsApi from "../../apis/posts-api";

const SinglePost = () => {

    let { id } = useParams();
    const history = useHistory();

    const [postLoading, setPostLoading] = useState(false);
    const [commentsLoading, setCommentsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);

    /**
    * Has effect on init
    */
    useEffect(() => {
        getSinglePost(id);
        getSinglePostComments(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteConfirmation = async () => {

        try {
            setLoading(true);
            await postsApi.deletePost(id);
            setShow(false);
            setLoading(false);
            history.push("/");
        } catch (error) {
            setLoading(false);
            setShow(false);
        }
    };

    const getSinglePost = async (id) => {
        try {
            setPostLoading(true);
            const response = await postsApi.getPost(id);
            setPost({ ...response.data });
            setPostLoading(false);
        } catch (error) {
            setPostLoading(false);
        }
    }

    const getSinglePostComments = async (id) => {

        setCommentsLoading(true);
        try {
            const response = await postsApi.getPostComments(id);
            setComments([...response.data]);
            setCommentsLoading(false);
        } catch (error) {
            setCommentsLoading(false);
        }
    }

    return (
        <Container>
            {
                (postLoading || commentsLoading) && <Loader />
            }
            <Row>
                {
                    post &&
                    (<Col>
                        {post.title && (
                            <h4 className="fw-bold my-4 text-primary">{post.title}</h4>
                        )}
                        {post.body && (
                            <p className="my-4">{post.body}</p>
                        )}
                        <Button
                            variant="link"
                            className="text-error"
                            onClick={handleShow}
                        >
                            <small>Delete This Post</small>
                        </Button>
                        <hr className="mb-4 border-light" />
                    </Col>)
                }
            </Row>
            <Row>
                <Col cs={12}>
                    <h6 className="fw-bold my-4 text-primary">Comments <span>{`(${comments.length.toString()})`}</span></h6>
                    {
                        comments.length ?
                            comments.map((comment) => {
                                return (
                                    <Comment
                                        key={comment.id}
                                        comment={comment}
                                    />
                                )
                            })
                            : ("")
                    }
                </Col>
            </Row>
            <DeleteConfirmationModal
                show={show}
                handleClose={handleClose}
                title="Are you sure want to delete this post?"
                handleDeleteConfirmation={handleDeleteConfirmation}
                confirmationText={"Delete"}
            />
        </Container>
    );
}

const SinglePostContainer = withLayout(<SinglePost />);
export default SinglePostContainer;

