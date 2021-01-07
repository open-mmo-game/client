import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

function AppLink({ href, children, exact, onClick }) {
  const router = useRouter();
  const active = exact
    ? router.pathname === href
    : router.pathname.startsWith(href);

  const className = `${styles.link} ${styles[active ? "active" : "inactive"]}`;

  return (
    <li>
      <Link href={href}>
        <a onClick={onClick} className={className}>
          {children}
        </a>
      </Link>
    </li>
  );
}

AppLink.defaultProps = {
  exact: false,
  href: "#",
};

export default AppLink;
