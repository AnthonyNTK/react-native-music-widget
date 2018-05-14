export const getTimeString = seconds => {
  let minute = Math.floor(seconds / 60)
  let second = seconds - minute * 60

  let timeString = ''
  if (second < 10)
    timeString = minute.toString() + ':0' + second.toFixed(0).toString()
  else
    timeString = minute.toString() + ':' + second.toFixed(0).toString()

  return timeString
}
