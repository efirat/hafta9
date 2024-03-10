import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.org/users");
      const jsObjectData = await response.json();
      setData(jsObjectData);
    }
    setTimeout(fetchData, 2000);
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  console.log(data);

  return (
    <>
      { data.length===0 && <p id="loading">Kullanıcı bilgileri yükleniyor, lütfen bekleyin...</p>}
      {data.map((user) => (
        <p key={user.id}>{user.firstname}</p>
      ))}
    </>
  );
}

export default App;
