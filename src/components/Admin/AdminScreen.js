import React, {Component} from 'react';
import Table from './Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();


class AdminScreen extends Component {
   state = {
      sessions: [],
      currentSession: [],
   };

   componentDidMount() {
      fetch("http://localhost:3001/users/alldata", {method: 'GET', headers:{'Content-Type': 'application/json'}})
         .then(res => res.json())
         .then(json => {
            this.setState({sessions: json});
         })
   }


   render() {
      const {sessions} = this.state;
      if(sessions.length === 0){
         return (<h1>Now UserSessions Active</h1>)
      }
      return (
         <div>
            <ol>
               {sessions.map((user) => (
                     <button key={user}> {user.userName} </button>
               ))}
            </ol>
            <MuiThemeProvider>
            <Table header={[
               { name: 'UserID', prop: "userId"},
               { name: 'UserName', prop: "userName"},
               {name: 'Recipes', prop: "myRecipes"},
               {name: 'Searches', prop: "searches"},
               {name: 'CartItems', prop: "cart"}
               ]} data={this.state.sessions}/>
            </MuiThemeProvider>
         </div>
      );
   }
}

export default AdminScreen;