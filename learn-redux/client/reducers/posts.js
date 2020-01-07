//a reducer takes in two things: the action(info aboutwhat happened), a copy of current state

function posts(state=[], action){

  switch(action.type){

    case 'INCREMENT_LIKES' : 
      console.log("incrementing likes");
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we are incrmenting
          {...state[i],likes: state[i].likes + 1},
        ...state.slice(i+1),

      ]

    default:
      return state;




  }
  
}

export default posts