import ApplicationTable from "@/components/dashboard/ApplicationTable";
import React, { useState, useEffect } from "react";
import "/node_modules/primeflex/primeflex.css";

const ApplicationDashboard: React.FC = () => {
  const [loadingApplications, setLoadingApplications] = useState<boolean>(true);
  const [savingApplication, setSavingApplication] = useState<boolean>(false);
  const [applications, setApplications] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch applications on mount
  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications: () => Promise<void> = async () => {
    const res: Response = await fetch("http://localhost:3000/application/all");
    const data = await res.json();
    setApplications(data);
    setLoadingApplications(false);
  };

  const editApplication: (application: any) => Promise<void> = async (
    application
  ) => {
    setSavingApplication(true);
    try {
      const res = await fetch("http://localhost:3000/application/edit", {
        method: "POST",
        body: JSON.stringify(application),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      await fetchApplications();
      setSavingApplication(false);
    }
  };

  const deleteApplication: (id: string) => Promise<void> = async (id) => {
    setSavingApplication(true);
    try {
      const res = await fetch("http://localhost:3000/application/delete", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      await fetchApplications();
      setSavingApplication(false);
    }
  };

  return (
    <div className="grid nested-grid justify-content-center w-scree">
      <div className="col-12 text-center">
        <h1>Application Dashboard</h1>
      </div>
      {savingApplication ? (
        <div className="col-12 text-center">Saving...</div>
      ) : (
        <div className="col-12">
          {loadingApplications ? (
            <div>Loading Applications...</div>
          ) : (
            <ApplicationTable
              editApplication={editApplication}
              deleteApplication={deleteApplication}
              applications={applications}
              loading={loadingApplications}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ApplicationDashboard;
