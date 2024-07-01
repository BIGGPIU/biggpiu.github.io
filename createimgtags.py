import os

def main(path,diff):
    hold = os.listdir(path)
    with open("temp.txt","w",encoding='utf-8') as f:
        for i in hold:
            f.write(f"<img src='charts/{diff}/{i}' alt='{i}' class='songimage'>\n")


if __name__ == "__main__":
    main("sdvxtools\picker\charts\\18",18)