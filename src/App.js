import React, { useState } from "react";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import AllWallets from "./components/AllWallets";
import CheckBalance from "./components/CheckBalance";
import AddFunds from "./components/AddFunds";
import NewWallet from "./components/NewWallet";
import AllTransactions from "./components/AllTransactions";
import SpendFunds from "./components/SpendFunds";

function App() {
  const [activeOne, setActiveOne] = useState();
  return (
    <div className="App">
      <div className="header">
        <p>Personal Wallet UI</p>
      </div>
      <div className="container">
        <Router>
          <div className="sidebar">
            <Link to="/allwallets">
              <Button
                outline
                color="primary"
                className="btn1"
                active={activeOne === "All Wallets"}
                onClick={() => {
                  setActiveOne("All Wallets");
                }}
              >
                All Wallets
              </Button>
            </Link>{" "}
            <Link to="/newwallets">
              <Button
                outline
                color="primary"
                className="btn1"
                active={activeOne === "New Wallet"}
                onClick={() => {
                  setActiveOne("New Wallet");
                }}
              >
                New Wallet
              </Button>{" "}
            </Link>
            <Link to="/checkbalance">
              <Button
                outline
                color="primary"
                className="btn1"
                active={activeOne === "Check Balance"}
                onClick={() => {
                  setActiveOne("Check Balance");
                }}
              >
                Check Balance
              </Button>{" "}
            </Link>
            <Link to="/addfunds">
              <Button
                outline
                color="primary"
                className="btn1"
                active={activeOne === "Add Funds"}
                onClick={() => {
                  setActiveOne("Add Funds");
                }}
              >
                Add Funds
              </Button>{" "}
            </Link>
            <Link to="/spendfunds">
              <Button
                outline
                color="primary"
                className="btn1"
                active={activeOne === "Spend Funds"}
                onClick={() => {
                  setActiveOne("Spend Funds");
                }}
              >
                Spend Funds
              </Button>{" "}
            </Link>
            <Link to="/alltransactions">
              <Button
                outline
                color="primary"
                className="btn1"
                active={activeOne === "All Transactions"}
                onClick={() => {
                  setActiveOne("All Transactions");
                }}
              >
                All Transactions
              </Button>{" "}
            </Link>
          </div>
          <div className="centerdiv">
            <Switch>
              <Route path="/allwallets">
                <AllWallets />
              </Route>
              <Route path="/newwallets">
                <NewWallet />
              </Route>
              <Route path="/checkbalance">
                <CheckBalance />
              </Route>
              <Route path="/addfunds">
                <AddFunds />
              </Route>
              <Route path="/spendfunds">
                <SpendFunds />
              </Route>
              <Route path="/alltransactions">
                <AllTransactions />
              </Route>
              <Route path="/">
                <AllWallets />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
