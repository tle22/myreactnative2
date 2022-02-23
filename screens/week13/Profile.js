import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import AuthLaravel from "../../services/AuthLaravel";
import { AuthContext } from "../../hooks/AuthContextProvider";
import UserTokenStorage from "../../storages/UserTokenStorage";
export default function Profile() {
  const [user, setUser] = useState(null);
  const { userToken, setUserToken } = useContext(AuthContext);
  useEffect(async () => {
    let u = await AuthLaravel.getUser(
      "mzF6DFDXi8MIZpAPDkW4nLljWTLzAfVX8DfyX97I"
    );
    setUser(u);
  }, []);

  const onLogout = async () => {
    setUserToken("");
    UserTokenStorage.writeItem("");
  };
  return (
    <View>
      <Text>Profile Page</Text>
      <Text>{JSON.stringify(user)}</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
}
