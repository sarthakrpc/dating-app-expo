import { View, Text, StyleSheet, Alert } from "react-native";
// import { useContext } from "react";
import { Formik, Field } from "formik";
import axios from "../api/axiosPrivate";
import * as yup from "yup";
import TermsComponent from "../components/SignUpLogin/TermsComponent";
import CustomInput from "../components/SignUpLogin/CustomInput";
import Button from "../components/SignUpLogin/CustomButton";
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
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

const SignUp = ({ navigation }) => {
  const { setAuth } = useAuth();
  const postValues = async (values) => {
    axios
      .post(`/user/register`, {
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
          imageData: data.imageData,
        }));
      })
      .catch((error) => {
        if (error.response.data.message) {
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
        }}
      >
        <View>
          <View>
            <View>
              <Text style={HomeStyles.titleText}>Sign Up</Text>
            </View>

            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                terms: false,
              }}
              onSubmit={(values) => {
                postValues(values);
              }}
            >
              {({ handleSubmit, isValid, values, setFieldValue }) => (
                <View>
                  <View>
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

                    <Field
                      component={CustomInput}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      secureTextEntry
                    />
                  </View>

                  <View style={{ marginBottom: spacing.primaryMargin }}>
                    <TermsComponent
                      value={values?.terms}
                      setFieldValue={setFieldValue}
                    >
                      By signing up you accept the Terms of service and Privacy
                      Policy
                    </TermsComponent>
                  </View>

                  <Button
                    handleSubmit={handleSubmit}
                    disabled={values.email === "" || !isValid ? true : false}
                    text={"Sign Up"}
                  />
                </View>
              )}
            </Formik>
          </View>

          {/* <View style={{ marginTop: 20 }}>
            <View style={{ opacity: 0.7 }}>
              <Text style={{ textAlign: "center" }}>OR</Text>
            </View>
            <GoogleSign screenName={"FirstTimePage"} />
            <FbSign screenName={"FirstTimePage"} />
          </View> */}
        </View>
        <View style={{ marginTop: 32, justifyContent: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ marginRight: 4 }}>
              <Text>Already have an account?</Text>
            </View>
            <View>
              <Text
                style={{ color: "#ed34e1" }}
                onPress={() => navigation.navigate("SignIn")}
              >
                Sign In
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUp;

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
