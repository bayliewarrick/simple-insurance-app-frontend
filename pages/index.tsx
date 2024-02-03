import React, { useState } from 'react';
import Application from '../components/application/Application';
import ApplicationInput from '@/components/application/ApplicationInput';
import StartApplicationButton from '@/components/application/StartApplicationButton';

const Home: React.FC = () => {

  const [startedApplication, setStartedApplication] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const toggleApplication: () => void = () => {
    setStartedApplication(!startedApplication);
  }

  return (
    <div>
      {startedApplication ? <Application email={email} cancel={toggleApplication}/> : 
        <div>
          <h1>Get Started with Your Insurance Quote!</h1>
          <h2>Enter your email to get started:</h2>
          <ApplicationInput label="" field="email" onInputChange={(e) => setEmail(e.target.value)} />
          <StartApplicationButton onClick={toggleApplication} />
        </div>
      }
    </div>
  )
}

export default Home;
