import React, { useState, useEffect } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ApplicationTable from "@/components/dashboard/ApplicationTable";

const ApplicationDashboard: React.FC = () => {
  const [loadingApplications, setLoadingApplications] = useState<boolean>(true);
  const [applications, setApplications] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch applications on mount
  useEffect(() => {
    setApplications([
      {id: 1, email: "john.doe@gmail.com", firstname: "John", lastname: "Doe", phonenumber: "123-456-7890", companyname: "ABC Corp", autoliability: true, generalliability: true, employeeliability: false },
      {id: 2, email: "jane.roberts@hotmail.com", firstname: "Jane", lastname: "Roberts", phonenumber: "123-456-7890", companyname: "XYZ Corp", autoliability: true, generalliability: false, employeeliability: true },
    ]);
    setLoadingApplications(false);
  }
  , []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ApplicationTable loading={loadingApplications} applications={applications} />
    </div>
  )
}

export default ApplicationDashboard;
