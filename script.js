const kSUPPORT = "Support";
const kDAMAGE = "Damage";
const kTANK = "Tank";

var heroList = new Array;
var supportHeroList = new Array;
var damageHeroList = new Array;
var tankHeroList = new Array;

var heroTankImage = null;
var heroDamageImage = null;
var heroSupportImage = null;

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

function addHerosToLists()
{
    
    addTankHerosToLists();
    addDamgeHerosToLists();
    addSupportHerosToLists();
}

function addTankHerosToLists()
{
    Dva = new Hero(kTANK, "assets/D.va.png", "D.va");
    heroList.push(Dva);
    tankHeroList.push(Dva);

    Doomfist = new Hero(kTANK, "assets/Doomfist.png", "Doomfist");
    heroList.push(Doomfist);
    tankHeroList.push(Doomfist);

    Hazard = new Hero(kTANK, "assets/Hazard.png", "Hazard");
    heroList.push(Hazard);
    tankHeroList.push(Hazard);

    JunkerQueen = new Hero(kTANK, "assets/Junker Queen.png", "Junker Queen");
    heroList.push(JunkerQueen);
    tankHeroList.push(JunkerQueen);

    Mauga = new Hero(kTANK, "assets/Mauga.png", "Mauga");
    heroList.push(Mauga);
    tankHeroList.push(Mauga);

    Orisa = new Hero(kTANK, "assets/Orisa.png", "Orisa");
    heroList.push(Orisa);
    tankHeroList.push(Orisa);

    Ramattra = new Hero(kTANK, "assets/Ramattra.png", "Ramattra");
    heroList.push(Ramattra);
    tankHeroList.push(Ramattra);

    Reinhardt = new Hero(kTANK, "assets/Reinhardt.png", "Reinhardt");
    heroList.push(Reinhardt);
    tankHeroList.push(Reinhardt);

    Roadhog = new Hero(kTANK, "assets/Roadhog.png", "Roadhog");
    heroList.push(Roadhog);
    tankHeroList.push(Roadhog);

    Sigma = new Hero(kTANK, "assets/Sigma.png", "Sigma");
    heroList.push(Sigma);
    tankHeroList.push(Sigma);

    Winston = new Hero(kTANK, "assets/Winston.png", "Winston");
    heroList.push(Winston);
    tankHeroList.push(Winston);

    WreckingBall = new Hero(kTANK, "assets/Wrecking Ball.png", "Wrecking Ball");
    heroList.push(WreckingBall);
    tankHeroList.push(WreckingBall);

    Zarya = new Hero(kTANK, "assets/Zarya.png", "Zarya");
    heroList.push(Zarya);
    tankHeroList.push(Zarya);

    currentTankSelection = tankHeroList;

}

function addDamgeHerosToLists()
{
    Ashe = new Hero(kDamage, "assets/Ashe.png", "Ashe");
    heroList.push(Ashe);
    tankHeroList.push(Ashe);

    Bastion = new Hero(kDamage, "assets/Bastion.png", "Bastion");
    heroList.push(Bastion);
    tankHeroList.push(Bastion);

    Cassidy = new Hero(kDamage, "assets/Cassidy.png", "Cassidy");
    heroList.push(Cassidy);
    tankHeroList.push(Cassidy);

    Echo = new Hero(kDamage, "assets/Echo.png", "Echo");
    heroList.push(Echo);
    tankHeroList.push(Echo);

    Freja = new Hero(kDamage, "assets/Freja.png", "Freja");
    heroList.push(Freja);
    tankHeroList.push(Freja);

    Genji = new Hero(kDamage, "assets/Genji.png", "Genji");
    heroList.push(Genji);
    tankHeroList.push(Genji);

    Hanzo = new Hero(kDamage, "assets/Hanzo.png", "Hanzo");
    heroList.push(Hanzo);
    tankHeroList.push(Hanzo);

    Junkrat = new Hero(kDamage, "assets/Junkrat.png", "Junkrat");
    heroList.push(Junkrat);
    tankHeroList.push(Junkrat);

    Mei = new Hero(kDamage, "assets/Mei.png", "Mei");
    heroList.push(Mei);
    tankHeroList.push(Mei);

    Pharah = new Hero(kDamage, "assets/Pharah.png", "Pharah");
    heroList.push(Pharah);
    tankHeroList.push(Pharah);

    Reaper = new Hero(kDamage, "assets/Reaper.png", "Reaper");
    heroList.push(Reaper);
    tankHeroList.push(Reaper);

    Sojourn = new Hero(kDamage, "assets/Sojourn.png", "Sojourn");
    heroList.push(Sojourn);
    tankHeroList.push(Sojourn);

    Soldier76 = new Hero(kDamage, "assets/Soldier 76.png", "Soldier 76");
    heroList.push(Soldier76);
    tankHeroList.push(Soldier76);

    Sombra = new Hero(kDamage, "assets/Sombra.png", "Sombra");
    heroList.push(Sombra);
    tankHeroList.push(Sombra);

    Symmetra = new Hero(kDamage, "assets/Symmetra.png", "Symmetra");
    heroList.push(Symmetra);
    tankHeroList.push(Symmetra);

    Torbjörn = new Hero(kDamage, "assets/Torbjörn.png", "Torbjörn");
    heroList.push(Torbjörn);
    tankHeroList.push(Torbjörn);

    Tracer = new Hero(kDamage, "assets/Tracer.png", "Tracer");
    heroList.push(Tracer);
    tankHeroList.push(Tracer);

    Venture = new Hero(kDamage, "assets/Venture.png", "Venture");
    heroList.push(Venture);
    tankHeroList.push(Venture);

    Widowmaker = new Hero(kDamage, "assets/Widowmaker.png", "Widowmaker");
    heroList.push(Widowmaker);
    tankHeroList.push(Widowmaker);

    currentDamageSelection = damageHeroList;
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

    Illari = new Hero(kSUPPORT, "assets/Illari.png", "Illari");
    heroList.push(Illari);
    supportHeroList.push(Illari); 

    Juno = new Hero(kSUPPORT, "assets/Juno.png", "Juno")
    heroList.push(Juno);
    supportHeroList.push(Juno); 

    Kiriko = new Hero(kSUPPORT, "assets/Kiriko.png", "Kiriko")
    heroList.push(Kiriko);
    supportHeroList.push(Kiriko);

    Lúcio = new Hero(kSUPPORT, "assets/Lucio.png", "Lúcio")
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
    var doc;

   if (currentTankSelection.length != 0)
    {
        let min = 0;
        let max = tankHeroList.length - 1;
        let randomHero = Math.floor(Math.random() * (max - min + 1)) + min;


        
        doc = document.getElementById("tankImageContainer");
        if (heroTankImage != null)
        {
            doc.removeChild(heroTankImage);
        }
       

        heroTankImage = document.createElement("img");
        heroTankImage.src = currentTankSelection[randomHero].Image;
       
        doc.appendChild(heroTankImage);

        currentTankSelection.splice(randomHero, 1);
        console.log(currentTankSelection.length);
    }
}

function pickRandomDamage()
{
 var doc;

   if (currentDamageSelection.length != 0)
    {
        let min = 0;
        let max = damageHeroList.length - 1;
        let randomHero = Math.floor(Math.random() * (max - min + 1)) + min;


        
        doc = document.getElementById("damageImageContainer");
        if (heroDamageImage != null)
        {
            doc.removeChild(heroDamageImage);
        }
       

        heroDamageImage = document.createElement("img");
        heroDamageImage.src = currentDamageSelection[randomHero].Image;
       
        doc.appendChild(heroDamageImage);

        currentDamageSelection.splice(randomHero, 1);
        
    }
}

function pickRandomSupport()
{
    var doc;

   if (currentSupportSelection.length != 0)
    {
        let min = 0;
        let max = supportHeroList.length - 1;
        let randomHero = Math.floor(Math.random() * (max - min + 1)) + min;


        
        doc = document.getElementById("supportImageContainer");
        if (heroSupportImage != null)
        {
            doc.removeChild(heroSupportImage);
        }
       

        heroSupportImage = document.createElement("img");
        heroSupportImage.src = currentSupportSelection[randomHero].Image;
       
        doc.appendChild(heroSupportImage);

        currentSupportSelection.splice(randomHero, 1);
        
    }
        
    
}


