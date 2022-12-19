import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card.js";

import "../Home/home.css";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className="section">
        <Card />
      </section>
    </>
  );
}

export default Home;
