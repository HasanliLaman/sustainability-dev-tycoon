import Container from "../../../components/container";
import Loading from "../../../components/loading";

const Dashboard = () => {
  return (
    <div>
      <Container homeIcon={false} backIcon={true} header="Sign in">
        <Loading />
      </Container>
    </div>
  );
};

export default Dashboard;
