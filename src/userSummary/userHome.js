import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import HeaderHome from '../Header/HeaderHome';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#ff6200",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14
    },
}))(TableCell);

class userHome extends Component {

    constructor() {
        super();
        this.state = {
            userData: [],
            transactionHistory : [],
            transactionHistoryB : false
        }
    }
    componentDidMount() {
        this.getData().then(response=> {
            this.setState({ userData: response.data });
        }).catch(error=> {
            alert(error.message);
        })

        this.getTransactionHistory().then(response=> {
            this.setState({ userData: response.data });
        }).catch(error=> {
            alert(error.message);
        })
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.33:8080/ingbanking/api/summary/1`).then((response) => {
                resolve(response);               
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    getTransactionHistory = () => {
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.33:8080/ingbanking/api/transactionHistory/${this.props.data.accountNumber}`).then((response) => {
                resolve(response);               
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    transactionHistoryF = () => {
        this.setState({transactionHistoryB:true});
    }

    fundTransfer = () => {
        this.props.history.push('/fundTransfer');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <HeaderHome />
                    <h2 className="col-md-12 text-success">Your Account Summary</h2>
                    <button style={{ backgroundColor: "#ff6200" }} onClick={this.fundTransfer}>Fund Transfer</button>
                    {/* {
                        this.state.userData.map((item, i) => {
                            return ( */}
                                <div className="row col-md-12 pt-5" style={{ color: "#ff6200"}}>
                                <div className="row pt-3 col-md-12"><div className="col-md-1"></div><div className="col-md-2">Welcome</div>
                                        <div className="col-md-3"> 
                                        {/* {item.accountNumber}  */}
                                         </div></div>
                                    <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">Account Number:</div>
                                        <div className="col-md-3"> 
                                        {/* {item.accountNumber}  */}
                                         </div></div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Balance:</div>
                                        <div className="col-md-3 pt-3">
                                              {/* {item.balance}  */}
                                              </div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Account Type:</div>
                                        <div className="col-md-3 pt-3">
                                             {/* {item.accountType} */}
                                              </div>
                                    </div>
                                </div>
                             {/* )
                        })
                    } */}
                    <div className="row col-md-12 pt-5 ">
                        <div className="col-md-5"></div>
                        <div className="pb-5">
                        <button className="col-md-12 btn btn-info" style={{ backgroundColor: "#ff6200" }} onClick={this.transactionHistoryF}>Transaction History</button></div>
                        {
                    (this.state.transactionHistoryB === true) ? (
                        <Table>
                            <TableHead>
                                <CustomTableCell><strong>S.no</strong></CustomTableCell>
                                <CustomTableCell><strong>Date Of Transaction</strong></CustomTableCell>
                                <CustomTableCell><strong>Description</strong></CustomTableCell>
                                <CustomTableCell><strong>Dr/Cr</strong></CustomTableCell>
                                <CustomTableCell><strong>Amount</strong></CustomTableCell>
                            </TableHead>
                            <TableBody className="table-hover">
                                {/* {
                                    
                                    this.state.transactionHistory.map((item, i) => {
                                        const playerIds=1;
                                        return (
                                            <TableRow className="table table-info table-striped" key={i}>
                                                <TableCell>{++i}</TableCell>
                                                <button style={{ backgroundColor: "#abdde5" }} onClick={() => this.details(item)}><TableCell>{item.playerName}</TableCell></button>
                                                <TableCell>{item.transactionDate}</TableCell>
                                                <TableCell>{item.description}</TableCell>
                                                <TableCell>{item.transactionStatus}</TableCell>
                                                <TableCell>{item.amount}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                } */}
                            </TableBody>
                        </Table>
                    ) : null
                }

                       </div>
                </div>
            </div>
        );
    }
}

export default withRouter(userHome);