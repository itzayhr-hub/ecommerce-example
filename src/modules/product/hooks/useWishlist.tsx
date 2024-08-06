import { useSelector, useDispatch } from "react-redux";
import { addToWishlist as AddToWishlist } from "../store/slices/ProductSlice";
import type { StoreState } from "../store/store";

const useWishlist = () => {
	const dispatch = useDispatch();

	const isInWishlist = useSelector(({ productStatus }: StoreState) => productStatus.isInWishlist);
	const addToWishlist = (_isInWishlist: boolean) => dispatch(AddToWishlist(_isInWishlist));

	return { isInWishlist, addToWishlist };
};

export default useWishlist;
