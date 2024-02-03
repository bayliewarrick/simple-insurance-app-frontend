import React, { useState } from 'react';
import Application from '../components/application/Application';
import StartApplicationButton from '../components/application/StartApplicationButton';


const Home: React.FC = () => {

  const [startedApplication, setStartedApplication] = useState<boolean>(false);

  const handleStartApplication: () => void = () => {
    setStartedApplication(true);
  }

  return (
    <div>
      {startedApplication ? <Application /> : <StartApplicationButton onClick={handleStartApplication} />}
    </div>
  )
}

export default Home;
