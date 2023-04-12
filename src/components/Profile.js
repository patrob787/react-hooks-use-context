import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile() {
  //call useContet with our UserContext obj
  const { user } = useContext(UserContext);

  //Now we ca use the user obj as if it was a prop
  console.log(user);

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} />
    </div>
  );
}

export default Profile;
