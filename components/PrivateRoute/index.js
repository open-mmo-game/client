import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const selector = ({ account }) => account;

function PrivateRoute({ children, redirectUrl }) {
  const { user } = useSelector(selector);
  const router = useRouter();
  if (!user) {
    router.push(redirectUrl);
    return <></>;
  }
  return <>{children}</>;
}

PrivateRoute.defaultProps = {
  redirectUrl: "/account/sign-in",
};

export default PrivateRoute;
