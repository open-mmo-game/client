import { Form } from "react-final-form";

import { useDispatch } from "react-redux";

import AccountForm from "../../components/AccountForm";
import TextInput from "../../components/TextInput";
import FormSubmit from "../../components/FormSubmit";

import PublicRoute from "../../components/PublicRoute";
import CenteredPage from "../../components/CenteredPage";

import { accountActions } from "../../state";

const validateForm = ({ email, password, passwordConfirmation }) => {
  const errors = {};
  if (!email) {
    errors.email = "El mail es requerido";
  }
  if (!password) {
    errors.password = "La contraseña es requerida";
  } else {
    if (password.length < 8) {
      errors.password = "La contraseña debe poseer al menos 8 carácteres";
    }
    if (password.length > 64) {
      errors.password = "La contraseña no puede superar los 64 carácteres";
    }
  }
  if (!passwordConfirmation) {
    errors.passwordConfirmation =
      "La confirmación de la contraseña es requerida";
  }
  if (password !== passwordConfirmation) {
    errors.passwordConfirmation = "Las contraseñas no coinciden";
  }
  return errors;
};

function SignUpPage() {
  const dispatch = useDispatch();
  const submitForm = (form) => dispatch(accountActions.signUp(form));
  return (
    <PublicRoute>
      <CenteredPage>
        <Form
          onSubmit={submitForm}
          validate={validateForm}
          render={({ handleSubmit }) => (
            <AccountForm onSubmit={handleSubmit}>
              <TextInput name="email" label="Correo electrónico" type="email" />
              <TextInput name="password" label="Contraseña" type="password" />
              <TextInput
                name="passwordConfirmation"
                label="Confirmar contraseña"
                type="password"
              />
              <FormSubmit>Registrarse</FormSubmit>
            </AccountForm>
          )}
        />
      </CenteredPage>
    </PublicRoute>
  );
}

export default SignUpPage;
