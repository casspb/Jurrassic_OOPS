class Dinosaur{
    constructor(
        Name,
        Height,
        Length,
        Diet,
        Personality,
        Pronunciation,
        Img,
        Facts

     
        // Appearance
    ){
        this.Name = Name;
        this.Height = Height;
        this.Length = Length;
        this.Diet = Diet;
        this.Personality = Personality;
        this.Pronunciation = Pronunciation;
        this.Img = Img;
        this.Facts = Facts;

        // this.Appearance = {
        //     sound: soundMade,
        //     look: image
        //}
    }
    getInfo() {
        return `${this.Name}: Height - ${this.Height}, Length - ${this.Length}, Diet - ${this.Diet}`;
      }
}

class DangerousDinosaur extends Dinosaur {
    constructor(Name, Height, Length, Diet, Personality, Pronunciation, img, Facts) {
        super(Name, Height, Length, Diet, Personality, Pronunciation, img, Facts);
         this.dangerous = true; 
    }
    getDangerMessage() {
        return "DANGEROUS! BEWARE!";
      }
    }
export {Dinosaur, DangerousDinosaur};