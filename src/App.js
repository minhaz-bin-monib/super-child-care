import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Dashboard from "./components/Shared/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import AddProduct from "./components/AddProduct/AddProduct";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";
import OrderedServices from "./components/OrderedServices/OrderedServices";
import AllOrder from "./components/AllOrder/AllOrder";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import ManageProduct from "./components/ManagaProduct/ManageProduct";
import ReviewSection from "./components/ReviewSection/ReviewSection";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      {/* <h2>{loggedInUser.email}</h2> */}
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>

            </Route>

            <Route path="/addProduct/dashboard">
              <AddProduct></AddProduct>
            </Route>

            <PrivateRoute path="/checkout/:id">
              <Checkout></Checkout>
            </PrivateRoute>

            <PrivateRoute path="/orderedServices/dashboard">
              <OrderedServices></OrderedServices>
              
            </PrivateRoute>

            <PrivateRoute path="/allOrder/dashboard">
              <AllOrder></AllOrder>
              
            </PrivateRoute>

            <PrivateRoute path="/makeAdmin/dashboard">
              <MakeAdmin></MakeAdmin>
              
            </PrivateRoute>

            <PrivateRoute path="/manageProduct/dashboard">
              <ManageProduct></ManageProduct>
              
            </PrivateRoute>

            <PrivateRoute path="/reviewSection/dashboard">
              <ReviewSection></ReviewSection>
              
            </PrivateRoute>

            



            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>

      </UserContext.Provider>


    </div>
  );
}

export default App;
