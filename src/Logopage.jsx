
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
      <div className="logopage-container">
        <img className="first-logo"
          src={dinkusImage}
          onClick={home}
          alt="dinkus" />
      </div>
    </>
  )
}

export default LogoPage;