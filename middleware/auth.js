export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    if (!store.state.auth) {
      return redirect('/login?ref='+route.path)
    }
  }