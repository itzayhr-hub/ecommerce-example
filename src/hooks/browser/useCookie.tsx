//React
import { useState } from "react";

//Cookies
import Cookies from "universal-cookie";

const useCookie = () => {
	const [cookies, setCookies] = useState<{ [key: string]: string }>(new Cookies().getAll());
	type KeyName = string;

	const setCookie = (keyName: KeyName, value: string, expiresInSeconds: number) => {
		let cookieString = `${keyName}=${value}`;

		const now = new Date().getTime();
		let expires: string;
		if (expiresInSeconds) {
			expires = new Date(now + expiresInSeconds * 1000).toUTCString();
			cookieString += `; expires=${expires}`;
			setCookies((prevState) => {
				return { ...prevState, [keyName]: JSON.stringify({ value, expires }) };
			});
		} else {
			setCookies((prevState) => {
				return { ...prevState, [keyName]: value };
			});
		}

		document.cookie = cookieString;
	};

	const getCookie = (keyName: KeyName) => {
		const cookie = cookies[keyName];
		if (!cookie) return null;
		if (typeof cookie === "boolean" || typeof cookie === "number") return cookie;

		try {
			const { value, expires } = JSON.parse(cookie);
			const expiresTimeStamp = new Date(expires).getTime();
			const now = new Date().getTime();
			if (expiresTimeStamp && expiresTimeStamp <= now) {
				removeCookie(keyName);
				return null;
			}
			return value;
		} catch (error) {
			return cookie;
		}
	};

	const removeCookie = (keyName: KeyName) => {
		document.cookie = `${keyName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		setCookies((prevState) => {
			const newState = { ...prevState };
			delete newState[keyName];
			return newState;
		});
	};

	return { cookies, setCookie, getCookie, removeCookie };
};

export default useCookie;
