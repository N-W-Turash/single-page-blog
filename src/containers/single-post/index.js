import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from "../../forms/edit-post";
import withLayout from "../../components/layout/";
import DeleteConfirmationModal from "../../components/modals/delete-confirmation-modal";
import Loader from "../../components/loader";
import PostContent from "./components/post-content";
import Comment from "./components/comment";
import * as postsApi from "../../apis/posts-api";
import "../../stylesheets/containers/single-post/index.scss";


const SinglePost = () => {

    let { id } = useParams();
    const history = useHistory();

    const [postLoading, setPostLoading] = useState(false);
    const [commentsLoading, setCommentsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [editing, setEditing] = useState(false);

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

    const enableEditMode = () => {
        setEditing(true);
    }

    const handleSubmit = (values) => {
        setPost({...values});
        setEditing(false);
    }

    return (
        <Container>
            {
                (postLoading || commentsLoading) && <Loader />
            }
            <Row>
                {
                    !editing ?
                        (<Col>
                            {post && post.title && post.body && (
                                <PostContent
                                    title={post.title}
                                    body={post.body}
                                    enableEditMode={enableEditMode}
                                />
                            )}
                            <Button
                                variant="link"
                                className="text-decoration-none ms-n2 text-secondary"
                                size="sm"
                                onClick={enableEditMode}
                            >
                                <small>Update This Post</small>
                            </Button>

                            <Button
                                variant="link"
                                className="text-error text-decoration-none"
                                onClick={handleShow}
                                disable={loading}
                                size="sm"
                            >
                                <small>Delete This Post</small>
                            </Button>
                        </Col>) :
                        (
                            <>
                                <Formik
                                    initialValues={post}
                                    validationSchema={validationSchema}
                                    onSubmit={values => {
                                        handleSubmit(values);
                                    }}
                                >
                                    {() => (
                                        <Form className="mt-4">
                                            <div className="mb-4">
                                                <Field
                                                    id="title"
                                                    className="form-control form-control-post"
                                                    name="title"
                                                    placeholder="Post title"
                                                />
                                                <ErrorMessage
                                                    name="title"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <Field
                                                    component="textarea"
                                                    row="8"
                                                    style={{ height: 200 }}
                                                    id="body"
                                                    className="form-control form-control-post"
                                                    name="body"
                                                    placeholder="Post body"
                                                />
                                                <ErrorMessage
                                                    name="body"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <Button
                                                    type="submit"
                                                    variant="secondary"
                                                    className="btn-capsule px-4 text-white"
                                                    size="sm"
                                                >
                                                    Submit
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </>
                        )
                }
            </Row>

            <hr className="mb-4" />
            
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


