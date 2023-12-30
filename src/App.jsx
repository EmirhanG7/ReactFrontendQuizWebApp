import Header from "./assets/components/Header"
import QuestionPage from "./assets/components/QuestionPage"
import './index.css'
import data from '/data.json'
import { useState } from "react"

export default function App() {
  const [currentQuiz, setCurrentQuiz] = useState(localStorage.getItem('currentQuiz') ? JSON.parse(localStorage.getItem('currentQuiz')) : []);
  const [currentQuestion, setCurrentQuestion] = useState(localStorage.getItem('currentQuestion') ? JSON.parse(localStorage.getItem('currentQuestion')) : 0);


  function handleQuestionPage(quiz) {
    localStorage.setItem('currentQuiz', JSON.stringify(quiz));
    setCurrentQuiz(quiz);
    
  }
  

console.log(currentQuiz)


  
  
  return (
    <>
    
      {
        currentQuiz.length === 0 
        ?
          <div className="container">
            <div className="welcomePage">
              <Header />
              <div className="hero">
                <div className="welcomeLetter">
                  <h1 className="wlc">Welcome to the</h1>
                  <h1 className="feqz"><b>Frontend Quiz!</b></h1>
                  <p>Pick a subject to get started.</p>
                </div>
                <div className="topicSelection">
                  {
                    data.quizzes.map((quiz, index) => 
                      <label><button onClick={e => handleQuestionPage(quiz)} key={index}><img src={quiz.icon}/><p>{quiz.title}</p></button></label>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        :
        <QuestionPage currentQuiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
      }
    </>



  )
}