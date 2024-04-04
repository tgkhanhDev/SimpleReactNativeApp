import {formStateType, itemType, cartType} from '../../type';
import {
  generateRandomName,
  generateRandomNumber,
  locOfItemCart,
} from '../../utils/func';

const initialState: formStateType = {
  cart: [
    {item: {id: '1', title: 'a', price: 30}, quantity: 1},
    {item: {id: '2', title: 'b', price: 50}, quantity: 1},
  ],
};
 //Tạm thời :D
let DEFAULTKEY = 2;


export const formReducer = (
  state = initialState,
  {type, payload}: {type: string; payload: itemType},
) => {
  switch (type) {
    case 'ADDTOCART':
      let newCart: cartType[];
      if (!state.cart) {
        //Chưa có giỏ hàng thì thêm mới
        newCart = [{item: payload, quantity: 1}];
      } else {
        // Nếu trong cart KO TỒN TẠI item
        const loc = state.cart.findIndex(e => e.item.id == payload.id);
        if (loc < 0) {
          newCart = [...state.cart, {item: payload, quantity: 1}];
        } else {
          // Nếu ĐÃ TỒN TẠI
          newCart = [...state.cart];
          let quantity = newCart[loc].quantity;
          ++quantity;
          newCart[loc].quantity = quantity;
        }
      }
      return {...state, cart: newCart};

    case 'DELETEITEM':
      console.log('DELETEITEM');

      //Cart có item mới được phép xóa
      if (!state.cart) {
        return {...state};
      }
      const loc = state.cart.findIndex(e => e.item.id == payload.id);
      newCart = [...state.cart];
      // Cart chua duoc them vao cung khong duoc xoa
      if (loc < 0) {
        return {...state};
      } else {
        let quantity = newCart[loc].quantity;
        if (quantity == 1) {
          newCart.splice(loc, 1);
        } else {
          --quantity;
          newCart[loc].quantity = quantity;
        }
        return {...state, cart: newCart};
      }
      break;
    case 'ADDRANDOM':
      if(state.cart) {
        // generateItem 
        const rdName = generateRandomName();
        const rdPrice = generateRandomNumber();
        const itemLoc = state.cart.findIndex(e => e.item.id == payload.id);

        //Nen co 1 obj
        // const findLastID= state.cart[state.cart.length-1]
        const newID = ++DEFAULTKEY +"";
        //quantity = 1 vì nó là default value
        const newItem:cartType = { item:{id: newID, title:rdName, price: rdPrice}, quantity:1};

        newCart = [...state.cart ];
        newCart.splice(itemLoc+1, 0, newItem);

        return {...state, cart: newCart};
      }
      return {...state}
    default:
      return {...state};
  }
};
export default formReducer;
