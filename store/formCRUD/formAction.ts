
export const addItemAction = (payload:any) => {
  return {
    type: 'ADDTOCART',
    payload,
  };
}
export const deleteItemAction = (payload: any) => {
  return {
    type: 'DELETEITEM',
    payload,
  };
};
export const addRandomAction = (payload: any) => {
  return {
    type: 'ADDRANDOM',
    payload,
  };
};
