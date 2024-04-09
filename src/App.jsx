import { HomeProvider } from "./hooks/context";
import Home from "./pages/home";

function App() {
  return (
    <>
      <HomeProvider>
        <Home />
      </HomeProvider>
    </>
  );
}

export default App;
