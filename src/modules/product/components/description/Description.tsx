import { Box } from "@mui/material";

import { Product } from "@/modules/product/types/product";

const Description = ({ description }: { description: Product["description"] }) => {
	return (
		<Box
			dangerouslySetInnerHTML={{ __html: description }}
			component='p'
			fontSize='1rem'
			fontFamily='Roboto'
			textAlign='center'
		/>
	);
};

export default Description;
