const tableBody = document.getElementById("tableBody")
const id = document.getElementById("txtId")
const brand = document.getElementById("txtBrand")
const model= document.getElementById("txtModel")
const category_id = document.getElementById("txtCategory_id")

function crearCar(){

}

function obtenerCar(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://gd1b91672cbfcdf-u7wgqpn5d368qemj.adb.us-chicago-1.oraclecloudapps.com/ords/admin/car/car", requestOptions)
      .then(response => response.json())
      .then(result => {
          const datos = result.items
          datos.forEach(element => {
                tableBody.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.brand}</td>
                    <td>${element.model}</td>
                    <td>${element.category_id}</td>
                    <td><button>Detalles</button></td>
                    <td><button>Eliminar</button></td>
                </tr>
                `
            });
      })
      .catch(error => console.log('error', error));
}

function actualizarCar(){

}

function eliminarCar(){

}
function obtenerPorIdCar(){

}

obtenerCar()

