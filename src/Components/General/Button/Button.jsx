import "./Button.scss";

const Button = ({ className, type, disabled, autoFocus, onClick, content }) => {
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
    >
      {content || "button"}
    </button>
  );
};

export default Button;
