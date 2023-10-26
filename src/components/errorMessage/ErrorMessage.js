import img from "./error.gif";

import "./errorMsg.scss";

const ErrorMessage = () => {
  return <img className="error__img" src={img} alt="error gif" />;
};

export default ErrorMessage;
