import { useNavigate } from 'react-router-dom';
import './Home.css';
import settingImage from '../../assets/images/setting.svg';
import homeImage from '../../assets/images/home.svg';
import dinkusImage from '../../assets/images/dinkus.svg';
import calendarImage from '../../assets/images/calendar.svg';
import accountImage from '../../assets/images/star.svg';
import favoritesImage from '../../assets/images/heart.svg';

function Home() {

    const navigate = useNavigate();

    const scriptTime = () =>
        navigate(`/script`)

    const diaries = () =>
        navigate(`/diaries`)

    const calendar = () =>
        navigate(`/calendar`)

    const setting = () =>
        navigate(`/setting`)

    const years = new Date();
    const year = String(years.getFullYear());

    const nlcalendar = ["CALENDAR"];

    return (
        <>

            <div className="home-container">
                <div className="home-setting">
                    <img className="home-setting-button"
                        src={settingImage}
                        onClick={setting}
                        alt="settings" />
                </div>
                <div className="home-logo-container">
                    <img className="home-button"
                        src={homeImage}
                        alt="home button"
                    />
                    <img className="home-logo"
                        src={dinkusImage}
                        alt="dinkus"
                    />
                    <div className="home-subtitle">
                        <p>HOME</p>
                    </div>
                </div>
                <div className="home-bookshelf-container">
                    <div className="home-content-container">
                        <div className="home-first-corner">
                            <div className="home-script-time"
                                onClick={scriptTime}
                            >
                                <div className="home-script-s">
                                    <span>S</span>
                                </div>
                                <div className="home-script-c">
                                    <span>C</span>
                                </div>
                                <div className="home-script-ri">
                                    <span>R</span>&nbsp;&nbsp;<span>I</span>
                                </div>
                                <div className="home-script-pt">
                                    <span>P</span>&nbsp;<span>T</span>
                                </div>
                                <div className="home-time-t">
                                    <span>T</span>
                                </div>
                                <div className="home-time-i">
                                    <span>I</span>
                                </div>
                                <div className="home-time-m">
                                    <span>M</span>
                                </div>
                                <div className="home-time-e">
                                    <span>E</span>
                                </div>
                            </div>
                        </div>
                        <div className="home-second-corner">
                            <div className="home-diaries"
                                onClick={diaries}>
                                <div className="home-dia">
                                    <div className="home-diaries-dia-up">
                                        &nbsp;
                                    </div>
                                    <div className="home-diaries-dia">
                                        <span>D</span>&nbsp;&nbsp;<span>
                                            I</span>&nbsp;&nbsp;<span>A</span>
                                    </div>
                                    <div className="home-diaries-dia-down">
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="home-diaries-ries-r">
                                    <span>R</span>
                                </div>
                                <div className="home-diaries-ries-i">
                                    <span>I</span>
                                </div>
                                <div className="home-diaries-ries-e">
                                    <span>E</span>
                                </div>
                                <div className="home-diaries-ries-s">
                                    <span>S</span>
                                </div>
                            </div>
                        </div>
                        <div className="home-third-section">
                            <div className="home-calendar-corner">
                                <span className="home-calendar-year" onClick={calendar}>
                                    <ul>
                                        <li>{year}</li>
                                        <li>{nlcalendar}</li>
                                    </ul>
                                </span>
                                <img className="home-calendar"
                                    src={calendarImage}
                                    onClick={calendar}
                                    alt="calendar year"
                                />
                            </div>
                        </div>
                        <div className="home-fourth-corner">
                            <div className="home-my-account-and-favorites">
                                <img className="home-my-account-img"
                                    src={accountImage}
                                    alt="my account" />
                                <img className="home-favorites-img"
                                    src={favoritesImage}
                                    alt="favorites" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;

//아직 완성된 필사집이 없어요.
//필사 10편을 모으면 첫 번째 책이 꽂혀요.