import { Suspense, useEffect, useState } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import Stats from "./components/Stats/Stats"
import Steps from "./components/Steps/Steps"
import PrisingTable from "./components/PrisingTable/PrisingTable"
import CtaSection from "./components/CtaSection/CtaSection"

const fetchProduct = async () => {
  const res = await fetch("/products.json")
  return res.json()
}
const App = () => {
  const productPromise = fetchProduct();
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);


  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const isInCart = (id) => cart.some((item) => item.id === id);



  useEffect(() => {
    fetchProduct()
      .then((data) => setProducts(data))
  }, []);




  return (
    <div>
      <Navbar cart={cart} setView={setView}/>
      <Banner />
      <Stats />
      <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
        <Products view={view} checkout={checkout} total={total} isInCart={isInCart} removeFromCart={removeFromCart} handleAddToCart={handleAddToCart} setView={setView} cart={cart} productPromise={productPromise}></Products>
      </Suspense>
      <Steps/>
      <PrisingTable/>
      <CtaSection/>
    </div>
  )
}

export default App
