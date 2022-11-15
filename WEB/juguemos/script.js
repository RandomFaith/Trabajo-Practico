let cat1 = document.getElementById("casilla1");
let cat2 = document.getElementById("casilla2");
let cat3 = document.getElementById("casilla3");

let im1 =  document.getElementById("img1");
let im2 =  document.getElementById("img2");
let im3 =  document.getElementById("img3");



let n1 = `<img id="img1" class="img2" src="../../Recursos/fotos/rompe2.png" alt="segunda foto">`;
let n2 = `<img id="img2" class="img2" src="../../Recursos/fotos/Rompe1.png" alt="primera foto">`;
let n3 = `<img id="img3" class="img2" src="../../Recursos/fotos/Rompe3.png" alt="tercera foto">`;

let lugar = ""
let LA = [];
function lugarL() {
    
    let Numero ;

    let Numero0 = " T8MFVJ ";
    let Numero1 = " UAMO8I ";
    let Numero2 = " EG5XLZ ";

    LA.forEach(element => {
        switch (element) {

            case "1":
                Numero0 = Numero0.replace(" T8MFVJ ", "");
                console.log("paso")
                break;

            case "2":
                Numero1 = Numero1.replace(" UAMO8I ", "");
                console.log("paso")
                break;

            case "3":
                Numero2 = Numero2.replace(" EG5XLZ ", "");
                console.log("paso")
                break;
        
            default:
                break;
        }
    });

    if (Numero0 == " T8MFVJ ") {
        Numero0 = Numero0.replace(" T8MFVJ ", n1);
    }
    if (Numero1 == " UAMO8I ") {
        Numero1 = Numero1.replace(" UAMO8I ", n2);
    }
    if (Numero2 == " EG5XLZ ") {
        Numero2 = Numero2.replace(" EG5XLZ ", n3);
    }

    Numero = Numero0 + Numero1 + Numero2 ;
    
    con2.innerHTML=Numero
}



im1.addEventListener("dragstart", (event)=>{
    event.dataTransfer.setData("text", "../../Recursos/fotos/rompe2.png");
})
im2.addEventListener("dragstart", (event)=>{
    event.dataTransfer.setData("text", "../../Recursos/fotos/Rompe1.png");
})
im3.addEventListener("dragstart", (event)=>{
    event.dataTransfer.setData("text", "../../Recursos/fotos/Rompe3.png");
})

con2.addEventListener("mousedown", (event)=>{
    lugar = event.target.id ;
    lugar = lugar.replace("img", "");
})

// entra
cat1.addEventListener("dragenter", ()=>{
    cat1.style="background-color: rgb(66,126,128)"
})
cat2.addEventListener("dragenter", ()=>{
    cat2.style="background-color: rgb(66,126,128)"
})
cat3.addEventListener("dragenter", ()=>{
    cat3.style="background-color: rgb(66,126,128)"
})

// sale
cat1.addEventListener("dragleave", ()=>{
    cat1.style="background-color: rgb(150, 150, 150)"
})
cat2.addEventListener("dragleave", ()=>{
    cat2.style="background-color: rgb(150, 150, 150)"
})
cat3.addEventListener("dragleave", ()=>{
    cat3.style="background-color: rgb(150, 150, 150)"
})

// prebencion
cat1.addEventListener("dragover", (event)=>{
    event.preventDefault();
})
cat2.addEventListener("dragover", (event)=>{
    event.preventDefault();
})
cat3.addEventListener("dragover", (event)=>{
    event.preventDefault();
})

let final = ""; 
function finalF(){
    if (final === "111") {
        con1.style="width: 80%; justify-content: center;";
    }
}

// drop
cat1.addEventListener("drop", (event)=>{
    let dato = event.dataTransfer.getData("text");
    cat1.innerHTML = `<img draggable="false" id="img1" class="img3" src="${dato}" alt="segunda foto">`;
    final = final + "1" ;
    finalF()
    LA.push(lugar);
    console.log(LA);
    lugarL()
})
cat2.addEventListener("drop", (event)=>{
    let dato = event.dataTransfer.getData("text");
    cat2.innerHTML = `<img draggable="false" id="img2" class="img3" src="${dato}" alt="primera foto">`;
    final = final + "1" ;
    finalF()
    LA.push(lugar);
    console.log(LA);
    lugarL()
})
cat3.addEventListener("drop", (event)=>{
    let dato = event.dataTransfer.getData("text");
    cat3.innerHTML = `<img draggable="false" id="img3" class="img3" src="${dato}" alt="tercera foto">`;
    final = final + "1" ;
    finalF()
    LA.push(lugar);
    console.log(LA);
    lugarL()
})