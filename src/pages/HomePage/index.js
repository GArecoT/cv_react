<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
</style>;

function HomePage() {
  return (
    <div className="App z-0 my-5">
      <div>
        <div className="flex flex-col relative w-full lg:flex-row">
          <div className="grid flex-grow m-0 lg:m-5 card bg-base place-items-center w-full lg:w-4/12 items-center">
            <div className="avatar mx-10">
              <div className="m-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="avatar.jpg" />
              </div>
            </div>
          </div>
          <div className="grid flex-grow m-5 card bg-base place-items-center w-full lg:w-8/12 mx-auto items-center">
            <h1 className="text-primary text-5xl sm:text-8xl font-sans mt-10 font-semibold">
              Olá, tudo bem?
            </h1>
            <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-20 my-10">
              <p className="text-justify font-sans text-lg">
                Sou Gabriel Areco Taveira, aluno de Ciência da Computação pela
                UFMS e desenvolvedor
                <i>front-end</i>, com experiência real na área. Esse site serve
                de curriculo, além de ser uma demonstração das minhas
                habilidades no desenvolvimento <i>front-end</i>.
              </p>
              <p className="text-justify font-sans text-lg mt-5">
                Esse site foi escrito em{" "}
                <i>
                  <b>React</b>
                </i>{" "}
                utilizando{" "}
                <i>
                  <b>tailwind</b>
                </i>{" "}
                e{" "}
                <i>
                  <b>DaisyUI</b>
                </i>. Ele contém várias páginas, um <i>switcher</i> de tema e um
                {" "}
                <i>
                  switcher
                </i>{" "}
                de língua. Todo contéudo foi desenvolvido únicamente por mim, e
                o código fonte pode ser acessado clicando nesse{" "}
                <a
                  className="link link-success"
                  target="_blank"
                  href="https://github.com/GArecoT/cv_react"
                >
                  texto coloridinho aqui.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
