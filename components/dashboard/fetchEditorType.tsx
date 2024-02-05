import { ColumnEditorOptions } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

export const fetchEditorType = (options: ColumnEditorOptions) => {
    switch (options.field) {
      case "primary_al":
      case "primary_gl":
      case "primary_el":
        return booleanEditor(options);
      case "status":
        return dropDownEditor(options);
      default:
        return textEditor(options);
    }
  };

  const textEditor = (options: ColumnEditorOptions) => {
    return (
      <InputText
        key={options.rowIndex + options.field} // add unique key
        type="text"
        className="p-inputtext-sm"
        value={options.value}
        name={options.field}
        onChange={(e: any) =>
          options.editorCallback && options.editorCallback(e.target.value)
        }
      />
    );
  };

  const booleanEditor = (options: ColumnEditorOptions) => {
    return (
      <Checkbox
        key={options.rowIndex + options.field} // add unique key
        name={options.field}
        checked={options.value}
        onChange={(e: any) =>
          options.editorCallback && options.editorCallback(e.target.checked)
        }
      />
    );
  };

  const dropDownEditor = (options: ColumnEditorOptions) => {
    return (
      <Dropdown
        name={options.field}
        key={options.rowIndex + options.field} // add unique key
        value={options.value}
        options={[
          { label: "Pending", value: "PENDING" },
          { label: "Submitted", value: "SUBMITTED" },
        ]}
        onChange={(e: any) =>
          options.editorCallback && options.editorCallback(e.value)
        }
      />
    );
  };