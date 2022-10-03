import React from "react";
import SinglePage from "../components/SinglePage";
import {Link, Route, Routes} from "react-router-dom";


const About = props => {
  const pathname = '/about'
  console.log(pathname)
  return (
    <div className="about__content">
       <ul className="about__list">
      <li>
        <Link to={`${pathname}/about-app`}>About App</Link>
      </li>
      <li>
        <Link to={`${pathname}/about-author`}>About Author</Link>
      </li>
    </ul>
      <Routes>
        <Route path={`:slug`} element={<SinglePage />} />
      </Routes>

    </div>
  )
}

export default About