import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../widgets/NavBar/NavBar"
import UsersList from "../widgets/Users/Users"
import CurrentUser from "../widgets/CurrentUser/CurrentUser"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={"Home"}></Route>
        <Route path="/users" element={<UsersList />}></Route>
        <Route path="/users/:id" element={<CurrentUser />}></Route>
        <Route path="*" element={"404 Not found page"}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
