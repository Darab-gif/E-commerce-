import { useSelector } from "react-redux";
import Layout from "./component/layout";
import Login from "./component/login";

function App() {
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Layout />}
    </>
  );
}

export default App;
