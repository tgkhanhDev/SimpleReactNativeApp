import { useSelector } from "react-redux";
import { RootState } from "../store";
import { cartType } from "../type";

export const useForm = () => {
  const {cart} :{cart?: cartType[] } = useSelector(
    (state: RootState) => state.formCRUD,
  );
  return {cart}
};
