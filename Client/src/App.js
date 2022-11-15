import React , {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./data.json";
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import {Provider} from 'react-redux';
import store from './store/store';


function App() {
  //basics
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems , setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);


  //Filter Functions
  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if(e.target.value == "ALL"){
      setProducts(data);
    } else {
      let productClone = [...products];
      let newProduct = productClone.filter(p => p.sizes.indexOf(e.target.value) != -1);
      setProducts(newProduct);
    }
  }

  const handleFilterBySort = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProduct = productClone.sort( function(a,b){
      if(order == "Lowest") {
        return a.price - b.price
      } else if (order == "Highest") {
        return b.price - a.price
      } else {
        return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProduct);
  }


  //Cart Functions
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach( p => {
      if(p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    })
    if(!isProductExist){
      cartItemsClone.push({...product, qty: 1})
    }
    setCartItems(cartItemsClone);
  }
  
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter(p => p.id !== product.id))
  }

  useEffect(() => {
    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
  } , [cartItems])
  
  
  //Main 
  return (
      <Provider store={store}>
        <div className="layout">
        <Header />

        <main>
          <div className="wrapper">

              <Products products={products} addToCart={addToCart}/>

              <Filter
              productsNumber = {products.length} 
              handleFilterBySize={handleFilterBySize} 
              handleFilterBySort={handleFilterBySort}
              size={size}
              sort={sort}/>

          </div>

          <Cart cartItems = {cartItems} removeFromCart={removeFromCart}/>

        </main>

        <Footer />
      </div>
      </Provider>
  );
}

export default App;
