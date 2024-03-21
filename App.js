import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register"
import Welcome from "./src/Screens/Welcome";
import Category from "./src/Components/Category";
import SingleRecipe from "./src/Screens/SingleRecipe";
import Navigation from "./src/Components/Navigation"
import { authContextProvider } from "./src/Context/authContext";

export default function App() {
	return (
		<authContextProvider>
			<Navigation/>
		</authContextProvider>
	)
}
