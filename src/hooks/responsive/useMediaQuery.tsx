//React
import { useMemo } from "react";

//React Responsive
import { useMediaQuery as MediaQuery } from "react-responsive";

const useMediaQuery = () => {
	const is0 = MediaQuery({ query: "(min-width: 0px)" });
	const is600 = MediaQuery({ query: "(min-width: 600px)" });
	const is900 = MediaQuery({ query: "(min-width: 900px)" });
	const is1200 = MediaQuery({ query: "(min-width: 1200px)" });
	const is1536 = MediaQuery({ query: "(min-width: 1536px)" });

	return useMemo(() => {
		return { is0, is900, is600, is1200, is1536 };
	}, [is0, is900, is600, is1200, is1536]);
};

export default useMediaQuery;
