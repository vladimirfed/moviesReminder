import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'
import TrashItem from '../trash-item'

import './app.css';

export default class App extends Component {
  
  maxId= 10;

  state = {
    todoData: [
      this.createTodoItem('Note some movie you need to watch later'),
    ], 
    term:'',
    filter: 'all'
  }

  createTodoItem(label){
    return{
        label,
        important: false,
        done: false,
        id: this.maxId++
    }
  }

  deleteItem =  (id) => {
    this.setState(({todoData}) =>{
      const idx = todoData.findIndex((el)=>el.id===id);

      // const before = todoData.slice(0,idx);
      // const after = todoData.slice(idx+1 )
      const newArray = [...todoData.slice(0,idx), 
                        ...todoData.slice(idx+1 )]

      return{
        todoData: newArray
      }
    })
  }

  addItem = ( text) => {
    const newItem = this.createTodoItem(text);
    

    this.setState(({todoData}) =>{
      // const idx = todoData.findIndex((el)=>el.id===id);
      
      const newArr = [ newItem, ...todoData];
      
      return{
        todoData: newArr
      }
    })

    // console.log('text', text);
  }

  toggleProperty (arr, id, propName){
    const idx = arr.findIndex((el)=>el.id===id);

    const oldItem = arr[idx];

    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    }

    return [
      ...arr.slice(0,idx), 
      newItem,
      ...arr.slice(idx+1 )]
  }

  onToggleDone = (id) => {
    // console.log('hi impoertant', id);
    this.setState(({todoData})=>{

        return{todoData: 
          this.toggleProperty(todoData, id,'done')}
    })
  }

  onToggleImportant = (id) => {
    // console.log(' done', id);
    this.setState(({todoData})=>{

      return{todoData: 
        this.toggleProperty(todoData, id,'important')}
  })
  }

  onChangeStatus = (id) => {
    // console.log(' done', id);
    this.setState(({todoData})=>{

      return{todoData: 
        this.toggleProperty(todoData, id,'status')}
  })
  }

  onSearchChange = (term) =>{
    this.setState({term})
  }

  onFilterChange = (filter) =>{
    this.setState({filter})
  }

  search=(items, term)=>{
    if (term.length === 0){
      return items
    }

    return items.filter((item)=>{
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }


  filter = (items, filter) =>{
    switch(filter){
      case 'all':
        return items;
        case 'active':
          return items.filter((item) => !item.done);
          case 'done':
            return items.filter((item) => item.done);
            default: return items;
    }
  }

  render(){

    const{ todoData, term, filter} = this.state
    const doneCount = todoData
                      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    const importantCount = todoData
            .filter((el) => el.important).length;
    
    const visibleItems = this.filter(this.search(todoData, term), filter);


    return (

      <div className="todo-app">
        <AppHeader 
        toDo={todoCount} 
        done={doneCount} 
        important={importantCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchChange} />
          <ItemStatusFilter filter={filter}
          onFilterChange={this.onFilterChange} />
        </div> 
        <div className="top-panel d-flex" >        
          <TodoList 
          todos={visibleItems}
          onDeleted={this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          onChangeStatus={this.onChangeStatus} />

          <TodoList 
          todos={visibleItems}
          onDeleted={this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          onChangeStatus={this.onChangeStatus} />
        </div>

          <ItemAddForm  onItemAdded={this.addItem} />
          <TrashItem />
      </div>
    );
  }
}
