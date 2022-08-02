import { SafeAreaView } from "react-native-safe-area-context";
import MainRouting from "./src/Routes/MainRouting";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainRouting />
    </SafeAreaView>
  );
}
