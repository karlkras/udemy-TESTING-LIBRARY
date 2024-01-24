import OrderEntry from "./pages/entry/OrderEntry";
import Container from "react-bootstrap/Container";
import {OrderDetailsProvider} from "./contexts/OrderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
