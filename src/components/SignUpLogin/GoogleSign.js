import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text } from "react-native";
import GoogleIcon from "../svg/GoogleIcon";

import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const GoogleSign = ({ screenName }) => {
  const [accessToken, setAccessToken] = React.useState();
  const [refreshToken, setRefreshToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "415331876881-m95ocbjsmiq61se9ms89ivp3ldp84ckb.apps.googleusercontent.com",
    expoClientId:
      "415331876881-jnmgf7erg3jjcbpsfn7r3bglkc6asc0v.apps.googleusercontent.com",
    responseType: "code",
    shouldAutoExchangeCode: false,
    extraParams: {
      access_type: "offline",
    },
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      console.log(response);
      //   setAccessToken(response.authentication.accessToken);
      //   setRefreshToken(response.authentication.refreshToken);
    }
  }, [response]);

  const getUserData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
      // console.log(data);
      //   console.log(accessToken);
      //   console.log(refreshToken);
    });
  };

  return (
    <>
      <View style={{ borderRadius: 25, overflow: "hidden", marginTop: 16 }}>
        <Pressable
          onPress={() =>
            accessToken
              ? getUserData()
              : promptAsync({ showInRecents: true, useProxy: true })
          }
          android_ripple={{ color: "##b3b3b3" }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <GoogleIcon />
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              Continue With Google
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default GoogleSign;
