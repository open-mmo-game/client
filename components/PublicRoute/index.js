import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const selector = ({ account }) => account;

function PublicRoute({ children, redirectUrl }) {
  const { user } = useSelector(selector);
  const router = useRouter();
  if (user) {
    router.push(redirectUrl);
    return <></>;
  }
  return <>{children}</>;
}

PublicRoute.defaultProps = {
  redirectUrl: "/",
};

export default PublicRoute;
