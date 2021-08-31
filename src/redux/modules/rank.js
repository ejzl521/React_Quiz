const ADD_USER = "rank/ADD_USER";
const ADD_USER_SCORE = "rank/ADD_USER_SCORE";
const ADD_USER_RESULT ="rank/ADD_USER_RESULT"
const REFRESH_USER ="rank/REFRESH_USER"
const initialState = {
    user: null,
    score: null,
    score_text: {
        100: "둘도 없는 단짝이에요! :)",  
        80: "우와! 우리는 엄청 가까운 사이!",
        60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    },
    result: [
        {name: 'SMC', score: 70, message: '배고파', current: false},
        {name: 'LDH', score: 75, message: '에잇', current: false},
        {name: 'OSH', score: 50, message: '누구세용', current: false},
        {name: 'OHJ', score: 90, message: ';;;', current: false},
        {name: 'LYH', score: 40, message: '응?', current: false}
    ]


};

export const addUser = (user) => {
    return { type: ADD_USER, user };
}

export const addScore = (score) => {
    return { type: ADD_USER_SCORE, score };
}

export const addResult = (result) => {
    return { type: ADD_USER_RESULT, result };
}

export const refeshUser = () => {
    return {type: REFRESH_USER};
}


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "rank/ADD_USER":
            return { ...state, user: action.user };

        case "rank/ADD_USER_SCORE":
            return { ...state, score: action.score };

        case "rank/ADD_USER_RESULT":
            const new_result = [...state.result, action.result];
            return {...state, result: new_result};
        case "rank/REFRESH_USER":
            return {...state, user: null, score: null};
        default:
            return state;
    }
}