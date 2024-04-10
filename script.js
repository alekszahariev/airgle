let models_ar = [
    "./assets/homepage/models/ag25.png",
    "./assets/homepage/models/ag300.png",
    "./assets/homepage/models/ag900.png"
];

let models = document.querySelector(".models img");
let currentIndex = 0;
let iterationCount = 0;

models.addEventListener("animationiteration", function(event) {
    iterationCount++;
    if (iterationCount != 0) {
        models.src = models_ar[currentIndex];
        currentIndex = (currentIndex + 1) % models_ar.length;
    } 
});


let microb_ar = [
    "./assets/homepage/bac-1.jpg",
    "./assets/homepage/bac-2.jpg",
    "./assets/homepage/bac3.jpg"
]
let microb_img = document.getElementById("microb")
let currentIndex2 = 0;
setInterval(() => {
    microb_img.src = microb_ar[currentIndex2];
    currentIndex2 = (currentIndex2 + 1) % microb_ar.length;
}, 1000);
