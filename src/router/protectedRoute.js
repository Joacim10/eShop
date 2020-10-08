// 
//  canActivateRoute
// 

// import { mapGetters } from "vuex";



function canActivateRoute(to,mustBe,currentUser) {

// hämtar id för inloggad user
  // let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  
  console.log(to.name)
  console.log(mustBe)
  console.log(currentUser.id)


  if (currentUser) {
    if (!currentUser.id) {
      console.log('true')
      return true;
    }
  } else {
    console.log('false')
    return false;
  }

  // return true;

}

export {canActivateRoute};