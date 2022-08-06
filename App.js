import { SafeAreaView } from "react-native-safe-area-context";
import MainRouting from "./src/Routes/MainRouting";
import { StatusBar } from "expo-status-bar";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 12,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ed34e1",
    //secondary: "rgb(7, 121, 256)",
    background: "white",
    surface: "white",
    error: "red",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainRouting />
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}
