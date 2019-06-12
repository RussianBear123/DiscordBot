const Discord = require('Discord.js');
const client = new Discord.Client();
var prefix = '.';
var RANDOM = 0;



client.login(process.env.BOT_TOKEN);

function random(min, max){
    min = Math.ceil(0)
    max = Math.floor(100)
    RANDOM = Math.floor(Math.random() * (max - min +1) + min)
}
//Presence
client.on('ready', function(){
    client.user.setPresence({ game: { name: 'Jenny best waifu '}})
    console.log('bot on')

})
//Jenny
client.on("message", (message) => {
  if(message.content == prefix + "Jenny") {
    message.channel.send("Jenny best Waifu");
    console.log("Jenny")
  }

});
//Chien_ForLoop
client.on("message", (message) => {
  if(message.content == prefix + "Chien") {
    
    for(var chien = 0; chien < 5; chien++) {
    message.channel.send("Chien :dog2:");
    console.log("Chien")

  }
    
}})
// CHIEN_Image
client.on("message", (message) => {
  if(message.content == prefix + "Chien") {
    random();


    if(RANDOM <= 33){
      message.channel.send("https://cdn.discordapp.com/attachments/578982620558262287/582149917372317706/cover-r4x3w1000-57df4193050ec-chien-violence.jpg") 
    }

    else

    if(RANDOM <= 66){
      message.channel.send("https://cdn.discordapp.com/attachments/578982620558262287/582150164215496704/le-shar-pei-fb-5c45c7a502725.jpg")
    }

    else

    if(RANDOM <= 100){
      message.channel.send("https://cdn.discordapp.com/attachments/578982620558262287/582150573109936148/Capture-decran-2018-04-02-a-12.58.34-1024x755.png")
    }

    else;

  }


})
// RUSSIA    
client.on('message', function (message){
  if(message.content === prefix + 'Russia'){
       random();
       console.log("Russia")

       if(RANDOM <= 10){
         message.channel.send("https://www.youtube.com/watch?v=OpvQscOvkuU&feature=youtu.be")
        }

        else

       if(RANDOM <= 20){
         message.channel.send("https://www.youtube.com/watch?v=U06jlgpMtQs&feature=youtu.be")
        }

        else

       if(RANDOM <= 30){
         message.channel.send("https://www.youtube.com/watch?v=7J__ZdvsZaE&feature=youtu.be")
        }

        else

       if(RANDOM <= 40){
         message.channel.send("https://www.youtube.com/watch?v=OUHVRWdVQCI&feature=youtu.be")

        }

        else
       if(RANDOM <= 50){
        message.channel.send("https://www.youtube.com/watch?v=A1PAO3jgmXY&feature=youtu.be")

       }
       
       else
       if(RANDOM <= 60){
        message.channel.send("https://www.youtube.com/watch?v=QiFBgtgUtfw&feature=youtu.be")

       }

       else
       if(RANDOM <= 70){
        message.channel.send("https://www.youtube.com/watch?v=xMSGnGL8JU0&feature=youtu.be")

       }

       else
       if(RANDOM <= 80){
        message.channel.send("https://www.youtube.com/watch?v=gK2jP-gEpXQ&t=youtu.be")

       }

       else
       if(RANDOM <= 90){
        message.channel.send("https://www.youtube.com/watch?v=y90yaLFoYoA=youtu.be")
       }

       else
       
       if(RANDOM <= 100){
        message.channel.send("https://www.youtube.com/watch?v=78Y2rkilblE=youtu.be")
       }
       else;


  }

      
});
    
    
      


//     AUTISM LEVEL

client.on('message', function (message){
   if(message.content === prefix + 'Autism'){
        random();
        console.log("Autism")
       

        if(RANDOM === 0){
            message.channel.send('Tu es 0% autiste ')
            
        }    
        if(RANDOM === 1){      
            message.channel.send('Tu es 1% autiste ')
        }
      
        if(RANDOM === 2){
           message.channel.send('Tu es 2% autiste ') 
        }
        if(RANDOM=== 3){
          message.channel.send('Tu es 3% autiste ')
        }
        if(RANDOM === 4){
          message.channel.send('Tu es 4% autiste ')
        }
        if(RANDOM === 5){
          message.channel.send('Tu es 5% autiste ')
        }
        if(RANDOM === 6){
          message.channel.send('Tu es 6% autiste ')
        }
        if(RANDOM === 7){
          message.channel.send('Tu es 7% autiste ')
        }
        if(RANDOM === 8){
          message.channel.send('Tu es 8% autiste ')
        }
        if(RANDOM === 9){
          message.channel.send('Tu es 9% autiste ')
        }
        if(RANDOM === 10){
          message.channel.send('Tu es 10% autiste ')
        }
        if(RANDOM === 11){
          message.channel.send('Tu es 11% autiste ')
        }
        if(RANDOM === 12){
          message.channel.send('Tu es 12% autiste ')
        }
        if(RANDOM === 13){
          message.channel.send('Tu es 13% autiste ')
        }
        if(RANDOM === 14){
          message.channel.send('Tu es 14% autiste ')
        }
        if(RANDOM === 15){
          message.channel.send('Tu es 15% autiste ')
        }
        if(RANDOM === 16){
          message.channel.send('Tu es 16% autiste ')
        }
        if(RANDOM === 17){
          message.channel.send('Tu es 17% autiste ')
        }
        if(RANDOM === 18){
          message.channel.send('Tu es 18% autiste ')
        }
        if(RANDOM === 19){
          message.channel.send('Tu es 19% autiste ')
        }
        if(RANDOM === 20){
          message.channel.send('Tu es 20% autiste ')
        }
        if(RANDOM === 21){
          message.channel.send('Tu es 21% autiste ')
        }
        if(RANDOM === 22){
          message.channel.send('Tu es 22% autiste ')
        }
        if(RANDOM === 23){
          message.channel.send('Tu es 23% autiste ')
        }
        if(RANDOM === 24){
          message.channel.send('Tu es 24% autiste ')
        }
        if(RANDOM === 25){
          message.channel.send('Tu es 25% autiste ')
        }
        if(RANDOM === 26){
          message.channel.send('Tu es 26% autiste ')
        }
        if(RANDOM === 27){
          message.channel.send('Tu es 27% autiste ')
        }
        if(RANDOM === 28){
          message.channel.send('Tu es 28% autiste ')
        }
        if(RANDOM === 29){
          message.channel.send('Tu es 29% autiste ')
        }
        if(RANDOM === 30){
          message.channel.send('Tu es 30% autiste ')
        }
        if(RANDOM === 31){
          message.channel.send('Tu es 31% autiste ')
        }
        if(RANDOM === 32){
          message.channel.send('Tu es 32% autiste ')
        }
        if(RANDOM === 33){
          message.channel.send('Tu es 33% autiste ')
        }
        if(RANDOM === 34){
          message.channel.send('Tu es 34% autiste ')
        }
        if(RANDOM === 35){
          message.channel.send('Tu es 35% autiste ')
        }
        if(RANDOM === 36){
          message.channel.send('Tu es 36% autiste ')
        }
        if(RANDOM === 37){
          message.channel.send('Tu es 37% autiste ')
        }
        if(RANDOM === 38){
          message.channel.send('Tu es 38% autiste ')
        }
        if(RANDOM === 39){
          message.channel.send('Tu es 39% autiste ')
        }
        if(RANDOM === 40){
          message.channel.send('Tu es 40% autiste ')
        }
        if(RANDOM === 41){
          message.channel.send('Tu es 41% autiste ')
        }
        if(RANDOM === 42){
          message.channel.send('Tu es 42% autiste ')
        }
        if(RANDOM === 43){
          message.channel.send('Tu es 43% autiste ')
        }
        if(RANDOM === 44){
          message.channel.send('Tu es 44% autiste ')
        }
        if(RANDOM === 45){
          message.channel.send('Tu es 45% autiste ')
        }
        if(RANDOM === 46){
          message.channel.send('Tu es 46% autiste ')
        }
        if(RANDOM === 47){
          message.channel.send('Tu es 47% autiste ')
        }
        if(RANDOM === 48){
          message.channel.send('Tu es 48% autiste ')
        }
        if(RANDOM === 49){
          message.channel.send('Tu es 49% autiste ')
        }
        if(RANDOM === 50){
          message.channel.send('Tu es 50% autiste ')
        }
        if(RANDOM === 51){
          message.channel.send('Tu es 51% autiste ')
        }
        if(RANDOM === 52){
          message.channel.send('Tu es 52% autiste ')
        }
        if(RANDOM === 53){
          message.channel.send('Tu es 53% autiste ')
        }
        if(RANDOM === 54){
          message.channel.send('Tu es 54% autiste ')
        }
        if(RANDOM === 55){
          message.channel.send('Tu es 55% autiste ')
        }
        if(RANDOM === 56){
          message.channel.send('Tu es 56% autiste ')
        }
        if(RANDOM === 57){
          message.channel.send('Tu es 57% autiste ')
        }
        if(RANDOM === 58){
          message.channel.send('Tu es 58% autiste ')
        }
        if(RANDOM === 59){
          message.channel.send('Tu es 59% autiste ')
        }
        if(RANDOM === 60){
          message.channel.send('Tu es 60% autiste ')
        }
        if(RANDOM === 61){
          message.channel.send('Tu es 61% autiste ')
        }
        if(RANDOM === 62){
          message.channel.send('Tu es 62% autiste ')
        }
        if(RANDOM === 63){
          message.channel.send('Tu es 63% autiste ')
        }
        if(RANDOM === 64){
          message.channel.send('Tu es 64% autiste ')
        }
        if(RANDOM === 65){
          message.channel.send('Tu es 65% autiste ')
        }
        if(RANDOM === 66){
          message.channel.send('Tu es 66% autiste ')
        }
        if(RANDOM === 67){
          message.channel.send('Tu es 67% autiste ')
        }
        if(RANDOM === 68){
          message.channel.send('Tu es 68% autiste ')
        }
        if(RANDOM === 69){
          message.channel.send('Tu es 69% autiste ')
        }
        if(RANDOM === 70){
          message.channel.send('Tu es 70% autiste ')
        }
        if(RANDOM === 71){
          message.channel.send('Tu es 71% autiste ')
        }
        if(RANDOM === 72){
          message.channel.send('Tu es 72% autiste ')
        }
        if(RANDOM === 73){
          message.channel.send('Tu es 73% autiste ')
        }
        if(RANDOM === 74){
          message.channel.send('Tu es 74% autiste ')
        }
        if(RANDOM === 75){
          message.channel.send('Tu es 75% autiste ')
        }
        if(RANDOM === 76){
          message.channel.send('Tu es 76% autiste ')
        }
        if(RANDOM === 77){
          message.channel.send('Tu es 77% autiste ')
        }
        if(RANDOM === 78){
          message.channel.send('Tu es 78% autiste ')
        }
        if(RANDOM === 79){
          message.channel.send('Tu es 79% autiste ')
        }
        if(RANDOM === 80){
          message.channel.send('Tu es 80% autiste ')
        }
        if(RANDOM === 81){
          message.channel.send('Tu es 81% autiste ')
        }
        if(RANDOM === 82){
          message.channel.send('Tu es 82% autiste ')
        }
        if(RANDOM === 83){
          message.channel.send('Tu es 83% autiste ')
        }
        if(RANDOM === 84){
          message.channel.send('Tu es 84% autiste ')
        }
        if(RANDOM === 85){
          message.channel.send('Tu es 85% autiste ')
        }
        if(RANDOM === 86){
          message.channel.send('Tu es 86% autiste ')
        }
        if(RANDOM === 87){
          message.channel.send('Tu es 87% autiste ')
        }
        if(RANDOM === 88){
          message.channel.send('Tu es 88% autiste ')
        }
        if(RANDOM === 89){
          message.channel.send('Tu es 89% autiste ')
        }
        if(RANDOM === 90){
          message.channel.send('Tu es 90% autiste ')
        }
        if(RANDOM === 91){
          message.channel.send('Tu es 91% autiste ')
        }
        if(RANDOM === 92){
          message.channel.send('Tu es 92% autiste ')
        }
        if(RANDOM === 93){
          message.channel.send('Tu es 93% autiste ')
        }
        if(RANDOM === 94){
          message.channel.send('Tu es 94% autiste ')
        }
        if(RANDOM === 95){
          message.channel.send('Tu es 95% autiste ')
        }
        if(RANDOM === 96){
          message.channel.send('Tu es 96% autiste ')
        }
        if(RANDOM === 97){
          message.channel.send('Tu es 97% autiste ') 
        }
        if(RANDOM === 98){
          message.channel.send('Tu es 98% autiste ')
        }
        if(RANDOM === 99){
          message.channel.send('Tu es 99% autiste ')
        }
        if(RANDOM === 100){
          message.channel.send('Tu es 100% autiste ')
        }
      }
    
});

//   RUSKI LEVEL

client.on('message', function (message){
    if(message.content === prefix + 'Ruski'){
       random();
       console.log("Ruski")
      

       if(RANDOM === 0){
           message.channel.send('Tu es 0% russian ')
           
        }    
       if(RANDOM === 1){      
           message.channel.send('Tu es 1% russian ')
        }
     
       if(RANDOM === 2){
          message.channel.send('Tu es 2% russian ') 
        }
       if(RANDOM=== 3){
         message.channel.send('Tu es 3% russian ')
        }
       if(RANDOM === 4){
         message.channel.send('Tu es 4% russian ')
        }
       if(RANDOM === 5){
         message.channel.send('Tu es 5% russian ')
        }
       if(RANDOM === 6){
         message.channel.send('Tu es 6% russian ')
        }
       if(RANDOM === 7){
         message.channel.send('Tu es 7% russian ')
        }
       if(RANDOM === 8){
         message.channel.send('Tu es 8% russian ')
        }
       if(RANDOM === 9){
         message.channel.send('Tu es 9% russian ')
        }
       if(RANDOM === 10){
         message.channel.send('Tu es 10% russian ')
        }
       if(RANDOM === 11){
         message.channel.send('Tu es 11% russian ')
        }
       if(RANDOM === 12){
         message.channel.send('Tu es 12% russian ')
        }
       if(RANDOM === 13){
         message.channel.send('Tu es 13% russian ')
        }
       if(RANDOM === 14){
         message.channel.send('Tu es 14% russian ')
        }
       if(RANDOM === 15){
         message.channel.send('Tu es 15% russian ')
        }
       if(RANDOM === 16){
         message.channel.send('Tu es 16% russian ')
        }
       if(RANDOM === 17){
         message.channel.send('Tu es 17% russian ')
        }
       if(RANDOM === 18){
         message.channel.send('Tu es 18% russian ')
        }
       if(RANDOM === 19){
         message.channel.send('Tu es 19% russian ')
        }
       if(RANDOM === 20){
         message.channel.send('Tu es 20% russian ')
        }
       if(RANDOM === 21){
         message.channel.send('Tu es 21% russian ')
        }
       if(RANDOM === 22){
         message.channel.send('Tu es 22% russian ')
        }
       if(RANDOM === 23){
         message.channel.send('Tu es 23% russian ')
        }
       if(RANDOM === 24){
         message.channel.send('Tu es 24% russian ')
        }
       if(RANDOM === 25){
         message.channel.send('Tu es 25% russian ')
        }
       if(RANDOM === 26){
         message.channel.send('Tu es 26% russian ')
        }
       if(RANDOM === 27){
         message.channel.send('Tu es 27% russian ')
        }
       if(RANDOM === 28){
         message.channel.send('Tu es 28% russian ')
        }
       if(RANDOM === 29){
         message.channel.send('Tu es 29% russian ')
        }
       if(RANDOM === 30){
         message.channel.send('Tu es 30% russian ')
        }
       if(RANDOM === 31){
         message.channel.send('Tu es 31% russian ')
        }
       if(RANDOM === 32){
         message.channel.send('Tu es 32% russian ')
        }
       if(RANDOM === 33){
         message.channel.send('Tu es 33% russian ')
        }
       if(RANDOM === 34){
         message.channel.send('Tu es 34% russian ')
        }
       if(RANDOM === 35){
         message.channel.send('Tu es 35% russian ')
        }
       if(RANDOM === 36){
         message.channel.send('Tu es 36% russian ')
        }
       if(RANDOM === 37){
         message.channel.send('Tu es 37% russian ')
        }
       if(RANDOM === 38){
         message.channel.send('Tu es 38% russian ')
        }
       if(RANDOM === 39){
         message.channel.send('Tu es 39% russian ')
        }
       if(RANDOM === 40){
         message.channel.send('Tu es 40% russian ')
        }
       if(RANDOM === 41){
         message.channel.send('Tu es 41% russian ')
        }
       if(RANDOM === 42){
         message.channel.send('Tu es 42% russian ')
        }
       if(RANDOM === 43){
         message.channel.send('Tu es 43% russian ')
        }
       if(RANDOM === 44){
         message.channel.send('Tu es 44% russian ')
        }
       if(RANDOM === 45){
         message.channel.send('Tu es 45% russian ')
        }
       if(RANDOM === 46){
         message.channel.send('Tu es 46% russian ')
        }
       if(RANDOM === 47){
         message.channel.send('Tu es 47% russian ')
        }
       if(RANDOM === 48){
         message.channel.send('Tu es 48% russian ')
        }
       if(RANDOM === 49){
         message.channel.send('Tu es 49% russian ')
        }
       if(RANDOM === 50){
         message.channel.send('Tu es 50% russian ')
        }
       if(RANDOM === 51){
         message.channel.send('Tu es 51% russian ')
        }
       if(RANDOM === 52){
         message.channel.send('Tu es 52% russian ')
        }
       if(RANDOM === 53){
         message.channel.send('Tu es 53% russian ')
        }
       if(RANDOM === 54){
         message.channel.send('Tu es 54% russian ')
        }
       if(RANDOM === 55){
         message.channel.send('Tu es 55% russian ')
        }
       if(RANDOM === 56){
         message.channel.send('Tu es 56% russian ')
        }
       if(RANDOM === 57){
         message.channel.send('Tu es 57% russian ')
        }
       if(RANDOM === 58){
         message.channel.send('Tu es 58% russian ')
        }
       if(RANDOM === 59){
         message.channel.send('Tu es 59% russian ')
        }
       if(RANDOM === 60){
         message.channel.send('Tu es 60% russian ')
        }
       if(RANDOM === 61){
         message.channel.send('Tu es 61% russian ')
        }
       if(RANDOM === 62){
         message.channel.send('Tu es 62% russian ')
        }
       if(RANDOM === 63){
         message.channel.send('Tu es 63% russian ')
        }
       if(RANDOM === 64){
         message.channel.send('Tu es 64% russian ')
        }
       if(RANDOM === 65){
         message.channel.send('Tu es 65% russian ')
        }
       if(RANDOM === 66){
         message.channel.send('Tu es 66% russian ')
        }
       if(RANDOM === 67){
         message.channel.send('Tu es 67% russian ')
        }
       if(RANDOM === 68){
         message.channel.send('Tu es 68% russian ')
        }
       if(RANDOM === 69){
         message.channel.send('Tu es 69% russian ')
        }
       if(RANDOM === 70){
         message.channel.send('Tu es 70% russian ')
        }
       if(RANDOM === 71){
         message.channel.send('Tu es 71% russian ')
        }
       if(RANDOM === 72){
         message.channel.send('Tu es 72% russian ')
        }
       if(RANDOM === 73){
         message.channel.send('Tu es 73% russian ')
        }
       if(RANDOM === 74){
         message.channel.send('Tu es 74% russian ')
        }
       if(RANDOM === 75){
         message.channel.send('Tu es 75% russian ')
        }
       if(RANDOM === 76){
         message.channel.send('Tu es 76% russian ')
        }
       if(RANDOM === 77){
         message.channel.send('Tu es 77% russian ')
        }
       if(RANDOM === 78){
         message.channel.send('Tu es 78% russian ')
        }
       if(RANDOM === 79){
         message.channel.send('Tu es 79% russian ')
        }
       if(RANDOM === 80){
         message.channel.send('Tu es 80% russian ')
        }
       if(RANDOM === 81){
         message.channel.send('Tu es 81% russian ')
        }
       if(RANDOM === 82){
         message.channel.send('Tu es 82% russian ')
        }
       if(RANDOM === 83){
         message.channel.send('Tu es 83% russian ')
        }
       if(RANDOM === 84){
         message.channel.send('Tu es 84% russian ')
        }
       if(RANDOM === 85){
         message.channel.send('Tu es 85% russian ')
        }
       if(RANDOM === 86){
         message.channel.send('Tu es 86% russian ')
        }
       if(RANDOM === 87){
         message.channel.send('Tu es 87% russian ')
        }
       if(RANDOM === 88){
         message.channel.send('Tu es 88% russian ')
        }
       if(RANDOM === 89){
         message.channel.send('Tu es 89% russian ')
        }
       if(RANDOM === 90){
         message.channel.send('Tu es 90% russian ')
        }
       if(RANDOM === 91){
         message.channel.send('Tu es 91% russian ')
        }
       if(RANDOM === 92){
         message.channel.send('Tu es 92% russian ')
        }
       if(RANDOM === 93){
         message.channel.send('Tu es 93% russian ')
        }
       if(RANDOM === 94){
         message.channel.send('Tu es 94% russian ')
        }
       if(RANDOM === 95){
         message.channel.send('Tu es 95% russian ')
        }
       if(RANDOM === 96){
         message.channel.send('Tu es 96% russian ')
        }
       if(RANDOM === 97){
         message.channel.send('Tu es 97% russian ') 
        }
       if(RANDOM === 98){
         message.channel.send('Tu es 98% russian ')
        }
       if(RANDOM === 99){
         message.channel.send('Tu es 99% russian ')
        }

       if(RANDOM === 100){
       
          message.channel.send('Tu es 100% russian ');
          message.channel.send(message.member.user.username + ' est maintenant un Big Russe :flag_ru: ');

          let role = message.guild.roles.find(r => r.name === "Big Russe");
          let member = message.member;
          member.addRole(role).catch(console.error);
       }
      }
    })
  
