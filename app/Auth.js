import { AsyncStorage } from "react-native";
import ApiVars from '../constants/ApiVars';

export const onSignIn = () => AsyncStorage.setItem("USER_TOKEN", "true");

export const onSignOut = () => AsyncStorage.removeItem("USER_TOKEN");

export default isSignedIn = async () => {
};