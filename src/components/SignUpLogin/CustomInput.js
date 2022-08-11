import { TextInput } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import { useState } from "react";
import { stylesColor } from "../common/style/styles";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const visibilityHandler = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <View style={[styles.inputView, hasError && styles.errorInput]}>
          <TextInput
            // style={[
            //   styles.input,
            //   props.multiline && { height: props.numberOfLines * 40 },
            // ]}
            dense={true}
            mode="outlined"
            value={value}
            onChangeText={(text) => onChange(name)(text)}
            onBlur={() => {
              setFieldTouched(name);
              onBlur(name);
            }}
            // placeholder = {inputProps.placeholder}
            secureTextEntry={!passwordVisibility}
            keyboardType={inputProps.keyboardType}
            label={inputProps.placeholder}
            error={hasError}
            // outlineColor={stylesColor.primaryBorderColor}
            right={
              inputProps.secureTextEntry ? (
                <TextInput.Icon name="eye" onPress={visibilityHandler} />
              ) : (
                ""
              )
            }
          />
        </View>

        {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    // padding: 6,
    // paddingLeft: 12,
  },
  errorText: {
    // fontSize: 10,
    color: "red",
    marginLeft: 4,
  },
  errorInput: {
    borderColor: "red",
  },
  inputView: {
    // borderRadius: 25,
    // borderWidth: 1,
    // borderColor: "#fccaf9",
    backgroundColor: "white",
  },
});

export default CustomInput;
