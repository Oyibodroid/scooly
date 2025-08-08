"use client";

import Link from "next/link";
import NProgress from "nprogress";

export default function LoaderLink({ href, children, ...props }) {
  const handleClick = (e) => {
    NProgress.start();
    if (props.onClick) props.onClick(e);
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}