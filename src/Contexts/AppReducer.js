export default (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return { ...state, products: [...state.products, action.payload] };
    case 'REMOVE_CART':
      return {
        ...state,
        products: state.products.filter((data) => data.id !== action.payload),
      };
    case 'ADD_QTD':
      const arrProducts = state.products;
      console.log(action.payload);
      arrProducts.filter((item) => item === item.id).qtd = action.payload;
      console.log(arrProducts);
      return {
        ...state,
        products: arrProducts,
      };
    default:
      return state;
  }
};
