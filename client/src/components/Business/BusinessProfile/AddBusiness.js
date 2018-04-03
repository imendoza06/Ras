import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddBusiness.css'

class AddingBusiness extends Component {
    constructor() {
        super()
        this.state = {
            studio_Name: "",
            studio_Address: "",
            city:"",
            state: "",
            zipcode: 0,
            description: "",
            category:"",
            isLogin: false
        }
    }

    handleName = e => {
        this.setState({
            studio_Name: e.target.value
        })
    }

    handleAddress = e =>{
        this.setState({
            studio_Address: e.target.value
        })
    }

    handleCity = e => {
        this.setState({
            city: e.taget.value
        })
    }

    handleZipcode = e => {
        this.setState({
            zipcode: e.target.value
        })
    }

    handleDescription = e => {
        this.setState({
            description: e.taget.value
        })
    }

    handleCategory = e => {
        this.setState({
            category: e .taget.value
        })
    }

    handleForm = e =>{
        const {isLogin} = this.state
        e.preventDefault();
    if(isLogin ===  true){
        }
    }


    render() {
    const {studio_Name,studio_Address,city,state,zipcode,description,category,isLogin} = this.state
        return (
            <div>
                <div id="topbar">
                    <Link to={`/login`}><a class="hoverturn"><span data-title="Log In">Log In</span></a></Link>
                    <Link to={`/signup`}><a class="hoverturn"><span data-title="Sign Up">Sign Up</span></a></Link>
                </div>
                <div className="add_studio">
                    <h1>Add Your Studio</h1>
                    <br/>
                    <form id="form">

                        <input id="name"
                            name=""
                            type="text"
                            placeholder="Studio Name"
                            onChange={this.handleAddress}
                        />
                        <br/>
                        <input id="Address"
                            name=""
                            type=" text"
                            placeholder="Studio Address"
                            onChange={this.handleAddress}
                        />
                        <br/>
                        <input id="City"
                            name=""
                            type="text"
                            placeholder="City"
                            onChange={this.handleAddress}
                        />
                        <br />
                        <input id="State"
                            name=""
                            type="text"
                            placeholder="State"
                            onChange={this.handleAddress}
                        />
                        <br/>
                        <input id="Zip"
                            name=""
                            type="number"
                            placeholder="Zip Code"
                            onChange={this.handleAddress}
                        />
                        <br/>
                        <input id="Description"
                            name=""
                            type="text"
                            placeholder="Drescribe Your Business"
                            onChange={this.handleAddress}
                        />
                        <br/>
                        <input id="Category"
                            name=""
                            type="text"
                            placeholder="Category ex: Music, Art"
                            onChange={this.handleAddress}
                        />
                        <br/>
                        <button id="submiting" onSubmit={this.handleAddress}>Submit</button>
                    </form>
                </div>
                <div id="footer">
                    <Link to={`/contact`}><a class="hoverturn"><span data-title="Contact">Contact</span></a></Link>
                    <Link to={`/`}><a class="hoverturn"><span data-title="Home">Home</span></a></Link>
                    <p>RAS @ 2018</p>
                </div>
            </div>

        )
    }

}
export default AddingBusiness;