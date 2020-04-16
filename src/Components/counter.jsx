import React from 'react';

class Counter extends React.Component{

    /* funcçoes do lifecycle REact */
    componentDidUpdate(prevProps,prevState){
        console.log("Counter - Updated");
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
        if( prevProps.counter.value !== this.props.counter.value){
            //chamada ajax
        }
    }

    componentWillUnmount() {
        //antes de deletar passa aqui
        console.log("Counter - Unmount");
    }

    render() {
        const { onDelete,onIncrement } = this.props;
        console.log("Counter - Rendered");
        return (
            <div>
                { this.props.children }

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={ () => onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm">Increment
                </button>

                <button onClick={ () => onDelete(this.props.counter.id) }
                    className="btn btn-danger btn-sm m-2">Delete
                </button>

             </div>
        )
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += ( this.props.counter.value === 0 ) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const value = this.props.counter.value;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;