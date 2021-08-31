//configStore.js
import { createStore, combineReducers } from "redux";
//우리가 만든 리덕스 모듈의 리듀서
import quiz from './modules/quiz';
import rank from './modules/rank';
import { createBrowserHistory } from "history";

// 브라우저 히스토리를 만들어줍니다.
export const history = createBrowserHistory();
// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ quiz, rank });

// 스토어를 만듭니다.
const store = createStore(rootReducer);

export default store;