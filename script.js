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

function addHeroesToLists()
{
    
    addTankHeroesToLists();
    addDamageHeroesToLists();
    addSupportHeroesToLists();
}

function addTankHeroesToLists()
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

function addDamageHeroesToLists()
{
    Ashe = new Hero(kDAMAGE, "assets/Ashe.png", "Ashe");
    heroList.push(Ashe);
    damageHeroList.push(Ashe);

    Bastion = new Hero(kDAMAGE, "assets/Bastion.png", "Bastion");
    heroList.push(Bastion);
    damageHeroList.push(Bastion);

    Cassidy = new Hero(kDAMAGE, "assets/Cassidy.png", "Cassidy");
    heroList.push(Cassidy);
    damageHeroList.push(Cassidy);

    Echo = new Hero(kDAMAGE, "assets/Echo.png", "Echo");
    heroList.push(Echo);
    damageHeroList.push(Echo);

    Freja = new Hero(kDAMAGE, "assets/Freja.png", "Freja");
    heroList.push(Freja);
    damageHeroList.push(Freja);

    Genji = new Hero(kDAMAGE, "assets/Genji.png", "Genji");
    heroList.push(Genji);
    damageHeroList.push(Genji);

    Hanzo = new Hero(kDAMAGE, "assets/Hanzo.png", "Hanzo");
    heroList.push(Hanzo);
    damageHeroList.push(Hanzo);

    Junkrat = new Hero(kDAMAGE, "assets/Junkrat.png", "Junkrat");
    heroList.push(Junkrat);
    damageHeroList.push(Junkrat);

    Mei = new Hero(kDAMAGE, "assets/Mei.png", "Mei");
    heroList.push(Mei);
    damageHeroList.push(Mei);

    Pharah = new Hero(kDAMAGE, "assets/Pharah.png", "Pharah");
    heroList.push(Pharah);
    damageHeroList.push(Pharah);

    Reaper = new Hero(kDAMAGE, "assets/Reaper.png", "Reaper");
    heroList.push(Reaper);
    damageHeroList.push(Reaper);

    Sojourn = new Hero(kDAMAGE, "assets/Sojourn.png", "Sojourn");
    heroList.push(Sojourn);
    damageHeroList.push(Sojourn);

    Soldier76 = new Hero(kDAMAGE, "assets/Soldier 76.png", "Soldier 76");
    heroList.push(Soldier76);
    damageHeroList.push(Soldier76);

    Sombra = new Hero(kDAMAGE, "assets/Sombra.png", "Sombra");
    heroList.push(Sombra);
    damageHeroList.push(Sombra);

    Symmetra = new Hero(kDAMAGE, "assets/Symmetra.png", "Symmetra");
    heroList.push(Symmetra);
    damageHeroList.push(Symmetra);

    Torbjörn = new Hero(kDAMAGE, "assets/Torbjörn.png", "Torbjörn");
    heroList.push(Torbjörn);
    damageHeroList.push(Torbjörn);

    Tracer = new Hero(kDAMAGE, "assets/Tracer.png", "Tracer");
    heroList.push(Tracer);
    damageHeroList.push(Tracer);

    Vendetta = new Hero(kDAMAGE, "assets/Vendetta.png", "Vendetta");
    heroList.push(Vendetta);
    damageHeroList.push(Vendetta);
    
    Venture = new Hero(kDAMAGE, "assets/Venture.png", "Venture");
    heroList.push(Venture);
    damageHeroList.push(Venture);

    Widowmaker = new Hero(kDAMAGE, "assets/Widowmaker.png", "Widowmaker");
    heroList.push(Widowmaker);
    damageHeroList.push(Widowmaker);

    currentDamageSelection = damageHeroList;
    
}

function addSupportHeroesToLists()
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


