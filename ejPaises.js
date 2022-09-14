paises = [
    {
      pais: "españa",
      poblacion: 47450795,
      color: "red",
      superficie: 505944,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"
    },
    {
      pais: "francia",
      poblacion: 67407241,
      color: "blue",
      superficie: 675417,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg"
    },
    {
      pais: "alemania",
      poblacion: 83155031,
      color: "amarillo",
      superficie: 375375,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
    },
    {
      pais: "italia",
      poblacion: 60257566,
      color: "green",
      superficie: 301340,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
    },
    {
      pais: "portugal",
      poblacion: 10295909,
      color: "DarkGreen",
      superficie: 92090,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
    },
    {
      pais: "irlanda",
      poblacion: 4857000,
      color: "DarkOrange",
      superficie: 70273,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
    },
  ]

let pais1 = window.prompt("Dime un país")
let pais2 = window.prompt("Dime otro país")
let pais3 = window.prompt("Dime un país más")

let paisesElegidos = []

for (let i = 0; i < paises.length; i++) {
    if(paises[i].pais===pais1 || paises[i].pais===pais2 || paises[i].pais===pais3){
        paisesElegidos.push(paises[i])
    }
    
}

if(paisesElegidos.length===3){
    if(paisesElegidos[0]!==paisesElegidos[1] && paisesElegidos[0]!==paisesElegidos[2] && paisesElegidos[1]!==paisesElegidos[2]){
      let newDiv = document.createElement("div")
      
      newDiv.innerHTML = `
      <div style="display: flex;">
        <div id="card1" class="card">
          <img src="${paisesElegidos[0].bandera}" alt="${paisesElegidos[0].pais}" style="width:100%">
          <div class="container">
            <h4>${paisesElegidos[0].pais}</h4>
            <p>Población ${paisesElegidos[0].poblacion}</p>
            <p>Superficie ${paisesElegidos[0].superficie}</p>
            <input id="boton1" type="button" onclick="changeColor1()"value="Haz click!"></input>
          </div>
        </div>
        
        <div id="card2" class="card">
          <img src="${paisesElegidos[1].bandera}" alt="${paisesElegidos[1].pais}" style="width:100%">
          <div class="container">
            <h4>${paisesElegidos[1].pais}</h4>
            <p>Población ${paisesElegidos[1].poblacion}</p>
            <p>Superficie ${paisesElegidos[1].superficie}</p>
            <input id="boton2" type="button" onclick="changeColor2()" value="Haz click!"></input>
          </div>
        </div>
        
        <div id="card3" class="card">
        <img src="${paisesElegidos[2].bandera}" alt="${paisesElegidos[2].pais}" style="width:100%">
        <div class="container">
          <h4>${paisesElegidos[2].pais}</h4>
          <p>Población ${paisesElegidos[2].poblacion}</p>
          <p>Superficie ${paisesElegidos[2].superficie}</p>
          <input type="button" onclick="changeColor3()" value="Haz click!"></input>
        </div>
        </div>
      </div>`

      document.body.appendChild(newDiv)

      function changeColor1(){
        document.getElementById("card1").style.backgroundColor = paisesElegidos[0].color 
      }

      function changeColor2(){
        document.getElementById("card2").style.backgroundColor = paisesElegidos[1].color 
      }

      function changeColor3(){
        document.getElementById("card3").style.backgroundColor = paisesElegidos[2].color 
      }
    }else{
      //Decir que los paises no se pueden repetir
      let newP = document.createElement("p")
      newP.innerText = "Los paises no se pueden repetir"
      document.body.appendChild(newP)
    }
}else{
    //Decir que hay algún pais no válido
    let newP = document.createElement("p")
    newP.innerText = "Alguno de los paises introducidos no es válido"
    document.body.appendChild(newP)
}