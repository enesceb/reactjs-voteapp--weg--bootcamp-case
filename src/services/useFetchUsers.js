import { useState, useEffect } from "react";
import uuid from "react-uuid";

//API'ye İstek atma işlemleri

const useFetchUsers = () => {

  //Verilerim Rest API'dan gelmeseydi ve statik bir json verisi olsaydı local storage'ye kaydederdim fakat Rest API'den veri aldığım için Session Storage'a kaydettim.
  //Burada Session Storage'de key value var mı diye kontrol ediyorum. eğer varsa state'imi bununla güncelliyorum, item yoksa || operatörü ile boş aray döndürüyorum 
 
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [vote, setVote] = useState()
 

  //API URL'si ve parametreleri
  //Result=5 : Random 5 kişi listenecek
  //nat=us : nat API'de Nationalities anlamına geliyor, TR'de Turkey milletini temsil ediyor. Yani listede sadece Türkleri listeleyeceğimi belirtiyorum. 
  //exc=login, registered : API dökümantasyonunda yazan bilgiye göre Excluding fields yani hariç tutmak istediğimiz alanları belli etmemize yarıyor. Login ve Register'i hariç tutarak verilerin hızlı yüklenmesini istedim 
 
  const url = `https://randomuser.me/api/?results=4&nat=TR&&exc=login,registered`;

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
 
          let dataSlice = resultsArray.slice().map((results) => {
            results.id = uuid();
            results.vote = 0
            return results;
          });
      
          localStorage.setItem("users", JSON.stringify(dataSlice));
          setUsers(dataSlice)
        })
        .catch((err) => console.log(err));
    }
  }, [url, users]);
  
  //Yukarıda atılan isteği session storage'ye kaydediyorum.
 

  return {
    users,
    vote,
    setVote,
    setUsers
  };
};

export default useFetchUsers;
