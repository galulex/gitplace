import base from '../api/firebase'

export default () => {
  const apiKey = base.app().options.apiKey
  const keyName = `firebase:authUser:${apiKey}:[DEFAULT]`

  return JSON.parse(window.localStorage.getItem(keyName))
}
