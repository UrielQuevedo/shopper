import { TextareaAutosize } from "@mui/material";
import Styles from "./_style.module.scss";

interface DefaultInputProps {
  value?: string | number;
  type: "text" | "number" | "textArea";
  placeholder: string;
  name: string;
  onChange: (value: any) => void;
  required?: boolean;
  autoFocus?: boolean;
}

const DefaultInput = ({
  name,
  placeholder,
  autoFocus = false,
  value,
  onChange,
  required = true,
  type,
}: DefaultInputProps) => {
  if (type === "textArea") {
    return (
      <TextareaAutosize
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        minRows={4}
        maxRows={6}
        className={Styles.textArea}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      name={name}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={Styles.inputForm}
      value={value}
      type={type}
      onChange={onChange}
      required={required}
    />
  );
};

export default DefaultInput;
