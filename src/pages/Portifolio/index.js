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
              <img
                src="logo-thimalu.png"
                className="bg-white p-5 rounded-3xl w-full"
              />
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
              <p className="mb-5 font-thin">2019 ~ 2020</p>
              <img
                src="logo-startup.png"
                className="rounded-3xl w-full"
              />
            </div>
            <div className="place-items-center w-full lg:w-[150%]">
              <p className="text-lg lg:px-10 py-5 lg:py-14 text-justify">
                Trabalhei por 1 ano na Thimalu, com{" "}
                <em>Google Ads</em>. Foi uma ótima experiência, aprendi a
                trabalhar em equipe, como me organizar, organizar meu dinheiro.
                Geri o{" "}
                <em>site</em>. Fiquei encarregado dos estoques, cálculo de frete
                e atendimento aos clientes <em>online</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
      {
        /*
      <div className="flex flex-row w-full mt-10">
        <div className="h-[100vh] w-2 rounded-xl bg-gradient-to-b from-accent to-primary mr-3">
        </div>
        <div className="flex flex-col w-2/2 h-fit lg:flex-row mt-10">
          <div className="grid m-2 place-items-start">
            <div>
              <p className="mb-5 font-thin">2019 ~ 2020</p>
              <img
                src="logo-thimalu.png"
                className="bg-white p-5 rounded-3xl w-full"
              />
            </div>
          </div>
          <div className="grid m-2 place-items-start text-justify w-3/4">
            <p className="text-lg lg:px-10 py-5 lg:py-14 text-justify">
              Trabalhei por 1 ano na Thimalu, com{" "}
              <em>Google Ads</em>. Foi uma ótima experiência, aprendi a
              trabalhar em equipe, como me organizar, organizar meu dinheiro,
              etc. Geri o{" "}
              <em>site</em>, e fiquei encarregado dos estoques também.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-2/2 h-fit lg:flex-row mt-10">
            <div className="grid m-2 place-items-start">
              <div>
                <p className="mb-5 font-thin">2019 ~ 2020</p>
                <img
                  src="logo-thimalu.png"
                  className="bg-white p-5 rounded-3xl w-full"
                />
              </div>
            </div>
            <div className="grid m-2 place-items-start text-justify w-3/4">
              <p className="text-lg lg:px-10 py-5 lg:py-14 text-justify">
                Trabalhei por 1 ano na Thimalu, com{" "}
                <em>Google Ads</em>. Foi uma ótima experiência, aprendi a
                trabalhar em equipe, como me organizar, organizar meu dinheiro,
                etc. Geri o{" "}
                <em>site</em>, e fiquei encarregado dos estoques também.
              </p>
            </div>
          </div>
        </div>
      </div>*/
      }
    </div>
  );
};

export default Portifolio;
