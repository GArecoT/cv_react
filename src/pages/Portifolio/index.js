import textDataEN from "../../text_en.json";
import { useEffect, useState } from "react";
import textDataPT from "../../text_pt.json";
const Portifolio = () => {
  const [textData, setTextData] = useState(textDataPT);
  useEffect(() => {
    if (localStorage.getItem("language") == "en") {
      setTextData(textDataEN);
    } else {
      setTextData(textDataPT);
    }
  });
  return (
    <div className="p-5 lg:p-10 my-5">
      <h1 className="text-primary font-bold text-5xl lg:mx-5 ml-2 lg:ml-0">
        {textData.portifolio.title}
      </h1>
      <div className="flex flex-row mt-10">
        <div className="w-2 rounded-xl bg-gradient-to-b from-accent to-primary mr-3" />
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row place-items-start w-full">
            <div className="place-items-center w-full sm:w-[50%]">
              <p className="mb-5 font-thin">
                {textData.portifolio.thimalu.time}
              </p>
              <a href="https://www.thimalu.com.br" target="_blank">
                <img
                  src="logo-thimalu.png"
                  className="bg-white p-5 rounded-3xl w-full hover:scale-[102%] transition"
                />
              </a>
            </div>
            <div className="place-items-center w-full lg:w-[150%]">
              <p className="text-lg lg:px-10 py-5 lg:py-14 text-justify">
                {textData.portifolio.thimalu.text.p1}
              </p>
              <p className="text-lg lg:px-10 text-justify">
                {textData.portifolio.thimalu.text.p2}
              </p>
            </div>
          </div>
          <div className="divider mt-10" />
          <div className="flex flex-col lg:flex-row place-items-start w-full my-10">
            <div className="place-items-center w-full sm:w-[50%]">
              <p className="mb-5 font-thin">
                {textData.portifolio.startup.time}
              </p>
              <a
                href="https://www.instagram.com/startupsesifiems/"
                target="_blank"
              >
                <img
                  src="logo-startup.png"
                  className="rounded-3xl w-full hover:scale-[102%] transition"
                />
              </a>
            </div>
            <div className="place-items-center w-full lg:w-[150%]">
              <p className="text-lg lg:px-10 pt-5 pb-3 lg:pb-5 lg:pt-10 text-justify">
                {textData.portifolio.startup.text.p1}
              </p>
              <p className="text-lg lg:px-10 pb-3 lg:pb-5 text-justify">
                {textData.portifolio.startup.text.p2.text1}
                <em>
                  <b>vue</b>
                </em>
                {textData.portifolio.startup.text.p2.text2}
                <em>
                  <b>bootstrap</b>
                </em>
                {textData.portifolio.startup.text.p2.text3}
                <em>
                  <b>React Native</b>
                </em>
                {textData.portifolio.startup.text.p2.text4}
                <em>
                  <b>NextJS</b>
                </em>
                {textData.portifolio.startup.text.p2.text5}
                <b>Unity</b>.
              </p>
              <p className="text-lg lg:px-10 text-justify">
                {textData.portifolio.startup.text.p2.text6}
                <em>{textData.portifolio.startup.text.p2.hilight}</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
