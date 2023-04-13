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
        this.#marca = marca;
    }
    getColor() {
        return this.color;
    }
    getDimension() {
        return this.dimension;
    }
    getBorrador() {
        return this.borrador;
    }
    getMaterial() {
        return this.material;
    }
    getMarca() {
        return this.#marca;
    }
    obtener() {
        const color = document.querySelector('[name="color"]').value;
        const dimension = document.querySelector("#value").textContent;
        const marca = document.querySelector('[name="marca"]:checked').value;
        const borrador = document.querySelector('[name="borrador"]:checked').value === "true";
        const material = document.querySelector('[name="material"]:checked').value;
        return new lapiz({
            color,
            dimension,
            marca,
            borrador,
            material,
        });
    }
}
let obj = undefined;
let color = document.querySelector(`[name="color"]`)
let dimension = document.querySelector(`[id="value"]`)
let borrador = document.querySelector(`[name="borrador"]`)
let material = document.querySelector(`[name="material"]`)
let marca = document.querySelector(`[name="marca"]`)
addEventListener("DOMContentLoaded", (e) => {
    obj = new lapiz({});
    color.value = obj.getColor()
    dimension.value = obj.getDimension()
    document.querySelector(`[name="marca"][value="${obj.getMarca()}"]`).checked = true;
    document.querySelector(`[name="borrador"][value="${obj.getBorrador()}"]`).checked = true;
    document.querySelector(`[name="material"][value="${obj.getMaterial()}"]`).checked = true;
})
const tabla = document.querySelector("#tablaLapices");
const formulario = document.querySelector("#myForm");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const Lapiz = new lapiz({}).obtener();
    const row = tabla.insertRow();
    /* const celdaColor = row.insertCell();
    celdaColor.textContent=Lapiz.getColor();
    celdaColor.style.backgrounColor=Lapiz.getColor(); */
    row.insertCell().textContent = Lapiz.getColor();
    row.insertCell().textContent = Lapiz.getDimension();
    row.insertCell().textContent = Lapiz.getMarca();
    row.insertCell().textContent = Lapiz.getBorrador() ? "Tiene" : "No Tiene";
    row.insertCell().textContent = Lapiz.getMaterial();
    /* formulario.reset(); */
});

const value = document.querySelector("#value")
const input = document.querySelector("#pi_input")
value.textContent = input.value
input.addEventListener("input", (event) => {
    value.textContent = event.target.value
})