import "../styles/InputFormField.css";
import { FormField } from "./FormField";

export function InputFormField(props) {
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <FormField>
      <div className="flexbox">
        <label className="flexboxLabel">{props.label}</label>
      </div>
      <div className="flexbox">
        <input
          className="inputFieldCenter"
          type={props.type}
          onChange={handleChange}
          value={props.value}
        />
      </div>
    </FormField>
  );
}
