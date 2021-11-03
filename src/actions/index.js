import { SAVE_COMMENT, ADD_USER } from 'actions/types'

export function saveComment(comment){
   return{
     type : SAVE_COMMENT,
     payload : comment
   }
}
export function saveUser(user){
  return {
    type : ADD_USER,
    payload : user
  }
}