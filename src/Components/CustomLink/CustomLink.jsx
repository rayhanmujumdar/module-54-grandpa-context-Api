import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
        //   style={{ textDecoration: match ? 'red' : "white" }}
          to={to}
          {...props}
        >
          {children}
          {match && "❤️"}
        </Link>
    );
}
export default CustomLink