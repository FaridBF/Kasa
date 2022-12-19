import Header from "../../components/Header/Header";

import banner from "../../assets/images/banner.png";

import "../Home/home.css";

function Home(props) {
  return (
    <>
      <Header />
      <div className="banner-container">
        <img className="banner-img" src={banner} alt="bannière" />
        <h1 className="title-banner">Chez vous, partout et ailleurs</h1>
      </div>
    </>
  );
}

export default Home;
