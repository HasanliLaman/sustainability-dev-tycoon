import { Link } from "react-router";
import Container from "../../../components/container";
import StyleSignin from "./style";
import SigninForm from "../../../features/auth/signinform";

const Signin = () => {
  return (
    <StyleSignin>
      <Container header="Sign in" homeIcon={true} backIcon={false}>
        <SigninForm />
        <div className="signup-link">
          Don’t have an account? <Link to="/signup">Register</Link>
        </div>
      </Container>
    </StyleSignin>
  );
};

export default Signin;
