import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { setProducts } from "./actions/productsActions";
import axios from "axios"
import './App.scss';

//pages
import Landing from "./components/pages/Landing"



class App extends React.Component {

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((res => {
        store.dispatch(setProducts(res.data));
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Provider store={store}>

        <Router>
          <div className="App">
            <div className="content">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="*" component={Landing} />
              </Switch>
            </div>
          </div>
        </Router>

      </Provider>
    );
  }
}


export default App;
