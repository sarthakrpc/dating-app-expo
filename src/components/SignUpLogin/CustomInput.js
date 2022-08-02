import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <View style={styles.inputContainer}>
        <View style={[styles.inputView, hasError && styles.errorInput]}>
          <TextInput
            style={[
              styles.input,
              props.multiline && { height: props.numberOfLines * 40 },
            ]}
            value={value}
            onChangeText={(text) => onChange(name)(text)}
            onBlur={() => {
              setFieldTouched(name);
              onBlur(name);
            }}
            {...inputProps}
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
    padding: 6,
    paddingLeft: 12,
  },
  errorText: {
    fontSize: 10,
    color: "red",
    marginLeft: 12,
  },
  errorInput: {
    borderColor: "red",
  },
  inputView: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fccaf9",
    backgroundColor: "white",
  },
});

export default CustomInput;
