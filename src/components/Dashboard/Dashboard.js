import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Dashboard = ({ login, setLogin }) => {
  let history = useHistory();
  useState(() => {
    if (!login) {
      history.push("/login");
    }
    return () => {
      setLogin(false);
    };
  }, []);
  return <>Dashboard</>;
};

export default Dashboard;
