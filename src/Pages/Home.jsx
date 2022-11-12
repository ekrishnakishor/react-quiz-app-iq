import React from 'react';
import "../Styles/Style.css";
import Close from "../Img/close.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
       <menu>
        <div class="nav-div-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3899/3899588.png"
              alt="menu-icon"
            />
            <h4>testometrica</h4>
          </div>
          <div class="nav-div-right">
            <input type="text" placeholder="Search among 332 tests" />
            <Link to={"/"}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="nav-user"
            /></Link>
            </div>
    </menu>
    </div>
    <div className='main'>
    <div class="main-close">
            <Link to={"/"}>
            <img src={Close}
              alt="main-close"
            />
            </Link>
          </div>
      <div class="main-content">
        <img
          src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
          alt=""
        />
        <Link to={"/questions"}>
        <button>Start</button>
        </Link>
        <h1>IQ Test for kids from 7 to 16 year old</h1>
        <p>
          Most IQ tests are not suitable for children, as they are originally
          developed for the adult population. However, if you want to know the
          IQ of a child between the ages of 7 and 16, there are several tests
          that can help you. There is an IQ test for children, developed by us,
          which, unlike similar ones, can also determine the IQ level of
          children at the age of 6 years.The child will be shown a series of
          three pictures arranged with some regularity. Children will need to
          choose pictures that are suitable for an empty cell. The first four
          questions should be answered together with the child so that he/she
          understands the essence of the task - these questions are not taken
          into account in the calculation of the child’s IQ. Let's get started!
        </p>
      </div>
      <div class="author">
        <h4>Author of the test:  Testometrika Team</h4>
      </div>
      </div> 
    </>
  )
}

export default Home;