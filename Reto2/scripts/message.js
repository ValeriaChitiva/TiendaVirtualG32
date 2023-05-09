const tableBody = document.getElementById("tableBody")
const id = document.getElementById("txtId")
const messageText = document.getElementById("txtMessageText")

function crearMessage(){

}

function obtenerMessage(){
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://gd1b91672cbfcdf-u7wgqpn5d368qemj.adb.us-chicago-1.oraclecloudapps.com/ords/admin/message/message", requestOptions)
      .then(response => response.json())
      .then(result => {
        const datos = result.items
        datos.forEach(element => {
              tableBody.innerHTML += `
              <tr>
                  <td>${element.id}</td>
                  <td>${element.messagetext}</td>
                  <td><button>Detalles</button></td>
                  <td><button>Eliminar</button></td>
              </tr>
              `
          });
      })
      .catch(error => console.log('error', error));
}

function actualizarMessage(){

}

function eliminarMessage(){

}
function obtenerPorIdMessage(){

}

obtenerMessage()

