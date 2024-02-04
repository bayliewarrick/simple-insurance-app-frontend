import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

type ApplicationTableProps = {
    applications: any[];
    loading: boolean;
}

const ApplicationTableColumns: { field: string, header: string }[] = [
    { field: "id", header: "Application ID"},
    { field: "email", header: "Email Address"},
    { field: "firstname", header: "First Name" },
    { field: "lastname", header: "Last Name" },
    { field: "phonenumber", header: "Phone Number" },
    { field: "companyname", header: "Company Name" },
    { field: "autoliability", header: "Auto Liability" },
    { field: "generalliability", header: "General Liability" },
    { field: "employeeliability", header: "Employee Liability" },
];

const ApplicationTable: React.FC<ApplicationTableProps> = ({ applications, loading }) => {
    return (
        <div>
            {loading ? <h2>Loading Applications...</h2> : null}
            {!loading && applications.length === 0 ? <h2>No Applications Found</h2> : null}
            {!loading && applications.length > 0 ? (
                <DataTable value={applications}>
                    {ApplicationTableColumns.map((col, index) => {
                        return <Column key={index} field={col.field} header={col.header} />;
                    })}
                </DataTable>
            ) : null}
        </div>
    )
}

export default ApplicationTable;