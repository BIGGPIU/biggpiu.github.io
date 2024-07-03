import requests
import os
from selenium import webdriver
import re
from natsort import natsorted

#img_data = requests.get("https://sdvx.maya2silence.com/img/jacket/6n6KAeNxTRaMSsRjrBNhxc.jpg").content

#with open("1.png","wb") as f:
#    f.write(img_data)


def clonehtml(diff) -> None:
    driver = webdriver.Firefox()
    driver.get(f"https://sdvx.maya2silence.com/table/{diff}")
    htmlsource = driver.page_source
    htmlsource = htmlsource.replace(">",">\n")
    htmlsource = htmlsource.replace("<!--!-->","\n")
    with open(f"htmlsource{diff}.txt","w", encoding='utf-8') as f:
        f.write(htmlsource)

def GETlistfromHTMLTXTfile(diff) -> list:
    songsimage = []
    songsname = []
    answer = {}
    i = 0
    with open(f"htmlsource{diff}.txt","r", encoding="utf-8") as f:
        while True:
            i+=1
            line = f.readline() 
    
            if 'class="song_jacket' in line:
                hold = line
                hold = hold.replace('<div class="song_jacket" style="background-image:url(',"")
                hold = hold.replace(');">\n',"")
                hold = hold.replace("                ","")
                songsimage.append(hold)
            elif 'class="song_info"' in line:
                temp = re.findall('data-title="([^"]*)"',line)
                try:
                    songsname.append(temp[0])
                except:
                    songsname.append("SONGNAMEERROR")

            if "</html>" in line:
                break
            else:
                pass
    for helloworld in range(len(songsimage)):
        answer.update({songsname[helloworld]:songsimage[helloworld]})
    answer = dict(sorted(answer.items()))
    return answer

def FROMLISTdownloadALL(dictitem: dict,directory: str) -> None:
    os.chdir(directory)
    for key,value in dictitem.items():
        key = key.replace(".","")
        key = key.replace("?","")
        key = key.replace("*","")
        key = key.replace(",","")
        key = key.replace("|","")
        key = key.replace("》","")
        key = key.replace("《","")
        key = key.replace("/","")
        key = key.replace("\\","")
        key = key.replace(":","")
        key = key.replace("=","")
        key = key.replace("≡","")
        key = key.replace(".","")
        key = key.replace("<","")
        key = key.replace(">","")
        img_data = requests.get(f"https://sdvx.maya2silence.com{value}").content
        if ".jpg" in value:
            with open(f"{key}.jpg","wb") as f:
                f.write(img_data)
        elif ".png" in value:
            with open(f"{key}.png","wb") as f:
                f.write(img_data)


if __name__ == "__main__":
    #clonehtml(17)
    hold = (GETlistfromHTMLTXTfile(17))
    print (len(hold))
    FROMLISTdownloadALL(hold,"C:\\Users\\diyaj\\Downloads\\Recommend me stuff!\\New folder\\biggpiu.github.io\\sdvxtools\\picker\\charts\\17")
    print ("done")