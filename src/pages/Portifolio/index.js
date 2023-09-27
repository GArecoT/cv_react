const Portifolio = () => {
  return (
    <div className="p-10">
      <h1 className="text-primary font-bold text-5xl lg:mx-5">
        Por onde eu passei:
      </h1>
      <div className="flex flex-row mt-10">
        <div className="w-2 rounded-xl bg-gradient-to-b from-accent to-primary mr-3" />
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row place-items-start w-full">
            <div className="place-items-center w-full sm:w-[50%]">
              <p className="mb-5 font-thin">2019 ~ 2020</p>
              <a href="https://www.thimalu.com.br" target="_blank">
                <img
                  src="logo-thimalu.png"
                  className="bg-white p-5 rounded-3xl w-full hover:scale-[102%] transition"
                />
              </a>
            </div>
            <div className="place-items-center w-full lg:w-[150%]">
              <p className="text-lg lg:px-10 py-5 lg:py-14 text-justify">
                Trabalhei por 1 ano na Thimalu, com <em>Google Ads</em>.
              </p>
              <p className="text-lg lg:px-10 text-justify">
                Foi uma ótima experiência, aprendi a trabalhar em equipe, como
                me organizar, organizar meu dinheiro. Geri o{" "}
                <em>site</em>. Fiquei encarregado dos estoques, cálculo de frete
                e atendimento aos clientes <em>online</em>.
              </p>
            </div>
          </div>
          <div className="divider mt-10" />
          <div className="flex flex-col lg:flex-row place-items-start w-full my-10">
            <div className="place-items-center w-full sm:w-[50%]">
              <p className="mb-5 font-thin">2022 ~ 2024</p>
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
                Fui contratado em 2022 como estágiário na Startup Sesi. Comecei
                desenvolvendo soluções IOT, e protótipos utlizando{" "}
                <em>Arduino</em>. Trabalhei na <em>Startup</em>{" "}
                por 2 anos, saindo após o fim do meu segundo ano como
                estágiário.
              </p>
              <p className="text-lg lg:px-10 pb-3 lg:pb-5 text-justify">
                Logo comecei a programar em{" "}
                <em>front end</em>. Trabalhei em projetos em <em>vue</em>, com
                {" "}
                <em>bootstrap</em>. Depois comecei mexer com{" "}
                <em>React Native</em> e{" "}
                <em>NextJS</em>. Tive experiência com projetos reais, e
                lançados, fazendo partes de times. Trabalhei, também, com
                construção de UI na Unity.
              </p>
              <p className="text-lg lg:px-10 text-justify">
                Durante meu tempo na{" "}
                <em>Startup</em>, trabalhei usando metodologia <em>scrum</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
