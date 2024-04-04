import {useForm} from '../hook/useForm';
import { itemType } from '../type';

export const generateRandomName = () => {
  let name = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < 2; i++) {
    name += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return name;
};

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};
