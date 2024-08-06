import { SvgIconProps } from "@mui/material";

import { default as MuiFavoriteIcon } from "@mui/icons-material/Favorite";
import { default as MuiFavoriteBorderIcon } from "@mui/icons-material/FavoriteBorder";

const FavoriteIcon = ({ active, sx, ...rest }: { active: boolean } & SvgIconProps) => {
	const svgStyles: typeof sx = { color: "red", fontSize: "3rem", ...sx };

	return active ? <MuiFavoriteIcon sx={svgStyles} {...rest} /> : <MuiFavoriteBorderIcon sx={svgStyles} {...rest} />;
};

export default FavoriteIcon;
