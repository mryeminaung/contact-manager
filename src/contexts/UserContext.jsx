import { createContext, useContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "contacts";

const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [];

const contactReducer = (state, action) => {
	switch (action.type) {
		case "addContact": {
			return [...state, { id: uuidv4(), name: action.name, email: action.email }];
		}

		case "deleteContact": {
			return state.filter((contact) => contact.id !== action.contactId);
		}
	}
};

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [contacts, dispatch] = useReducer(contactReducer, initialState);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<UserContext.Provider value={{ contacts, dispatch }}>{children}</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};

export default UserContext;
