import { View, Text, StyleSheet, Alert } from "react-native";
// import { useContext } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
// import axios from "axios";
import axios from "../api/axiosPrivate";
import CustomInput from "../components/SignUpLogin/CustomInput";
import CustomButton from "../components/SignUpLogin/CustomButton";
import GoogleSign from "../components/SignUpLogin/GoogleSign";
import FbSign from "../components/SignUpLogin/FbSign";
import { spacing } from "../components/common/style/styles";
// import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

const SignIn = ({ navigation }) => {
  const { setAuth } = useAuth();
  const postValues = async (values) => {
    axios
      .post(`/user/login`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        // console.log(response.data);
        const data = response.data;

        setAuth((prevState) => ({
          ...prevState,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          profileData: data.profileData,
		  imageData: data.imageData
        }));
      })
      .catch((error) => {
        if (error.response?.data?.message) {
          Alert.alert("Error", error.response.data.message, [
            {
              text: "Ok",
            },
          ]);
        } else {
          Alert.alert("Error", "Something went wrong", [
            {
              text: "Ok",
            },
          ]);
        }
      });
  };
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: 16,
          paddingTop: 32,
          paddingBottom: 32,
          //   backgroundColor: "white",
        }}
      >
        <View>
          <View style={HomeStyles.mainView}>
            <View>
              <Text style={HomeStyles.titleText}>Sign In</Text>
            </View>

            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                postValues(values);
              }}
            >
              {({ handleSubmit, isValid, values }) => (
                <View>
                  <View style={{ marginBottom: spacing.primarySmallMargin }}>
                    <Field
                      component={CustomInput}
                      name="email"
                      placeholder="Email Address"
                      keyboardType="email-address"
                    />

                    <Field
                      component={CustomInput}
                      name="password"
                      placeholder="Password"
                      secureTextEntry
                    />
                  </View>

                  <CustomButton
                    handleSubmit={handleSubmit}
                    disabled={values.email === "" || !isValid ? true : false}
                    text={"Sign In"}
                  />
                </View>
              )}
            </Formik>
            <View>
              <Text style={{ textAlign: "center", marginTop: 16 }}>
                <Text
                  style={{ color: "rgb(7, 121, 256)" }}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Forgot Password?
                </Text>
              </Text>
            </View>
          </View>

          {/* <View style={{ marginTop: 20 }}>
            <View style={{ opacity: 0.7, marginBottom: 2 }}>
              <Text style={{ textAlign: "center" }}>OR</Text>
            </View>
            <GoogleSign screenName={"FirstTimePage"} />
            <FbSign screenName={"FirstTimePage"} />
          </View> */}
        </View>
        <View style={{ marginTop: 32, justifyContent: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ marginRight: 4 }}>
              <Text>Don't have an account?</Text>
            </View>
            <View>
              <Text
                style={{ color: "#ed34e1" }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignIn;

const HomeStyles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: "500",
  },
});
