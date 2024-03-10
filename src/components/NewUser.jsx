import { useState } from "react";

function NewUser(){
    const [name,nameUpdate] = useState("");
    const [phone,phoneUpdate] = useState("");

    function addUser(){
        //const newId = new Date().getTime();
        const newUser = {id:name+phone,ad:name,tel:phone}

        //1 localstoragedan veriyi cek, js arraya donustur
        const rehberVeri = localStorage.getItem("rehberJSON")
        let rehberArray = JSON.parse(rehberVeri);

        //1-b Bu kisi ve telefonu daha once kayitli mi?
        const varMi = rehberArray.some (eleman => eleman.id === newUser.id)

        if(varMi !== true){
            //2 js arraye yeni kisiyi push yap
            rehberArray.push(newUser)

            //3 js arrayi JSONa donustur
            const yeniRehberJSON = JSON.stringify(rehberArray)

            //4 JSONı localstorage a tekrar kaydet
            localStorage.setItem("rehberJSON",yeniRehberJSON)
        }else{
            alert("Bu kayıt mevcut!")
        }
    }

    return(
        <>
            <div className="row mb-5">
                <div className="col">
                    <input value={name} onChange={(e)=>{nameUpdate(e.currentTarget.value)}} type="text" className="form-control" placeholder="Ad Soyad" />
                </div>
                <div className="col">
                    <input value={phone} onChange={(e)=>{phoneUpdate(e.currentTarget.value)}} type="text" className="form-control" placeholder="Telefon" />
                </div>
                <div className="col-2">
                    <button onClick={addUser} className="btn btn-success">Ekle</button>
                </div>
            </div>
        </>

    )
}

export default NewUser;