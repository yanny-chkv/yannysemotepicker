import glob
datax="";
datax+="const emotedirs = [\n";
for i in sorted(glob.glob("./emotes/*")):
    datax+="{\n";
    datax+="\n";
    datax+="id:'"+i.split("/")[-1]+"',"+"\n";
    datax+='dirs:[\n';
    for j in sorted(glob.glob(i+"/*")):
        datax+='      "'+j.split("/")[-1]+'",\n';
    datax+="],\n";
    datax+="},\n";

datax+="\n\n]";
print(datax);
