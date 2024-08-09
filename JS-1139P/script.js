let teamNameA,teamNameB,scoreA,scoreB;

teamNameA=window.prompt( "Birinci takımın adını giriniz: ");
teamNameB=window.prompt("İkinci takımın adını giriniz: ");
//burada kullanıcıdan takım isimlerini alıyorum


document.getElementById("name-a").innerText=teamNameA || "TEAM A";
document.getElementById("name-b").innerText=teamNameB || "TEAM B";
/*burada takım isimlerini ekrana bastırıyorum , 
eğer kullanıcı değer girmek istemediyse ödevde verildiği gibi 
team a ve team b şeklinde atamasını yapıyorum*/

let counterA=0;
function increaseScoreA(){
        counterA++;
        document.getElementById("score-a").innerText=counterA;
    }
//a takımının skor arttırması bu fonksiyonun içinde yapılıyor     





let counterB=0;
function increaseScoreB(){
    counterB++;
    document.getElementById("score-b").innerHTML=counterB; 
}


//b takımının skor arttırması bu fonksiyonun içinde yapılıyor     



function decreaseScoreA(){
    if(counterA>0){
        counterA--;
        document.getElementById("score-a").innerHTML=counterA;
    }
}

/*a takımının skorunun azalması bu fonksiyonun içinde yapılıyor ve 
skorun 0'ın altına düşmesi engelleniyor */    



function decreaseScoreB(){
    if(counterB>0){
        counterB--;
        document.getElementById("score-b").innerHTML=counterB;
    }
}

/*b takımının skorunun azalması bu fonksiyonun içinde yapılıyor ve 
skorun 0'ın altına düşmesi engelleniyor */    

function enterScoreA() {
    
    scoreA=window.prompt("Skor Giriniz"); 
        scoreA = parseInt(scoreA);
        if(!isNaN(scoreA)){
            counterA=scoreA;
            document.getElementById("score-a").innerHTML=counterA;
        }
        
        else{
            window.alert(" Girdiğiniz değer geçersiz ");
        }
}
/*burada skoru input olarak kullanıcıdan alıyoruz fakat 
skoru window.promot ile alırken değerimizi her zaman string türünde alırız 
bu sebeple öncelikle parseInt ile değeri aldığım değeri integera dönüştürüyorum
eğer girdiğim değer Nan olmuyorsa ( bu da integer girdiğim anlamına geliyor)
scoreA olarak aldığım değişkenimi counterA'ya eşitliyorum ki skor arttırıp azaltma
işlemime devam edebileyim. Eğer girdiğim değer integer değilse alert ile
ekrana geçersiz olduğunu yazdırıyorum*/





function enterScoreB() {
    
    scoreB=window.prompt("Skor Giriniz"); 
        scoreB = parseInt(scoreB);
        if(!isNaN(scoreB)){
            counterB=scoreB;
            document.getElementById("score-b").innerHTML=counterB;
    
        }
        

        else{
            window.alert(" Girdiğiniz değer geçersiz ");
        }
   
}
//yukarıdaki açıklamanın aynısın team b için de geçerli olduğu yapı