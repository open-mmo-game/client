import AppLink from "../AppLink";

import { useSelector, useDispatch } from "react-redux";

import { accountActions } from "../../state";

import styles from "./styles.module.scss";

const selector = ({ account }) => account;

function LoginMenu() {
  const account = useSelector(selector);
  const loggedIn = Boolean(account.user);

  const dispatch = useDispatch();

  const signOut = (event) => {
    event.preventDefault();
    dispatch(accountActions.signOut());
  };
  if (loggedIn) {
    return (
      <>
        <li className={styles.greeting}>¡Hola, {account.user.email}!</li>
        <AppLink onClick={signOut}>Cerrar sesión</AppLink>
      </>
    );
  }
  return (
    <>
      <AppLink href="/account/sign-in">Iniciar sesión</AppLink>
      <AppLink href="/account/sign-up">Registrarse</AppLink>
    </>
  );
}

export default LoginMenu;
