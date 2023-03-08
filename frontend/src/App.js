import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmployeeView from "./components/EmployeeView";
import AddnewEmployee from "./components/AddnewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeView />} />
        <Route exact path="/Add" element={<AddnewEmployee />} />
        <Route exact path="/update" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
