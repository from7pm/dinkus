import { useNavigate } from 'react-router-dom';
import './Diaries.css';
import { useEffect, useState } from 'react';
import homeImage from '../../../assets/images/home.svg';
import dinkusImage from '../../../assets/images/dinkus.svg';
import clipImage from '../../../assets/images/clip.svg';
import yearlyImage from '../../../assets/images/yearly.svg';
import monthlyImage from '../../../assets/images/monthly.svg';
import weeklyImage from '../../../assets/images/weekly.svg';
import dailyImage from '../../../assets/images/daily.svg';

function Diaries() {

    const navigate = useNavigate();

    const home = () =>
        navigate(`/home`);

    const yearly = () =>
        navigate(`/diaries/yearly`);
    const monthly = () =>
        navigate(`/diaries/monthly`);
    const weekly = () =>
        navigate('/diaries/weekly');
    const daily = () =>
        navigate('/diaries/daily');
    
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

            <div className="diaries-container">
                <div className="diaries-logo-container">
                    <img className="diaries-home"
                        src={homeImage}
                        onClick={home}
                        alt="home button"
                    />
                    <img className="diaries-logo"
                        src={dinkusImage}
                        onClick={home}
                        alt="dinkus" />
                    <div className="diaries-subtitle">
                        <p>DIARIES</p>
                    </div>
                </div>
                <div className="diaries-papers-container">
                    <div className="diaries-clip-container">
                        <img className="diaries-clip"
                            src={clipImage}
                            alt="clip"
                        />
                    </div>
                    <div className="diaries-content-container">
                        <div className="diaries-current-state">
                            <div className="diaries-now">{year}년 {month}월 {day}일 {weekdays} · {currentTime}</div>
                            <div className="diaries-current-page">Monthly · 11page</div>
                        </div>
                        <div className="diaries-bookmarks">
                            <img className="diaries-yearly-bookmark"
                            src={yearlyImage}
                            alt="yearly bookmark"
                            onClick={yearly}
                            />
                            <img className="diaries-monthly-bookmark"
                            src={monthlyImage}
                            alt="monthly bookmark"
                            onClick={monthly}
                            />
                            <img className="diaries-weekly-bookmark"
                            src={weeklyImage}
                            alt="weekly bookmark"
                            onClick={weekly}
                            />
                            <img className="diaries-daily-bookmark"
                            src={dailyImage}
                            alt="daily bookmark"
                            onClick={daily}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Diaries;