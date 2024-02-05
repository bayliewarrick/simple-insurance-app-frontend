import React, { useState, useEffect } from "react";
import Application from "../components/application/Application";
import ApplicationInput from "@/components/application/ApplicationInput";

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [validateEmail, setValidateEmail] = useState<boolean>(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(true);

  // Checks if the email is valid.
  const checkEmail: () => void = () => {
    const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      email
    );
    setValidateEmail(isEmail);
  };

  // Handles the email input and checks if it's valid. if invalid, it will disable the start application button.
  const handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setEmail(e.target.value.toLowerCase());
    checkEmail();
  };

  // Submits the email to the server to either get the application or create a new one.

  const handleSubmitEmail: () => Promise<void> = async () => {
    setIsSubmittingEmail(true);
    try {
      const createdApplication = await fetch(
        "http://localhost:3000/application/create",
        {
          method: "POST",
          body: JSON.stringify({ email_address: email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      if (!createdApplication.id) {
        throw new Error("Failed to create application");
      }
      setIsSubmittingEmail(false);
    } catch (err) {
      // setError(err.message);
    }
  };

  return (
    <div>
      {!isSubmittingEmail ? (
        <Application email={email} />
      ) : (
        <div>
          <h1>Get Started with Your Insurance Quote!</h1>
          <h2>Enter your email to get started:</h2>
          <ApplicationInput
            label=""
            field="email"
            onInputChange={handleEmail}
          />
          <button
            className="form-button"
            disabled={!validateEmail}
            onClick={handleSubmitEmail}
          >
            Start Application
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
