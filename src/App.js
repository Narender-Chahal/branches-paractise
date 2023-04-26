import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Head from "./components/Head";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Head />
      <NavBar />
      <MyNav />
      <MyFooter/>
    </>
  );
}
