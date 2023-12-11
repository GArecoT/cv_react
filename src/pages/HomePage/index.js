import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
                <div className="bg-gradient-to-r from-primary to-secondary w-full h-full">
                  <img src="avatar.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid flex-grow m-5 card bg-base place-items-center w-full lg:w-8/12 mx-auto items-center">
            <h1 className="text-primary text-5xl sm:text-8xl font-sans mt-10 font-semibold">
              Olá, tudo bem?
            </h1>
            <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-20 my-10">
              <p className="text-justify font-sans text-lg">
                Sou Gabriel Areco Taveira, desenvolvedor{" "}
                <em>front-end</em>, com experiência real na área. Esse site
                serve de curriculo, além de ser uma demonstração das minhas
                habilidades no desenvolvimento <em>front-end</em>.
              </p>
              <p className="text-justify font-sans text-lg mt-5">
                Esse site foi escrito em{" "}
                <em>
                  <b>React</b>
                </em>{" "}
                utilizando{" "}
                <em>
                  <b>tailwind</b>
                </em>{" "}
                e{" "}
                <em>
                  <b>DaisyUI</b>
                </em>. Ele contém várias páginas, um <em>switcher</em>{" "}
                de tema e um{" "}
                <em>
                  switcher
                </em>{" "}
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
              <p className="my-5">
                Você pode dar uma olhada no meu <em>Github</em> e no meu{" "}
                <em>LinkedIn</em> pelos ícones abaixo:
              </p>

              <div className="grid relative w-full place-items-end">
                <div className="flex relative w-fit lg:w-full flex-row">
                  <a target="_blank" href="https://github.com/garecot">
                    <AiFillGithub className="text-7xl mx-2" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/gabriel-areco-taveira-a0124927a/"
                  >
                    <AiFillLinkedin className="text-7xl mx-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
