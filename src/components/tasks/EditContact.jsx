import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

const EditContact = () => {
	const { contacts, dispatch, setEditMode, editId } = useUserContext();
	const [user, setUser] = useState({ username: "", email: "" });
  const editPerson = contacts.find((contact) => contact.id === editId);

	const handleUser = (e) => {
		const { name, value } = e.target;
		setUser((preUser) => ({ ...preUser, [name]: value }));
	};

	useEffect(() => {
		setUser({ username: editPerson.name, email: editPerson.email });
	}, [editPerson]);

	return (
		<form
			autoComplete="off"
			onSubmit={(e) => {
				e.preventDefault();
				if (user.username && user.email) {
					dispatch({
						type: "editContact",
						contactId: editId,
						name: user.username,
						email: user.email,
					});
					setEditMode(false);
					setUser({ username: "", email: "" });
				} else {
					alert("All inputs are required.");
				}
			}}
		>
			<h2 className="text-xl md:text-3xl font-bold py-5 border-y border-slate-300 mb-3">
				Edit Contact
			</h2>

			<label htmlFor="username" className="text-sm md:text-xl font-semibold">
				Name
			</label>
			<input
				type="text"
				name="username"
				id="username"
				className="p-2 px-3 border-2 rounded-md border-gray-300 text-lg focus:outline-blue-500 w-full my-3"
				value={user.username}
				placeholder="Name"
				onChange={handleUser}
			/>

			<label htmlFor="email" className="text-sm md:text-xl font-semibold">
				Email
			</label>
			<input
				type="email"
				name="email"
				id="email"
				className="p-2 px-3 border-2 rounded-md border-gray-300 text-lg focus:outline-blue-500 w-full my-3"
				value={user.email}
				placeholder="Email"
				onChange={handleUser}
			/>
			<br />

			<div className="flex items-center gap-x-3">
				<button
					className="text-sm md:text-base font-semibold text-white rounded-md bg-blue-600 px-5 py-2"
					type="button"
					onClick={() => {
						setEditMode(false);
					}}
				>
					Cancel
				</button>
				<button
					className="text-sm md:text-base font-semibold text-white rounded-md bg-blue-600 px-5 py-2"
					type="submit"
				>
					Update
				</button>
			</div>
		</form>
	);
};

export default EditContact;
