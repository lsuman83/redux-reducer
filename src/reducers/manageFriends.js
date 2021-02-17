export function manageFriends(state, action){

   
    switch (action.type) {

        case 'ADD_FRIEND': {
            state.friends.push(action.friend)
            return {friends: state.friends}
        }
        case 'REMOVE_FRIEND': {
            let foundFriend = state.friends.findIndex(friend => friend.id === action.id)

            return {friends: [...state.friends.slice(0,foundFriend), ...state.friends.slice(foundFriend+1)]}
        }
        default:
            return state;
    }
}
