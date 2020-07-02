export const INITIAL_STATE = {
    fetchProductsLoader: false,
    fetchCategoryLoader: false,
    fetchSubCategoryLoader: false,
    fetchSubSubCategoryLoader: false,

    productList: [],
    filteredProductList: [],

    productCategoryList: [],
    productSubCategoryList: [],
    productSubSubCategoryList: [],

    productCategoryDisplayList: [],
    productSubCategoryDisplayList: [],
    productSubSubCategoryDisplayList: [],

    searchFilters: {
        name: '',
        selectedCategories: [],
        selectedSubCategories: [],
        selectedSubSubCategories: [],
        selectedCategoryParentFilter: 'categories'
    },
    categoryOffset: 0,
    categoryLimit: 1000,
    productLimit: 1000,
    productOffset: 0,
    categoryFiltersList: [
        { id: 'categories', name: 'Categories' },
        { id: 'sub_categories', name: 'Sub/Categories' },
        { id: 'sub_sub_categories', name: 'Sub/Sub/Categories' }
    ]
}