import { useEffect, useState } from "react";
import User from "./components/User";
import UserSkelaton from "./components/UserSkelaton";

function App() {
  //localStorage
  //[{"id":1,"ad":"Erdoğan FIRAT", "tel":"0555 555 55 55"},{"id":2,"ad":"Ahmet YILMAZ", "tel":"0555 666 66 66"}]

  const [veri, veriGuncelle] = useState([])

  useEffect(()=>{
    const LSVeriCek = async ()=> localStorage.getItem("rehberJSON")

    async function rehberCek(){
      const rehberJSON = await LSVeriCek()
      const rehberVeri = JSON.parse(rehberJSON);
      veriGuncelle(rehberVeri);
    }
    setTimeout( rehberCek, 2000 )
  }, [])

  console.log(veri)


  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>
        <div className="row">
          { veri.length===0 && <UserSkelaton /> }
          { veri.map( eleman => <User key={eleman.id} ad={eleman.ad} tel={eleman.tel} />  ) }

        </div>
      </section>
    </>
  );
}

export default App;