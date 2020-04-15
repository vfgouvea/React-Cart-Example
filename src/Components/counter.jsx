import React from 'react';

class Counter extends React.Component{

    state = {
        value: this.props.counter.value
    };

    eventHandleIncrement = () => {
        //para atualizar o component e ele renderizar, atualizamos o estado
        //faz o virtual DOM ficar igual o real DOM
        this.setState( { value: this.state.value + 1 } )
    }

    // dentro desse render a linguagem é o jsx, fora é javascript
    // { this.props.children } pega oq esta dentro de <Counter></Counter>
    render() {
        return (
            <div>
                { this.props.children }

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={ () => this.eventHandleIncrement() }
                    className="btn btn-secondary btn-sm">Increment
                </button>

                <button onClick={ () => this.props.onDelete(this.props.counter.id) }
                    className="btn btn-danger btn-sm m-2">Delete
                </button>

             </div>
        )
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += ( this.state.value === 0 ) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;