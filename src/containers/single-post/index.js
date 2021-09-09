import { Container } from "react-bootstrap";
import withLayout from "../../components/layout/";

const SinglePost = () => {
  return (
    <Container>
        <h2>SinglePost</h2>
    </Container>
  );
}

const SinglePostContainer = withLayout(<SinglePost />);
export default SinglePostContainer;

