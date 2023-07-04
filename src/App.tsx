import { useEffect, useState } from "react";
import "./App.css";
import ContactIcon from "./components/ContactIcon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Presentation from "./components/Presentation";
import PresentationCrypto from "./components/PresentationCrypto";
import ContactForm from "./components/ContactForm";
import {
  AiOutlineTool,
  AiOutlineAreaChart,
  AiOutlineVideoCamera,
} from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import Slider from "./components/Slider";
function App() {
  const [value, setValue] = useState(
    localStorage.getItem("value") || "depannage"
  );

  useEffect(() => {
    if (localStorage.getItem("value") !== value) {
      localStorage.removeItem("value");
      localStorage.setItem("value", value);
    }
    console.log(value);
    console.log(localStorage.getItem("value"));
  }, [value]);
  const layerToDisplay = () => {
    switch (value) {
      case "videosurveillance":
        return (
          <section className=" flex flex-wrap  justify-center text-center my-16 ">
            <Fade
              triggerOnce
              // direction="left"
              duration={3500}
              className="border border-[#82be95] dark:border-[#82be95] w-full lg:w-2/4 p-8  m-4"
            >
              <article>
                <div className="self-center m-auto">
                  <AiOutlineVideoCamera
                    className=" text-5xl m-auto"
                    color="#82be95"
                  />
                </div>
                <h3 className="font-bold text-black dark:text-white text-2xl my-4">
                  Vidéosurveillance
                </h3>
                <p className="font-normal text-black  dark:text-white my-4">
                  Soyez le gardien de votre tranquillité ! Découvrez notre
                  service spécialisé dans la fourniture et la pose clé en main
                  de caméras de surveillance, votre allié ultime pour une
                  sécurité sans compromis. Protégez votre domicile, votre
                  entreprise ou vos proches avec notre sélection de caméras de
                  surveillance de pointe, conçues pour dissuader les intrusions
                  et garder un œil vigilant en votre absence. Profitez de la
                  tranquillité d'esprit avec des fonctionnalités avancées telles
                  que la vision nocturne, la détection de mouvement intelligente
                  et l'accès à distance en temps réel. Ne laissez plus rien au
                  hasard, explorez notre site dès maintenant et transformez
                  votre espace en forteresse inviolable. Votre sécurité est
                  notre priorité numéro un.
                </p>
              </article>
            </Fade>
          </section>
        );
      case "depannage":
        return (
          <>
            <Presentation />
            <Partner />
          </>
        );
      case "minage":
        return <PresentationCrypto />;
    }
  };

  return (
    <>
      <Header
        title="Votre tranquillité numérique, notre priorité."
        navValue={value}
        navigate={setValue}
        subTitle=" Nous vous aidons dans un monde qui devient de plus en plus digital"
      />
      <main className=" m-auto  xl:w-3/5 md:w-10/12 overflow-hidden ">
        {layerToDisplay()}
        <Slider value={value} />
        <div className="flex flex-row justify-center">
          <ContactForm
            serviceId="service_kr5ah3s"
            templateId="template_afoltfa"
            userId="DbQxxUkX7X8ce2HA7"
          />
        </div>
        <ContactIcon />
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow flex justify-around items-center py-3 px-4 md:hidden z-50 ">
          <a
            onClick={() => {
              window.scrollTo(0, 0);
              setValue("depannage");
            }}
            className={
              value === "depannage"
                ? "flex flex-col items-center text-black font-bold"
                : "flex flex-col items-center text-black"
            }
          >
            <AiOutlineTool className=" text-xl" />
            <span className="text-sm mt-1 text-black">Dépannage</span>
          </a>
          <a
            onClick={() => {
              window.scrollTo(0, 0);
              setValue("videosurveillance");
            }}
            className={
              value === "videosurveillance"
                ? "flex flex-col items-center text-black font-bold"
                : "flex flex-col items-center text-black"
            }
          >
            <AiOutlineVideoCamera className=" text-xl" />
            <span className="text-sm mt-1">Vidéosurveillance </span>
          </a>
          <a
            onClick={() => {
              window.scrollTo(0, 0);
              setValue("minage");
            }}
            className={
              value === "minage"
                ? "flex flex-col items-center text-black font-bold"
                : "flex flex-col items-center text-black"
            }
          >
            <AiOutlineAreaChart className=" text-xl" />
            <span className="text-sm mt-1">Minage</span>
          </a>
        </nav>
      </main>
      <Footer />
    </>
  );
}

export default App;
