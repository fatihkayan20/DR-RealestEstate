import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import House from "../assets/images/indir (2).jpg";

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
        "Content-Type": "application/json",
      };

    const getTopSeller = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/realtors/topseller');
        setTopSeller(res.data.results);
      } catch (err) 
      {

      }
    };

    getTopSeller();
  }, []);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/realtors/');
        setRealtors(res.data.results);
      } catch (err) 
      {

      }
    };
    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.map(realtor => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display">
            <img src={realtor.photo} alt="" className="about__display__image" />
          </div>

          <h3 className="about__realtor">{realtor.name}</h3>
          <p className="about__contact">{realtor.phone}</p>
          <p className="about__contact">{realtor.email}</p>
          <p className="about__about">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>

          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>

          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      );
    }
    return results;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map (seller => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about__display">
            <img src={seller.photo} alt="" className="about__display__image" />
          </div>

          <h3 className="about__topseller">Top Seller:</h3>
          <p className="about__realtor">{seller.name}</p>
          <p className="about__contact">{seller.phone} </p>
          <p className="about__contact">{seller.email}</p>
          <p className="about__about">{seller.description}</p>
        </Fragment>
      );
    });
    return result;
  };

  return (
    <main className="about">
      <Helmet>
        <title>Realest Estate - About</title>
        <meta name="description" content="About Us" />
      </Helmet>

      <header className="about__header">
        <h1 className="about__heading">About Realest Estate</h1>
      </header>

      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We find the perfect home for you
            </h2>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              posuere ultricies justo a feugiat. Phasellus tincidunt ligula
              eleifend, dapibus odio eget, molestie quam. Integer vehicula felis
              sit amet augue mollis commodo. Cras sagittis turpis lectus, id
              tincidunt odio egestas sed. In ut sapien ut massa dictum
              fringilla. Maecenas lectus ligula, pharetra id finibus sed,
              efficitur eu felis. Curabitur egestas quam vel justo tempor,
              semper rutrum libero gravida. Vivamus lacinia ligula et turpis
              faucibus, ut lacinia elit tempor. Donec hendrerit diam eu nisl
              vehicula, eget tristique neque feugiat. Duis tempor turpis sit
              amet velit dictum, ut condimentum purus mollis. Cras malesuada
              pharetra risus ac feugiat. Aliquam tellus tortor, laoreet id
              ornare ut, sollicitudin in ex.
            </p>
            <div className="about__display">
              <img className="about__display__image" src={House} alt=""></img>
            </div>

            <p className="about__paragraph">
              Maecenas purus dui, blandit non semper at, sodales quis velit.
              Proin dictum odio sed sapien gravida, sed placerat libero
              scelerisque. Nam non mollis ipsum. Curabitur feugiat lacus eget
              massa congue lobortis. Praesent viverra urna a augue aliquet, sit
              amet vulputate ligula venenatis. Aliquam tristique nulla ac magna
              ullamcorper, vitae malesuada felis malesuada. Vivamus commodo
              hendrerit quam, eu posuere tellus maximus in. Vivamus tristique
              ornare ullamcorper. Praesent eu aliquet elit. Fusce eget justo sed
              erat aliquet consectetur vitae ut sapien. In commodo velit at
              vehicula lobortis.
            </p>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>

      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet our awesome team!</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};

export default About;
