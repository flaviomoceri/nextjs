import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Carousel } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Radio } from 'antd';
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Divider } from "antd";
import { Card } from "antd";
import { Input, Space } from "antd";
import {
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  PhoneOutlined,
  MailOutlined,
  ChromeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  DownCircleOutlined
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;






 const home = () => {
  const [navbar, setNavbar] = useState(false);
  const [colornavbar, setColorNavbar] = useState(false);
  const [logo, setLogo] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setColorNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setColorNavbar(false);
      setLogo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  return (
    <Layout id="home">
      

      <Head>
        <title>Libri Scolastici</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Header
        id="home"
          className={navbar ? "ant-layout-header" : "header"}
          style={{ position: "fixed", zIndex: 3, width: "100%" }}
        >
          <div className="logo" />
          <Menu
          className="background-image"
            theme="dark"
            className="menu"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <a href="#home">
            <img src={logo ? "/logo.png" : "/logobianco.png"} />
            </a>
            <Menu.Item
              style={{
                marginRight: "750px",
                fontSize: "30px",
                fontFamily: "horizon",
              }}
            >
            </Menu.Item>
            <Menu.Item key="1">
              <a href="#home" className={colornavbar ? "" : "changecolornavbar"}>Home</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#ricerca" className={colornavbar ? "" : "changecolornavbar"}>Ricerca</a>
            </Menu.Item>
          </Menu>
        </Header>
        <main>
        <Row className="background-image">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 12, offset: 2 }}>
      <h1  className="main-title" >Scopri i libri <br></br> di quest'anno scolastico</h1>
      <p className="main-paragraph">Se stai cercando di conoscere i nuovi libri che dovrai acquistare queest'anno, non ti preoccupare, perchè questo sito fa al caso tuo, infatti cliccando qui sotto potrai conoscere immediatamente i libri che dovrai comprare. Buona Fortuna per quest'anno scolastico!</p>
      <a href="#ricerca">
      <DownCircleOutlined style={{ marginLeft: '300px', fontSize: '50px'}}/>
      </a>
      
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }} className="main-video">
      <a href="#ricerca">
</a>
    </Col>
  </Row>
                <Row id="ricerca">
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 13, offset: 2 }}>
                  <h1  className="main-title2" >Seleziona la tua regione</h1>
                  <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item><a href="#ricerca">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a>Regione</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a >Provincia</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <a>Comune</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                <a>Scuola</a>
                </Breadcrumb.Item>
              </Breadcrumb>
                  <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <a>Abruzzo</a>
                  <Divider />
                  <a>Basilicata</a>
                  <Divider />
                  <a >Calabria</a>
                  <Divider />
                  <a>Campania</a>
                  <Divider />
                  <a>Emilia Romagna</a>
                  <Divider />
                  <a>Friuli Venezia Giulia</a>
                  <Divider />
                  <a>Lazio</a>
                  <Divider />
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <a>Liguria</a>
                <Divider />
                <a>Lombardia</a>
                <Divider />
                <a>Marche</a>
                <Divider />
                <a>Molise</a>
                <Divider />
                <a>Piemonte</a>
                <Divider />
                <a>Puglia</a>
                <Divider />
                <a>Sardegna</a>
                <Divider />
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <a>Sicilia</a>
                <Divider />
                <a>Toscana</a>
                <Divider />
                <a>Trentino Alto Adige</a>
                <Divider />
                <a>Umbria</a>
                <Divider />
                <a>Valle D'Aosta</a>
                <Divider />
                <a>Veneto</a>
                <Divider />
                </Col>
              </Row>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 2 }} className="main-video">
                  <img src='/regioni.jpg' style={{height: '480px', width: '400px'}} />
                </Col>
              </Row>
              
              
        </main>
      </body>
      
      <Footer>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <img src="/images/pesca.png"></img>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h6 style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
              Contatti
            </h6>
            <icon>
              <PhoneOutlined />
              <a
                style={{ color: "black !important" }}
                target="_blank"
                href="tel:3883289985"
              >
                ⠀+39 388 328 9985
              </a>
              <br />
              <MailOutlined />
              <a target="_blank" href="mailto:moceri.flavio@gmail.com">
                ⠀moceri.flavio@gmail.com
              </a>
              <br />
              <ChromeOutlined />
              <a target="_blank" href="https://flaviomoceri.it/">
                ⠀flaviomoceri.it
              </a>
            </icon>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h6 style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
              Ricerca Libri
            </h6>
            <p>
              Il sito web 'Ricerca Libri', nasce per aiutare i ragazzi a trovare i libri di cui hanno bisogno, per iniziare al meglio il nuovo anno scolastico.
            </p>
            <Row justify="end">
              <Col span={3}>
                <icon>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/flaviomoceri_/"
                  >
                    <InstagramOutlined />
                  </a>
                </icon>
              </Col>
              <Col span={3}>
                <icon>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7?originalSubdomain=it"
                  >
                    <LinkedinOutlined />
                  </a>
                </icon>
              </Col>
              <Col span={3}>
                <icon>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/flavio.moceri.9"
                  >
                    <FacebookOutlined />
                  </a>
                </icon>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
        <p style={{ textAlign: "center" }}>
          Ricerca Libri ©2021 Created by Flavio Moceri
        </p>
      </Footer>
    </Layout>
  );
};

export default home;