import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import withLayout from "../../components/layout/";
import Loader from "../../components/loader";
import Post from "./components/post";
import * as postsApi from "../../apis/posts-api";

const Posts = () => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  /**
  * Has effect on init
  */
  useEffect(() => {
    getAllPosts()
  }, []);

  const getAllPosts = () => {

    setLoading(true);

    postsApi.getPosts().then(res => {
      setPosts([...res.data]);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    })
  }

  return (
    <Container>
      <h4 className="fw-bold mt-3 mb-4">All Posts</h4>
      <Row>
        {
          loading && <Loader />
        }
        {
          posts.length ?
            posts.map((post) => {
              return (
                <Col xs={12} sm={6} lg={4} xxl={3} key={post.id}>
                  <Post postId={post.id} title={post.title} body={post.body}/>
                </Col>
              )
            })
            : ("")
        }
      </Row>
    </Container>
  );
}

const PostContainer = withLayout(<Posts />);
export default PostContainer;
