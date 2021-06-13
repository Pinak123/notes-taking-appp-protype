 let arr=[];
 let shows;
 let topic,compose;
 function butt(x,y){
    shows="";
    topic =document.getElementById('topic').value;
    compose = document.getElementById('composition').value;
    class Note {
        constructor(_topic,_compose) {
            this.topic = _topic;
            this.compose=_compose;
        }
    }
    x= new Note(topic,compose);
    arr.push(x);
    if (topic=="") {
        arr.pop();
        //alert("Please enter topic of Note first!");
    };
    document.getElementById('topic').value="";
    document.getElementById('composition').value="";
    console.log(arr);
    y=arr.map((a,b) =>{
        return `<span class="note">Note #${b+1} </span><br> <span class="topic">Topic: ${a.topic}</span><br> <span class="compose">composition: ${a.compose}</span><br>
        <button id="b${b}" onclick="arr.splice(${b},1);setTimeout(butt,0);setTimeout(show,0);">Deleate</button><br><br>
        `
    })
    // document.getElementById('content').innerHTML=y;
    shows=y;
    // if(shows=undefined){
    //     shows='';
    // };
}
function show(){
    // if(shows=undefined){
    //     shows='';
    // };
    document.getElementById('content').innerHTML=shows;
}


