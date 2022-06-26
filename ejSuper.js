let manzana = 0
let carne = 0
let leche = 0
let pescado = 0

function modificar(simbolo, producto){
    if(producto==="manzana"){
        simbolo === "+"
        ? manzana++
        : manzana--
    } else if(producto==="carne"){
        simbolo === "+"
        ? carne++
        : carne--
    } else if(producto==="leche"){
        simbolo === "+"
        ? leche++
        : leche--
    } else if(producto==="pescado"){
        simbolo === "+"
        ? pescado++
        : pescado--
    }
    cesta()
}

function cesta(){
    let cesta = ""
    if(manzana>0){
        let manzanaImg = ""
        for (let i = 0; i <manzana; i++) {
            manzanaImg += `<img src="iconos/manzana.png" width="30px">` 
        }
        cesta +=`<h3>Manzanas: ${manzana}</h3>${manzanaImg}`
    }
    if(carne>0){
        let carneImg = ""
        for (let i = 0; i < carne; i++) {
            carneImg += `<img src="iconos/carne.png" width="30px">`
        }
        cesta += `<h3>Carne: ${carne}</h3>${carneImg}`
    }
    if(leche>0){
        let lecheImg = ""
        for (let i = 0; i < leche; i++) {
            lecheImg += `<img src="iconos/leche.png" width="30px">`   
        }
        cesta += `<h3>Leche: ${leche}</h3>${lecheImg}`
    }
    if(pescado>0){
        let pescadoImg = ""
        for (let i = 0; i < pescado; i++) {
            pescadoImg += `<img src="iconos/pescado.png" width="30px">`
        }
        cesta += `<h3>Pescado: ${pescado}</h3>${pescadoImg}`
    }
    document.getElementById("cesta").innerHTML = cesta
}