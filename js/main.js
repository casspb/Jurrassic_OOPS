// main.js or your Vue entry file
import { createApp } from 'vue';
import { Dinosaur } from './dinosaur.js';

const Ankylosaurus = new Dinosaur(
    "Ankylosaurus",
    "1.8 meters",
    "7.6 meters",
    "Herbivorous",
    "Defensive, Stoic, Loyal",
    "An-kee-loh-sore-us"
  );
  const Apatosaurus = new Dinosaur(
    "Apatosaurus",
    "4.6 meters",
    "21 meters",
    "Herbivorous",
    "Gentle, Slow-moving",
    "A-pa-toh-sore-us"
  );
  const Baryonyx = new Dinosaur(
    "Baryonyx",
    "3 meters",
    "9 meters",
    "Carnivorous",
    "Aggressive, Territorial",
    "Bar-ee-oh-nix"
  );
  const Edomtosaurus = new Dinosaur(
      "Edomtosaurus"
  );
  const Gallimimus = new Dinosaur(
      "Gallimimus"
  );
  const InRex = new Dinosaur(
      "Indominus Rex"
  );
  const Metricanthosaurus = new Dinosaur(
      "Metricanthosaurus"
  );
  const Microceratus = new Dinosaur(
      "Microceratus"
  );
  const Mosasaurus = new Dinosaur(
      "Mosasaurus"
  );
  const Pachychephalosaurus = new Dinosaur(
      "Pachychephalosaurus"
  );
  const Parasaurolophus = new Dinosaur(
      "Parasaurolophus"
  );
  const Pteranodon = new Dinosaur(
      "Pteranodon"
  );
  const Stegosaurus = new Dinosaur(
      "Stegosaurus"
  );
  const Suchomimus = new Dinosaur(
      "Suchomimus"
  );
  const Triceratops = new Dinosaur(
      "Triceratops"
  );
//   const Trex = new Dinosaur(
//       "Tyrannosaurus Rex"
//   );
//   const Velociraptor = new Dinosaur(
//       "Velociraptor"
//   );


const app = createApp({
  data() {
    return {
       

    };
  }
}).mount('#app');

