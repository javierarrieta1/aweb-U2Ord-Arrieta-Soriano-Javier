const fecha = new Date();

function guardar_comentario(){
    var hist = document.getElementById('principal');
    var nota = "";
    nota = document.getElementById('notas').value;
    
    var nota_nueva = document.createElement("textarea");
    var fecha_coment = document.createElement("small");

    nota_nueva.classList.add("form-control");
    nota_nueva.classList.add("bg-dark");
    nota_nueva.classList.add("text-white");
    nota_nueva.innerHTML = nota;
    fecha_coment.innerHTML = fecha.toLocaleDateString();
    fecha_coment.classList.add("offset-11");

    hist.append(nota_nueva);
    hist.append(fecha_coment);
    hist.append(salto_linea);
}