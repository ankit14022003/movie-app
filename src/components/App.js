import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import mystore from '../redux/mystore';

export default function App() {
  return (
    <Provider store={mystore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}