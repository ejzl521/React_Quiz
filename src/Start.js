import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/modules/rank';
const Start = (props) => {
    const name = useSelector(state=>state.quiz.name);
    const dispatch = useDispatch();
    const user_name = useRef(null);
    return (
        <Container>
            <Text>
                나는 <Highlight>{name}</Highlight>에 대해<br/>
                얼마나 알고 있을까?
            </Text>
            <Text>
                내 이름: <input ref={user_name} type='text'/>
            </Text>
            <Button
                style={{ width: '400px', background: 'skyblue', color: 'white' }}
                onClick={
                    ()=>{
                        props.history.push('/quiz');
                        dispatch(addUser(user_name.current.value));
                    }
                }
            >
                퀴즈 시작하기
            </Button>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`;
const Text = styled.p`
    font-size: 25px;
`;

const Highlight = styled.span`
    font-size: 1.3em;
    background: yellow;
    border-radius: 20px;
    font-weight: bold;
`;

const Button = styled.button`
    font-size: 20px;
    margin: 25px auto;
    padding: 5px 20px;
    border-radius: 20px;
    border: 0;
`;

export default Start;
