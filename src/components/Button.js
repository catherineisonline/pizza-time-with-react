import { Link } from "react-router-dom";

const LinkButton = ({ className, to, onClick, children }) => {
    return <Link onClick={onClick} className={className} to={to}>{children}</Link>;
}

export default LinkButton;