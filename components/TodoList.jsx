import React, {Component} from 'react';
import TodoItems from "./TodoItems";


class TodoList extends Component {
	 constructor(props) {
	   super(props);

	   this.state = {
	     items: []
	   }

	   this.addItem = this.addItem.bind(this);
	 }

	 addItem(e) {
	  if(this._inputElement.value !== "") {
	   const item = {
	      text: this._inputElement.value,
	      key: Date.now()
	   };

	   this.setState((prevState) => {
	     return {
	       items: prevState.items.concat(item)
	       };
	   });
     }
	   this._inputElement.value = "";

	   console.log(this.state.items);

	   e.preventDefault();
	  
	 
	 }


	 deleteItem = (key) => {
	   let filteredItems = this.state.items.filter(item => item.key !== key);

	   this.setState({
	      items: filteredItems
	   });
	 }

	render() {
		return (
			<div className="todoListMain">
			  <div className="header">
				  <h2>A Todo Application</h2>
					   <h5>Click on any item to remove it. </h5>
			    <form onSubmit={this.addItem}>
			      <input ref={(a) => this._inputElement = a}
			      		placeholder="Enter Task"/>
			      
			      <button type="submit">Add</button>
			       
			    </form>
			    
			  </div>
			   <TodoItems entries={this.state.items} delete={this.deleteItem} />

			    <style jsx>{`
      			    .todoListMain .header input {
					padding: 10px;
					font-size: 16px;
					border: 2px solid #FFF;
					}

					.todoListMain .header button {
					padding: 10px;
					font-size: 16px;
					margin-left: 10px;
					background-color: #0066FF;
					color: #FFF;
					border: 2px solid #0066FF;

					}

					.todoListMain .header button:hover {
					background-color: #003399;
					border: 2px solid #003399;
					cursor: pointer;
					}

					.todoListMain .theList li {
					color: #333;
					background-color: rbga(255, 255, 255, .5);
					padding : 15px;
					margin-bottom: 15px;
					border-radius: 5px;
					list-style: none;

					transition: background-color .2s ease-out;
					}


					.todoListMain .theList .li:hover {
					background-color: pink;
					cursor: pointer;
					}
					ul.theList {
					padding: 0;
					}
					.todoListMain {
					margin-left: 30%;
					}
   		 `}</style>
			</div>
		);
	}
}

export default TodoList;