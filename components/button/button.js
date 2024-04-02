const Button = ({ children, className }) => (
  <button type="button" className={`${className} btn btn-outline-primary p-2 px-4`}>
    {children}
  </button>
);
export default Button
