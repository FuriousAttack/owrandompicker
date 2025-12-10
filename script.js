const kSUPPORT = "Support";
const kDAMAGE = "Damage";
const kTANK = "Tank";

var heroList = new Array;
var supportHeroList = new Array;
var damageHeroList = new Array;
var tankHeroList = new Array;
var heroImage = null;

var currentHeroSelection = null;
var currentTankSelection = null;
var currentDamageSelection = null;
var currentSupportSelection = null;

class Hero 
{
    constructor(role, image, name) 
    {
        this.Role = role;
        this.Image = image;
        this.Name = name
        this.Status;
    }
}

function addSupportHerosToLists()
{
    Ana = new Hero(kSUPPORT, "assets/Ana.png", "Ana");
    heroList.push(Ana);
    supportHeroList.push(Ana);

    Baptiste = new Hero(kSUPPORT, "assets/Baptiste.png", "Baptiste");
    heroList.push(Baptiste);
    supportHeroList.push(Baptiste);

    Brigitte = new Hero(kSUPPORT, "assets/Brigitte.png", "Brigitte");
    heroList.push(Brigitte);
    supportHeroList.push(Brigitte);

    Juno = new Hero(kSUPPORT, "assets/Juno.png", "Juno")
    heroList.push(Juno);
    supportHeroList.push(Juno);

    Kiriko = new Hero(kSUPPORT, "assets/Kiriko.png", "Kiriko")
    heroList.push(Kiriko);
    supportHeroList.push(Kiriko);

    Lúcio  = new Hero(kSUPPORT, "assets/Lucio.png", "Lúcio")
    heroList.push(Lúcio);
    supportHeroList.push(Lúcio);

    Lifeweaver = new Hero(kSUPPORT, "assets/Lifeweaver.png", "Lifeweaver")
    heroList.push(Lifeweaver);
    supportHeroList.push(Lifeweaver);

    Mercy = new Hero(kSUPPORT, "assets/Mercy.png", "Mercy")
    heroList.push(Mercy);
    supportHeroList.push(Mercy);

    Moira = new Hero(kSUPPORT, "assets/Moira.png", "Moira")
    heroList.push(Moira);
    supportHeroList.push(Moira);

    Wuyang = new Hero(kSUPPORT, "assets/Wuyang.png", "Wuyang")
    heroList.push(Wuyang);
    supportHeroList.push(Wuyang);

    Zenyatta = new Hero(kSUPPORT, "assets/Zenyatta.png", "Zenyatta")
    heroList.push(Zenyatta);
    supportHeroList.push(Zenyatta);

    currentSupportSelection = supportHeroList;

}

function pickRandomHero()
{
    if (currentHeroSelection == null)
    {
        let min = 0;
        let max = heroList.length;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    else
    {
        let min = 0;
        let max = currentHeroSelection.length;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function pickRandomTank()
{
    if (currentHeroSelection == null)
    {
        let min = 0;
        let max = tankHeroList.length;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    else
    {
        let min = 0;
        let max = currentHeroSelection.length;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function pickRandomDamage()
{

    if (currentHeroSelection == null)
    {
        let min = 0;
        let max = damageHeroList.length;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    else
    {
        let min = 0;
        let max = currentHeroSelection.length;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function pickRandomSupport()
{
<<<<<<< HEAD:Ow Iron man project/script.js
    var doc;
=======
>>>>>>> 559b8cc86c1c57cd5da1b83bc7388c3f05a2a86a:script.js

   if (currentSupportSelection.length != 0)
    {
        let min = 0;
        let max = supportHeroList.length;
        let randomHero = Math.floor(Math.random() * (max - min + 1)) + min;
<<<<<<< HEAD:Ow Iron man project/script.js


        
        doc = document.getElementById("imageContainer");
        if (heroImage != null)
        {
            doc.removeChild(heroImage);
        }
       

        heroImage = document.createElement("img");
        heroImage.src = currentSupportSelection[randomHero].Image;
       
        doc.appendChild(heroImage);

        currentSupportSelection.splice(randomHero, 1);
        console.log(currentSupportSelection.length);
=======
        
        var img = document.createElement("img");
        img.src = supportHeroList[randomHero].Image;
        var doc = document.getElementById("imageContainer");
        doc.appendChild(img);

        currentSupportSelection = supportHeroList.filter(item => item !== supportHeroList[randomHero]);
        
    }

    else
    {
        let min = 0;
        let max = currentHeroSelection.length;
        let randomHero = Math.floor(Math.random() * (max - min + 1)) + min;
        
        doc.removeChild(img);
        var img = document.createElement("img");
        img.src = supportHeroList[randomHero].Image;
        
        
        var doc = document.getElementById("imageContainer");
        doc.appendChild(img);

        currentSupportSelection = currentSupportSelection.filter(item => item !== supportHeroList[randomHero]);
>>>>>>> 559b8cc86c1c57cd5da1b83bc7388c3f05a2a86a:script.js
    }
        
    
}



