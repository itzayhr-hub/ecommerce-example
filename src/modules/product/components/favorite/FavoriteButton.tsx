import { IconButton } from "@mui/material";

import useWishlist from "../../hooks/useWishlist";

import FavoriteIcon from "../../assets/svg/FavoriteIcon";

const FavoriteButton = () => {
	const { isInWishlist, addToWishlist } = useWishlist();

	return (
		<IconButton onClick={() => addToWishlist(!isInWishlist)}>
			<FavoriteIcon active={isInWishlist} />
		</IconButton>
	);
};

export default FavoriteButton;
