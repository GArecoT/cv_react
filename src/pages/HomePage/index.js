import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import textDataEN from '../../text_en.json'
import textDataPT from '../../text_pt.json'
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
</style>;

function HomePage() {
  const [textData, setTextData] = useState(textDataPT)
  useEffect(()=>{
  if (localStorage.getItem("language") == "en") {
    setTextData(textDataEN)
  }else{
    setTextData(textDataPT)
    }
  })
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
               {textData.home.title} 
              </h1>
              <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-20 my-10">
                <p className="text-justify font-sans text-lg">
                  {textData.home.body.p1.text}{" "}
                  <em className="animate-pulse text-secondary">
                    {textData.home.body.p1.hilight}
                  </em>
                  {" "}
                </p>
                <p className="text-justify font-sans text-lg mt-5">
                  {textData.home.body.p2.text1}
                  {" "}
                  <em>
                    <b>React</b>
                  </em>{" "}
                  
                  {textData.home.body.p2.text2}
                  {" "}
                  <em>
                    <b>tailwind</b>
                  </em>{" "}
                  {textData.home.body.p2.text3}
                  {" "}
                  <em>
                    <b>DaisyUI</b>
                  </em>
                  {textData.home.body.p2.text4}
                  {" "}
                  <a
                    className="link link-success"
                    target="_blank"
                    href="https://github.com/GArecoT/cv_react"
                  >
                    {textData.home.body.p2.hilight}
                  </a>.
                </p>
                <p className="my-5">
                 {textData.home.body.p3.text} 
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
