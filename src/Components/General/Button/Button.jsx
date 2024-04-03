import "./Button.scss";

const Button = ({ className, type, disabled, autoFocus, onClick, content, title }) => {
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <button
      className={`button ${className || ""}`}
      type={type || "button"}
      disabled={!!disabled}
      autoFocus={!!autoFocus}
      onClick={handleClick}
      title={title || ""}
    >
      {content || "button"}
    </button>
  );
};

export default Button;
