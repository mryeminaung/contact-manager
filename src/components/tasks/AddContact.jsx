import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

const AddContact = () => {
	const { dispatch } = useUserContext();
	const [user, setUser] = useState({ username: "", email: "" });

	const handleUser = (e) => {
		const { name, value } = e.target;
		setUser((preUser) => ({ ...preUser, [name]: value }));
	};

	return (
		<form
			autoComplete="off"
			onSubmit={(e) => {
				e.preventDefault();
				if (user.username && user.email) {
					dispatch({ type: "addContact", name: user.username, email: user.email });
					setUser({ username: "", email: "" });
				} else {
					alert("All inputs are required.");
				}
			}}
		>
			<h2 className="text-xl md:text-3xl font-bold py-5 border-y border-slate-300 mb-3">
				Add Contact
			</h2>

			<label htmlFor="username" className="text-base md:text-xl font-semibold">
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

			<label htmlFor="email" className="text-base md:text-xl font-semibold">
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

			<button
				className="text-sm md:text-base font-semibold text-white rounded-md bg-blue-600 px-5 py-2"
				type="submit"
			>
				Add
			</button>
		</form>
	);
};

export default AddContact;
