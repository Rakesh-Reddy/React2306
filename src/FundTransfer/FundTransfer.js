import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import HeaderHome from '../Header/HeaderHome';

class TransferFund extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fundTransfer: {
                fromAccount:'',
                toAccount:'',
                amount: '',
                description:''
            },
            accountMapping: []
        }
    }

    handleChange = (event) => {
        const { fundTransfer } = this.state;
        fundTransfer[event.target.name] = event.target.value;
        this.setState({ fundTransfer });
    }

    transferFund = () => {
        this.getDatatransferFund().then(response => {
            this.setState({ disabled: !this.state.disabled })
            swal("transfer successful");
         this.props.history.push('/productgroup');
        })
    }

    getDatatransferFund = () => {
            axios.post('http://localhost:4000/accountdetails',this.state.fundTransfer).then((response) => {
            }).catch(function (error) {
            });
    }

    render() {
        return (
            <div>
                <HeaderHome />
                <form >
                    <div className="row pt-5">
                        <h2 className="col-md-12 text-success">Fund Transfer</h2>
                        <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                            <div className="col-md-2 pt-3"> From Account : </div><select className="col-md-3" style={{ height: "40px" }} onChange={this.handleChange}>
                                {
                                    this.state.accountMapping.map((item, i) => {
                                        return (
                                            <option value="businessCategory" key={i}>
                                                {item.fromAccount}
                                            </option>

                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                            <div className="col-md-2 pt-3"> To Account : </div><select className="col-md-3" style={{ height: "40px" }} onChange={this.handleChange}>
                                {
                                    this.state.accountMapping.map((item, i) => {
                                        return (
                                            <option value="businessCategory" key={i}>
                                                {item.toAccount}
                                            </option>

                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="row col-md-12 pb-3"><div className="col-md-3"></div>
                            <div className="col-md-2 pt-3 text-info"> Amount To transfer : </div>
                            <input className="col-md-3" style={{ height: "47px" }}
                                placeholder="Enter Amount to transfer" type="number"
                                name="balance" required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row col-md-12 pb-3"><div className="col-md-3"></div>
                            <div className="col-md-2 text-info"> Comments : </div>
                            <input className="col-md-3" style={{ height: "47px" }}
                                placeholder="Enter your comments" type="text"
                                name="text" required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row col-md-12 pb-3 pt-2"><div className="col-md-3"></div>
                            <button className="col-md-2 btn btn-info" style={{ width: "160px" }} onClick={this.transferFund}>Transfer</button>
                            <div className="col-md-1"></div>
                            <button className="col-md-2 btn btn-info" style={{ width: "160px" }} onClick={this.cancelFund}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TransferFund;