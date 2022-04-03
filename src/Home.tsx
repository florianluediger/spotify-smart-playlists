import React from "react";
import { useAuth } from "react-oauth2-pkce";

export function Home() {
  const { authService } = useAuth();

  async function login() {
    authService.authorize();
  }

  async function logout() {
    authService.logout();
  }

  if (authService.isPending()) {
    return <div>Loading...</div>;
  }

  if (!authService.isAuthenticated()) {
    return (
      <div>
        <p>Not Logged in yet: {authService.getAuthTokens().id_token} </p>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <p>Logged in! {authService.getAuthTokens().id_token}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;