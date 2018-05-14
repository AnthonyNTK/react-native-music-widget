import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  player: {
    flex: 1,
    backgroundColor: '#eeeeee',
    margin: 3,
    borderRadius:10,
    padding: 10,
    maxHeight: 150
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 3
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    margin: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignSelf: 'center'
  },
  slider: {
    width: 150,
    height: 20,
    alignSelf: 'center',
  },
  volume: {
    width: 135,
    height: 20,
    alignSelf: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#fff'
  },
  disable: {
    width: 28,
    height: 28,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    opacity: 0.2
  },
  music: {
    width: 28,
    height: 28,
    marginRight: 10
  },
  time: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5
  }
})
