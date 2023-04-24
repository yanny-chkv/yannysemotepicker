lockthese=["jpnmng_yaoibl","yaoibarairl"]
locktheseemotes=["nsfw","ahegao","yaoibl","stantwitter","winx"]
blacklist=["betm","lpvid","peaches","nshn","wojak","gprnirl"]

function playsnd(soundfile)
{
      var audio = new Audio(soundfile);
      audio.play();
}

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
      addixt+='<div onclick="populate_emojicontall()" id="tabbarshowallemotes" class="emotepicker-tab"><span>Show all</span></div>';
      emotedirs.forEach(item => {
            item.dirs.forEach(itemr=>{
                  if(itemr.includes("000"))
                  {
                        fitm=itemr;
                  }
            })
            tobelckd="";
            if(lockthese.includes(item.id))
            {
                  tobelckd=" lockthis"
            }
            addixt+='\n<div onclick="populate_emojicont(\''+item.id+'\')" id="tabbar'+item.id+'" class="emotepicker-tab'+tobelckd+'">';
            addixt+='\n<div class="emotepicker-tab-iconcont">';
            addixt+='\n<img src="emotes/'+item.id+'/'+fitm+'">'
            addixt+='\n</div>'
            addixt+='<span>'+item.id+'</span>'
            addixt+='\n</div>\n';
      })
      document.getElementsByClassName('emotepicker-tabbar')[0].innerHTML=addixt;
}

function populate_emojicontall()
{
      addix="";
      addix+='<div class="emotepicker-content-cont">';
      addix+='\n<input type="text" class="emotepicker-textbox" oninput="searchemojis()" id="emotepicker-cont-filter" placeholder="Emote filter"><br>';
      emotedirs.forEach(item => {
            item.dirs.forEach(itemx => {
                  lockthsflg=0;
                  locktheseemotes.forEach(itemo => {
                        if(itemx.includes(itemo))
                        {
                              lockthsflg=1;
                        }
                  })
                  blcklstflg=0;
                  blacklist.forEach(itemo => {
                        if(itemx.includes(itemo))
                        {
                              blcklstflg=1;
                        }
                  })
                  if(itemx.includes("000") || (lockthese.includes(item.id)&&key3==0) || (blcklstflg==1 && key6==0) || (lockthsflg==1 && key3==0))
                  {

                  }
                  else
                  {

                        addix+='<div class="emotepicker-content-cont-unit" id="emote/'+item.id+'/'+itemx+'">'
                        addix+='\n<img onclick="getemotesrclink(this.id)" id="emote/'+item.id+'/'+itemx+'-imgf" src="emotes/'+item.id+'/'+itemx+'" title="'+itemx+'">';
                        addix+='</div>'
                  }
            })
      })
      addix+='\n</div>';
      document.getElementsByClassName('emotepicker-content-cont')[0].outerHTML=addix;

      Array.from(document.getElementsByClassName('emotepicker-tab emotepicker-tab-selected')).forEach(item=>{
            item.classList.remove("emotepicker-tab-selected");
      })

      document.getElementById("tabbarshowallemotes").classList.add("emotepicker-tab-selected");
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
            lockthsflg=0;
            locktheseemotes.forEach(itemo => {
                  if(item.includes(itemo))
                  {
                        lockthsflg=1;
                  }
            })
            blcklstflg=0;
            blacklist.forEach(itemo => {
                  if(item.includes(itemo))
                  {
                        blcklstflg=1;
                  }
            })
            if(item.includes("000") || (blcklstflg==1 && key6==0) || (lockthsflg==1 && key3==0))
            {

            }
            else
            {
                  addix+='<div class="emotepicker-content-cont-unit" id="emote/'+emdir.id+'/'+item+'">'
                  addix+='\n<img onclick="getemotesrclink(this.id)" id="emote/'+emdir.id+'/'+item+'-imgf" src="emotes/'+emdir.id+'/'+item+'" title="'+item+'">';
                  addix+='</div>'
            }
      })
      addix+='\n</div>';
      document.getElementsByClassName('emotepicker-content-cont')[0].outerHTML=addix;

      Array.from(document.getElementsByClassName('emotepicker-tab emotepicker-tab-selected')).forEach(item=>{
            item.classList.remove("emotepicker-tab-selected");
      })

      document.getElementById("tabbar"+selid).classList.add("emotepicker-tab-selected");
}

function searchemojis()
{
      sqry=document.getElementById("emotepicker-cont-filter").value.toLowerCase();
      Array.from(document.getElementsByClassName('emotepicker-content-cont-unit')).forEach(item => {
            tmpen=item.id.split("/").slice(-1)[0].toLowerCase();
            incld=2;
            sqryarr=sqry.split(" ");
            sqryarr.forEach(itemcx => {
                  if((itemcx[0]=="-") && !tmpen.includes(itemcx.substring(1)) && (incld==1 || sqryarr.length==1))
                  {
                        incld=1;
                  }
                  else if(tmpen.includes(itemcx) && incld!=0 && itemcx[0]!='-')
                  {
                        incld=1;
                  }
                  else
                  {
                        incld=0;
                  }
            })
            if(incld==1)
            {
                  item.classList.remove("sakriyovo");
            }
            else
            {
                  item.classList.add("sakriyovo");
            }
      })
}

function searchtabs()
{
      sqry=document.getElementById("emotepicker-tabbar-filter").value;
      Array.from(document.getElementsByClassName('emotepicker-tab')).forEach(itemx => {
            tmpen=itemx.id;
            if(tmpen.includes(sqry))
            {
                  itemx.classList.remove("sakriyovo");
            }
            else
            {
                  itemx.classList.add("sakriyovo");
            }
      })
}

key1=0;
key2=0;
key3=0;
key4=0;
key5=0;
key51=0;
key6=0;

function switch1()
{
      key1=1;
      if(key3==1)
      {
            key4=1;
            key3=2;
      }
      else if(key4==1)
      {
            key4=0;
            key5=1;
      }
      else if(key5==1)
      {
            key5=0;
            key51=1;
      }
}

function switch2()
{
      if(key1==1)
      {
            key2=1;
      }
      if(key51==1)
      {
            key51==0;
            key6=1;
            try
            {
                  document.getElementsByClassName("emotepicker-tab-selected")[0].click();
            }
            catch
            {

            }
            playsnd("snd/unlock2.mp3");
      }
}

function switch3()
{
      if(key1==1 && key2==1)
      {
            key3=1;
            unlocktabs();
            try
            {
                  document.getElementsByClassName("emotepicker-tab-selected")[0].click();
            }
            catch
            {

            }
            playsnd("snd/unlock1.mp3");
      }
}

function unlocktabs()
{
      Array.from(document.getElementsByClassName("lockthis")).forEach(itemx => {
            itemx.classList.remove("lockthis");
      })
}

window.onload = (event) => {
      populate_tabs();
};
