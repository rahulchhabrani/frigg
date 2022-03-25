import { useEffect, useContext } from "react";
import { AppContext } from "./Context";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import YourClubs from "./pages/YourClubs";
import Club from "./pages/Club";
import Read from "./pages/Read";
import JoinClub from "./pages/JoinClub";
import CreateClub from "./pages/CreateClub";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";

const App: React.FC = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDylIBu1rd03ZO8PMrU1eXM4bV7hHzDBIA",
      authDomain: "frigg-eba39.firebaseapp.com",
      projectId: "frigg-eba39",
      storageBucket: "frigg-eba39.appspot.com",
      messagingSenderId: "336805951247",
      appId: "1:336805951247:web:46d9f28a96993c1792307a",
      measurementId: "G-RWGREWZ0CK",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().useDeviceLanguage();
  }, []);

  const { stageState } = useContext(AppContext);
  const [stage] = stageState;

  const urlToken = new URLSearchParams(document.location.search).get("token");

  return (
    <Router>
      <Nav />
      <>
        <Route exact path="/">
          {(localStorage.getItem("token") !== null || urlToken !== null) && (
            <Redirect to="/clubs" />
          )}
          <Landing />
        </Route>
        <>
          {localStorage.getItem("token") === null && urlToken === null && (
            <Redirect to="/" />
          )}
          <Route exact path="/clubs">
            <YourClubs />
          </Route>
          <Route exact path="/club/:id">
            <Club />
          </Route>
          <Route path="/club/:id/read">
            <Read />
          </Route>
          <Route path="/club/:id/chat">
            <Chat />
          </Route>
          <Route exact path="/join">
            <JoinClub />
          </Route>
          <Route exact path="/create">
            <CreateClub />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </>
      </>
    </Router>
  );
};

export default App;
