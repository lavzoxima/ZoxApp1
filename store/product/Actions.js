import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({
	fetchProducts: ['payload'],
	fetchProductsSuccess: ['payload'],
	fetchProductsFailure: ['payload'],
	fetchProductsLoading: null,
	fetchProductsLoadingStop: null,




});

export const ProductTypes = Types
export default Creators