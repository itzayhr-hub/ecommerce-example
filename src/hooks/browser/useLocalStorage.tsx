//React
import { useState } from "react";

const useLocalStorage = () => {
	const [allLocalStoraged, setAllLocalStoraged] = useState(localStorage);
	type KeyName = string;

	const setLocalStorage = (keyName: KeyName, value: string, expiresInSeconds: number) => {
		const now = new Date().getTime();
		let expires: string;
		if (expiresInSeconds) {
			expires = new Date(now + expiresInSeconds * 1000).toUTCString();
			localStorage.setItem(keyName, JSON.stringify({ value, expires }));
			setAllLocalStoraged((prevState) => ({ ...prevState, [keyName]: { value, expires } }));
		} else {
			localStorage.setItem(keyName, value);
			setAllLocalStoraged((prevState) => ({ ...prevState, [keyName]: value }));
		}
	};

	const getLocalStorage = (keyName: KeyName) => {
		const itemStoraged = localStorage.getItem(keyName);
		if (!itemStoraged) return null;
		if (typeof itemStoraged === "boolean" || typeof itemStoraged === "number") return itemStoraged;

		try {
			const { value, expires } = JSON.parse(itemStoraged);
			const expiresTimeStamp = new Date(expires).getTime();
			const now = new Date().getTime();
			if (expiresTimeStamp && expiresTimeStamp <= now) {
				removeLocalStorage(keyName);
				return null;
			}
			return value;
		} catch (error) {
			return itemStoraged;
		}
	};

	const removeLocalStorage = (keyName: KeyName) => {
		localStorage.removeItem(keyName);
		setAllLocalStoraged((prevState) => {
			const newState = { ...prevState };
			delete newState[keyName];
			return newState;
		});
	};

	return { allLocalStoraged, getLocalStorage, setLocalStorage, removeLocalStorage };
};

export default useLocalStorage;
