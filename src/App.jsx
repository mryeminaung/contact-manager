import { UserContextProvider } from "./contexts/UserContext";
import ContactApp from "./components/contact/ContactApp";

const App = () => {
	return (
		<UserContextProvider>
			<ContactApp />
		</UserContextProvider>
	);
};

export default App;
