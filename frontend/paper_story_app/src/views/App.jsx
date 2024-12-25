import { useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import GlobalRouter from '../routes/GlobalRouter';
import Footer from '../components/Footer';
import { useBooks } from '../hooks/useBooks';
import '../styles/App.css';

function App() {

  const books = useBooks();

  return (
    <GlobalContext.Provider value={{books}}>
        <GlobalRouter></GlobalRouter>
        <Footer />
    </GlobalContext.Provider>
  );
}

export default App;