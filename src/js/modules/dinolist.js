

// main.js or your Vue entry file
import { createApp, nextTick} from 'vue';
import { Dinosaur, DangerousDinosaur } from './dinosaur.js';
import { animateDinoInfo } from './gsap.js'; // Import the animation function

import ankylosaurusImage from 'url:../../images/ankylosaurus.webp';
import apatosaurusImage from 'url:../../images/apatosaurus.webp';
import baryonyxImage from 'url:../../images/baryonyx.webp';
import edmontosaurusImage from 'url:../../images/edmontosaurus.webp';
import gallimimusImage from 'url:../../images/gallimimus.webp';
import indominusRexImage from 'url:../../images/indominusRex.webp';
import metricanthosaurusImage from 'url:../../images/metricanthosaurus.webp';
import microceratusImage from 'url:../../images/microceratus.webp';
import mosasaurusImage from 'url:../../images/mosasaurus.webp';
import pachycephalosaurusImage from 'url:../../images/pachycephalosaurus.webp';
import parasaurolophusImage from 'url:../../images/parasaurolophus.webp';
import pteranodonImage from 'url:../../images/pteranodon.webp';
import stegosaurusImage from 'url:../../images/stegosaurus.webp';
import suchomimusImage from 'url:../../images/suchomimus.webp';
import triceratopsImage from 'url:../../images/triceratops.webp';

const dinosaurs = {
    Ankylosaurus: new Dinosaur("Ankylosaurus", "1.8 meters", "7.6 meters", "Herbivorous", "Defensive, Stoic, Loyal", "An-kee-loh-sore-us", ankylosaurusImage, "Ankylosaurus was as large as a military tank and nearly as hard to attack, even though it was slow."),
    Apatosaurus: new Dinosaur("Apatosaurus", "4.6 meters", "21 meters", "Herbivorous", "Gentle, Slow-moving", "A-pa-toh-sore-us", apatosaurusImage, "Scientists have formulated that the apatosaurus bones resembled modern-day birds. These dinosaurs had hollow bones that helped them to balance their weight equally."),
    Baryonyx: new DangerousDinosaur("Baryonyx", "3 meters", "9 meters", "Carnivorous", "Aggressive, Territorial", "Bar-ee-oh-nix", baryonyxImage, "Baryonyx was a carnivorous dinosaur and the first fish-eating dinosaur in history."),
    Edmontosaurus: new Dinosaur("Edmontosaurus", "3 meters", "12 meters", "Herbivorous", "Social, Alert", "Ed-mon-toh-sore-us", edmontosaurusImage, "Edmontosaurus was named from a fossil found in the Horseshoe Canyon Formation, in Alberta, Canada."),
    Gallimimus: new Dinosaur("Gallimimus", "2 meters", "6 meters", "Omnivorous", "Fast, Skittish", "Gal-ee-mime-us", gallimimusImage, "Its brain was the size of a golf ball."),
    IndominusRex: new DangerousDinosaur("Indominus Rex", "6 meters", "15 meters", "Carnivorous", "Cunning, Deadly", "In-doh-min-us Rex", indominusRexImage, "The Indominus Rex is a manmade hybrid species, made using Tyrannosaurus rex genomes and the DNA of other theropods."),
    Metricanthosaurus: new DangerousDinosaur("Metricanthosaurus", "3 meters", "8 meters", "Carnivorous", "Aggressive, Independent", "Met-ri-can-tho-sore-us", metricanthosaurusImage,"Metriacanthosaurus gets its name for its backbones, which have spines on top that are taller than in many meat-eaters."),
    Microceratus: new Dinosaur("Microceratus", "0.6 meters", "1 meter", "Herbivorous", "Curious, Playful", "My-crow-seh-ray-tus", microceratusImage, "Only juvenile fossils of this creature has been discovered, leaving scientists stumped on how large they would grow...until now."),
    Mosasaurus: new DangerousDinosaur("Mosasaurus", "6 meters", "18 meters", "Carnivorous", "Apex Predator", "Mo-sah-sore-us", mosasaurusImage, "While they lived in the same period, Mosasaurus were NOT dinosaurs. But instead, they were a variety of Lizard, that had adapted to the way of the ocean."),
    Pachycephalosaurus: new Dinosaur("Pachycephalosaurus", "2.5 meters", "4.5 meters", "Herbivorous", "Headstrong, Territorial", "Pack-ee-sef-ah-lo-sore-us", pachycephalosaurusImage, "This plant-eater had some special teeth. Although it had typical leaf-eating teeth tucked behind its short beak, Pachycelphalosaurus had other teeth in its cheeks. That might have helped it grind up things like nuts and fruit."),
    Parasaurolophus: new Dinosaur("Parasaurolophus", "2.5 meters", "9 meters", "Herbivorous", "Social, Communicative", "Par-ah-saw-rol-oh-fus", parasaurolophusImage, "It is recognizable for the long, blunt crest protruding from the back of its skull. Although the exact purpose of this crest is a matter of some debate, aesthetic value, temperature regulation, and even vocalization have all been proposed as possible uses for the formation."),
    Pteranodon: new DangerousDinosaur("Pteranodon", "1.8 meters", "6 meters", "Carnivorous", "Gliding, Observant", "Ter-an-oh-don", pteranodonImage, "Pteranodon was a flying reptile that lived during the time of the dinosaurs - it was not a dinosaur, but was a close relative of the dinosaurs."),
    Stegosaurus: new Dinosaur("Stegosaurus", "4 meters", "9 meters", "Herbivorous", "Defensive, Slow", "Steg-oh-sore-us", stegosaurusImage, "As well as eating plants, stegosaurus supplemented its diet by intentionally swallowing small rocks. The rocks would have helped the stegosaurus to digest the vegetation in its stomach by moving around in there and helping to break up the foliage."),
    Suchomimus: new DangerousDinosaur("Suchomimus", "3 meters", "11 meters", "Carnivorous", "Fish-eating, Territorial", "Sook-oh-my-mus", suchomimusImage, "Unlike most giant theropods, Suchomimus had a very long, low snout and narrow jaws studded with some 100 teeth, not very sharp and curving slightly backward. The tip of the snout was enlarged and carried a rosette of longer teeth."),
    Triceratops: new Dinosaur("Triceratops", "3 meters", "9 meters", "Herbivorous", "Brave, Social", "Try-sair-ah-tops", triceratopsImage, "The large frill at the back of triceratops head was not just for show. It acted like a shield. The frill was made of solid bone and helped protect its neck and shoulders from attacks by predators like tyrannosaurus rex."),
  };
//   const Trex = new Dinosaur(
//       "Tyrannosaurus Rex"
//   );
//   const Velociraptor = new Dinosaur(
//       "Velociraptor"
//   );
export function dinolist() {
// Vue app
const app = createApp({
    data() {
      return {
        dinosaurs, 
        selectedDino: null,
      };
    },
    methods: {
      displayDinoInfo(dinoName) {
        this.selectedDino = this.dinosaurs[dinoName] || null;

        nextTick(() => {
          animateDinoInfo();
        }

        );
      },
    },
    mounted() {
  
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
}