import React, { useState } from 'react';
import Application from '../components/application/Application';
import ApplicationInput from '@/components/application/ApplicationInput';

const Home: React.FC = () => {
  const [startedApplication, setStartedApplication] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [validateEmail, setValidateEmail] = useState<boolean>(false);

  // Toggles the application state to start or cancel the application.
  const toggleApplication: () => void = () => {
    setStartedApplication(!startedApplication);
  }

  // Checks if the email is valid.
  const checkEmail: () => void = () => {
    const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    setValidateEmail(isEmail);
  }

  // Handles the email input and checks if it's valid. if invalid, it will disable the start application button.
  const handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setEmail(e.target.value.toLowerCase());
    checkEmail();
  }

  return (
    <div>
      {startedApplication ? <Application email={email} cancel={toggleApplication}/> : 
        <div>
          <h1>Get Started with Your Insurance Quote!</h1>
          <h2>Enter your email to get started:</h2>
          <ApplicationInput label="" field="email" onInputChange={handleEmail} />
          <button className="form-button" disabled={!validateEmail} onClick={toggleApplication}>Start Application</button>
        </div>
      }
    </div>
  )
}

export default Home;
