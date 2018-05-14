import { ToastAndroid } from 'react-native'

export const shortToast = message => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM
  )
}

export const longToast = message => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM
  )
}
