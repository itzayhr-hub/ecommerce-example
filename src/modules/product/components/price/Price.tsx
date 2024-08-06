import { Product } from "@/modules/product/types/product";
import { Typography } from "@mui/material";

const PriceWrapper = ({ children }) => {
	return (
		<Typography display='flex' gap='0.25rem' fontWeight={900} fontSize='1.5rem'>
			{children}
		</Typography>
	);
};

const Price = ({ price, offer }: { price: Product["price"]; offer: Product["offer"] }) => {
	if (offer && offer > 0 && offer < price) {
		return (
			<PriceWrapper>
				<Typography component='del' fontSize='inherit'>
					${price}
				</Typography>
				${offer}
			</PriceWrapper>
		);
	}

	if (price) return <PriceWrapper>${price}</PriceWrapper>;
};

export default Price;
