import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import { SearchBox } from './containers/search-box/search-box.component';
import { SearchResult } from './containers/search-result/search-result.component';
import { ProductDetail } from './containers/product-detail/product-detail.component';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBox/>
        <div className={'App__container'}>
          <Switch>
            <Route path={'/items/:id'}>
              <ProductDetail/>
            </Route>
            <Route path={'/items'}>
              <SearchResult/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
