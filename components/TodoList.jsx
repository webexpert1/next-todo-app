import React, {Component} from 'react';
import TodoItems from "./TodoItems";


class TodoList extends Component {
	 constructor(props) {
	   super(props);

	   this.state = {
	     items: []
	   }

	 }

	  componentDidMount(props) {
        this.setState({items: this.props.items});
    }

		 addTodo() {
        if (this._inputElement.value !== ""){
            const itemLists = {item: this._inputElement.value, key: Date.now(), done: false};
            this.setState((prevState) => {
                return {items: prevState.items.concat(itemLists)}
            });
            this._inputElement.value = "";
        }
    };

		deleteItem(key) {
        let filterItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });
        this.setState({items: filterItems})
    }

    ItemDone(key, done) {
        let updateItems= this.state.items.map(item => {
            if (item.key === key){
                item.done = done ? false : true;
            }
            return item;
        });
        this.setState({items: updateItems})
    }

		render() {
        return (
            <div style={styles.container}>
                <div style={styles.greetings}>
                    <h3>Hello Mike!</h3>
                </div>
                <div style={styles.Todo}>
                    <h3>Tasks for today!!</h3><br/>
                    <input className="InputForm" type="text" ref={el => this._inputElement = el}/>
                    <button onClick={(e) => this.addTodo(e)} style={styles.button}>Add To List</button>
                </div>
                <div style={styles.TodoList}>
                    <table className="table">
												<TodoItems 
																	entries={this.state.items}
																	delete={(key) => this.deleteItem(key)}
                                  done={(key) => this.ItemDone(key)}/>
                    </table>
                </div>

                <style>{`
                     input[type=text]{
                        background: transparent;
                        border-color: #0000ff;
                        width: 100%;
                        padding: 12px 20px;
                        margin: 8px 0;
                        box-sizing: border-box;
                    }
                    input[type=text]:focus {
                        background-color: transparent;
                        border-color: #FDB22B;
                        box-shadow: none;
                    }
                    table {
                        margin-top: 20px;
                        width: 100%;
                    }
                    td {
                        width: 100%;
                    }
                    .markDone {
                            text-decoration-line: line-through;
                            background-color: #F1F3F4;
                `}</style>
            </div>
        )
    };


	
}

const styles = {
    container: {marginTop: 50, width: '50%', marginLeft: 'auto',
        marginRight: 'auto', textAlign: 'center'},
    Todo: {marginTop: 20},
    TodoList: {textAlign: 'left', marginTop: '50px', width: '100%'},
    greetings: {marginTop: 20},
    button :{
        marginTop: '20px',
        width: '25%',
        height: '32px',
        margin: ['8px', 0],
        boxSizing: 'border-box',
        backgroundColor: '#0000FF',
        color: 'white',
        fontSize: 'calc(12px + 2vmin)',
        borderRadius: '10px',
        borderWidth: '1px',
        borderStyle: 'solid',
        cursor: 'pointer',
    },

};

export default TodoList;