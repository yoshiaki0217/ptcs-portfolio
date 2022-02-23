import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Index } from './pages/Index'
import { Post } from './pages/Post'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
