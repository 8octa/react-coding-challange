const Button = ({ className, href, onClick, children, icon }) => {
  const classes = `button relative px-10 flex items-center justify-center h-11 transition-colors cursor-pointer rounded-lg bg-blue-500  w-full
   ${className || ""}`;
  const spanClasses = "relative z-10 flex justify-center items-center gap-2";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>
        {children} {icon}
      </span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
