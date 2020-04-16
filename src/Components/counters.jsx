import React from 'react';
import Counter from './counter'

class Counters extends React.Component{

    state = {
        counters: [
            { id: 1 , value:0 },
            { id: 2 , value:1 },
            { id: 3 , value:2 },
            { id: 4 , value:3 },
         ]
    }

    //conceito do react que cada componente eh responsavel por suas operaçoes
    //para deletar um counter de counters, o proprio Counters deve fazer
    //entao, essa funçao é passada ao Counter pelas props e la é acionado
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
     };

     handleReset = () => {
        /*
        const counters = this.state.counters.map(
            function(counter) {
                counter.value=0;
                return counter;
            }
        );*/
        const counters = this.state.counters.map( counter => {
              counter.value=0;
              return counter;
        });
        this.setState({ counters });
     }

     handleIncrement = (counter) => {
        const counters = [...this.state.counters]; //cloning o array
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
     }

    render() {
        return (
            <div>

            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>

            {
                this.state.counters.map( counter =>
                    <Counter
                        key={ counter.id }
                        onDelete={ this.handleDelete }
                        onIncrement={ this.handleIncrement }
                        counter={ counter }>
                        <h5>Counter #{ counter.id } : </h5>
                    </Counter>
                )
            }
            </div>
        );
    }

}

export default Counters;