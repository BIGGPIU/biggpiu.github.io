import os

def main(path,diff):
    hold = os.listdir(path)
    with open("temp.txt","w",encoding='utf-8') as f:
        for i in range(len(hold)):
            if ".png" in hold[i]:
                songname = hold[i].replace(".png","")
            elif ".jpg" in hold[i]:
                songname = hold[i].replace(".jpg","")
            if i == 0:
                f.write(f"""const allstages = {songname}:'{hold[i]}', """)
            else:
                f.write(f"{songname}:'{hold[i]}', ")


if __name__ == "__main__":
    main("smashpicker\data",20)