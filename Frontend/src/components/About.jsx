/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            tempore at quos, sunt accusamus iure beatae commodi necessitatibus
            in aut ipsum voluptatem ad deleniti labore excepturi deserunt qui
            neque sit corporis consectetur ipsam vel! Odit, beatae perspiciatis.
            Autem, veniam esse quos, repellendus, recusandae unde quod
            voluptatem laboriosam nihil perspiciatis eum.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
