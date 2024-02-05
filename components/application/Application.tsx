import React, { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import { useRouter } from "next/router";

type ApplicationProps = {
  email: string;
};

const Application: React.FC<ApplicationProps> = ({ email }) => {
  const router = useRouter();

  const [formValues, setFormValues] = useState<{
    [key: string]: string | boolean;
  }>({
    email_address: email,
    primary_al: false,
    primary_gl: false,
    primary_el: false,
  });

  const [isSubmittingApplication, setIsSubmittingApplication] =
    useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: () => Promise<void> = async () => {
    setIsSubmittingApplication(true);
    setError(null);
    try {
      const finalizedApplication = await fetch(
        "http://localhost:3000/application/finalize",
        {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      if (finalizedApplication.id) {
        router.push("/thanks");
      }
    } catch (err) {
      // setError(err.message);
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  return (
    <div>
      <ApplicationForm
        email={email}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <button className="form-button" onClick={handleSubmit}>
        {isSubmittingApplication ? "Loading... " : "Submit"}
      </button>
    </div>
  );
};

export default Application;
