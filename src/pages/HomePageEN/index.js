import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
</style>;

function HomePageEN() {
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
              Hello World!
            </h1>
            <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-20 my-10">
              <p className="text-justify font-sans text-lg">
                I'm Gabriel Areco Taveira. I'm a front-end developer with real
                world experience. This site is both a CV and a way to show my
                {" "}
                <em className="animate-pulse text-secondary">
                  front-end abilities.
                </em>
                {" "}
              </p>
              <p className="text-justify font-sans text-lg mt-5">
                This site was created in{" "}
                <em>
                  <b>React</b>
                </em>{" "}
                with{" "}
                <em>
                  <b>tailwind</b>
                </em>{" "}
                and{" "}
                <em>
                  <b>DaisyUI</b>
                </em>. It contains a theme and language switcher, and multiple
                pages. Everything that you see here was developed by me, and the
                source code can be checked here, in{" "}
                <a
                  className="link link-success"
                  target="_blank"
                  href="https://github.com/GArecoT/cv_react"
                >
                  this cute green text
                </a>.
              </p>
              <p className="my-5">
                You can also see my Github and my Linkedin by clicking the icons
                below:
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

export default HomePageEN;
