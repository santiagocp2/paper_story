import { useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import GlobalRouter from '../routes/GlobalRouter';
import Footer from '../components/Footer';
import { useBooks } from '../hooks/useBooks';
import '../styles/App.css';

function App() {

  const LOCAL_STORAGE_DATA = "DATA_CART";

  const books = useBooks();

  const [cart, setCart] = useState([], () => {
    const storedCartLocal = localStorage.getItem(LOCAL_STORAGE_DATA);
    return storedCartLocal ? JSON.parse(storedCartLocal) : [];
  });

  const [isOpenCart, setIsOpenCart] = useState(false);

  const setOpen = (open) => {
    setIsOpenCart(open);
  };

  const updateCart = (id, action) => {

    let currentBook = cart.find((book) => book.id === id);
    if (!currentBook && action === "add") {
      let book = books.find((book) => book.id === id);
      setCart([...cart, book]);
      localStorage.setItem(LOCAL_STORAGE_DATA, cart);
    } else if (currentBook && action === "remove") {
      let newCart = cart.filter((book) => book.id !== id);
      setCart(newCart);
      localStorage.setItem(LOCAL_STORAGE_DATA, newCart);
    } else if (action === "removeAll") {
      setCart([]);
      localStorage.removeItem(LOCAL_STORAGE_DATA);
    }

  };

  return (
    <GlobalContext.Provider value={{ books, cart, updateCart, setOpen, isOpenCart }}>
      <GlobalRouter></GlobalRouter>
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;