const initialState = {
  cart: [],
};

export const formReducer = (
  state = initialState,
  {type, payload}: {type: String; payload: any},
) => {
  switch (type) {
    case 'ADDTOCART':
      console.log('ADDTOCART');

      break;
    case 'DELETEITEM':
      console.log('DELETEITEM');

      break;
    default:
      break;
  }
};
export default formReducer