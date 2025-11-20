import { Routes, Route } from "react-router-dom";
import IArtisan from "./pages/iartisanApp/IArtisan";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IArtisan />} />
      <Route path="/iartisan" element={<IArtisan />} />
    </Routes>
  );
};

export default App;
