let button = document.getElementById("btn");
let colorArray = ["red", "green", "blue", "pink", "purple", "violet", "indigo",
    "lightblue", "cyan", "lightgreen", "gold", "silver", "tomato", "teal", "black",
    "white"
];
let body = document.querySelector("body")
let colorname = document.getElementById("colorname")

button.addEventListener("click", () => {
    randomColor = Math.floor(Math.random() * colorArray.length)
    for (i = 0; i <= colorArray.length; i++) {
        body.style.backgroundColor = colorArray[randomColor]
        colorname.innerHTML = colorArray[randomColor]

    }

});
