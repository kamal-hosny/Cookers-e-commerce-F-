import { Link, useLocation } from "react-router-dom";

type BreadcrumbsProps = {
  linkColor?: string;       
  activeColor?: string;     
  separatorColor?: string;  
};

const Breadcrumbs = ({
  linkColor = "#ffffff",      
  activeColor = "#ffffff",     
  separatorColor = "#ffffff", 
}: BreadcrumbsProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav style={{ fontSize: "14px", margin: "1rem 0" }}>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
        <li style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <Link
            to="/"
            style={{
              color: linkColor,
              textDecoration: "none",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            {"< Home"}
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          const label = decodeURIComponent(value.charAt(0).toUpperCase() + value.slice(1));

          return (
            <li key={to} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <span style={{ color: separatorColor }}>/</span>
              {isLast ? (
                <span style={{ color: activeColor, fontWeight: "600" }}>{label}</span>
              ) : (
                <Link
                  to={to}
                  style={{
                    color: linkColor,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
