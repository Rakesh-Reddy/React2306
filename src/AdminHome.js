import React, { Component } from 'react';
import HeaderHome from './Header/HeaderHome';
import swal from 'sweetalert';
import axios from 'axios';
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

class AdminHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDataForAdmin: [],
            status:"approved"
        }
    }

    componentDidMount() {
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.79:6677/ingbanking/api/approval/1`).then((response) => {
                resolve(response);
                this.setState({ userDataForAdmin: [response.data] });
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    approve = () => {
        axios.get(`http://10.117.189.117:6677/ingbanking/api/approval/${this.props.data.accountId}`).then((response) => {
        }).catch(function (error) {
        });
    }

    reject = () => {
        swal('Rejecting the User Registration');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <HeaderHome />
                    <h2 className="col-md-12 text-success">Admin Approval</h2>

                    <Table>
                            <TableHead>
                                <CustomTableCell><strong>S.no</strong></CustomTableCell>
                                <CustomTableCell><strong>First Name</strong></CustomTableCell>
                                <CustomTableCell><strong>PAN Number</strong></CustomTableCell>
                                <CustomTableCell><strong>Account Type</strong></CustomTableCell>
                                <CustomTableCell><strong>Approve</strong></CustomTableCell>
                                <CustomTableCell><strong>Reject</strong></CustomTableCell>
                            </TableHead>
                            <TableBody className="table-hover">
                                {/* {
                                    
                                    this.state.userDataForAdmin.map((item, i) => {
                                        return (
                                            <TableRow className="table table-info table-striped" key={i}>
                                                <TableCell>{item.++i}</TableCell>
                                                <TableCell>{item.firstname}</TableCell>
                                                <TableCell>{item.lastName}</TableCell>
                                                <TableCell>{item.accountNumber}</TableCell>
                                               <TableCell>  <button style={{ backgroundColor: "#ff6200" }} onClick={() => this.Approve()}>Approve</button></TableCell>
                                               <TableCell>  <button style={{ backgroundColor: "#ff6200" }} onClick={() => this.Reject()}>Reject</button></TableCell>
                                            </TableRow>
                                        )
                                    })
                                } */}
                            </TableBody>
                        </Table>
                </div>
            </div>
        );
    }
}

export default AdminHome;