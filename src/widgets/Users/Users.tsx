const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Brown", email: "alice@example.com" },
  { id: 4, name: "Bob White", email: "bob@example.com" },
  { id: 5, name: "Charlie Green", email: "charlie@example.com" },
  { id: 6, name: "Emily Black", email: "emily@example.com" },
]
import { Link } from "react-router-dom"
import styled from "styled-components"

const UsersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`

const UserCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

const UserName = styled.h3`
  margin: 0;
  font-size: 1.2em;
`

const UserEmail = styled.p`
  margin: 0.5em 0 0;
  font-size: 0.9em;
`

const UsersList = () => {
  return (
    <UsersListContainer>
      {users.slice(0, 5).map((user, index) => (
        <Link to={`/users/${user.id}`}>
          <UserCard key={index}>
            <UserName>{user.name}</UserName>
            <UserEmail>
              <strong>Email:</strong> {user.email}
            </UserEmail>
          </UserCard>
        </Link>
      ))}
    </UsersListContainer>
  )
}

export default UsersList
