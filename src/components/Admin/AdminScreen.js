import React, {Component} from 'react';
import Table from './Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AdminScreen extends Component {
   state = {
      sessions: [],
      currentSessions: [],
      token: (this.props.token === undefined)? '' : this.props.token,
      admin: this.props.admin,
   };

   componentDidMount() {
      //here token is the admin token (in DB this is userID)
      const token = this.state.admin;
      fetch("http://localhost:3001/users/alldata?token=" + token, {method: 'GET', headers:{'Content-Type': 'application/json'}})
         .then(res => res.json())
         .then(json => {
            this.setState({
               currentSessions: json.data,
               sessions: json.data,
            });
         })
   }

   updateCurrentSessions(user){
      this.setState({
         currentSessions: [user],
      })
   }

   displayAllUsers(){
      this.setState({
         currentSessions: this.state.sessions,
      })
   }

   render() {
      const {sessions, currentSessions} = this.state;
      if(currentSessions.length === 0){
         return (<h1>Now UserSessions Active</h1>)
      }
      return (
         <div className="container">
            <button className="m-3" key="allUsers" onClick={(e) => this.displayAllUsers()}> All Users </button>
               {sessions.map((user, i) => (
                     <button className="btn pink lighten-1 z-depth-0 m-2" key={i} onClick={(e) => this.updateCurrentSessions(user)}> {user.userName} </button>
               ))}
            <MuiThemeProvider>
            <Table header={[
               { name: 'UserID', prop: "userId"},
               { name: 'UserName', prop: "userName"},
               {name: 'Recipes', prop: "myRecipes"},
               {name: 'Searches', prop: "searches"},
               {name: 'CartItems', prop: "cart"}
               ]} data={this.state.currentSessions}/>
            </MuiThemeProvider>
         </div>
      );
   }
}

export default AdminScreen;