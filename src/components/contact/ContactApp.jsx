import { useUserContext } from "../../contexts/UserContext";
import Navbar from "../Navbar";
import AddContact from "../tasks/AddContact";
import EditContact from "../tasks/EditContact";
import ContactList from "./ContactList";

const ContactApp = () => {
	const { editMode } = useUserContext();

	return (
		<>
			<Navbar />
			<main className="grid lg:grid-cols-2 gap-10 px-5 grid-cols-1">
				{editMode ? <EditContact /> : <AddContact />}
				<ContactList />
			</main>
		</>
	);
};

export default ContactApp;
