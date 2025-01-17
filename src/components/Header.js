import React from "react";
import { Link } from "gatsby";
import { storyblokEditable } from "gatsby-source-storyblok";

const Header = ({ blok }) => {
  console.log('blok Header', blok)
  console.log(' 2', blok.logo)


  return (
<div className="navbar bg-base-100">
  {/* <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div> */}
  <div className="flex-1">
    <img className="overflow-hidden h-24 "src={blok.logo[0]?.filename}/>
  <h2 className="text-3xl https://127.0.0.1:8000/">{blok.title}</h2>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
  );
};

export default Header;