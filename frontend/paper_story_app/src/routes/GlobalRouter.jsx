import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import Home from '../views/Home';
import AllBooks from '../views/AllBooks';
import Checkout from '../views/Checkout';
import BookDetail from '../views/BookDetail';
import NotFound from '../views/NotFound';
import Header from '../components/Header';
import Cart from '../components/Cart';

const Layout = ({ children }) => (
    <>
        <Header />
        <Cart />
        {children}
    </>
)

function GlobalRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Layout><Home /></Layout>} />
                <Route path="/books" element={<Layout><AllBooks /></Layout>} />
                <Route path="/book/:bookId" element={<Layout><BookDetail /></Layout>} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default GlobalRouter;