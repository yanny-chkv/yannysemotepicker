function getemotesrclink(idofemoteimg)
{
    myimg=document.getElementById(idofemoteimg);
    ttbc=myimg.src;
    var TempText = document.createElement("input");
    TempText.value = ttbc;
    document.body.appendChild(TempText);
    TempText.select();
    document.execCommand("copy");
    document.body.removeChild(TempText);
    console.log(ttbc);
}

function populate_tabs()
{
      addixt=""
      emotedirs.forEach(item => {
            addixt+='<div onclick="populate_emojicont(\''+item.id+'\')" id="tabbar'+item.id+'" class="emotepicker-tab">';
            addixt+='\n<div class="emotepicker-tab-iconcont">';
            addixt+='\n<img src="emotes/'+item.id+'/000.png">'
            addixt+='\n</div>'
            addixt+='<span>'+item.id+'</span>'
            addixt+='\n</div>\n';
      })
      console.log(addixt)
      document.getElementsByClassName('emotepicker-tabbar')[0].innerHTML=addixt;
}

function populate_emojicont(selid)
{
      addix="";
      addix+='<div class="emotepicker-content-cont">';
      addix+='\n<input type="text" class="emotepicker-textbox" oninput="searchemojis()" id="emotepicker-cont-filter" placeholder="Emote filter"><br>';
      emotedirs.forEach(item => {
            if(item.id==selid)
            {
                  emdir=item;
            }
      })
      emdir.dirs.forEach(item => {
            console.log(item);
            addix+='\n<img onclick="getemotesrclink(this.id)" id="emote/'+emdir.id+'/'+item+'" src="emotes/'+emdir.id+'/'+item+'.png" class="emotepicker-content-cont-unit">';
      })
      addix+='\n</div>';
      document.getElementsByClassName('emotepicker-content-cont')[0].outerHTML=addix;
      console.log(document.getElementById("tabbar"+selid));

      Array.from(document.getElementsByClassName('emotepicker-tab emotepicker-tab-selected')).forEach(item=>{
            item.classList.remove("emotepicker-tab-selected");
      })

      document.getElementById("tabbar"+selid).classList.add("emotepicker-tab-selected");
}

function searchemojis()
{
      sqry=document.getElementById("emotepicker-cont-filter").value;
      console.log(sqry);
      Array.from(document.getElementsByClassName('emotepicker-content-cont-unit')).forEach(item => {
            tmpen=item.id.split("/").slice(-1)[0];
            if(tmpen.includes(sqry))
            {
                  item.classList.remove("sakriyovo");
            }
            else
            {
                  item.classList.add("sakriyovo");
            }
            item.classList.remove('sakriythis');
      })
}

window.onload = (event) => {
      populate_tabs();
};
