class lapiz {
    #marca
    constructor({
        color = "#f9f06b",
        dimension = 19,
        borrador = true,
        material = "Madera",
        marca = "Mongol"
    }) {
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.marca = marca;
    }
    getColor() {
        return this.color;
    }
}
let obj = undefined;
let  color = document.querySelector(`[name="color]`)
addEventListener("DOMContentLoaded",(e)=>{
    obj = new lapiz();
})
const value = document.querySelector("#value")
const input = document.querySelector("#pi_input")
value.textContent = input.value
input.addEventListener("input", (event) => {
    value.textContent = event.target.value
})