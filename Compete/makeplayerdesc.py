import os
import sqlite3
from importfromdb import rankdict,GETinfofromDB
from yandev import *

def Icantthinkofanameforthis(name):
    conn = sqlite3.connect(r"C:\Users\diyaj\myenv\EsportsManager\db.sqlite3")
    cursor = conn.cursor()
    sql = f"SELECT Name,Wins,Losses,ELO,Rank FROM Users WHERE Name='{name}'"
    cursor.execute(sql)
    hold = cursor.fetchone()
    print (hold)
    conn.close()
    return hold

def GETinfofromDB2():
    conn = sqlite3.connect(r"C:\Users\diyaj\myenv\EsportsManager\db.sqlite3")
    cursor = conn.cursor()
    sql = "SELECT * FROM UserHistory"
    cursor.execute(sql)
    hold = cursor.fetchall()
    print (hold)
    conn.close()
    return hold

def negotiatebest(first,second,third,DNP):
    first = first.split(",")
    second = second.split(",")
    third = third.split(",")
    if first[0] != '0':
        return "TOP 1"
    if second[0] != '0':
        return "TOP 2"
    if third[0] != '0':
        return "TOP 3"
    return "DNP"

def mkuserdir(info):
    temp = Icantthinkofanameforthis(info[0])
    os.mkdir(f"{info[0]}")
    os.chdir(f"./{info[0]}")
    print(os.getcwd())
    try:
        z = open("index.html", "x")
        z.close()
        zz = open("info.js","x")
        zz.close()
    except:
        pass
    best = negotiatebest(info[4],info[5],info[6],info[7])
    hold = createHTML(info[0],temp[3],temp[1],temp[2],rankdict[temp[4]],best)
    hold2 = createJS(info[1],info[2],info[3],info[4],info[5],info[6],info[7])

    with open("index.html","w") as f:
        f.write(hold)
        f.close()
    with open("info.js","w") as f:
        f.write(hold2)
        f.close()
    print(hold)
    print(hold2)
    os.chdir("../")





if __name__ == "__main__":
    os.chdir(r"C:\Users\diyaj\Downloads\Recommend me stuff\New folder\biggpiu.github.io\Compete")
    hold = GETinfofromDB2()
    print (hold)
    for i in hold:
        mkuserdir(i)
  