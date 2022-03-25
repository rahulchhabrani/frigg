import { useContext } from 'react'
import { AppContext } from './../Context'
import './../styles/Landing.css'
import Android from './../assets/googleplay.svg'
import IOS from './../assets/appstore.svg'
import Hero from './../assets/landing.svg'
import PhoneNo from '../components/PhoneNo'
import Otp from '../components/OTP'

const Landing: React.FC = () => {
  const { stageState } = useContext(AppContext)
  const [stage, setStage] = stageState

  return (
    <section className='home'>
      <div className='content-col'>
        <div className='content'>
          <h2>Welcome to Frigg!</h2>
          <h3>Join clubs, Read books and Chat with your Friends!</h3>
        </div>
        {
          stage === 'getStarted'
            ? (
              <button className='get-started' onClick={() => setStage('phoneNo')}>
                Get Started
              </button>
            )
            : stage === 'phoneNo'
              ? <PhoneNo />
              : <Otp />
        }

      </div>
      <div className='landing-hero'>
        <img src={Hero} alt='Frigg' />
      </div>
    </section>
  )
}

export default Landing
