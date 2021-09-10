import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostContainer from "./containers/posts";
import SinglePostContainer from "./containers/single-post";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/posts"]}>
          <PostContainer />
        </Route>
        <Route path="/posts/:id">
          <SinglePostContainer />
        </Route>
        <Route path="/edit/posts/:id">
          <SinglePostContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

