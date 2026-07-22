
import { useNavigate } from 'react-router-dom';
import './logoPage.css';
import dinkusImage from './assets/images/dinkus.svg';

function LogoPage() {

  const navigate = useNavigate();

  const home = () =>
    navigate(
      `/home`
    )

  return (

    <>
      <div
        className="logopage-container"
        onClick={home}>
        <img className="logopage-first-logo"
          src={dinkusImage}
          alt="dinkus" />
        <p className="logopage-enter">CLICK TO ENTER</p>
      </div>
    </>
  )
}

export default LogoPage;