import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar
