import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import BookDetail from '../views/BookDetail';
import NotFound from '../views/NotFound';
import Header from '../components/Header';

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
    </>
)

function GlobalRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                {/* <Route path="/books" element={<Layout><AllBooks /></Layout>} />*/}
                <Route path="/book/:bookId" element={<Layout><BookDetail /></Layout>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default GlobalRouter;