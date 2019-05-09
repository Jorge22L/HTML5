window.addEventListener('load', init,false);
window.addEventListener('storage', actividadAgregada, false);

var storage;
var clave = "tutorial_storage";
function init()
{
    var formulario = document.querySelector("#todo_form");
    storage = new Lista(clave);
    formulario.addEventListener('submit', agregarActividad,false);
    actualizarLista(storage.obtenerActividades());
}

function agregarActividad(e)
{
    e.preventDefault();
    var actividad = document.querySelector('#todo').value;
    if(storage.agregarActividad(actividad))
    {
        console.log("Se agrego actividad");
        actualizarLista(storage.obtenerActividades());
    }
}
function actualizarLista(actividades)
{
    var lista = document.querySelector("#todo_list");
    lista.innerHTML="";
    if(actividades != null)
    {
        for (i in actividades) 
        {
            var actividad = actividades[i];
            var elemento = document.createElement('li');
            elemento.innerHTML = actividad;
            lista.appendChild(elemento);
        }
    }
}

function actividadAgregada(e)
{
    console.log(e.key);
    actualizarLista(storage.obtenerActividades());
}

function Lista(clave)
{
    this.clave = clave;
    this.agregarActividad = function(actividad)
    {
        if(this.validarNavegador())
        {
            if(localStorage.getItem(this.clave) != null)
            {
                var actividades = JSON.parse(localStorage.getItem(this.clave));
            }
            else
            {
            var actividades = [];
            }
            actividades.push(actividad);
            localStorage.setItem(this.clave, JSON.stringify(actividades));
            return true;
        }
        return false;
    }

    this. obtenerActividades = function()
    {
        if(localStorage.getItem(this.clave) != "undefined")
            {
                return JSON.parse(localStorage.getItem(this.clave));
            }

            return null;
    }

    this.eliminarActividad = function(actividad)
    {
        var actividades = JSON.parse(localStorage.getItem(this.clave));
        actividades = actividades.filter(function(i)
        {
            return i != actividad;
        });
        localStorage.setItem(this.clave, JSON.stringify(actividades));
    }

    this.eliminarActividad = function()
    {
        localStorage.removeItem(this.item);
    }
    this.validarNavegador = function()
    {
        if(typeof(Storage) !== "undefined")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}