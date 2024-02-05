import React from "react";
import { fetchEditorType } from "./fetchEditorType";
import { Column } from "primereact/column";
import { DataTable, DataTableRowEditCompleteEvent } from "primereact/datatable";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

type ApplicationTableProps = {
  applications: any[];
  editApplication: (application: any) => void;
  deleteApplication: (id: string) => void;
  loading: boolean;
};

const ApplicationTableColumns: {
  field: string;
  header: string;
  frozen?: boolean;
  width?: string;
  editable?: boolean;
}[] = [
  {
    field: "id",
    header: "Application ID",
    frozen: true,
    width: "50px",
    editable: false,
  },
  { field: "status", header: "Status", editable: true },
  { field: "email_address", header: "Email Address", editable: true },
  { field: "first_name", header: "First Name", editable: true },
  { field: "last_name", header: "Last Name", editable: true },
  { field: "phone_number", header: "Phone Number", editable: true },
  { field: "company_name", header: "Company Name", editable: true },
  { field: "primary_al", header: "AL", width: "50px", editable: true },
  { field: "primary_gl", header: "GL", width: "50px", editable: true },
  { field: "primary_el", header: "EL", width: "50px", editable: true },
];

const ApplicationTable: React.FC<ApplicationTableProps> = ({
  applications,
  editApplication,
  deleteApplication,
}) => {
  return (
    <DataTable
      sortMode="multiple"
      className="p-datatable-sm"
      showGridlines
      stripedRows
      scrollable
      editMode="row"
      selectionMode="single"
      paginator
      rows={10}
      dataKey="id"
      totalRecords={applications.length}
      value={applications}
      onRowEditComplete={(e: DataTableRowEditCompleteEvent) => {
        editApplication(e.newData);
      }}
    >
      {ApplicationTableColumns.map((col, index) => {
        return (
          <Column
            key={index}
            sortable
            frozen={col.frozen ? true : false}
            alignFrozen={col.frozen ? "left" : undefined}
            bodyStyle={{ textAlign: "center" }}
            field={col.field}
            header={col.header}
            editor={
              col.editable ? (options) => fetchEditorType(options) : undefined
            }
          />
        );
      })}
      <Column
        bodyStyle={{ textAlign: "center" }}
        frozen
        alignFrozen="right"
        body={(rowData: any) => (
          <Button
            rounded
            icon="pi pi-trash"
            severity="danger"
            size="small"
            onClick={() => deleteApplication(rowData.id)}
          />
        )}
        header="Delete"
      />
      <Column
        rowEditor
        frozen
        bodyStyle={{ textAlign: "center" }}
        alignFrozen="right"
        header="Edit"
      ></Column>
    </DataTable>
  );
};

export default ApplicationTable;
