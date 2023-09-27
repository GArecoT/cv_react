import "./competencias.css";
const Competencias = () => {
  return (
    <div className="p-10 my-5">
      <h1 className="text-primary font-bold text-5xl lg:mx-5">Competências</h1>
      <div className="my-10">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid w-full lg:w-[50%] p-5 place-items-start">
            <div>
              <h1 className="text-secondary-focus font-bold text-2xl">
                Computação<span className="text-accent-focus">/Software</span>
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span> Uso avançado de
                  {" "}
                  <em>Linux</em>, e <em>softwares</em> associados ao SO{" "}
                  <span className="text-accent">(vim, bash, gimp, etc)</span>;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>{" "}
                  Conhecimento da linguagens:{" "}
                  <span className="text-accent">
                    C, C++, C#, Python, Java e Rust
                  </span>;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span> Conhecimento de
                  {" "}
                  <span className="text-accent">Arduino</span>{" "}
                  em projetos de IOT;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span> Conhecimento de:
                  {" "}
                  <span className="text-accent">
                    HTML, CSS, Javascript e Typescript,
                  </span>{" "}
                  utilizado na prática em projetos;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span> Conhecimento de:
                  {" "}
                  <span className="text-accent">
                    Vue, React Native, NextJS, Bootstrap e DaisyUI
                  </span>, utilizado na prática em projetos;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>{" "}
                  Expriência na manipulação e configuração de modelos 3D para
                  impressão no{"  "}
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
                Computação<span className="text-accent-focus">/Hardware</span>
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>{" "}
                  Experiência com solda de estanho;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>{" "}
                  Experiência na montagem de computadores <em>desktop</em>;
                </li>{" "}
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>{" "}
                  Experiência na manutenção de dispositívos <em>desktop</em> e
                  {" "}
                  <em>mobile</em>;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-accent-focus">✦</span>{" "}
                  Experiência na impressão de modelos 3D em impressoras de
                  resina e de filamento.
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
                Línguas
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>{" "}
                  Inglês fluente;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>{" "}
                  Japonês Iniciante.
                </li>
              </ul>
            </div>
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className="grid w-full lg:w-[50%] p-5 place-items-start">
            <div>
              <h1 className="text-secondary-focus font-bold text-2xl">
                Outros
              </h1>
              <ul>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>{" "}
                  Familiaridade e experiência com método{" "}
                  <span className="text-secondary-focus">Scrum</span>;
                </li>
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>{" "}
                  Familiaridade e experiência com{" "}
                  <span className="text-secondary-focus">
                    Microsoft Azure DevOps
                  </span>;
                  {" "}
                </li>{" "}
                <li className="my-5 ml-2 text-lg">
                  <span className="text-secondary-focus">✦</span>{" "}
                  Familiaridade com repositórios{" "}
                  <span className="text-secondary-focus">
                    Git
                  </span>{" "}
                  com vários integrantes.
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
