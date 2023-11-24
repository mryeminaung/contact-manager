import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "contacts";

const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [];

const contactReducer = (state, action) => {
	switch (action.type) {
		case "addContact": {
			return [...state, { id: uuidv4(), name: action.name, email: action.email }];
		}

		case "editContact": {
			return state.map((contact) => {
				return contact.id === action.contactId
					? { ...state, id: action.contactId, name: action.name, email: action.email }
					: contact;
			});
		}

		case "deleteContact": {
			return state.filter((contact) => contact.id !== action.contactId);
		}
	}
};

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [contacts, dispatch] = useReducer(contactReducer, initialState);
	const [editMode, setEditMode] = useState(false);
	const [editId, setEditId] = useState("");

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<UserContext.Provider
			value={{ contacts, dispatch, editMode, setEditMode, setEditId, editId }}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};

export default UserContext;
