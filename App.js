import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


class App extends React.Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-light">
               <ul className="nav navbar-nav">
                  <li><Link to="/">Homes</Link></li>
                  <li><Link to="/aboutus">Aboutus</Link></li>
                  <li><Link to="/contactus">Contactus</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/charity">Charity</Link></li>
               </ul>
            </nav>

            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/aboutus" component={Aboutus} />
               <Route path="/contactus" component={Contactus} />
               <Route path="/projects" component={Projects} />
               <Route path="/charity" component={Charity} />
            </Switch>


welcome to react webpack

         </div>






      );
   }
}



class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         register: [],
      };
   }

   componentDidMount() {
      fetch('http://localhost:8080/sel').then((a) => a.json()).then(b => {
         this.setState({
            register: b,
         })


      });
   }


   render() {
      return (
         <div>
            {this.state.register.map((d, k) =>
               <table border="1"><tbody>
                  <tr><td>{d.username}</td><td>{d.passwords}</td><td>{d.fname}</td><td>{d.lname}</td><td>{d.email}</td><td>{d.mobile}</td></tr>
               </tbody></table>)}
         </div>
      );
   }
}




class Aboutus extends React.Component {

   constructor() {
      super();
      this.state = {
         uname: '',
         pass: '',
         fname: '',
         lname: '',
         email: '',
         mobile: ''
      };

      this.uchange = this.uchange.bind(this);
      this.pchange = this.pchange.bind(this);
      this.fchange = this.fchange.bind(this);
      this.lchange = this.lchange.bind(this);
      this.echange = this.echange.bind(this);
      this.mchange = this.mchange.bind(this);
      this.onsub = this.onsub.bind(this);

   }


   uchange(e) {
      this.setState({
         uname: e.target.value
      }
      )
   }
   pchange(e) {
      this.setState({
         pass: e.target.value
      }
      )
   }
   fchange(e) {
      this.setState({
         fname: e.target.value
      }
      )
   }
   lchange(e) {
      this.setState({
         lname: e.target.value
      }
      )
   }
   echange(e) {
      this.setState({
         email: e.target.value
      }
      )
   }
   mchange(e) {
      this.setState({
         mobile: e.target.value
      }
      )
   }
   onsub(e) {
      //console.log('****'+this.state.uname);
      fetch('http://localhost:8080/ins/' + this.state.uname + '/' + this.state.pass + '/' + this.state.fname + '/' + this.state.lname + '/' + this.state.email + '/' + this.state.mobile).then((a) => a.json()).then(b => console.log(b));

      e.preventDefault();
   }

   render() {
      return (
         <div>
            <h1>Insert Form</h1>
            This is Registration page
        <form onSubmit={this.onsub}>
               USERNAME:<input type="text" value={this.state.uname} onChange={this.uchange} /><br />
               PASSWORD:<input type="text" value={this.state.pass} onChange={this.pchange} /><br />
               FIRSTNAME:<input type="text" value={this.state.fname} onChange={this.fchange} /><br />
               LASTNAME:<input type="text" value={this.state.lname} onChange={this.lchange} /><br />
               EMAIL:<input type="text" value={this.state.email} onChange={this.echange} /><br />
               MOBILE:<input type="text" value={this.state.mobile} onChange={this.mchange} /><br />
               <input type="submit" value="Register" />

            </form>
         </div>
      );
   }
}




class Contactus extends React.Component {
   render() {
      return (
         <div>
            <h2>Contact Us</h2>
            <p>The contact us page!!!</p>
         </div>
      );
   }
}


class Projects extends React.Component {
   render() {
      return (
         <div>
            <h2>Projects Page</h2>
            <p>The Projects page!!!</p>
         </div>
      );
   }
}

class Charity extends React.Component {
   render() {
      return (
         <div>
            <h2>Charity Page</h2>
            <p>The Charity page!!!</p>
         </div>
      );
   }
}
export default App;