import React, { Component } from "react";
import { Button, Card, ListGroup } from "react-bootstrap"; 
import Transaction from './Transaction';

class Block extends Component {
    state = { displayTransaction: false };

    toggleTransaction = () => {
        this.setState({ displayTransaction : !this.state.displayTransaction });
    }

    get displayTransaction() {
        const { data} = this.props.block;

        const stringifiedData = JSON.stringify(data);

        const dataDisplay = stringifiedData.length > 35 ?
             `${stringifiedData.substring(0,35)}...` :
             stringifiedData;

        if(this.state.displayTransaction) {
            return (
                <div>
                    {
                        data.map(transaction => (
                            <div key={transaction.id}>
                                <Transaction transaction={transaction} />
                            </div>
                        ))
                    }
                    <br />
                    <Button 
                        className="showButton"
                        variant="danger"
                        bsStyle="danger" 
                        bsSize="small" 
                        onClick={this.toggleTransaction}
                    >
                            Hide Data
                    </Button> 
                </div>
                
            );
        }

        return (
            <div>
                {/* <div>Data: {dataDisplay}</div> */}
                <Button 
                    className="showButton"
                    variant="danger"
                    bsStyle="danger" 
                    bsSize="small" 
                    onClick={this.toggleTransaction}
                >
                        Show Data
                </Button> 
            </div>
        );


    }

    render() {
        const {timestamp, hash } = this.props.block;

        const hashDisplay = `${hash.substring(0,45)}...`;

        return (
            <div className='Block'>
                <Card border="warning" className="block-card">
                <Card.Header>
                <div>
                    <span className="smallKey">Hash: </span>
                    <span className="valueText2"> {hashDisplay}  </span>
                </div>

                <div>
                    <span className="smallKey">Timestamp: </span>
                    <span className="valueText2"> {new Date(timestamp).toLocaleDateString()}  </span>
                </div>
                </Card.Header>
                <Card.Text>
                {this.displayTransaction}
                </Card.Text>
                </Card>

            </div>
        );
    }
};

export default Block;