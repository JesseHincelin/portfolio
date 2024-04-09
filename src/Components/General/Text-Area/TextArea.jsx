import "./TextArea.scss";

const TextArea = ({
  className,
  id,
  label,
  type,
  value,
  placeholder,
  disabled,
  required,
  readOnly,
  autoComplete,
  autoFocus,
  onInputChange,
  children,
  onKeyDown,
}) => {
  return (
    <div className="field">
      <label
        htmlFor={id}
        className={
          !!className ? `field__label label ${className}--field__label` : "field__label label"
        }
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        className={
          !!className
            ? `field__text-area text-area ${className}--field__text-area`
            : "field__text-area text-area"
        }
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        disabled={!!disabled}
        required={!!required}
        readOnly={!!readOnly}
        autoComplete={autoComplete || "off"}
        autoFocus={!!autoFocus}
        onChange={!!onInputChange ? (e) => onInputChange(e.target.value) : null}
        onKeyDown={onKeyDown}
      />
      {children}
    </div>
  );
};

export default TextArea;
