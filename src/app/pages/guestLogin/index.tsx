import { Link } from "react-router";
import Container from "../../../components/container";
import StyleGuestSignin from "./style";
import GuestSigninForm from "../../../features/auth/guestSigninForm";

const GuestSignin = () => {
  return (
    <StyleGuestSignin>
      <Container header="Play as a guest" homeIcon={true} backIcon={false}>
        <GuestSigninForm />
        <div className="signin-link">
          Already have an account? <Link to="/signin">Sign in</Link>
        </div>
      </Container>
    </StyleGuestSignin>
  );
};

export default GuestSignin;
