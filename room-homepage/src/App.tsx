import { ArrowRight, CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";

import aboutDarkImage from "../src/assets/image-about-dark.jpg";
import aboutLightImage from "../src/assets/image-about-light.jpg";

import { Button } from "./components/Button";
import { Navigation } from "./components/Navigation";

import contents from "../data.json";

export function App() {
  const [current, setCurrent] = useState(0);

  function next() {
    if (current === contents.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
      document.querySelector(".bg-attr")?.classList.toggle("active");
    }
  }

  function prev() {
    if (current) {
      setCurrent(current - 1);
      document.querySelector(".bg-attr")?.classList.toggle("active");
    } else {
      setCurrent(contents.length - 1);
      document.querySelector(".bg-attr")?.classList.toggle("active");
    }
  }

  return (
    <main>
      <header className="grid md:grid-cols-header grid-cols-1 md:grid-rows-header grid-rows-header-mobile">
        <div
          className={`img-${current} bg-attr bg-center bg-no-repeat bg-cover transition-all relative`}
        >
          <Navigation />

          <div className="absolute bottom-0 right-0 flex md:hidden">
            <Button className="w-14 h-14" handleClick={prev}>
              <CaretLeft color="#fff" size={24} />
            </Button>
            <Button className="w-14 h-14" handleClick={next}>
              <CaretRight color="#fff" size={24} />
            </Button>
          </div>
        </div>

        <div className="content md:py-24 md:px-12 px-4 py-6 flex flex-col gap-6 relative">
          <h1 className="md:text-5xl text-3xl font-bold text-black">
            {contents[current].title}
          </h1>
          <p className="text-justify text-base text-[#ADADAD]">
            {contents[current].description}
          </p>
          <a
            className="uppercase text-1xl text-black hover:text-[#ADADAD] tracking-[10px] hover:tracking-widest transition-all flex items-center"
            href="#"
          >
            shop now <ArrowRight size={30} />
          </a>

          <div className="absolute bottom-0 left-0 md:flex hidden">
            <Button handleClick={prev}>
              <CaretLeft color="#fff" size={32} />
            </Button>
            <Button handleClick={next}>
              <CaretRight color="#fff" size={32} />
            </Button>
          </div>
        </div>
      </header>

      <footer className="grid lg:grid-cols-footer md:grid-cols-footer-md items-center">
        <img
          className="w-full h-full object-cover"
          src={aboutDarkImage}
          alt="dark ambient with chairs"
        />
        <div className="md:p-10 p-6">
          <h2 className="text-[#212121] md:text-xl font-bold uppercase tracking-[5px]">
            About our furniture
          </h2>
          <p className="text-[#BBBBBB] text-justify mt-4">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interest and what inspires you. Find
            the furniture pieces you need, from tradicional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src={aboutLightImage}
          alt="light ambient with chair"
        />
      </footer>
    </main>
  );
}
