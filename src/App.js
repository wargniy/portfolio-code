import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Vianova from "./components/Vianova";
import Bam from "./components/Bam";
import Thelastone from "./components/Thelastone";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import JsonData from "./data/data.json";
import { Container } from "react-bootstrap";
import Cursor from "./components/Cursor";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    landingPageData && (
      <Container fluid>
        <Cursor />
        <Navigation />
        <Header data={landingPageData.Header}/>
        <Vianova data={landingPageData.Section}/>
        <Bam data={landingPageData.Section}/>
        <Thelastone data={landingPageData.Section}/>
        <Skills data={landingPageData.Skills}/>
        <Contact data={landingPageData.Contact}/>
        <Footer/>
      </Container>
    )
  );
};

export default App;
