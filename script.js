 var btnClick = document.querySelector ("#btn-click");
 var textArea = document.querySelector ("#mytext");
 var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/https://api.funtranslations.com/translate/ferb-latin.json"



function getTranslationURL (input){
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler ()
{
        var InputText = mytext.value;
           
        fetch(getTranslationURL(InputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)

};

btnClick.addEventListener("click",clickHandler)