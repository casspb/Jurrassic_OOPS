class Dinosaur{
    constructor(
        Name,
        Height,
        Length,
        Diet,
        Personality,
        Pronunciation,
        Appearance
    ){
        this.Name = Name;
        this.Height = Height;
        this.Length = Length;
        this.Diet = Diet;
        this.Personality = Personality;
        this.Pronunciation = Pronunciation;
        this.Appearance = {
            sound: soundMade,
            look: image
        }
    }
}

export {Dinosaur};