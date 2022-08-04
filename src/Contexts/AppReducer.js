export default (state, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const arrProducts = [...state.products, action.payload.data];
      const product = arrProducts.filter(
        (item) => item.id === action.payload.data.id,
      )[0];

      product.qtd = action.payload.countQtd;

      return { ...state, products: arrProducts };
    case 'REMOVE_CART':
      return {
        ...state,
        products: state.products.filter((data) => data.id !== action.payload),
      };
    case 'ADD_QTD':
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.data.id) {
            return { ...item, qtd: item.qtd + action.payload.countQtd };
          } else {
            return item;
          }
        }),
      };
    case 'MOD_QTD':
      console.log('Modificou');
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.data.id) {
            return { ...item, qtd: item.qtd + action.payload.countQtd };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};
