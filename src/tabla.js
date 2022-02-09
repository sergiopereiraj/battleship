import { useState } from "react";
import "./App.css";

function Tabla() {
  // 0 = vacio
  // 1 = Parte de un barco
  // 2 = parte hundida de un barco
  // 3 = tiro fallido
  const [ubicacion, setUbicacion] = useState([
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ]);

  function nuevoArray (){
  }

  function ubicacionBarco(x, y) {
    let auxUbicacion = [...ubicacion];
    if (auxUbicacion[x][y] === 1) {
      auxUbicacion[x][y] = 2;
    } else if (auxUbicacion[x][y] === 0) {
      auxUbicacion[x][y] = 3;
    }
    setUbicacion(auxUbicacion);
  }

  function nuevaUbicacion(x, y) {
    if (ubicacion[x][y] === 0 || ubicacion[x][y]==1) {
      return "";
    }
    if (ubicacion[x][y] === 2) {
      return "rojo";
    }
    if (ubicacion[x][y] === 3) {
      return "azul";
    }
  }

  return (
    <div className="row">
      <table class="table table-bordered mt-2">
        <thead class="thead-dark">
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          <tr class="thead-dark">
            <th>1</th>
            <td
              className={nuevaUbicacion(0,0)}
              onClick={() => ubicacionBarco(0, 0)}
            ></td>
            <td
              className={nuevaUbicacion(0,1)}
              onClick={() => ubicacionBarco(0, 1)}
            ></td>
            <td
              className={nuevaUbicacion(0,2)}
              onClick={() => ubicacionBarco(0, 2)}
            ></td>
            <td
              className={nuevaUbicacion(0,3)}
              onClick={() => ubicacionBarco(0, 3)}
            ></td>
            <td
              className={nuevaUbicacion(0,4)}
              onClick={() => ubicacionBarco(0, 4)}
            ></td>
            <td
              className={nuevaUbicacion(0,5)}
              onClick={() => ubicacionBarco(0, 5)}
            ></td>
            <td
              className={nuevaUbicacion(0,6)}
              onClick={() => ubicacionBarco(0, 6)}
            ></td>
            <td
              className={nuevaUbicacion(0,7)}
              onClick={() => ubicacionBarco(0, 7)}
            ></td>
            <td
              className={nuevaUbicacion(0,8)}
              onClick={() => ubicacionBarco(0, 8)}
            ></td>
                        <td
              className={nuevaUbicacion(0,9)}
              onClick={() => ubicacionBarco(0, 9)}
            ></td>
          </tr>
          <tr class="thead-dark">
            <th scope="row">2</th>
            <td
              className={nuevaUbicacion(1,0)}
              onClick={() => ubicacionBarco(1, 0)}
            ></td>
            <td
              className={nuevaUbicacion(1,1)}
              onClick={() => ubicacionBarco(1, 1)}
            ></td>
            <td
              className={nuevaUbicacion(1,2)}
              onClick={() => ubicacionBarco(1, 2)}
            ></td>
            <td
              className={nuevaUbicacion(1,3)}
              onClick={() => ubicacionBarco(1, 3)}
            ></td>
            <td
              className={nuevaUbicacion(1,4)}
              onClick={() => ubicacionBarco(1, 4)}
            ></td>
            <td
              className={nuevaUbicacion(1,5)}
              onClick={() => ubicacionBarco(1, 5)}
            ></td>
            <td
              className={nuevaUbicacion(1,6)}
              onClick={() => ubicacionBarco(1, 6)}
            ></td>
            <td
              className={nuevaUbicacion(1,7)}
              onClick={() => ubicacionBarco(1, 7)}
            ></td>
            <td
              className={nuevaUbicacion(1,8)}
              onClick={() => ubicacionBarco(1, 8)}
            ></td>
            <td
              className={nuevaUbicacion(1,9)}
              onClick={() => ubicacionBarco(1, 9)}
            ></td>
          </tr>
          <tr class="thead-dark">
            <th scope="row">3</th>
            <td
              className={nuevaUbicacion(2,0)}
              onClick={() => ubicacionBarco(2, 0)}
            ></td>
            <td
              className={nuevaUbicacion(2,1)}
              onClick={() => ubicacionBarco(2, 1)}
            ></td>
            <td
              className={nuevaUbicacion(2,2)}
              onClick={() => ubicacionBarco(2, 2)}
            ></td>
            <td
              className={nuevaUbicacion(2,3)}
              onClick={() => ubicacionBarco(2, 3)}
            ></td>
            <td
              className={nuevaUbicacion(2,4)}
              onClick={() => ubicacionBarco(2, 4)}
            ></td>
            <td
              className={nuevaUbicacion(2,5)}
              onClick={() => ubicacionBarco(2, 5)}
            ></td>
            <td
              className={nuevaUbicacion(2,6)}
              onClick={() => ubicacionBarco(2, 6)}
            ></td>
            <td
              className={nuevaUbicacion(2,7)}
              onClick={() => ubicacionBarco(2, 7)}
            ></td>
            <td
              className={nuevaUbicacion(2,8)}
              onClick={() => ubicacionBarco(2, 8)}
            ></td>
            <td
              className={nuevaUbicacion(2,9)}
              onClick={() => ubicacionBarco(2, 9)}
            ></td>
          </tr>
          <tr class="thead-dark">
            <th scope="row">4</th>
            <td
              className={nuevaUbicacion(3,0)}
              onClick={() => ubicacionBarco(3, 0)}
            ></td>
            <td
              className={nuevaUbicacion(3,1)}
              onClick={() => ubicacionBarco(3, 1)}
            ></td>
            <td
              className={nuevaUbicacion(3,2)}
              onClick={() => ubicacionBarco(3, 2)}
            ></td>
            <td
              className={nuevaUbicacion(3,3)}
              onClick={() => ubicacionBarco(3, 3)}
            ></td>
            <td
              className={nuevaUbicacion(3,4)}
              onClick={() => ubicacionBarco(3, 4)}
            ></td>
            <td
              className={nuevaUbicacion(3,5)}
              onClick={() => ubicacionBarco(3, 5)}
            ></td>
            <td
              className={nuevaUbicacion(3,6)}
              onClick={() => ubicacionBarco(3, 6)}
            ></td>
            <td
              className={nuevaUbicacion(3,7)}
              onClick={() => ubicacionBarco(3, 7)}
            ></td>
            <td
              className={nuevaUbicacion(3,8)}
              onClick={() => ubicacionBarco(3, 8)}
            ></td>
            <td
              className={nuevaUbicacion(3,9)}
              onClick={() => ubicacionBarco(3, 9)}
            ></td>
          </tr>
          <tr class="thead-dark">
            <th scope="row">5</th>
            <td
              className={nuevaUbicacion(4,0)}
              onClick={() => ubicacionBarco(4, 0)}
            ></td>
            <td
              className={nuevaUbicacion(4,1)}
              onClick={() => ubicacionBarco(4, 1)}
            ></td>
            <td
              className={nuevaUbicacion(4,2)}
              onClick={() => ubicacionBarco(4, 2)}
            ></td>
            <td
              className={nuevaUbicacion(4,3)}
              onClick={() => ubicacionBarco(4, 3)}
            ></td>
            <td
              className={nuevaUbicacion(4,4)}
              onClick={() => ubicacionBarco(4, 4)}
            ></td>
            <td
              className={nuevaUbicacion(4,5)}
              onClick={() => ubicacionBarco(4, 5)}
            ></td>
            <td
              className={nuevaUbicacion(4,6)}
              onClick={() => ubicacionBarco(4, 6)}
            ></td>
            <td
              className={nuevaUbicacion(4,7)}
              onClick={() => ubicacionBarco(4, 7)}
            ></td>
            <td
              className={nuevaUbicacion(4,8)}
              onClick={() => ubicacionBarco(4, 8)}
            ></td>
            <td
              className={nuevaUbicacion(4,9)}
              onClick={() => ubicacionBarco(4, 9)}
            ></td>
          </tr>
          <tr class="thead-dark">
            <th scope="row">6</th>
            <td
              className={nuevaUbicacion(5,0)}
              onClick={() => ubicacionBarco(5, 0)}
            ></td>
            <td
              className={nuevaUbicacion(5,1)}
              onClick={() => ubicacionBarco(5, 1)}
            ></td>
            <td
              className={nuevaUbicacion(5,2)}
              onClick={() => ubicacionBarco(5, 2)}
            ></td>
            <td
              className={nuevaUbicacion(5,3)}
              onClick={() => ubicacionBarco(5, 3)}
            ></td>
            <td
              className={nuevaUbicacion(5,4)}
              onClick={() => ubicacionBarco(5, 4)}
            ></td>
            <td
              className={nuevaUbicacion(5,5)}
              onClick={() => ubicacionBarco(5, 5)}
            ></td>
            <td
              className={nuevaUbicacion(5,6)}
              onClick={() => ubicacionBarco(5, 6)}
            ></td>
            <td
              className={nuevaUbicacion(5,7)}
              onClick={() => ubicacionBarco(5, 7)}
            ></td>
            <td
              className={nuevaUbicacion(5,8)}
              onClick={() => ubicacionBarco(5, 8)}
            ></td>
            <td
              className={nuevaUbicacion(5,9)}
              onClick={() => ubicacionBarco(5, 9)}
            ></td>
          </tr>
          <tr class="thead-dark">
            <th scope="row">7</th>
            <td
              className={nuevaUbicacion(6,0)}
              onClick={() => ubicacionBarco(6, 0)}
            ></td>
            <td
              className={nuevaUbicacion(6,1)}
              onClick={() => ubicacionBarco(6, 1)}
            ></td>
            <td
              className={nuevaUbicacion(6,2)}
              onClick={() => ubicacionBarco(6, 2)}
            ></td>
            <td
              className={nuevaUbicacion(6,3)}
              onClick={() => ubicacionBarco(6, 3)}
            ></td>
            <td
              className={nuevaUbicacion(6,4)}
              onClick={() => ubicacionBarco(6, 4)}
            ></td>
            <td
              className={nuevaUbicacion(6,5)}
              onClick={() => ubicacionBarco(6, 5)}
            ></td>
            <td
              className={nuevaUbicacion(6,6)}
              onClick={() => ubicacionBarco(6, 6)}
            ></td>
            <td
              className={nuevaUbicacion(6,7)}
              onClick={() => ubicacionBarco(6, 7)}
            ></td>
            <td
              className={nuevaUbicacion(6,8)}
              onClick={() => ubicacionBarco(6, 8)}
            ></td>
            <td
              className={nuevaUbicacion(6,9)}
              onClick={() => ubicacionBarco(6, 9)}
            ></td>
          </tr>
          <tr class="thead-dark">
            <th scope="row">8</th>
            <td
              className={nuevaUbicacion(7,0)}
              onClick={() => ubicacionBarco(7, 0)}
            ></td>
            <td
              className={nuevaUbicacion(7,1)}
              onClick={() => ubicacionBarco(7, 1)}
            ></td>
            <td
              className={nuevaUbicacion(7,2)}
              onClick={() => ubicacionBarco(7, 2)}
            ></td>
            <td
              className={nuevaUbicacion(7,3)}
              onClick={() => ubicacionBarco(7, 3)}
            ></td>
            <td
              className={nuevaUbicacion(7,4)}
              onClick={() => ubicacionBarco(7, 4)}
            ></td>
            <td
              className={nuevaUbicacion(7,5)}
              onClick={() => ubicacionBarco(7, 5)}
            ></td>
            <td
              className={nuevaUbicacion(7,6)}
              onClick={() => ubicacionBarco(7, 6)}
            ></td>
            <td
              className={nuevaUbicacion(7,7)}
              onClick={() => ubicacionBarco(7, 7)}
            ></td>
            <td
              className={nuevaUbicacion(7,8)}
              onClick={() => ubicacionBarco(7, 8)}
            ></td>
            <td
              className={nuevaUbicacion(7,9)}
              onClick={() => ubicacionBarco(7, 9)}
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
