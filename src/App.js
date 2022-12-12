import { StoplightProject } from '@stoplight/elements-dev-portal';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import '@stoplight/elements-dev-portal/styles.min.css';
import Navbar from './components/Navbar.js';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' >
          <Redirect to='/doc-guides' />
        </Route>
        <Route path='/doc-guides' >
          <StoplightProject
            projectId="cHJqOjE1NzY5MQ"
            basePath="/doc-guides"
            router="history"
            collapseTableOfContents="true"
            hideMocking="true"
          />
        </Route>
        <Route path='/api-reference' >
          <StoplightProject
            projectId="cHJqOjE1NzY5Mw"
            basePath="/api-reference"
            router="history"
            collapseTableOfContents="true"
            hideMocking="true"
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
