
import { useNavigate } from 'react-router-dom';
import './LogoPage.css';

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
          src="./dinkus.svg"
          onClick={home}
          alt="dinkus" />
      </div>
    </>
  )
}

export default LogoPage;