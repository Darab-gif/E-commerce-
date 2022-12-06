import Layout from "./component/layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  /* const isLoggedIn = useSelector((state) => state.log.isLoggedIn);*/
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/*{!isLoggedIn && <Login />}
      {isLoggedIn && <Layout />}*/}

      <Layout />
    </>
  );
}

export default App;
