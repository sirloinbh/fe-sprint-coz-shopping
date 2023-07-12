import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.css';
import Footer from './Footer.css';

const HomePage = () => {
  return <h1>메인 페이지 내용</h1>;
};

const ProductListPage = () => {
  return <h1>상품 리스트 페이지 내용</h1>;
};

const BookmarkPage = () => {
  return <h1>북마크 페이지 내용</h1>;
};

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products/list" component={ProductListPage} />
        <Route path="/bookmark" component={BookmarkPage} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;