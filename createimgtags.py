import os

def main(path,diff):
    hold = os.listdir(path)
    with open("temp.txt","w",encoding='utf-8') as f:
        for i in hold:
            if ".png" in i:
                songname = i.replace(".png","")
            elif ".jpg" in i:
                songname = i.replace(".jpg","")
            f.write(f"""
                    <div class="songimage">
                        <img src='charts/{diff}/{i}' alt='{i}' class="cardsongimage"  onerror="this.onerror=null; this.src='charts/fallback.png';"">
                        <div class="songtext">{songname}</div>
                    </div>""")


if __name__ == "__main__":
    main("sdvxtools\picker\charts\\18",18)