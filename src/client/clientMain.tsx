import * as React from "react"
import * as ReactDOM from "react-dom";
import {TodoItem} from "./todoItem";

interface ITodo {
    description: string;
    key: number
}


export interface IMainState {
    newItem?: {
        description: string;
    }
    todoList?: ITodo[];
}

export interface IMainProps {

}

export class ClientTest extends React.Component<IMainProps, IMainState> {

    state: IMainState = {
        newItem: {
            description: ''
        },
        todoList: []
    };

    constructor(props?: IMainProps) {
        super(props);
    }

    changeName = (e:any) => {
        this.setState({
            newItem: {
                description: e.target.value
            }
        });
    };

    addItem = () => {
        let list = this.state.todoList;
        list.push({
            description: this.state.newItem.description,
            key: Date.now()
        });

        this.setState({
            todoList: list,
            newItem: {description: ''}
        });
    };

    removeItem = (item: ITodo) => {
        let list = this.state.todoList.filter(i => i.key !== item.key);
        this.setState({todoList: list});
    };

    render() {
        let todoItems = this.state.todoList.map(item => {
            return <TodoItem key={item.key} item={item} onRemove={this.removeItem}/>
        });
        return (
            <div>
                <div>
                    <input type="text" placeholder="input new item" value={this.state.newItem.description} onChange={this.changeName}/>
                    <button onClick={this.addItem}>add</button>
                </div>
                <ul>{todoItems}</ul>
            </div>
        );
    }
}

ReactDOM.render(React.createElement(ClientTest), document.getElementById("reactRoot"));


// import {cat} from "./todoItem";
//
// let test = document.createElement("div");
// test.style.backgroundColor = "red";
// test.style.height = "800px";
// document.getElementById("reactRoot").appendChild(test);
// test.textContent = cat;
