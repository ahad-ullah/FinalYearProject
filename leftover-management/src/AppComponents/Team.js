import React from 'react'
import '.././css/team.css'
import Haroon from "./../images/Team/Haroon.png"
import Umaima from "./../images/Team/Umaima.png"
import Ahad from "./../images/Team/Ahad.png"
import Umar from "./../images/Team/Ahad.png"
import Shahzad from "./../images/Team/Shahzad.jpg"

function Team() {
  return (
    <>
    <div className="container">
        <div className="team-row">
            <div className="team-column">
                <div className="team">
                    <div className="team-img">
                        <img src={Haroon} alt="Team Image"/>
                    </div>
                    <div className="team-content"><br></br>
                        <h2>Muhammad Haroon</h2>
                        <h3>Co-Founding Partner</h3><br></br>
                        <p>Final year student of BS-IT , working as a Full Stack developer</p><br></br>
                        <h4>mharoon9650@gmail.com</h4>
                    </div>
                    <div className="team-social">
                    <a href="https://www.linkedin.com/in/muhammad-haroon-88b59a1b2" className="social-li bi-linkedin" target="_blank"></a>
                      <a href="https://twitter.com/Muhamma42712867?t=-zq5KO-lhFSbAJWeIo8LWA&s=09" className="social-tw bi-twitter" target="_blank"></a>
                      <a href="https://www.instagram.com/mianharoon999/" className="social-in bi-instagram" target="_blank"></a>
                      <a href="https://www.facebook.com/profile.php?id=100013506669371" className="social-fb bi-facebook" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div className="team-column">
                <div className="team">
                    <div className="team-img">
                        <img src={Umaima} alt="Team Image"/>
                    </div>
                    <div className="team-content"><br></br>
                        <h2>Umaima Faisal</h2>
                        <h3>Co-Founding Partner</h3><br></br>
                        <p>Final year student of BS-IT , working as a Frontend developer</p><br></br>
                        <h4>umaimafaisal700@gmail.com</h4>
                    </div>
                    <div className="team-social">
                      <a href="#" className="social-li bi-linkedin" target="_blank"></a>
                      <a href="#" className="social-tw bi-twitter" target="_blank"></a>
                      <a href="#" className="social-in bi-instagram" target="_blank"></a>
                      <a href="#" className="social-fb bi-facebook" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div className="team-column">
                <div className="team">
                    <div className="team-img">
                        <img src={Ahad} alt="Team Image"/>
                    </div>
                    <div className="team-content"><br></br>
                        <h2>Ahadullah Mujahid</h2>
                        <h3>Co-Founding Partner</h3><br></br>
                        <p>Final year student of BS-IT , working as a Backend developer</p><br></br>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div className="team-social">
                    <a href="#" className="social-li bi-linkedin" target="_blank"></a>
                      <a href="#" className="social-tw bi-twitter" target="_blank"></a>
                      <a href="#" className="social-in bi-instagram" target="_blank"></a>
                      <a href="#" className="social-fb bi-facebook" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div className="team-column">
                <div className="team">
                    <div className="team-img">
                        <img src={Umar} alt="Team Image"/>
                    </div>
                    <div className="team-content"><br></br>
                        <h2>Umar Sajjad</h2>
                        <h3>Co-Founding Partner</h3>
                        <br></br>
                        <p>Final year student of BS-IT , working as a Frontend developer</p>
                        <br></br>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div className="team-social">
                      <a href="#" className="social-li bi-linkedin" target="_blank"></a>
                      <a href="#" className="social-tw bi-twitter" target="_blank"></a>
                      <a href="#" className="social-in bi-instagram" target="_blank"></a>
                      <a href="#" className="social-fb bi-facebook" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div className="team-column">
                <div className="team">
                    <div className="team-img">
                        <img src={Shahzad} alt="Team Image"/>
                    </div>
                    <div className="team-content"><br></br>
                        <h2>Muhammad Shahzad</h2>
                        <h3>Co-Founding Partner</h3>
                        <br></br>
                        <p>Final year student of BS-IT , working as a Frontend developer</p>
                        <br></br>
                        <h4>abc@gmail.com</h4>
                    </div>
                    <div className="team-social">
                      <a href="#" className="social-li bi-linkedin" target="_blank"></a>
                      <a href="#" className="social-tw bi-twitter" target="_blank"></a>
                      <a href="#" className="social-in bi-instagram" target="_blank"></a>
                      <a href="#" className="social-fb bi-facebook" target="_blank"></a>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Team
