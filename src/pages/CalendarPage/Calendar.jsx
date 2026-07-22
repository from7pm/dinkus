import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Calendar.css';
import homeImage from '../../assets/images/home.svg';
import dinkusImage from '../../assets/images/dinkus.svg';
import clipImage from '../../assets/images/clip.svg';

function Calendar() {

    const navigate = useNavigate();

    const home = () =>
        navigate(`/home`);

    const [active, setActive] = useState(null);

    const today = new Date();

    const [day, setDay] = useState(today.getDate());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [year, setYear] = useState(today.getFullYear());

    const getWeekday = () =>
        new Date().toLocaleDateString("ko-KR", {
            weekday: "long",
        });

    const [weekdays, setWeekdays] = useState(getWeekday());

    const getFormattedTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const [currentTime, setCurrentTime] = useState(getFormattedTime());

    useEffect(() => {
        const timer = setInterval(() => {

            setCurrentTime(getFormattedTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (

        <>

            <div className="calendar-container">
                <div className="calendar-logo-container">
                    <img className="calendar-home"
                        src={homeImage}
                        onClick={home}
                        alt="home button"
                    />
                    <img className="calendar-logo"
                        src={dinkusImage}
                        alt="dinkus" />
                    <div className="calendar-subtitle">
                        <p>calendar</p>
                    </div>
                </div>
                <div className="calendar-papers-container">
                    <div className="calendar-clip-container">
                        <img className="calendar-clip"
                            src={clipImage}
                            alt="clip"
                        />
                    </div>
                    <div className="calendar-content-container">
                        <div className="calendar-current-state">
                            <div className="calendar-now">{year}년 {month}월 {day}일 {weekdays} · {currentTime}</div>
                            <div className="calendar-current-page">11page</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Calendar;