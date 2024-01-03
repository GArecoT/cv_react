import "./competencias.css";
import { useEffect, useState } from "react";
import textDataEN from "../../text_en.json";
import textDataPT from "../../text_pt.json";

const Competencias = () => {
  const [textData, setTextData] = useState(textDataPT);
  useEffect(() => {
    if (localStorage.getItem("language") == "en") {
      setTextData(textDataEN);
    } else {
      setTextData(textDataPT);
    }
  });
  return (
    <div className="p-0 lg:p-10 my-5">
      <h1 className="text-primary font-bold text-5xl lg:mx-5 ml-2 lg:ml-0">
        {textData.competencies.title}
      </h1>
      <div className="my-10">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid w-full lg:w-[50%] p-5 place-items-start">
            <div>
              <h1 className="text-secondary-focus font-bold text-2xl">
                {textData.competencies.comp}
                <span className="text-accent-focus">/Software</span>
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part1.p1.text1}
                  <em>Linux</em>
                  {textData.competencies.part1.p1.text2}
                  <em>softwares</em>
                  {textData.competencies.part1.p1.text3}
                  <span className="text-accent">(vim, bash, gimp, etc)</span>;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>{" "}
                  {textData.competencies.part1.p2.text1}
                  <span className="text-accent">
                    C, C++, C#, Python, Java {textData.competencies.and} Rust
                  </span>;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part1.p3.text1}
                  <span className="text-accent">Arduino</span>
                  {textData.competencies.part1.p3.text2}
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part1.p4.text1}
                  <span className="text-accent">
                    HTML, CSS, Javascript {textData.competencies.and} Typescript
                  </span>
                  {textData.competencies.part1.p4.text2}
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part1.p4.text1}
                  <span className="text-accent">
                    Vue, React Native, NextJS, Bootstrap, Tailwind{" "}
                    {textData.competencies.and} DaisyUI
                  </span>
                  {textData.competencies.part1.p4.text2}
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part1.p5.text1}
                  <span className="text-accent">
                    CURA
                  </span>;
                </li>
              </ul>
            </div>
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className="grid w-full lg:w-[50%] p-5 place-items-start">
            <div>
              <h1 className="text-secondary-focus font-bold text-2xl">
                {textData.competencies.comp}
                <span className="text-accent-focus">/Hardware</span>
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part2.p1}
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part2.p2}
                  <em>desktop</em>
                  {textData.competencies.part2.p3}
                </li>{" "}
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part2.p4}
                  <em>desktop{" "}</em>
                  {textData.competencies.and}
                  <em>{" "}mobile</em>
                  {textData.competencies.part2.p5}
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>
                  {textData.competencies.part2.p6}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal mt-0 lg:mt-10" />
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid w-full lg:w-[50%] p-5 place-items-start">
            <div>
              <h1 className="text-secondary-focus font-bold text-2xl">
                {textData.competencies.part3.title}
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>
                  {textData.competencies.part3.p1}
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>
                  {textData.competencies.part3.p2}
                </li>
              </ul>
            </div>
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className="grid w-full lg:w-[50%] p-5 place-items-start">
            <div>
              <h1 className="text-secondary-focus font-bold text-2xl">
                {textData.competencies.part4.title}
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>
                  {textData.competencies.part4.p1}
                  {textData.competencies.part4.p2}
                  <span className="text-secondary-focus">Scrum</span>
                  {textData.competencies.part4.p3}
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>
                  {textData.competencies.part4.p1}
                  <span className="text-secondary-focus">
                    Microsoft Azure DevOps
                  </span>;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>
                  {textData.competencies.part4.p4}
                  <span className="text-secondary-focus">
                    Git
                  </span>
                  {textData.competencies.part4.p5}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Competencias;
