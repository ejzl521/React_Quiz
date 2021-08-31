import React from 'react'
import { addAnswer } from './redux/modules/quiz';
import { addScore } from './redux/modules/rank';
import styled from 'styled-components';
import SwipeItem from './SwipeItem';
import Progressbar from './Progressbar';
import { useSelector, useDispatch } from 'react-redux';
import Score from './Score';

const Quiz = (props) => {
    const quizList = useSelector(state => state.quiz.quizList);
    const dispatch = useDispatch();
    const answer = useSelector(state => state.quiz.answer);
    const num = answer.length;

    // 왼쪽으로 드래그하면 O 오른쪽으로 드래그하면 X
    const onSwipe = (direction) => {
        let _answer = direction === "left" ? "O" : "X";
        console.log(direction)
        if (_answer === quizList[num].answer) {
            dispatch(addAnswer(true));
        }
        else {
            dispatch(addAnswer(false));
        }
    }

    // 퀴즈가 다 끝나면 점수 계산한 후 점수 화면으로 넘어감
    if (num === quizList.length) {
        const correct = answer.filter(arr => arr === true).length;
        const score = parseInt((correct / num) * 100);
        dispatch(addScore(score));
        return (
            <Score />
        );
    }

    else {
        return (
            <div style={{ padding: '20px' }}>
                <Progressbar></Progressbar>
                {quizList.map((l, idx) => {
                    if (num === idx) {
                        return (
                            <NumContainer key={idx}>
                                <Num>{num + 1}번 문제</Num>
                                <p>{l.question}</p>
                            </NumContainer>
                        );
                    }
                })}
                <OXcontainer>
                    <OX>O </OX>
                    <OX> X</OX>
                </OXcontainer>

                {/*swipe가 문제당 하나씩 생기게 하기 위해 map을 사용해서 문제마다 나오게 함*/}
                {quizList.map((l, idx) => {
                    if (idx === num) {
                        return <SwipeItem key={idx} onSwipe={onSwipe} />;
                    }
                })}

            </div>
        );
    }

}

const NumContainer = styled.div`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`;

const Num = styled.span`
    font-size: 0.8em;
    border-radius: 30px;
    background: #fef5d4;
    border: 0;
`;

const OXcontainer = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    
`;
const OX = styled.div`
    display: flex;    
    color: skyblue;
    width: 50%;
    align-items:center;
    justify-content: center;
    font-weight: bold;
    font-size: 400px;
`;

export default Quiz;