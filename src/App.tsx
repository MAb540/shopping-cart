import Container from "./components/Container";

function App() {
  console.count("app rerendered");

  return (
    <div className="container mt-4">
      <Container />
    </div>
  );
}

export default App;
