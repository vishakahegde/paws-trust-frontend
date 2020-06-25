import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import AdoptionForm from "./pages/AdoptionForm";
import ListOfDogs from "./pages/ListOfDogs";
import ViewDogDetails from "./pages/ViewDogDetails";
import Home from "./pages/Home";
import PreAdoptionInfo from "./pages/Adoption Information/PreAdoptionInfo";
import DogAdoptionChecklist from "./pages/Adoption Information/DogAdoptionChecklist";
import GovtRules from "./pages/Adoption Information/GovtRules";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/listofdogs" component={ListOfDogs} />
        <Route path="/adoptionform" component={AdoptionForm} />
        <Route path="/preadoptioninformation" component={PreAdoptionInfo} />
        <Route path="/dogadoptionchecklist" component={DogAdoptionChecklist} />
        <Route path="/rulesbygovt" component={GovtRules} />
        <Route path="/dogs/:id" component={ViewDogDetails} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
