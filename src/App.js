import { Navbar } from "./layouts/Navbar";
import { AppRouter } from "./routes/AppRouter";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
