import sqlite3
import os 

rankdict = {
    6:"HOM",
    5:"Platinum",
    4:"Diamond",
    3:"Silver",
    2:"Bronze",
    1:"wood"
}

def GETinfofromDB():
    conn = sqlite3.connect(r"C:\Users\diyaj\myenv\EsportsManager\db.sqlite3")
    cursor = conn.cursor()
    sql = "SELECT Name,Wins,Losses,ELO,Rank FROM Users ORDER BY ELO DESC"
    cursor.execute(sql)
    hold = cursor.fetchall()
    print (hold)
    conn.close()
    return hold

def GETSPfromDB(name):
    conn = sqlite3.connect(r"C:\Users\diyaj\myenv\EsportsManager\db.sqlite3")
    cursor = conn.cursor()
    sql = f"SELECT SP FROM Series WHERE NAME='{name}'"
    cursor.execute(sql)
    hold = cursor.fetchall()
    return hold[0][0]

def MAKEinfointoHTML(sql):
    try:
        z = open("index.html", "x")
        z.close()
    except:
        pass
    string = """
<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="BMHS Competitive" /> 
    <meta property="og:description" content="Bishop Mcnamara Esports League"/>  
    <meta property="og:url" content="https://biggpiu.github.io/compete" /> 
    <meta property="og:image" content="https://raw.githubusercontent.com/BIGGPIU/biggpiu.github.io/main/data/competitive.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" type="image/x-icon" href="../data/cicon.png">
    <link rel="stylesheet" href="index.css">
    <title>BMHS Competitive</title>
</head>

<html>
    <header class="fade-in"><a href="../">BMHS Competitive</a></header>
    <div class="elo-leaderboard-title font-montserrat slide-in-left">Leaderboard</div>
    <div class="elo-leaderboard slide-in-left" style="animation-delay: 1s;">
        <div class="elo-leaderboard-header font-montserrat" style="animation-duration: 2s;">
            <div class="Name">
                <div class="elhc">Name</div>
            </div>
            <div class="ELO">
                <div class="elhc">ELO</div>
            </div>
            <div class="SP">
                <div class="elhc">SP</div>
            </div>
            <div class="WL">
                <div class="elhc">W/L</div>
            </div>
            <div class="Rank">
                <div class="elhc">Rank</div>
            </div>
        </div>
        <div class="elo-leaderboard-content font-montserrat">
            <!--this is where im gonna use a script to put the stuff in-->

            """
    with open("index.html", "w") as f:
        for i in sql:
            
            string += f"""
            <div class="elo-leaderboard-content-inner font-montserrat">
                <div class="Name">
                    <div class="elhc">{i[0]}</div>
                </div>
                <div class="ELO">
                    <div class="elhc">{i[3]}</div>
                </div>
                <div class="SP">
                    <div class="elhc">{GETSPfromDB(i[0])}</div>
                </div>
                <div class="WL">
                    <div class="elhc">{i[1]}/{i[2]}</div>
                </div>
                <div class="Rank">
                    <div class="elhc">{rankdict[i[4]]}</div>
                </div>
            </div>
                """ 
        string += """
            <div class="elo-leaderboard-content-inner font-montserrat">
                <div class="Name">
                    <div class="elhc">BIGG</div>
                </div>
                <div class="ELO">
                    <div class="elhc">washed :(</div>
                </div>
                <div class="SP">
                    <div class="elhc">-1</div>
                </div>
                <div class="WL">
                    <div class="elhc">0/0</div>
                </div>
                <div class="Rank priviledges">
                    <div class="elhc" style="color:black">TO</div>
                </div>
            </div>
            """
        string += """
        </div>
            </div>
            <div class="upcoming-title font-montserrat slide-in-left">Upcoming Events</div>
            <div class="upcoming slide-in-left" style="animation-delay: 1s; animation-name: slide-in-left-modified;">
                <div class="event">
                    <a href="https://start.gg/BMHS">
                        <div class="please">
                            <div class="please-center">Click To Sign Up On Start.gg<br><br>Please?</div>
                        </div>
                    </a>
                    <div class="event-header">WEEK 1/TEST</div>
                    <div class="main-stage-header">Main Event</div>
                    <div class="main-stage-content">SSBU Singles</div>
                    <div class="side-stage-header">Side Tournament</div>
                    <div class="side-stage-content">TBD</div>
                    <div class="Date">Date:2/6/25</div>
                </div>
            </div>
            
            <div class="faq-title font-montserrat slide-in-left">FAQ</div>
            <div class="faqs font-montserrat">
                <div class="faq-question">Where Can I Read The Rules?</div>
                <div class="faq-response">You can read them <a href="https://docs.google.com/document/d/18wTJArFtlqLXcjPEdIfbWnb7HJMZQhoCgstRNP8wJZY/edit?usp=sharing" style="text-decoration: underline;">right here.</a></div>
                <div class="faq-question">What is the website for Picking Stages?</div>
                <div class="faq-response"><a href="https://biggpiu.github.io/smashpicker" style="text-decoration: underline;">biggpiu.github.io/smashpicker</a></div>
                <div class="faq-question">How can I sign up without using start.gg?</div>
                <div class="faq-response">Contact me via any means or fill out <a href="https://forms.gle/raWQwXa1fLdcgKQs6" style="text-decoration: underline;">this form</a></div>
                <div class="faq-question">How do I earn Series points?</div>
                <div class="faq-response">All information about SP is <a href="https://docs.google.com/document/d/18wTJArFtlqLXcjPEdIfbWnb7HJMZQhoCgstRNP8wJZY/edit?usp=sharing" style="text-decoration: underline;">on this google doc</a> </div>
                <div class="faq-question">How do I get ELO?</div>
                <div class="faq-response">Play games against others with the competitive ruleset and send the results to Diya</div>
            </div>

            <div class="obligatory">
                Created by Diya Shakoor. <br> <br>
                <a href="https://github.com/BIGGPIU/biggpiu.github.io/tree/main/Compete" style="color:white;"> <i class="fa fa-github" style="font-size:20px"></i> Check out the source code on Github</a> <br><br>
                <a href="https://start.gg/BMHS" style="color:white; text-decoration: underline;"> View Our Start.gg Page</a> <br><br>
                This page is not managed by or affiliated with Bishop Mcnamara High School
            </div>
            
            <script src="scroll.js"></script>
        </html>
"""
        f.write(string)


if __name__ == "__main__":
    os.chdir(r"C:\Users\diyaj\Downloads\Recommend me stuff!\New folder\biggpiu.github.io\Compete")
    try:
        #os.remove("index.html")
        pass
    except:
        pass
    hold = GETinfofromDB()
    MAKEinfointoHTML(hold)