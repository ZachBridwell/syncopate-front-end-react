import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import WelcomePage from "./WelcomePage";
import RegistrationPage from "./RegistrationPage";
import ProfilePage from "./ProfilePage";
import ResetPasswordPage from "./ResetPasswordPage";
import MessageWindow from "./MessageWindow";
import ChatPage from "./ChatPage";
import ResetPassword2 from "./ResetPassword2";
import ProfilePage2 from "./ProfilePage2";
import ChangeUsername from "./ChangeUsername";
import RequestList from "./RequestList";
import SendRequests from "./SendRequests";
import SearchFriendPage from "./SearchFriendPage";
import ChatListPage2 from "./ChatListPage2";
import SearchUserPage from "./SearchUserPage";
import ChangePassword from "./ChangePassword";
import NavigationBar from "./NavigationBar";
import Stats from "./Stats";
import ConfirmAccount from "./ConfirmAccount";

const App = () => {
  return (
    <div className="App">
       <div className="app-wrapper">
      <Router>
        <NavigationBar />
        <Switch>
          <Route
            path="/register"
            exact
            render={() => {
              return <RegistrationPage />;
            }}
          />

          <Route
            path="/my-profile"
            exact
            render={() => {
              return <ProfilePage2 />;
            }}
          />

          <Route
            path="/change-password"
            exact
            render={() => {
              return <ChangePassword />;
            }}
          />

          <Route
            path="/reset-password"
            exact
            render={() => {
              return <ResetPasswordPage />;
            }}
          />

          <Route
            path="/message/:room"
            render={() => {
              return <MessageWindow />;
            }}
          />

          <Route
            path="/chat/:room"
            exact
            render={() => {
              return <ChatPage />;
            }}
          />

          <Route
            path="/confirm-account/:token"
            render={() => {
              return <ConfirmAccount />;
            }}
          />

          <Route
            path="/confirm-reset-password/:token"
            render={() => {
              return <ResetPassword2 />;
            }}
          />

          <Route
            path="/test-login"
            render={() => {
              return <ProfilePage2 />;
            }}
          />

          <Route
            path="/change-username"
            exact
            render={() => {
              return <ChangeUsername />;
            }}
          />

          <Route
            path="/notifications"
            exact
            render={() => {
              return <RequestList />;
            }}
          />

          <Route
            path="/add-friends"
            exact
            render={() => {
              return <SendRequests />;
            }}
          />

          <Route
            path="/search-users"
            exact
            render={() => {
              return <SearchUserPage />;
            }}
          />

          <Route
            path="/my-friends"
            exact
            render={() => {
              return <SearchFriendPage />;
            }}
          />

          <Route
            path="/my-chats"
            exact
            render={() => {
              return <ChatListPage2 />;
            }}
          />

          <Route
            path="/stats"
            exact
            render={() => {
              return <Stats />;
            }}
          />

          <Route
            path="/"
            exact
            render={() => {
              if (true) {
                return <WelcomePage />;
              } else {
                return <WelcomePage />;
              }
            }}
          />

          <Route
            render={() => window.location.href = "/" }
          />

        </Switch>
      </Router>
    </div>
    </div> 
  );
};

export default App;
