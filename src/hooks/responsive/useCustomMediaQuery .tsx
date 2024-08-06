// React
import { useMemo } from "react";

// React Responsive
import { useMediaQuery as useResponsiveMediaQuery } from "react-responsive";

const useCustomMediaQuery = (customBreakpoint: number) => {
	const isCustom = useResponsiveMediaQuery({ query: `(min-width: ${customBreakpoint}px)` });

	return useMemo(() => isCustom, [isCustom]);
};

export default useCustomMediaQuery;
