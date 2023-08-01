import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Resume() {
  const [language, setLanguage] = useState("en");
  return (
    <div className="resume">
      {/* <Helmet>
        {language === "en" ? <title>Resume | Kamil Biczyk</title> : <></>}
        {language === "fr" ? (
          <title>curriculum vitae | Kamil Biczyk</title>
        ) : (
          <></>
        )}
        {language === "nl" ? (
          <title>Curriculum vitae | Kamil Biczyk</title>
        ) : (
          <></>
        )}
      </Helmet> */}
      <Header />
      <h1>aa</h1>
      <Footer />
    </div>
  );
}

export default Resume;
