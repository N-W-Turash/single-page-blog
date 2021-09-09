import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import withLayout from "../../components/layout/";
import Loader from "../../components/loader";
import Comment from "./components/comment";
import * as postsApi from "../../apis/posts-api";

const SinglePost = () => {

    let { id } = useParams();

    const [postLoading, setPostLoading] = useState(false);
    const [commentsLoading, setCommentsLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    /**
    * Has effect on init
    */
    useEffect(() => {
        getSinglePost(id);
        getSinglePostComments(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getSinglePost = async (id) => {

        setPostLoading(true);
        try {
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
            console.log("comments", response);
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
                        {/* Will be used later */}
                        {/* <Link ></Link> */}
                        {/* <Button variant="link">Link</Button>
                        <Button variant="link">Link</Button> */}
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
                                        postId={comment.postId} 
                                        name={comment.name} 
                                        title={comment.title} 
                                        body={comment.body}
                                    />
                                )
                            })
                            : ("")
                    }
                </Col>
            </Row>
        </Container>
    );
}

const SinglePostContainer = withLayout(<SinglePost />);
export default SinglePostContainer;
