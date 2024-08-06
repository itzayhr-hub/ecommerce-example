import { lazy, Suspense } from "react";

import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { Product } from "@/modules/product/types/product";

import useProduct from "../hooks/useProduct";
import { capitalizeFirstLetter } from "@/hooks/formats/useFormatText";

const Price = lazy(() => import("../components/price/Price"));
const ImageProduct = lazy(() => import("../components/imageProduct/ImageProduct"));
const Description = lazy(() => import("../components/description/Description"));
const ButtonProduct = lazy(() => import("../components/button/ButtonProduct"));
const FavoriteButton = lazy(() => import("../components/favorite/FavoriteButton"));

const BoxWrapper = ({ children }) => {
	return (
		<Box display='flex' flexDirection='column' gap='1rem' maxWidth='900px' margin='auto' padding='1rem'>
			<Suspense fallback={<h1>Cargando...</h1>}>{children}</Suspense>
		</Box>
	);
};

const ProductPage = () => {
	const { idProduct: id } = useParams();
	const { data: product, isLoading, isError } = useProduct(Number(id));

	if (isLoading) {
		return (
			<BoxWrapper>
				<h1>Cargando...</h1>
			</BoxWrapper>
		);
	}

	if (isError) {
		return (
			<BoxWrapper>
				<h1>Ocurrió un error al traer el producto.</h1>
			</BoxWrapper>
		);
	}

	if (!product) {
		return (
			<BoxWrapper>
				<h1>No existe el producto.</h1>
			</BoxWrapper>
		);
	}

	const { productName, thumbnail, price, offer, description, platform, inventory }: Product = product;

	return (
		<BoxWrapper>
			<Typography component='h1' fontWeight={900} fontSize={{ xs: "1.5rem", md: "2rem" }} textAlign='center'>
				{productName}
			</Typography>
			<ImageProduct thumbnail={thumbnail} productName={productName} />
			<Box display='flex' flexWrap='wrap' justifyContent='center' alignItems='center' gap='1rem'>
				<Price price={price} offer={offer} />
				<ButtonProduct inventory={inventory} />
				<FavoriteButton />
			</Box>
			<Typography component='p' fontWeight={500} fontSize='1rem' textAlign='center'>
				{capitalizeFirstLetter(platform)}
			</Typography>
			<Description description={description} />
		</BoxWrapper>
	);
};

export default ProductPage;
