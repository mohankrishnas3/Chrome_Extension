

function getkeywordsmain() {
  console.log("button pressed");
  console.log("This is for comment section");
  var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-3-11 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-3-11 > div:nth-child(2) > ul").textContent;
  //console.log(cmtsection);
  let cmtsection1 = "";
  var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-3-11 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-3-11 > div:nth-child(2) > ul").childElementCount;
  var common_words_1 = []
  console.log("comments length")
  console.log(comments_length)
  for(let i = 1; i <= comments_length+1; i++)
  {


    try {
          var $text = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-3-11 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-3-11 > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div.components-MessageLayout-index__appearance-component > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
      }
      catch(err) {
        var $text = "NULL NULL NULL NULL NULL NULL NULL NULL"
      }


     var requestOptions = {
    method: 'GET',
    redirect: 'follow'
        };

  fetch("http://127.0.0.1:8090/sentiment/"+$text+"/", requestOptions)
    .then(response => response.text())
    .then(result => { 
          
          console.log(result)
          document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-3-11 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-3-11 > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div.components-MessageLayout-index__appearance-component > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").innerHTML = result; //"keyword1 keyword2 keyword3"


        })
    .catch(error => console.log('error', error));


  }
}


document.querySelector("body").addEventListener("click", function() {
  getkeywordsmain();


});








