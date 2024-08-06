//#region Text
export const capitalizeFirstLetter = (str: string) => str?.charAt(0)?.toUpperCase() + str?.slice(1);

export const deleteSpaces = (str: string) => str?.replace(/\s/g, "");

export const clearText = (str: string) => {
	str = str
		.replace(/á/g, "a")
		.replace(/é/g, "e")
		.replace(/í/g, "i")
		.replace(/ó/g, "o")
		.replace(/ú/g, "u")
		.replace(/Á/g, "A")
		.replace(/É/g, "E")
		.replace(/Í/g, "I")
		.replace(/Ó/g, "O")
		.replace(/Ú/g, "U")
		.replace(/[^a-zA-Z0-9\s()-ñÑ]/g, "")
		.replace(/\s+/g, " ")
		.replace(/\s\((.*?)\)/g, " - $1");

	// Reemplazar acentos primero
	const replaceAccents = (text: string) => {
		return text
			.replace(/[áàâ]/g, "a")
			.replace(/[éèê]/g, "e")
			.replace(/[íìî]/g, "i")
			.replace(/[óòô]/g, "o")
			.replace(/[úùû]/g, "u")
			.replace(/[ÁÀÂ]/g, "A")
			.replace(/[ÉÈÊ]/g, "E")
			.replace(/[ÍÌÎ]/g, "I")
			.replace(/[ÓÒÔ]/g, "O")
			.replace(/[ÚÙÛ]/g, "U")
			.replace(/\(([^)]+)\)/g, "- $1");
	};
	str = replaceAccents(str);
	// Eliminar caracteres no permitidos
	str = str.replace(/[^a-zA-Z0-9\sñÑ-]|(\s{2,})/g, "");
	return str;
};
//#endregion
