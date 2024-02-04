import React, { useState, useEffect } from "react";
import ApplicationForm from "./ApplicationForm";

type ApplicationProps = {
  email: string;
  cancel: () => void;
};

const Application: React.FC<ApplicationProps> = ({ email, cancel }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string | boolean }>({
    email: email,
  });
  const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(true);
  const [isSubmittingApplication, setIsSubmittingApplication] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit: () => void = async () => {
    setIsSubmittingApplication(true);
    setError(null);
    try {
      await sleep(2000);
      console.log(formValues);
      // Make your API call here
      // After the API call is finished, set isSubmitting back to false
    } catch (err) {
      // setError(err.message);
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  // Submits the email to the server to either get the application or create a new one.
  useEffect(() => {
    const handleSubmitEmail: () => void = async () => {
      setIsSubmittingEmail(true);
      setError(null);
      try {
        await sleep(5000);
        // Make your API call here
        // After the API call is finished, set isLoading back to false
      } catch (err) {
        // setError(err.message);
      } finally {
        setIsSubmittingEmail(false);
      }
    };
    handleSubmitEmail();
  }, []);

  return (
    <div>
      {isSubmittingEmail ? (
        <div>
          <h1>Please wait while we load your application...</h1>
        </div>
      ) : (
        <div>
          <ApplicationForm
            email={email}
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <button className="form-button" onClick={cancel}>Cancel</button>
          <button className="form-button" onClick={handleSubmit}>{isSubmittingApplication ? 'Loading... ' : 'Submit'}</button>
        </div>
      )}
    </div>
  );
};

export default Application;
