import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Questions.css";
import Close from "../Img/close.png";
import quiz from "./quiz";
import { useNavigate } from "react-router-dom";

const Questions = ({ res, setRes }) => {
  const navigate = useNavigate();
   console.log(res);
  const handleClick = (questions, ans) => {
    if (ans == questions.answers[questions.correctAnswer - 1]) {
      // alert("correct answer");
      let id = questions.id;
      let res1 = res;
      res1[id] = true;

      setRes(res1);
      console.log(res);
    } else {
      // alert("incorrect answer");
      let id = questions.id;
      let res2 = res;
      res2[id] = false;

      setRes(res2);
      console.log(res);
    }
    // console.log(questions[1])
    // console.log(ans)
  };
  const handleSubmit = () => {
    let ansCount = 0;
    for (let i = 0; i < quiz.length; i++) {
      if (res[i] == null) {
        ansCount = 1;
      }
    }
    if (ansCount) {
      alert("ans all questions");
    } else {
      navigate("/result");
    }
  };




  return (
    <div>
      <div class="p2">
        <div class="main">
          <div class="main-close">
            <Link to={"/"}>
              <img src={Close} alt="main-close" />
            </Link>
          </div>
          <div class="q">
            {quiz.map((questions) => (
              <>
                <img id="quest" src={questions.question.image} />
                <h1>{questions.question.question}</h1>
                <div class="opt">
                  <br />
                  <hr />
                  <h1>Options</h1>
                  <br />
                  {questions &&
                    questions.answers &&
                    questions.answers.map((ans) => (
                      <>
                        <img
                          src={ans}
                          alt=""
                          onClick={() => handleClick(questions, ans)}
                        />
                      </>
                    ))}
                </div>
                <br />
                <br />
                <br />
              </>
            ))}
          </div>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Questions;


// const [count, setCount] = useState(0)

// const click=() => {
//   let a = count + 1
//   setCount(a)
// }

// if (a<question.lenght){
//   setCount(a)
// }else{

// }

// question[count].
// answer[0]