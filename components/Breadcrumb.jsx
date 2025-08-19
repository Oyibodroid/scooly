// components/Breadcrumb.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((seg) => seg);

  const breadcrumbPaths = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      href,
    };
  });

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbPaths.map((path, index) => (
          <li key={index} className="breadcrumb-item">
            <span className="breadcrumb-separator">/</span>
            {index === breadcrumbPaths.length - 1 ? (
              <span className="breadcrumb-current">{path.name}</span>
            ) : (
              <Link href={path.href} className="breadcrumb-link">
                {path.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

