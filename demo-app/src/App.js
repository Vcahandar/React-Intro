import prof from './assets/img/caho.jpg';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="row">
          <div className="col-4 card-letf">
            <div className="prof-img">
              <img className="img" src={prof} />
            </div>
            <div className="contact-text">
              <p>077-322-22-08</p>
              <p>Baki Xetai R-nu</p>
              <p>Jahandarmv@code.edu.az</p>
            </div>
            <div className="languge-text">
              <h2>Language</h2><hr></hr>
            </div>
            <div className="lng-texts">
              <div className="ing-text">
                <h4>English</h4>
                <div className="ing-reting-one"></div>
                <div className="reting"></div>
                <div className="reting"></div>
                <div className="no-reting"></div>
                <div className="no-reting"></div>
              </div>
              <div className="rus-text">
                <h4>Russia</h4>
                <div className="reting-one"></div>
                <div className="reting"></div>
                <div className="reting"></div>
                <div className="no-reting"></div>
                <div className="no-reting"></div>
              </div>
              <div className="tur-text">
                <h4>Turkey</h4>
                <div className="tur-reting-one"></div>
                <div className="reting"></div>
                <div className="reting"></div>
                <div className="reting"></div>
                <div className="reting"></div>
              </div>

            </div>
          </div>


          <div className="col-8 card-right">
            <div className="col-4 card-up">
              <div className="text-name">
                <h2>Velibeyli</h2>
                <h2>Cahandar</h2>
                <p>Full Stack Developer</p>

              </div>
            </div>
            <div className="col-8 card-bottom">
              <div className="about-text">
                <h2>
                  ABOUT ME
                </h2>
                <div className="line"></div>

                <p> I have deep knowledge of <b>C#,ASP.NET Core,Sql,algorithms</b>  and data
                  structures.Additionaly,I have good knowledge of front-end and back-end technologies,including <b>React,
                    Angular,HTML,CSS,JavaScript and JQuery</b>  I'd be more than happy to discuss with you your project and deliver
                  you high-quality solutions that meet your needs</p>

              </div>
              <div className="education-text">
                <h2>
                 EDUCATION
                </h2>
                <div className="line"></div>
                <div className="sch-name">
                <span>
                  2022-2023
                </span>
                <span>
                  CODE Acedemy
                </span>
                </div>

                

              </div>
            </div>


          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
