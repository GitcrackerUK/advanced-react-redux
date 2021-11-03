import { configureStore } from ''
import { createStore, applyMiddleware  } from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'

export default function configureStore(preloadState){
    const middleware = [thunk]
    const middlewareEnhancers = applyMiddleware(...middleware)


    const store = createStore(rootReducers, preloadState)


    return store
}