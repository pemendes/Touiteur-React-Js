const URL = 'touiteur.cefim-formation.org'

export default function TouitAPI(name, message, callback){
    const request = new XMLHttpRequest();
    request.open("POST", "http://"+ URL +"/send", true);
    request.addEventListener("readystatechange", function(){
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        callback(JSON.parse(request.responseText));
        }
    });
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("name="+name+"&message="+message);
}




