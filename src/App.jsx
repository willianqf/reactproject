// SEMPRE IMPORTAR A BIBLIOTECA DO REACT //
import React, { useEffect, useState } from "react";
//////////////////////////////////////////a
////// IMPORTAR ARQUIVOS PARA HTML ///////
import './App.css';
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
/////////////////////////////////////////
///////// BIBLIOTECA UUIC ///////////////
import { v4 as uuidv4 } from 'uuid';
import { Route } from "react-router-dom";

/////////////////////////////////////////
//// BIBLIOTECAS DO REACT ROUTER DOM ////
import { BrowserRouter as Router, Routes} from "react-router-dom";
/////////////////////////////////////////
/// BIBLOTECAS DO AXIOS /////////////////
import axios from 'axios'

const App = () =>
{
  //let mensagem = 'Hello Word! PEOPLES SCRIPT'
  /* VARIAVEL STATE = const ['nome da variavel', 'função que usará'] = useState('valor inicial') */
  /* const [mensagem, setMensagem] = useState('Hello Word') */
  const [tasks, setTasks] = useState(
    [
      {
        id:'1',
        title:'Estudar programação',
        completed: false
      },
      {
        id:'2',
        title:'Livros',
        completed: true
      }
    ]
  )
  //EXECUTA O COMANDO SEMPRE QUE UMA VARIÁVEL MUDA [Colocar variaveis a ser observada]
  useEffect(() =>{
    const fetchTasks = async () =>
    {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
      setTasks(data);
    }
    fetchTasks();
  }, []/*variavel a ser observada*/)
  const handleTaskClick = (taskId) =>
  {
    const newTasks = tasks.map(task =>{
      if(task.id == taskId) return{...task, completed: !task.completed}
      return task;
    })

    setTasks(newTasks)
  }
  const handleTaskAddition = (taskTitle) =>
  {
    const newTask = [...tasks, 
      {
      title: taskTitle,
      id: uuidv4(),
      completed: false
      }
    ];

    setTasks(newTask);
  }

  const handleTaskDeletion = (taskId) =>
  {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }
  /*
    <>
    <div className="container">{mensagem}</div>
    <button onClick={() => setMensagem("Você clicou no botão")}>Teste</button>
    </>
  */
 
  return(
    <>
      <div className="container">
        <Header/>
        <Router>
          <Routes>
            <Route path='/ini' element={
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            </>
            }    
            />
            
            <Route path="/:taskTitle" element={
              <TaskDetails/>
            }    
            />

          </Routes>
        </Router>

      </div>
    </>
  )

}

export default App;

function coments(params) {
      /*
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
          
            </>
        )} 
        />
      </div>
    </Router>
    */
}