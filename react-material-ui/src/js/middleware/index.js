import {ADD_ARTICLE} from './../constants/action-types'

const forbiddenWords = ['spam', 'money'];
export function forbiddenWordsMiddleware({dispatch}) {
    return function(next) {
        return function(action) {
            let foundWord = '';
            if (action.type === ADD_ARTICLE) {
                foundWord = forbiddenWords.filter(item => action.payload.title.includes(item))
            }
            if (foundWord.length) {
                return dispatch({ type: 'FOUND_BAD_WORD', payload: foundWord})
            }
            return next(action)
        }
    }
}