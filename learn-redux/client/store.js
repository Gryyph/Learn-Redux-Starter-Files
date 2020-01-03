import {createStore,compose} from 'redux'
import {synchHistoryWithStore} from 'react-router-redux'
import {broswerHistory} from 'react-router'

//import rootReducer
import {rootReducer} from './reducers/index'

//import data
import comments from './data/comments'
import posts from './data/posts'

// creating an object for default data


const defaultState = {

  posts,
  comments


};

export const store = createStore(rootReducer, defaultState);

export const history = synchHistoryWithStore(broswerHistory,store);