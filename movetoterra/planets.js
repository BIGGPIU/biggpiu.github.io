let cyclepng = document.getElementById("cyclepng")
let loading = document.getElementById("loading")
let cover = document.getElementsByClassName("cover")
cover = cover[0]
let images = ['168012aec643913546d97a12a4e5bfec.png', '20229c7e632455b37120e19b063904ba.png', '23ef9023875f32e7f57f2191157f8395.png', '2420dc5086155f955fe3fb001a4b4ef8.png', '3700d7cf66dbef56022921e47aa82432.png', '4343bc684076eb4158bbebe38e3427e2.png', '4b59359ef592ac4b5ea364c737ae931d.png', '54e80611f82e4f4a594500da0e8dffb5.png', '59141e9d51d3dff05eb692ce361e45e8.png', '6492653c2305fa97f8629858847f35c4.png', '7217b409814f4bd6cc1050f4b8c846db.png', '76959d5e7bbba985ffd721058cebdb92.png', '80dadd9fe442f085d4705d73b9a7babc.png', '8e783ff654519fcdfc3a6367e3d552c9.png', '9959ff8e43548c4dfcc3f2829b3b14dd.png', 'a11d69750b2350bb2cface920df3ec89.png', 'ab8243899bac3a69eac13af209613f6c.png', 'b226db7c998ca7364a175a394986cf8d.png', 'b537f8406d43435bde376f25c3bebeaf.png', 'bbbba8d975ece5b321b1779a2357853f.png', 'c514e6a236c9958d253cb2c48256464b.png', 'c8a3469abf2dbae13748992390bbde18.png', 'c8f61e01d2efa52e5a4506b66a1f8821.png', 'ccae1cc23715a84386666525f7eb9f68.png', 'd72dc7bc66b796030f9c1a93e3cc2aa3.png', 'e3aed05a2ce37c24b33fb07132f1e242.png', 'ee8998cab28fa5439403f82dc85db578.png', 'f1f71af0d77753bceca5f5033836ef0d.png', 'f3cee0c5b5621aef382548c84ccf591a.png', 'f7e9ecf07be3210ac4abf9e25d906928.png', 'fa66f4f8d9516829489f580139239073.png', 'fe20b06343d40aeee48d0b07df60d793.png']
let imagesmaxlen = images.length;
var randomint;
let innerchar = "."
let timeframe = 1000
let splashscreen = document.getElementById("splash-screen")
let ubound = 1
let previous = 0


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function Is_even(num) {
    // time complexity: O(IDK)
    return "I dont know man"
}

function Scrollup() {
    console.log("1")
}

function rotateThroughImages() {
    randomint = Math.floor(Math.random() * imagesmaxlen)
    console.log(randomint)
    cyclepng.setAttribute("src","./planetsprj/"+images[randomint])
    loading.innerText += innerchar
    setTimeout(rotateThroughImages,timeframe)
}


rotateThroughImages();



sleep(7000).then(() => {
    timeframe = 999999999
    loading.innerText = "DONE!"
    innerchar = ""
    $(splashscreen).animate({
        bottom:"+=100%"
    },2000)

    document.addEventListener("wheel", ((event) => {
        console.log(event.deltaY)
        console.log(ubound)
        if (event.deltaY > 1) { // if you are scrolling down
            if (previous == -1){ // if the last thing you did was scroll down

            }
            else {
                if (ubound == cover.children.length) {

                }
                else {
                    ubound++
                    previous = -1
                    $(cover).animate({
                        bottom:"+=100%"
                    },1000)

                    sleep(2000).then( () => {
                        previous = 0 
                        // yeah I dont know why but .sleep is asyncronous 
                    })
                }
            }
        }
        else {
            if (previous == 1) {

            }
            else {
                if (ubound == 1) {

                }
                else {
                    ubound += -1
                    previous = 1
                    $(cover).animate({
                        bottom:"+=-100%"
                    },1000)

                    sleep(2000).then(() => {
                        previous = 0
                    })
                }
            }
        }
    }))
})

