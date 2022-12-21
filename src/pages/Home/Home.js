import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card.js";
import Footer from "../../components/Footer/Footer";

import "../Home/home.css";

// import data from "../../data/kasa.json";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className="section">
        <Card />
      </section>
      <Footer />
    </>
  );
}

export default Home;
