import Layout from "./component/layout";

function App() {
  /* const isLoggedIn = useSelector((state) => state.log.isLoggedIn);*/

  return (
    <>
      {/*{!isLoggedIn && <Login />}
      {isLoggedIn && <Layout />}*/}

      <Layout />
    </>
  );
}

export default App;
