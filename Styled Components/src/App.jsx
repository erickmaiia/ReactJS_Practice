import { Title, SmallTitle } from "./components/styles";

function App() {
  return (
    <div>
      <Title fontSize={20}>
        StyledComponents
        <span>Small text</span>
      </Title>
      <SmallTitle>Small</SmallTitle>
    </div>
  );
}

export default App;
