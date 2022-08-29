import { SafeAreaView } from "react-native-safe-area-context";
import MainRouting from "./src/Routes/MainRouting";
import { StatusBar } from "expo-status-bar";
import {
  MD2LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { stylesColor } from "./src/components/common/style/styles";
import { en, enGB, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);
registerTranslation("en-GB", enGB);
import axios from "axios";
import { AuthProvider } from "./src/context/AuthProvider";

const theme = {
  ...DefaultTheme,
  roundness: 8,
  version: 2,

  colors: {
    ...DefaultTheme.colors,
    primary: "#ed34e1",
    secondary: "rgb(7, 121, 256)",
    background: "#fff",
    surface: "#fff",
    error: "red",
    placeholder: stylesColor.primarySubTextColor,
    text: stylesColor.primaryInputTextColor,
    flatInputBackground: "#fbf2fc",
  },
};

axios.defaults.baseURL = "https://cef6-49-37-70-219.ngrok.io/api";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainRouting />
          <StatusBar style="auto" />
        </SafeAreaView>
      </AuthProvider>
    </PaperProvider>
  );
}
