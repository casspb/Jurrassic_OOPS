// main.js or your Vue entry file
import { createApp } from 'vue';
import { Dinosaur } from './dinosaur.js';

const dinosaurs = {
    Ankylosaurus: new Dinosaur("Ankylosaurus", "1.8 meters", "7.6 meters", "Herbivorous", "Defensive, Stoic, Loyal", "An-kee-loh-sore-us"),
    Apatosaurus: new Dinosaur("Apatosaurus", "4.6 meters", "21 meters", "Herbivorous", "Gentle, Slow-moving", "A-pa-toh-sore-us"),
    Baryonyx: new Dinosaur("Baryonyx", "3 meters", "9 meters", "Carnivorous", "Aggressive, Territorial", "Bar-ee-oh-nix"),
    Edmontosaurus: new Dinosaur("Edmontosaurus", "3 meters", "12 meters", "Herbivorous", "Social, Alert", "Ed-mon-toh-sore-us"),
    Gallimimus: new Dinosaur("Gallimimus", "2 meters", "6 meters", "Omnivorous", "Fast, Skittish", "Gal-ee-mime-us"),
    IndominusRex: new Dinosaur("Indominus Rex", "6 meters", "15 meters", "Carnivorous", "Cunning, Deadly", "In-doh-min-us Rex"),
    Metricanthosaurus: new Dinosaur("Metricanthosaurus", "3 meters", "8 meters", "Carnivorous", "Aggressive, Independent", "Met-ri-can-tho-sore-us"),
    Microceratus: new Dinosaur("Microceratus", "0.6 meters", "1 meter", "Herbivorous", "Curious, Playful", "My-crow-seh-ray-tus"),
    Mosasaurus: new Dinosaur("Mosasaurus", "6 meters", "18 meters", "Carnivorous", "Apex Predator", "Mo-sah-sore-us"),
    Pachycephalosaurus: new Dinosaur("Pachycephalosaurus", "2.5 meters", "4.5 meters", "Herbivorous", "Headstrong, Territorial", "Pack-ee-sef-ah-lo-sore-us"),
    Parasaurolophus: new Dinosaur("Parasaurolophus", "2.5 meters", "9 meters", "Herbivorous", "Social, Communicative", "Par-ah-saw-rol-oh-fus"),
    Pteranodon: new Dinosaur("Pteranodon", "1.8 meters", "6 meters", "Carnivorous", "Gliding, Observant", "Ter-an-oh-don"),
    Stegosaurus: new Dinosaur("Stegosaurus", "4 meters", "9 meters", "Herbivorous", "Defensive, Slow", "Steg-oh-sore-us"),
    Suchomimus: new Dinosaur("Suchomimus", "3 meters", "11 meters", "Carnivorous", "Fish-eating, Territorial", "Sook-oh-my-mus"),
    Triceratops: new Dinosaur("Triceratops", "3 meters", "9 meters", "Herbivorous", "Brave, Social", "Try-sair-ah-tops"),
  };
//   const Trex = new Dinosaur(
//       "Tyrannosaurus Rex"
//   );
//   const Velociraptor = new Dinosaur(
//       "Velociraptor"
//   );

// Vue app
const app = createApp({
    data() {
      return {
        dinosaurs, // Store all dinosaur data
        selectedDino: null,
      };
    },
    methods: {
      displayDinoInfo(dinoName) {
        this.selectedDino = this.dinosaurs[dinoName] || null;
      },
    },
    mounted() {
      // Query all <li> elements and add event listeners
      document.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", () => {
          const dinoName = li.id;
          if (this.dinosaurs[dinoName]) {
            this.displayDinoInfo(dinoName);
          }
        });
      });
    },
  }).mount("#app");