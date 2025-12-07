const kSUPPORT = "Support";
const kDAMAGE = "Damage";
const kTANK = "Tank";

heroList = new Array;
supportHeroList = new Array;
damageHeroList = new Array;
tankHeroList = new Array;

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
    const Ana = new Hero(kSUPPORT, "assets/Ana.png", "Ana");
    heroList.push(Ana);
    supportHeroList.push(Ana);

    const Baptiste = new Hero(kSUPPORT, "assets/Baptiste.png", "Baptiste");
    heroList.push(Baptiste);
    supportHeroList.push(Baptiste);

    const Brigitte = new Hero(kSUPPORT, "assets/Brigitte.png", "Brigitte");
    heroList.push(Brigitte);
    supportHeroList.push(Brigitte);

    const Juno = new Hero(kSUPPORT, "assets/Juno.png", Juno)
    heroList.push(Juno);
    supportHeroList.push(Juno);

    const Kirko = new Hero(kSUPPORT, "assets/Kirko.png", Kirko)
    heroList.push(Kirko);
    supportHeroList.push(Kirko);

    const Lúcio  = new Hero(kSUPPORT, "assets/Lúcio .png", Lúcio)
    heroList.push(Lúcio );
    supportHeroList.push(Lúcio );

    const Lifeweaver = new Hero(kSUPPORT, "assets/Lifeweaver.png", Lifeweaver)
    heroList.push(Lifeweaver);
    supportHeroList.push(Lifeweaver);

    const Mercy = new Hero(kSUPPORT, "assets/Mercy.png", Mercy)
    heroList.push(Mercy);
    supportHeroList.push(Mercy);

    const Moira = new Hero(kSUPPORT, "assets/Moira.png", Moira)
    heroList.push(Moira);
    supportHeroList.push(Moira);

    const Wuyang = new Hero(kSUPPORT, "assets/Wuyang.png", Wuyang)
    heroList.push(Wuyang);
    supportHeroList.push(Wuyang);

    const Zenyatta = new Hero(kSUPPORT, "assets/Zenyatta.png", Zenyatta)
    heroList.push(Zenyatta);
    supportHeroList.push(Zenyatta);

}



