import currentUser from './CurrentUser'

export default (nextState, replace) => {
  if (!currentUser()) {
    replace({
      pathname: '/sign_in'
    })
  }
}
