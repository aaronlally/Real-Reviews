import React, { useState } from "react";

function Profile({ user, setUser }) {


    const [updateForm, setUpdateForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")



    function handleUpdateUser() {
        setUpdateForm(prevState => !prevState)
      }

      function handleSubmitUpdateUser() {
    fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              username: username,
              password: password,
              password_confirmation: passwordConfirmation
            }),
            }).then((r) => {
              setIsLoading(false);
              r.json().then((user) => setUser(user));
            });
        }


    function handleDeleteUser() {
        console.log(user)
        fetch(`/users/${user.id}`, { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }


    return (
        <div id="profile">
            <h1>Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>First name {user.first_name}</h2>
            <h2>Last name {user.last_name}</h2>
            <button className="profileButtons" onClick={handleUpdateUser}>Edit account</button> <button className="profileButtons" onClick={handleDeleteUser}>Delete account</button>
            {updateForm ? 
      <form onSubmit={handleSubmitUpdateUser}>
      <label htmlFor="first_name">* First Name</label>
      <input
        type="text"
        id="first"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
       <label htmlFor="last_name">* Last Name</label>
      <input
        type="text"
        id="last"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <label htmlFor="password">Password Confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />
      <button type="submit">{isLoading ? "Loading..." : "Update"}</button>
  </form> : null}
        </div>
    )
}

export default Profile;