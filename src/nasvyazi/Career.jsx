import axios from "axios";
import React from "react";
import Header from "./glabal/Header";
import Footer from "./glabal/Footer";
import Card from "./glabal/Card";
import Row from "./glabal/Row";
import Forms from "./glabal/Forms"

import { Link } from "react-router-dom";

import { CareerStyle } from "./CareerStyle";

const Career = () => {
  return (
    <>
      <CareerStyle>
        <Header />
        <div className="contaner">
          <div className="link">
            <Link to="/">Главная/О компании</Link>
          </div>

          <div className="main">
            <h5>Карьера</h5>
            <p>
              Автокоммутатор – про дозвоне в справочную службу оператора, клиент
              может выбрать <br /> необходимый ему отдел или специалиста для
              соединения, не прибегая к услугам оператора,
              <br /> тем самым избегая нагрузки Колл-центра.
            </p>
          </div>

          <Forms />
          <Card />

          <h4 className="brand">Вы поработаете с такими брендами</h4>
        </div>
        <Row />
        <Footer />
      </CareerStyle>
    </>
  );
};
export default Career;
