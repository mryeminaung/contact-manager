import { useUserContext } from "../../contexts/UserContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
	const { contacts } = useUserContext();

	return (
		<div className="contact-list">
			<h2 className="text-3xl font-bold py-5 border-y border-slate-300 mb-3">
				Contact Lists
			</h2>
			{contacts.length > 0 ? (
				contacts.map((contact) => {
					return <ContactCard key={contact.id} contact={contact} />;
				})
			) : (
				<h5 className="font-bold text-center text-2xl mt-5">Nothing to show</h5>
			)}
		</div>
	);
};

export default ContactList;
