import UserList from "./components/UserList";
import NewUser from "./components/NewUser";


function App() {

  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>
        <NewUser/>
        <UserList/>
      </section>
    </>
  );
}

export default App;