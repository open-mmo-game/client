import { Form } from "react-final-form";

import { useDispatch } from "react-redux";

import AccountForm from "../../components/AccountForm";
import TextInput from "../../components/TextInput";
import FormSubmit from "../../components/FormSubmit";

import PublicRoute from "../../components/PublicRoute";
import CenteredPage from "../../components/CenteredPage";

import { accountActions } from "../../state";

function validateForm({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = "El email es requerido";
  }

  if (!password) {
    errors.password = "La contraseña es requerida";
  }

  return errors;
}

function SignInPage() {
  const dispatch = useDispatch();
  const submitForm = (form) =>
    dispatch(accountActions.signInWithPassword(form));
  return (
    <PublicRoute>
      <CenteredPage>
        <Form
          onSubmit={submitForm}
          validate={validateForm}
          render={({ handleSubmit }) => (
            <AccountForm onSubmit={handleSubmit}>
              <TextInput
                label="Correo electrónico"
                name="email"
                type="email"
                placeholder="usuario@dominio.com"
              />
              <TextInput
                label="Contraseña"
                name="password"
                type="password"
                placeholder="contraseña"
              />
              <FormSubmit>Iniciar sesión</FormSubmit>
            </AccountForm>
          )}
        />
      </CenteredPage>
    </PublicRoute>
  );
}

export default SignInPage;
