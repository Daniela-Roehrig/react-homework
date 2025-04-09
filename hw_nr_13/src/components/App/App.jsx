
import Filter from "../Filter/Filter";
import UserList from "../UserList/UserList";

import "../../styles/style.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="listHeader">User List</h1>
      <Filter />
      <UserList />
    </div>
  );
};

export default App;