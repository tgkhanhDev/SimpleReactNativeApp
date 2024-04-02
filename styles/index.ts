import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainLayoutStyle: {
    backgroundColor: '#9dc8e3',
    borderWidth: 2,
    borderColor: 'black',
  },
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  UserContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  headLayoutStyle: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
