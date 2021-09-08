import { Container } from "react-bootstrap";
import withLayout from "../../components/layout/";

function Posts() {
  return (
    <Container>
       <h4 className="fw-bold">All Posts</h4>
    </Container>
  );
}

const PostContainer = withLayout(<Posts />);
export default PostContainer;
