// Store/Reducers/favoriteReducer.js

const initialState = { favoritesArt: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteArtIndex = state.favoritesArt.findIndex(item => item.id === action.value.id)
      if (favoriteArtIndex !== -1) {
        nextState = {
          ...state,
          favoritesArt: state.favoritesArt.filter( (item, index) => index !== favoriteArtIndex)
        }
      }
      else {
        nextState = {
          ...state,
          favoritesArt: [...state.favoritesArt, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite
