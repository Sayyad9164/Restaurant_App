/* eslint-disable react/no-unescaped-entities */
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-router-dom";

const NOTFound = () => {
  return (
    <>
        <section className="notFound">
            <div className="container">
                <img src="/notFound.svg" alt="notFound" />
                <h1>LOOKS LIKE YOU'RE LOST</h1>
                <p>Unable to load the page you're looking for</p>
                <Link to={"/"}>
                    Back to Home{" "}
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                </Link>
            </div>
        </section>
    </>
  )
}

export default NOTFound
