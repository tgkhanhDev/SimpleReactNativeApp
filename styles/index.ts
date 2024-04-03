import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainLayoutStyle: {
    backgroundColor: '#9dc8e3',
    borderWidth: 2,
    borderColor: 'black',
  },
  // Start Header
  imageContainer: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  UserContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  headLayoutStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  //End Header

  //Start Sub-body
  totalContainer: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
  },
  total_Y: {
    flex: 1,
    width: '90%',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 5,
    fontSize: 20,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  totalStyle: {
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    fontSize: 25,
  },
  //End Sub-body

  //Start Sub-body
  bodyContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    gap: 10,
    height: 300,
  },
  itemContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  // itemButtonContainer{

  // }
  //End Sub-body
});

export default styles;
