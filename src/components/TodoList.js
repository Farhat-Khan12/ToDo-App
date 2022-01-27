/*import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Tasks to be done Today...</b></Form.Label><br/>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" />
    </Form.Group>
    <br/>
    <Button variant="secondary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function TodoList() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;*/
import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import './todo.css';
export class Todo extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            todo:[
                {titleToBeAdded:"demo",PriorityToBeAdded:"1",completed: false,},
            ],
            newTodoTitle:[ 
                ''
            ],
            newPriority:[
                ''
            ],
            isloading:true,
            completed: false
       }
    }
    
    newValueTitle =(event) =>{
        this.setState({newTodoTitle:event.target.value});
        
    };
    
    handler = (event)=>{
        this.setState({handler:event.target.value});
    }

    handleDelete=(id)=>{
        console.log("delete",id)
        var newTodos1 =[...this.state.todo]
        var todo = newTodos1.filter((element,i) => {
            return i !== id
        })
        this.setState({todo:todo});
    }
    handleEdit=(id)=> {
        var itemsToBeEdited =[...this.state.todo]
        var todo1 = itemsToBeEdited.filter((element,i) => {
            return i !== id
        }) 
        var selectedItems = this.state.todo.find((ele,i)=>i === id);
        
        this.setState({
            newTodoTitle:selectedItems.titleToBeAdded,
            newPriority:selectedItems.PriorityToBeAdded
            
        })
        this.handleDelete(id)


        
    }
  
    complete=(id)=>{
        var newTodos1 =[...this.state.todo]
            var todo = newTodos1.map((element,i) => {
                if(i === id){
                    if(newTodos1[i]["completed"]!==true){
                        newTodos1[i]["completed"]=true
                        localStorage.setItem("mycart",JSON.stringify(newTodos1)) ;
                        this.setState({todo:newTodos1})  
                    }

                }
                return element
            })
      }

      /*const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };*/
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('mycart', JSON.stringify(nextState.arr));
    
    }
    componentWillMount(){
        localStorage.getItem('mycart') && this.setState({
            todo: JSON.parse(localStorage.getItem('mycart')),
            isloading:false,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let abc=document.getElementById("titleToBeAddedle").value;
        if(abc!==""){
          let arr = this.state.todo;
        if (localStorage.getItem('mycart') !== undefined) {
            localStorage.setItem('mycart', JSON.stringify(arr));
        }
        else{
            localStorage.setItem('mycart', JSON.stringify(arr));
        }
        
        this.setState({
            todo:[
                 ...this.state.todo,
                 {titleToBeAdded:this.state.newTodoTitle,
                PriorityToBeAdded:this.state.newPriority,
                completed: false,
                },
                
             ],
             newTodoTitle:'',
             newPriority:'',
             
             
            
         }) 
         console.log(this.state.todo);
         alert("Todo Entry done");
       
        }
      else{
        alert("Empty");
      }
        
    };
    handleChange = (event) => {
        var titleToBeAddedle = event.target.value;
        this.setState({ titleToBeAddedle: titleToBeAddedle});
    }
    handleNumber = (event) => {
        this.setState({
            newPriority: event.target.value
        }, () => {
            console.log(this.state.newPriority)
        })
        
    }
    sortBy(key){
            let arrayCopy = [...this.state.todo];
            arrayCopy.sort(this.compareBy(key));
            this.setState({todo: arrayCopy});
    }
    compareBy(key)

    {
                return function (a, b) {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
                };
  }
  componentDidMount(){
    let arr = this.state.todo;
    if (localStorage.getItem('mycart') !== undefined) {
        localStorage.setItem('mycart', JSON.stringify(arr));
    }
    else{
        localStorage.setItem('mycart', JSON.stringify(arr));
    }
  }
  componentDidUpdate(){
    let arr = this.state.todo;
    if (localStorage.getItem('mycart') !== undefined) {
        localStorage.setItem('mycart', JSON.stringify(arr));
    }
    else{
        localStorage.setItem('mycart', JSON.stringify(arr));
    }
  }
 

    render() {
        
        return (
          <div className="maint"> 
          <div className="Nav"> 
        <Link to="/"><button className="btn1h">Home </button></Link>
        <Link to="/login"><button className="btn2h">Login</button></Link>
        <Link to="/regestration"><button className="btn3h"> Regestration</button></Link>
        <Link to="/todo"><button className="btn4h"> ToDoApp</button></Link>
        <Link to="/logout"><button className="btn5h">Logout</button></Link>
      </div><br/><br/>
            <div>
            <div className="sub">
                <h2 className = "h2_heading">To Do App</h2>
                {/*<Link to="/login">Log out</Link>&nbsp;&nbsp;&nbsp;
                {<Link to="/table">Table</Link>}*/}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.newValueTitle} 
                    value={this.state.newTodoTitle} name = "titleToBeAddedlestate"
                    id="titleToBeAddedle" placeholder="Add Task" className="task"/ >
                    <select value={this.state.newPriority} 
                    onChange={this.handleNumber} className="priority">
                    <option value="default">Priority</option>
                    <option value="1">1(low)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5(high)</option>
                    </select>
                    <button class="btn btn-outline-secondary btn-submit">Add Task</button> 
                </form><br/><br/>
                <h3 className="heading">To Do List</h3>
                
                <div className="d-flex align-items-center">
                    <table class="table table-bordered" className = "table">
                    <thead>
                        <tr>
                        <th scope="col" 
                        onClick={() => this.sortBy('id')}>SrNo</th>
                        <th scope="col"
                        onClick={() => this.sortBy('titleToBeAdded')}>Task</th>
                        <th scope="col"
                        onClick={() => this.sortBy('PriorityToBeAdded')}>Priority</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.todo.map((item,id)=>
                            <tr key={id}>
                <td className={item.completed ? 'line-through' : '' }>{id+1}</td>
                                <td className={ item.completed ? 'line-through' : '' } >{item.titleToBeAdded}</td>
                                <td  className={ item.completed ? 'line-through' : '' }>{item.PriorityToBeAdded}</td>
                                <td>
                                    <button onClick={() =>{this.handleDelete(id)}} className="btn btn-danger" variant="outline-danger">✕</button> &nbsp;
                                    <button onClick={() =>{this.handleEdit(id)}} class="btn btn-warning">U</button> &nbsp;
                                    <button onClick={() =>{this.complete(id)}} className="btn btn-success btn-complete" variant="outline-success">✓
                                </button>{''}
                                </td>
                                
                                
                            </tr>

                            )}
                        
                    </tbody>
                    </table>
                    
                   
                </div>
            </div>
            
            </div>
            </div>
        )
    }
}

export default Todo;