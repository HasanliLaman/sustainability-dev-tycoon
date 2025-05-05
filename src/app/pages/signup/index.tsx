import { Link } from "react-router";
import Container from "../../../components/container";
import StyleSignup from "./style";
import SignupForm from "../../../features/auth/signupform";

const Signup = () => {
  return (
    <StyleSignup>
      <Container header="Register" homeIcon={true} backIcon={false}>
        <SignupForm />
        <div className="signin-link">
          Already have an account? <Link to="/signin">Sign in</Link>
        </div>
      </Container>
    </StyleSignup>
  );
};

export default Signup;
