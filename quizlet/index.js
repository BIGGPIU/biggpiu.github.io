const intro = document.getElementById("introscreen");
const screen1 = document.getElementById("screen1")
let confidence = 0;
let reps = 1;
let QuestionNumber = 1;
let alladults = ""; //man what the fuck is going on with my naming
let CorrectAnswer = [];
let quotesfuckedmeover = "onclick='CreateSet" + '("Learn",true)'+"'"
let keepitup = '<div class="cardcontainer">\n'
+'  <div class="card">\n'
+'      <div class="questioncontainer">'
+'          <div class="questiondiv">'+'Keep Up The Good Work!'+'</div>'
+'      </div>'
+'      <div class="answercontainer">'
+'          <div class="freakyblock">'
+'              <div class="freakydiv" '+quotesfuckedmeover +'>'
+'                  <div class="answertext clicktocontinue">'+ 'Click me to continue' + '</div>'
+'              </div>'
+'          </div>'
+'      </div>'
+'  </div>'
+'</div>'

// let string = '<div class="cardcontainer">\n'
// +'  <div class="card">\n'
// +'      <div class="questioncontainer">'
// +'          <div class="questiondiv">'
// +'   </div>'
// + '</div>'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function scramble(list) {
    // mixes all of the elements in a list up 
    let max = list.length
    let newlist = []
    while (newlist.length != max) {
        hold = Math.floor(Math.random() * max)
        if (newlist.includes(list[hold])) {
            //do nothing
        }
        else {
            newlist.push(list[hold])
        }
    }

    return newlist
}

function createtextbox(question) {
    string = '<div class="cardcontainer">\n'
+'  <div class="card">\n'
+'      <div class="questioncontainer">'
+'          <div class="questiondiv">'+question+'</div>'
+'      </div>'
+'      <div class="answercontainer">'
+'          <div class="textanswerblock">'
+'              <div class="textanswerdiv">'
+'                  <div class="correctorwrong">helloworld</div>'
+'                  <input class="answertextbox"></input>'
+'                  <div class="freakysubmitbutton">' //chat we're getting fired for this one 
+'                      <div class="freakycontainer"><img src="./fonts/arrow-right-solid.svg" class="centerarrow"> </img></div>'
+'                  </div>'
+'              </div>'
+'          </div>'
+'      </div>'
+'  </div>'
+'</div>'
    return string
}

function createstring(question,AllPossibleAnswerList) {
    // incorrect list has a MAX of 3 and  MIN of 3 so make it three or else
    // correct has a MAX of 1 and a MIN of 1 so make it one or else
    let answerorder = scramble(AllPossibleAnswerList)
    let string = '<div class="cardcontainer">\n'
+'  <div class="card">\n'
+'      <div class="questioncontainer">'
+'          <div class="questiondiv">'+question+'</div>'
+'      </div>'
+'      <div class="answercontainer">'
+'          <div class="answerblock">'
+'              <div class="answerdiv">'
+'                  <div class="answertext">'+ answerorder[0] + '</div>'
+'              </div>'
+'          </div>'
+'          <div class="answerblock">'
+'              <div class="answerdiv">'
+'                  <div class="answertext">'+ answerorder[1] + '</div>'
+'              </div>'
+'          </div>'
+'          <div class="answerblock">'
+'              <div class="answerdiv">'
+'                  <div class="answertext">'+ answerorder[2] + '</div>'
+'              </div>'
+'          </div>'
+'          <div class="answerblock">'
+'              <div class="answerdiv">'
+'                  <div class="answertext">'+ answerorder[3] + '</div>'
+'              </div>'
+'          </div>'
+'   </div>'
+ '</div>'
    return string
}


intro.addEventListener("click", function() {
    intro.setAttribute("class","remove")
})

function GetRandomNumber( Max,Returnamnt,Refrain ) {
    let mem = []
    let hold = 0
    // I feel like this scales like shit 
    while (mem.length != Returnamnt) {
        hold = Math.floor(Math.random() * Max)
        if (mem.includes(hold) || hold == Refrain) {
            //do nothing
        }
        else {
            mem.push(hold)
            hold = 0
        }
    }
    return mem
}


function addtwonumbers(x,y) {
    // I did this to add two numbers in O(1) time complexity and O(1/2) Space complexity
    return x
}

function CreateSet( check, cyclecheck) {
    // let Quizletset = $("quizletimport").val()
    let rawQuizletset = document.getElementById("quizletimport")
    let Quizletset = document.getElementById("quizletimport").value;
    console.log(Quizletset);
    if (Quizletset.length != 0 ) {
        screen1.setAttribute("class","remove")

        switch (check) {
            case ("Learn"):
                CreateLearnSet( Quizletset );
                if (cyclecheck === true) {
                    cycle(500*reps)
                    QuestionNumber += -1
                    reps++
                }
                break;
            case ("Test"):
                CreateTestSet( Quizletset );
                break;
        };
    }
    else {
        rawQuizletset.setAttribute("Placeholder","Do not leave this text box empty")
    }
}

function CreateLearnSet( importQuestionset ) {
    // Returns a set of questions and answers used for further processing
    let Questionset = importQuestionset.split("#")
    Questionset.pop()
    let questions = []
    let answers = []

    for (let i = 0; i < Questionset.length; i++) {
        let x = Questionset[i]
        x = x.split("-")
        questions.push(x[0])
        answers.push(x[1])
    }

    CreateCards(questions,answers)
}

function CreateTestSet( Questionset ) {

}



function CreateCards( questions,answers ) {
    let nums = []
    let k = 0;
    let appendhtml = ""
    let incorrect1 = ""
    let incorrect2 = ""
    let incorrect3 = ""
    let answer = ""
    let answerblocks = "";
    let textanswerblock = "";
    let allparents = "";
    let antienter = "";
    if (confidence > questions.length/2){
        for (let i = 0; i < questions.length; i++) {
            coinflip = GetRandomNumber(2,1,3) 
            if (coinflip == 1) {
                appendhtml = createtextbox(questions[i])
                CorrectAnswer.push(answers[i])
            }
            else {
                nums = GetRandomNumber(answers.length,3,i)
                CorrectAnswer.push(answers[i])
                answer = answers[i]
                incorrect1 = answers[nums[0]]
                incorrect2 = answers[nums[1]]
                incorrect3 = answers[nums[2]]
                appendhtml = createstring(questions[i],[incorrect1,incorrect2,incorrect3,answer])
            }
            $( "#screen2" ).append(appendhtml)
        }
    }
    else {
        for (let i = 0; i < questions.length; i++) {
            nums = GetRandomNumber(answers.length,3,i)
            CorrectAnswer.push(answers[i])
            answer = answers[i]
            incorrect1 = answers[nums[0]]
            incorrect2 = answers[nums[1]]
            incorrect3 = answers[nums[2]]
            appendhtml = createstring(questions[i],[incorrect1,incorrect2,incorrect3,answer])
            $( "#screen2" ).append(appendhtml)
        }
    }
    alladults = document.getElementById("screen2").children
    answerblocks = document.getElementsByClassName("answerdiv")
    textanswerblock = document.getElementsByClassName("answertextbox")
    // antienter = document.getElementsByClassName()
    $(" #screen2 ").append(keepitup)
    for (let i = 0; i < answerblocks.length; i++) {
        answerblocks[i].addEventListener("click",function() {
            if (CheckAnswer(this.innerText) == false) {
                console.log(this)
                allparents = this.parentElement.parentElement.children
                setwrongflash(allparents)
                cycle(100)
            }
            else {
                confidence++
                this.setAttribute("id","correctflash")
                cycle(100)
            }
        })
    }
    for (let i = 0; i < textanswerblock.length; i++) {
        textanswerblock[i].addEventListener("keypress",function(e) {
            if (e.key === "Enter") {
                console.log(this.value)
                k = stringSimilarity.compareTwoStrings(this.value,CorrectAnswer[QuestionNumber-1])
                console.log(k)
                console.log(CorrectAnswer[QuestionNumber-1])
                if (k > 0.7) {
                    confidence++
                    this.parentElement.children[0].innerText = "Correct"
                    this.parentElement.children[0].setAttribute("class","textflashright correctorwrong")
                    cycle( 100 )
                }
                else {
                    this.parentElement.children[0].innerText = "Incorrect"
                    this.parentElement.children[0].setAttribute("class","textflashwrong correctorwrong")
                    cycle( 100 )
                }
            }
        })
    }
}

function setwrongflash( NodeObject ) {
    for (let i = 0; i < NodeObject.length; i++) {
        if (CorrectAnswer[QuestionNumber-1].includes(NodeObject[i].children[0].innerText)) {
            NodeObject[i].children[0].setAttribute("id","correctflash")
        }
        else {
            NodeObject[i].children[0].setAttribute("id","wrongflash")
        }
    }
}

function CheckAnswer( innerhtml ) {
    if (CorrectAnswer[QuestionNumber-1].includes(innerhtml)) {
        console.log("true")
        return true
    }
    else {
        console.log("false")
        return false
    }
}


function cycle( val ) {
    QuestionNumber++
    sleep(3000).then(() => {
        $('.cardcontainer').animate({
            top:"-="+val+"%"
        },1000)
        
    })
}