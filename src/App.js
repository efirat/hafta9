import { useEffect, useState } from "react";

function App() {
  /*
  function veriCek(){

  }
  useEffect(veriCek )

  //Yada

  useEffect( ()=>{} )

  */


  const [sayac, sayacGuncelle] = useState(0);

  useEffect(() => {
    console.log("1. effect çalıştı")
  }, [sayac]);

  useEffect(() => {
    console.log("2. effect çalıştı")
  });

  return (
    <>
      Sayaç : {sayac}
    </>
  );
}

export default App;
