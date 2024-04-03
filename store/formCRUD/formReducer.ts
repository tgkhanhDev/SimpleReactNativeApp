import {formStateType, itemType} from '../../type';

const initialState: formStateType = {
  cart: [],
};

export const formReducer = (
  state = initialState,
  {type, payload}: {type: string; payload: itemType},
) => {
  switch (type) {
    case 'ADDTOCART':
      console.log('ADDTOCART');
      // state.cart.push(payload);
      console.log(payload);
      
      return {...state};
    case 'DELETEITEM':
      console.log('DELETEITEM');
      return {...state};
    default:
      return 3;
  }
};
export default formReducer;
