import React from "react";
import { UserInfoAction } from "../components/Usercard";

const data = {
  avatar:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
  name: "Jane Fingerlicker",
  email: "jfingerlicker@me.io",
  job: "Art director",
};

function profile() {
  return <UserInfoAction {...data} />;
}

export default profile;
