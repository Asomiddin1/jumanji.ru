const BtnRoll = document.querySelector('.btn--roll');
const BtnNew = document.querySelector('.btn--new');

const diceImg = document.querySelector('.dice');
const jud = document.querySelector('.jj');

let usef = document.querySelectorAll(".j");

diceImg.style.display = "none";


let vid = document.createElement("div");

jud.innerHTML=`  <video src="just.mp4" height="1000px" width="500px" autoplay="autoplay" controls="" ></video>`




setTimeout(function() {
    jud.innerHTML= " "
}, 12000);



//varables

let ulug = 0;
let gameOver = true;


let switchPlayer = ()=> {}



let ran = [
   "Они летят, пронзая ночь.Беги от них скорее прочь.",
   "В джунгли тебя мы на время забросим ,Пока здесь не выпадет пять или восемь. ",
   "Всего один его укус Проверит кровь твою на вкус. ",
   "Трудный путь вам впадает обезьяны не пускает ",
   "Растут быстрее, чем бамбук, Но берегись их цепких рук.",
   "У него острые зубы, он хочет тебя съесть,  беги же скорей ",
   "Из чащобы из лесной, Придёт охотник за тобой. ",
   "То не гром — не обманитесь,Но беды постерегитесь.",
   "Когда увидишь серп луны встречаю сон забудь про сны ",
   "Ты от смерти на волосок где был пол забучий песок",
   "Ты нас звал — и мы в гостях.Каждый на восьми ногах.",
   "Ждёт у цели вас подвох Земля уйдет вдруг из под ног."
];




BtnRoll.addEventListener('click', ()=> {

    diceImg.style.display = "block";

    let random = Math.floor(Math.random() * 6 + 1)



    diceImg.src = `./dice-${random}.png`;

    usef[random-1 + ulug].classList = "back";
    ulug += random;


    document.getElementById("gol").innerHTML = `${ulug}`;

    App();


console.log(ran.length)




});


let App = ()=> {
    setTimeout(function() {
        let btn = document.getElementById("jb");





        if (ulug == 1) {
      btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];

        } else if (ulug == 2) {
    btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];


        } else if (ulug == 3) {
    btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];

        } else if (ulug == 4) {
    btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];

        } else if (ulug == 5) {

    btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];

        } else if (ulug == 6) {
 btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];

        } else if (ulug == 7) {
    btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];
        } else if (ulug == 8) {
    btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];

        } else if (ulug == 9) {
    btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];

        } else if (ulug == 10) {
 btn.innerHTML = ran[Math.floor(Math.random() * ran.length)]
        } else if (ulug == 11) {
      btn.innerHTML = ran[Math.floor(Math.random() * ran.length)];
        } else if (ulug == 12) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 13) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 14) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 15) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 16) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 17) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 18) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 19) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 20) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 21) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 22) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 23) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 24) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 25) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 26) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)]
        } else if (ulug == 27) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 28) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 29) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 30) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 31) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 32) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 33) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 34) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 35) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 36) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 37) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 38) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 39) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 40) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 41) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 42) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 43) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 44) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 45) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 46) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 47) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 48) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 49) {
            btn.innerHTML = ran[Math.floor(Math.random() *ran.length)];
        } else if (ulug == 50) {
            btn.innerHTML = "Jumanji";
        } 



    },
        2000);

};










BtnNew.addEventListener("click", ()=> {
    ulug = 0;

    document.getElementById("jb").innerHTML = " ";
    document.getElementById('gol').innerHTML = "0";

    diceImg.style.display = "none";



    for (let i = 0; i < usef.length; i++) {
        usef[i].classList.add('non');

    }


});