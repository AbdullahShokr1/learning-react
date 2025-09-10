import React ,{Component} from 'react';


class Lgoin extends Component {
    state = { 
        useremail:"abduallah@gmail.com",
        password:"sdfsdfsdf",
        errors :{}
     } 
    // email = React.createRef();

    // handelSubmit = e =>{
    //     e.preventDefault();
    //     const useremail = this.email.current.value;
    //     const pass = this.pass.current.value;
    //     console.log(useremail,pass);
    // }
    handelSubmit = e =>{
        e.preventDefault();
        
        const errors = this.validate();
        if(errors) return;
        
        console.log(this.state);
    }
    handelChange =e=>{
        //clone
        let state = {...this.state};
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //set State
        this.setState(state);
    }
    validate = ()=>{
        const errors = {};
        if(this.state.useremail.trim() === "")
            errors.useremail = "email is required !";
        if(this.state.password.trim() === "")
            errors.password = "Password is required !";

        this.setState({errors})
        return Object.keys.length === 0 ?null:errors;
    }
    render() { 
        return (
            <div className="container"> 
                <form onSubmit={this.handelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        {/* <input ref={this.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        <input type="email" name="useremail" value={this.state.useremail} onChange={this.handelChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {this.state.errors.useremail && <div className="alert alert-danger form-text">{this.state.errors.useremail}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input  type="password" name="password" value={this.state.password} onChange={this.handelChange} className="form-control" id="exampleInputPassword1" />
                        {this.state.errors.password &&<div className="alert alert-danger form-text">{this.state.errors.password}</div>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Lgoin;