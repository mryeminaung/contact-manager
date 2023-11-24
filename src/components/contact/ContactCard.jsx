import { useUserContext } from "../../contexts/UserContext";
import avatar from "../../assets/avatar.png";

const ContactCard = ({ contact }) => {
	const { editMode, dispatch, setEditMode, setEditId } = useUserContext();

	return (
		<>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 gap-y-3 sm:gap-y-0">
				<div className="flex items-center gap-x-3">
					<img src={avatar} alt="" className="rounded-full w-10 h-10" />
					<div className="">
						<p className="font-semibold">{contact.name}</p>
						<p>{contact.email}</p>
					</div>
				</div>
				<div className="flex w-full justify-end items-center gap-x-3">
					<button
						className={`${
							editMode && "disabled:cursor-not-allowed disabled:bg-blue-500"
						} text-sm md:text-base font-semibold text-white rounded-md bg-blue-600 px-5 py-2`}
						disabled={editMode}
						onClick={() => {
							setEditMode(true);
							setEditId(contact.id);
						}}
					>
						Edit
					</button>
					<button
						className={`${
							editMode && "disabled:cursor-not-allowed disabled:bg-blue-500"
						} text-sm md:text-base font-semibold text-white rounded-md bg-blue-600 px-5 py-2`}
						disabled={editMode}
						onClick={() => {
							dispatch({ type: "deleteContact", contactId: contact.id });
							setEditMode(false);
							setEditId("");
						}}
					>
						Delete
					</button>
				</div>
			</div>
			<hr />
		</>
	);
};

export default ContactCard;
