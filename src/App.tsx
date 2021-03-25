import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import { SearchBox } from './components/search-box/search-box.component';
import { SearchResult } from './components/search-result/search-result.component';
import { ProductDetail } from './components/product-detail/product-detail.component';

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
