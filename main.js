function msg() {
  var par=document.getElementById('parent');
  var butt=document.getElementById('butt');
  butt.remove();
  par.innerHTML+=("I am Rajdeep Dey <br>Thank you and sorry Aditi.....Thankyou for treating me so well and respecting .....actully i dont get comfortable around people so easily.. ...I can't even talk so comfortabley at my own home.....but i was vey comfortable to talk to you so thank you....And sorry if i have ever misbehaved with you .....i didn't came myself to say this as you may be irritated or annoyed because of what i said you on 2nd feb 2024...and yes that is quit obvious to get irrited....sorry for that too.....and one more thing....I am working on a social media project and you are my inspiration.....i am using a part of your name and want to name it as AdiNet....its porpuse is to provide controled and responsible content having 100% restrictions on nud*ty and 90% restrictions on vulgarity....i wasnt like this from the begining .....amar modheo 'Tharak' chilo ....ami o bhab tam je ei gulo khub normal ....but jebha bhe tumi amake respect korcho i understood what is respect and boundaries....ar shob chere diche.... Thanks for that too....ar ek ta request .....plz contact koro...je tumi ei name er jono agree koro ki na plz.......ami direct email integration er jono time pelam na so please messge on +91 7363836214 or  insta:rajdeepdey8075 or even email: deyrajdeep569@gmail.com plz plz ...and plz can we be friend again like before plz... <h1>and ashirwad dijiye devi ji project ke liye🙏😅</h1>...<br><img src='200w.gif'><br> <h5>for misbehaving🙏</h5><br><img src='/file-PscAyVLd5AU5e5meHLKDAX.webp' height=100px><br><h3>if yes plz contact me <br>+91 7363836214<br>insta:rajdeepdey8075<br>gmail:deyrajdeep569@gmail.com</h3><br><video src='/VID-20250312-WA0005.mp4' controls id=vid height=300px width=300px><br><input type=button value=fullScreen id=full>")
  
}
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("vid");
    var vu=document.getElementById("full")

    vu.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    });
});