import { StoplightProject, DevPortalProvider } from '@stoplight/elements-dev-portal';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import '@stoplight/elements-dev-portal/styles.min.css';
import Navbar from './components/Navbar.js';

function App() {

  return (
    <DevPortalProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/new' >
            <Redirect to='/new/doc-guides' />
          </Route>
          <Route path='/new/doc-guides' >
            <StoplightProject
              projectId="cHJqOjE1NzY5MQ"
              basePath="/new/doc-guides"
              router="history"
              collapseTableOfContents="true"
              hideMocking="true"
            />
          </Route>
          <Route path='/new/api-reference' >
            <StoplightProject
              projectId="cHJqOjE1NzY5Mw"
              basePath="/new/api-reference"
              router="history"
              collapseTableOfContents="true"
              hideMocking="true"
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </DevPortalProvider>
  );
}

export default App;
