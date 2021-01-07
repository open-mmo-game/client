import { Field } from "react-final-form";

import styles from "./styles.module.scss";

function TextInput({ name, label, type, placeholder, required }) {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ input, meta }) => (
          <div className={styles.wrapper}>
            <input
              {...input}
              className={styles.input}
              type={type}
              placeholder={placeholder}
              required={required}
            />
            <span className={styles.error}>
              {meta.error && meta.touched ? meta.error : <>&nbsp;</>}
            </span>
          </div>
        )}
      </Field>
    </>
  );
}

TextInput.defaultProps = {
  type: "text",
  required: false,
};

export default TextInput;
