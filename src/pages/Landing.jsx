// src/pages/Landing.jsx
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Promotions from "../components/promotions/Promotions";
import Preguntas from "../components/preguntas";
import "../global.css";
import Footer from "../components/footer/Footer";
const Landing = () => {
  return (
    <>
      <Header />
        <Main />
        <About />
        <Promotions />
        <Services />
        <Preguntas/>
        <Footer />
    </>
  );
};

export default Landing;