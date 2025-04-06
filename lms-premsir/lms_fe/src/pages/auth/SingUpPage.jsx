import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInpute } from "@components/customInpute/CustomInpute";
import { signUpInputes } from "../../assets/customInputes/userSignUpInputes";
import useForm from "../../hooks/useForm";
import { signUpNewUserApi } from "@services/authAPI";

const initialState = {};
const SingUpPage = () => {
  const { form, handleOnChange, passwordErrors } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password)
      return alert("Password do not match");

    const result = await signUpNewUserApi(rest);
    console.log(result);
  };

  console.log(passwordErrors);
  return (
    <div className="d-flex justify-content-center">
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: "450px" }}
        className="card p-5 mt-5 shadow-lg mb-5"
      >
        <h1>Join our Library Community!</h1>
        <hr />

        {signUpInputes.map((inpute) => (
          <CustomInpute
            key={inpute.name}
            {...inpute}
            onChange={handleOnChange}
          />
        ))}
        <div className="py-3">
          <ul className="text-danger">
            {passwordErrors.length > 0 &&
              passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>
        </div>

        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SingUpPage;
