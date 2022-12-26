import { BrowserRouter, Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";

function App() {
  /* const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Routes>
        <Route path="/cart/order" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
