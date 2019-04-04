import React, { Component } from 'react';

class TodoItems extends Component {
	constructor(props) {
	  super(props);

	  this.displayTasks = this.displayTasks.bind(this)
	}

	createTasks(item) {
	  return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}

	 done(key, done){
        this.props.done(key, done);
    }

    delete(key) {
        this.props.delete(key)
    }

    displayTasks = (item) => {
        return (
            <tr className={item.done ? 'markDone' : ''} key={item.key}>
                <td>{item.item}</td>
                <td>
                    <span onClick={() => this.done(item.key, item.done)} style={styles.done}>
                        {item.done ? '' : 'Done' }
                    </span>
                    <span onClick={() => this.delete(item.key)} style={styles.delete}>Delete</span>
                </td>
            </tr>
        )
    };

	render() {
	  let todoEntries = this.props.entries;
	  let listItems = todoEntries.map(this.displayTasks);
	  return(
	  	<tbody>
 		    <ul>{listItems}</ul>
   		 </tbody>
	  )
	}
}

const styles = {
    done: {cursor: 'pointer', color: '#628457', paddingRight: '10px'},
    delete: {cursor: 'pointer', color: '#F68895', paddingRight: '10px'},
};

export default TodoItems;