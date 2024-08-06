import { CardMedia } from "@mui/material";

import { Product } from "@/modules/product/types/product";

const ImageProduct = ({
	thumbnail,
	productName,
}: {
	thumbnail: Product["thumbnail"];
	productName: Product["productName"];
}) => {
	return <CardMedia component='img' image={thumbnail} alt={productName} loading='lazy' />;
};

export default ImageProduct;
