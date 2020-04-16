import React from 'react';
import Counter from './counter'

class Counters extends React.Component{

    render() {
        console.log("Counters - Rendered");
        return (
            <div>

            <button onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
            </button>

            {
                this.props.counters.map( counter =>
                    <Counter
                        key={ counter.id }
                        onDelete={ this.props.onDelete }
                        onIncrement={ this.props.onIncrement }
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