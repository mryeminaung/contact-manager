import { UserContextProvider } from "./contexts/UserContext";
import Navbar from "./components/Navbar";
import AddContact from "./components/tasks/AddContact";
import ContactList from "./components/contact/ContactList";

const App = () => {
	return (
		<UserContextProvider>
			<Navbar />
			<main className="grid lg:grid-cols-2 gap-10 px-5 grid-cols-1">
				<AddContact />
				<ContactList />
			</main>
		</UserContextProvider>
	);
};

export default App;
