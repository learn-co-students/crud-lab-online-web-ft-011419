
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = {
        restaurants: [],
        review: []
    }, 
    action) {
        switch (action.type) {
            case 'ADD_RESTAURANT':
                let restaurant = {
                    text: action.text,
                    id: cuid()
                }
                return {...state, restaurants: [...state.restaurants, restaurant]}
            
            case 'DELETE_RESTAURANT':
                return {
                    ...state,
                    restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
                }

            case 'ADD_REVIEW':

                const { text, restaurantId } = action.review

                let review = {
                    text: text,
                    id: cuid(),
                    restaurantId: restaurantId
                }
                return {
                    ...state,
                    review: [...state.review, review]
                }

            case 'DELETE_REVIEW':
                return {
                    ...state,
                    review: state.review.filter(review => review.id !== action.id)
                }

            default:
                return state
        }
    }
