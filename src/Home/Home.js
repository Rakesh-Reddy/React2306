import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CheckboxIcon from '@material-ui/core/Checkbox';
import Header from '../Header/Header';
import axios from 'axios';
import swal from 'sweetalert';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            showRegistration: false,
            showUserLogin: false,
            showAdminLogin: false,
            userRegistration: {
                firstName: '',
                lastName: '',
                address: '',
                age: '',
                purpose: '',
                email: '',
                city: '',
                phNum: '',
                gender: '',
                accountType: ''
            },
            userLogin: {
                userId: '',
                password: ''
            }
        }
    }
    registration = () => {
        this.setState({ showRegistration: true, showAdminLogin: false, showUserLogin: false });
    }

    userLogin = () => {
        this.setState({ showRegistration: false, showAdminLogin: false, showUserLogin: true });
    }

    handleChange = (event) => {
        const { userRegistration } = this.state;
        userRegistration[event.target.name] = event.target.value;
        this.setState({ userRegistration });
    }

    handleLogin = (event) => {
        const { userLogin } = this.state;
        userLogin[event.target.name] = event.target.value;
        this.setState({ userLogin });
    }

    gotoUserLogin = () => {
        this.getDataUserLogin().then(response => {
            this.props.getUserData(response.data, this.props);
        })
    }
    getDataUserLogin = () => {
        return new Promise((resolve, reject) => {
            axios.post('http://192.168.1.104:9099/breachmanagement/api/login', this.state.userLogin).then((response) => {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    gotoRegistration = () => {
        this.getDataRegistration().then(response => {
            swal('Happy to Have You, Your Registration is under Progress')
            //   this.setState({ responseData: response.data });
        })
    }
    getDataRegistration = () => {
        return new Promise((resolve, reject) => {
            axios.post('http://10.117.189.117:6677/ingbanking/api/createAccount', this.state.userRegistration).then((response) => {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                <Header />
                <div className="row col-md-12 pt-5">
                    <div className="col-md-2"></div>
                    <button className="col-md-3" style={{ backgroundColor: "#ff6200", height: "45px", borderRadius: "12px" }} onClick={this.registration}>User Registration</button><div className="col-md-1"></div>
                    <button className="col-md-3" style={{ backgroundColor: "#ff6200", height: "45px", borderRadius: "12px" }} onClick={this.userLogin}>User Login</button><div className="col-md-2"></div>
                </div>

                {
                    (this.state.showRegistration === true) ? (
                        <div>
                            <div className="row pt-5">
                                <div className="col-md-12 pt-4 pb-2">
                                    <h2 className="text-primary">User Registration</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> First Name : </div> <input className="col-md-3 firstName" id="firstName" style={{ height: "47px" }}
                                        placeholder="Enter Your First Name " type="text"
                                        name="firstName" required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Last Name : </div> <input className="col-md-3 lastName" id="lastName" style={{ height: "47px" }}
                                        placeholder="Enter Your Last Name " type="text"
                                        name="lastName" required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Address: </div> <input className="col-md-3 address" id="address" style={{ height: "77px" }}
                                        placeholder="Enter Your Address " type="text"
                                        name="address" required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Age: </div> <input className="col-md-3 age" id="age" style={{ height: "47px" }}
                                        placeholder="Enter Your Age " type="number"
                                        name="age" required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Purpose: </div> <input className="col-md-3 purpose" id="purpose" style={{ height: "47px" }}
                                        placeholder="Enter Your Purpose " type="text"
                                        name="purpose" required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Email: </div> <input className="col-md-3 email" id="email" style={{ height: "47px" }}
                                        placeholder="Enter Your Email " type="email"
                                        name="email" required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Phone Number: </div> <input className="col-md-3 PhNum" id="PhNum" style={{ height: "47px" }}
                                        placeholder="Enter Your Phone Number " type="number"
                                        name="PhNum" required
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Gender: </div>
                                    <select className="col-md-3" style={{ height: "40px" }} onChange={this.handleChange}>
                                        <option value="gender">Male</option>
                                        <option value="gender">Female</option>
                                    </select>
                                </div>
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> Account Type: </div>    <select className="col-md-3" style={{ height: "40px" }} onChange={this.handleChange}>
                                        <option value="accountType">Savings Account</option>
                                        <option value="accountType">Current Account</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary col-md-6" style={{ width: "300px" }} onClick={this.gotoRegistration} >Submit</button>
                                </div>
                            </div>
                        </div>
                    ) : null
                }

                {
                    (this.state.showUserLogin === true) ? (
                        <div>
                            <div className="row pt-5">
                                <div className="col-md-12 pt-4 pb-2">
                                    <h2 className="text-primary">{t('loginpage')}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> {t('Enter UserName')} : </div> <input className="col-md-3 userId" id="userId" style={{ height: "47px" }}
                                        placeholder="Enter Your User Id " type="text"
                                        name="userId" required
                                        onChange={this.handleLogin}
                                    />
                                </div>
                                <div className="row col-md-12 pb-3 text-info"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3"> {t('Enter Passowrd')} : </div>  <input className="col-md-3" id="password" style={{ height: "47px" }}
                                        placeholder="Enter Your Password " type="password"
                                        name="password" required
                                        onChange={this.handleLogin}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-2">
                                    <p className="text-info">forgot password? </p>
                                </div>
                                <div className="col-sm-2">
                                    <CheckboxIcon />
                                    {t('Remember Me')}
                                </div>
                            </div>
                            <button className="btn btn-primary" style={{ width: "300px" }} onClick={this.gotoUserLogin} >Submit</button>
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default withTranslation()(Home);