import Dashboard from "./components/Dashboard/Dashboard";
import styled from 'styled-components';

const Container = styled.div`
  height:100vh;
`;


function App() {

  return (
    <Container>
      <Dashboard />
    </Container>
  );
}

export default App;
