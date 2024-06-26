import styled from "styled-components";
import RGB from "./pages/RGB";
import HSLA from "./pages/HSLA";
import CMYK from "./pages/CMYK";
import Rotas from "./routes";

export default function App() {
  return (
    <WrapperSld>
      <Rotas/>
      <RGB />
      <HSLA />
      <CMYK />
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
