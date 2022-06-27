import { useState, useEffect } from "react";
import uuid from "react-uuid";

//API'ye İstek atma işlemleri

const useFetchUsers = () => {
  
  //Verilerim Rest API'dan gelmeseydi ve statik bir json verisi olsaydı local storage'ye kaydederdim fakat Rest API'den veri aldığım için Session Storage'a kaydettim.
  //Burada Session Storage'de key value var mı diye kontrol ediyorum. eğer varsa state'imi bununla güncelliyorum, item yoksa || operatörü ile boş aray döndürüyorum 
 
  const [users, setUsers] = useState(
    JSON.parse(window.sessionStorage.getItem("users")) || []
  );
  
  //API URL'si ve parametreleri
  //Result=5 : Random 5 kişi listenecek
  //nat=us : nat API'de Nationalities anlamına geliyor, TR'de Turkey milletini temsil ediyor. Yani listede sadece Türkleri listeleyeceğimi belirtiyorum. 
  //exc=login, registered : API dökümantasyonunda yazan bilgiye göre Excluding fields yani hariç tutmak istediğimiz alanları belli etmemize yarıyor. Login ve Register'i hariç tutarak verilerin hızlı yüklenmesini istedim 
 
  const url = `https://randomuser.me/api/?results=5&nat=TR&&exc=login,registered`;

  //useEffect kullanarak componenet on mount olurken verilerin yüklenmesini istedim
 
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(url);
      const items = await res.json();
      
      return items.results;
    };

    //users state'imizdeki veri (session storage'taki key value) 1 'den küçükse/içi boş bir Array'se ([]) istek atacak. 
  
    if (users.length < 1) {
      fetchUsers()
        .then((resultsArray) => {
          const dataSlice = resultsArray.slice().map((results) => {
            results.id = uuid();
            return results;
          });
          setUsers(dataSlice);
        })
        .catch((err) => console.log(err));
    }
  }, [url, users]);
  
  //Yukarıda atılan isteği session storage'ye kaydediyorum.
 
  useEffect(() => {
    window.sessionStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return {
    users,
  };
};

export default useFetchUsers;
