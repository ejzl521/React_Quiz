const ADD_ANSWER = "quiz/ADD_ANSWER";

const initialState = {
    name: 'Duckgugong',
    quizList: [
        { question: "Duckgugong은 키가 크다", answer: "O" },
        { question: "Duckgugong은 배가 고프다", answer: "O" },
        { question: "Duckgugong은 잘생겼다", answer: "O" },
        { question: "Duckgugong은 착하다", answer: "O" },
        { question: "Duckgugong은 치킨을 좋아한다", answer: "O"}
    ],
    answer: [

    ]
};

export const addAnswer = (answer) => {
    return {type: ADD_ANSWER, answer}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "quiz/ADD_ANSWER":
            const new_answer = [...state.answer, action.answer]
            return {...state, answer: new_answer};

        default:
            return state;
    }
}