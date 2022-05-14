import LoginPage from './component/Loginpage';
import Admin from './component/Admin';
import User from './component/User';
import Books from './component/Books';
import AddBooks from './component/AddBooks';
import NewMember from './component/NewMember';
import ViewMember from './component/ViewMember';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route exact path = "/admin">
                    <Admin/>
                </Route>
                <Route exact path = "/user">
                    <User/>
                </Route>
                <Route exact path = "/books">
                    <Books/>
                </Route>
                <Route exact path = "/addbooks">
                    <AddBooks />
                </Route>
                <Route exact path = "/newmember">
                    <NewMember />
                </Route>
                <Route exact path = "/viewmember">
                    <ViewMember />
                </Route>
            </Switch>
        </Router>
    )
}
export default App;