function OpeningCeremony(Race100M){

    console.log("Welcome to the sport day");

    let scores = {red:0, blue:0, green:0 , yellow:0};
    console.log("Lets the game begin");

    setTimeout(()=>{
        console.log("Scores initialized:", scores);
        Race100M(scores, LongJump);
    },1000);

}


function Race100M(scores , LongJump){
    console.log("\nThe 100 Race is Starting...");

   setTimeout(()=>{

    const times = {
           red: Math.random()*5+10,
           blue: Math.random()*5+10,
           green: Math.random()*5+10,
           yellow: Math.random()*5+10
    }
    console.log("Race Times:",times);

    const timeArr = Object.entries(times);
    const sorted = timeArr.sort(([,a],[,b])=>a-b);
    
        scores[sorted[0][0]] += 50;  
        scores[sorted[1][0]] += 25;  
        scores[sorted[2][0]] += 10;  
        scores[sorted[3][0]] += 5;

    console.log("Updated scores after 100M race:", scores);

    LongJump(scores, HighJump)

   },3000);

}


function LongJump(scores, HighJump){
    console.log("\n The Long Jump Event Starting...")

    setTimeout(()=>{
        const colors = ["red", "blue", "green", "yellow"];

        const randomColor  = colors[Math.floor(Math.random()*colors.length)];
        console.log(`The LongJump Winner is: ${randomColor}`);

        scores[randomColor] +=100;

        console.log("Update score after Long Jump:", scores);

        HighJump(scores, AwardCeremony);

    },2000)

}


function HighJump(scores, AwardCeremony){
    console.log("\n The High Jump event is starting...");

    const userInput = prompt("Enter color with higest jump(red, blue, green, yellow):");

    if(userInput && scores[userInput.toLocaleLowerCase()] !==undefined){
        scores [userInput.toLowerCase()] +=50;
        console.log(`High Jump awarded to ${userInput}`);
    }else{
        console.log("No valid inpur or incorrect color, no points awarded");
    }

    console.log("Updated scores after High Jump:", scores);
    AwardCeremony(scores);

}  

function AwardCeremony(scores){
    console.log("\nThe Award Ceremony begins...");

    const sortedScores = Object.entries(scores).sort(([,a],[,b])=>b-a);

    console.log("Final Scores:", scores);


    console.log(`1st Place: ${sortedScores[0][0]} with ${sortedScores[0][1]}`);
    console.log(`1st Place: ${sortedScores[1][0]} with ${sortedScores[1][1]}`);
    console.log(`1st Place: ${sortedScores[2][0]} with ${sortedScores[2][1]}`);
    console.log(`1st Place: ${sortedScores[3][0]} with ${sortedScores[3][1]}`);

}


OpeningCeremony(Race100M);