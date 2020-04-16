import React from 'react';
import NavBar from './Components/navbar';
import Counters from './Components/counters';

class App extends React.Component{

    /**
    *
    *       funçoes do lifecycle do react
    *
    */
    constructor(props) {
        super(props);
        //this.state = props.state;
        console.log("App - Constructor");
    }

    componentDidMount() {
        //this.setState({ datas });
        console.log("App - Mounted");
    }

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
        console.log("App - Rendered");
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
                <main className="container">
                    <Counters
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        )

    }



}

export default App;