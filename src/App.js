import React from "react";
import { Box } from "@mui/material";
import UserLists from "./Components/UserLists";
import UserDetails from "./Components/Userdetails";
import "./App.css";
import { useState, useEffect } from "react";
import { userState } from "./Services/UserState.js";
import { useSetRecoilState } from "recoil";
import { getUserData } from "./Services/api.js";
import { Hourglass } from "react-loader-spinner";
function App() {
  const [userData, setUserData] = useState([]);
  const setUser = useSetRecoilState(userState);
  useEffect(() => {
    async function callApi() {
      let TempuserData = await getUserData();
      setUserData(TempuserData);
      setUser(TempuserData[0]);
    }
    callApi();
  }, []);

  return (
    <Box className="AppContainer">
      {userData[0] ? (
        <>
          <UserLists userData={userData} setUser={setUser} />
          <UserDetails />
        </>
      ) : (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          wrapperClass="hourglass-wrapper"
          colors={["#306cce", "#72a1ed"]}
        />
      )}
    </Box>
  );
}

export default App;
