// components/Breadcrumb.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((seg) => seg); // remove empty strings

  const breadcrumbPaths = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      href,
    };
  });

  return (
    <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbPaths.map((path, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {index === breadcrumbPaths.length - 1 ? (
              <span className="text-gray-800 font-medium">{path.name}</span>
            ) : (
              <Link href={path.href} className="text-blue-600 hover:underline">
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

