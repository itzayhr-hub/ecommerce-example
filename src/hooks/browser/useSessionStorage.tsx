//React
import { useState } from "react";

const useSessionStorage = () => {
	const [allSessionStoraged, setAllSessionStoraged] = useState(sessionStorage);
	type KeyName = string;

	const setSessionStorage = (keyName: KeyName, value: string, expiresInSeconds: number) => {
		const now = new Date().getTime();
		let expires: string;
		if (expiresInSeconds) {
			expires = new Date(now + expiresInSeconds * 1000).toUTCString();
			sessionStorage.setItem(keyName, JSON.stringify({ value, expires }));
			setAllSessionStoraged((prevState) => ({ ...prevState, [keyName]: { value, expires } }));
		} else {
			sessionStorage.setItem(keyName, value);
			setAllSessionStoraged((prevState) => ({ ...prevState, [keyName]: value }));
		}
	};

	const getSessionStorage = (keyName: KeyName) => {
		const itemStoraged = sessionStorage.getItem(keyName);
		if (!itemStoraged) return null;
		if (typeof itemStoraged === "boolean" || typeof itemStoraged === "number") return itemStoraged;

		try {
			const { value, expires } = JSON.parse(itemStoraged);
			const expiresTimeStamp = new Date(expires).getTime();
			const now = new Date().getTime();
			if (expiresTimeStamp && expiresTimeStamp <= now) {
				removeSessionStorage(keyName);
				return null;
			}
			return value;
		} catch (error) {
			return itemStoraged;
		}
	};

	const removeSessionStorage = (keyName: KeyName) => {
		sessionStorage.removeItem(keyName);
		setAllSessionStoraged((prevState) => {
			const newState = { ...prevState };
			delete newState[keyName];
			return newState;
		});
	};

	return { allSessionStoraged, getSessionStorage, setSessionStorage, removeSessionStorage };
};

export default useSessionStorage;
