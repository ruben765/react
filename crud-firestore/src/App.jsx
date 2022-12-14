import React from 'react';
import {firebase} from './firebase'

function App() {

  const [tareas, setTareas] = React.useState([])
  const [tarea, setTarea] = React.useState('')
  const [modoEdicion, setModoedicion] = React.useState(false)
  const [id, setId] = React.useState('')

  
  React.useEffect(() => {

  const obtenerDatos = async () => {

try {
  
const db = firebase.firestore()
const data = await db.collection('tareas').get()
const  arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
console.log(arrayData)
setTareas(arrayData)

} catch (error) {
  console.log(error)
}

  }
  
  obtenerDatos()

}, [])

const agregar = async (e) => {
  e.preventDefault()

if(!tarea.trim()){
  console.log('esta vacio')
  return
}

try {
  
const db = firebase.firestore()
const nuevaTarea = {
  name: tarea,
  fecha: Date.now()
}
const data = await db.collection('tareas').add(nuevaTarea)

setTareas([
  ...tareas,
  {...nuevaTarea, id: data.id}
])

setTarea('')

} catch (error) {
  console.log(error)
}  
 console.log(tarea)
}


const eliminar = async (id) => {
  try {
    
  const db = firebase.firestore()
  await db.collection('tareas').doc(id).delete()

  const arrayFlitrado = tareas.filter(item => item.id !== id)
  setTareas(arrayFlitrado)  
  
} catch (error) {
    console.log(error)
  }
}

const activarEdicion = (item) => {
  setModoedicion(true)
  setTarea(item.name)
  setId(item.id)
}

const editar = async (e) => {
  e.preventDefault()
if(!tarea.trim()){
  console.log('vacio')
  return
  }
  try {
    
const  db = firebase.firestore()
await db.collection('tareas').doc(id).update({
  name: tarea
})
const arrayEditado = tareas.map(item => (
  item.id === id ? {id: item.id, fecha: item.fecha, name: tarea} : item
))
setTareas(arrayEditado)
setModoedicion(false)
  setTarea('')
  setId('')
  } catch (error) {
    console.log(error)
  }
}


return (
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-5">
        <ul className="lsit-group">
          {
            tareas.map(item => (
              <li className="list-group-item" key={item.id}>
                {item.name}
              <button 
                className="btn btn-danger btn-sm float right mr-2"
                onClick={() => eliminar(item.id)}
              >
                eliminar  
              </button>
              <button 
                className="btn btn-warning btn-sm float right mr-0"
              onClick={() => activarEdicion(item)}
              >
                editar  
              </button>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-md-6">
        <h3>
          {
            modoEdicion ? 'Editar Tarea' :'Agregar Tarea'
          }
          </h3>
        <form onSubmit={modoEdicion ? editar : agregar}>
          <input 
          type="text"
          placeholder="Ingrese tarea"
          className="form-control mb-4"
          onChange={e => setTarea(e.target.value)}
          value={tarea}
        />
        <button 
        className={
          modoEdicion ? 'btn btn-warning btn-block' : 'btn btn-dark btn-block'
        }
        type="submit"
        >
          {
            modoEdicion ? 'editar' : 'agregar'
          }
        </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;

