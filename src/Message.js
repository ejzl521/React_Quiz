import React from 'react'
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addResult } from './redux/modules/rank';
import styled from 'styled-components';

const Message = (props) => {
    
    const dispatch = useDispatch();
    const name = useSelector(state => state.quiz.name);
    const user_name = useSelector(state => state.rank.user);
    const user_score = useSelector(state => state.rank.score);
    const user_message = useRef(null);
    return (
        <Container>
            <div>
                <img src="https://w.namu.la/s/0c6301df01fc4f180ec65717bad3d0254258abf0be33299e55df7c261040f517518eb9008a1a2cd3d7b8b7777d70182c185bc891b1054dc57b11cc46fd29130a0bd29932342f7f5f64911447c7b2f61a6f6559fa77a65cbd251b7c44da2dc183"></img>
            </div>
            <Text>
                <Highlight>{name}</Highlight>에게 한마디!
            </Text>

            <MessageBox ref={user_message} type='text' placeholder="한마디 하기"/>

            <Button
                style={{ width: '400px', background: 'skyblue', color: 'white' }}
                onClick={
                    () => {
                        dispatch(addResult({
                            name: user_name,
                            score: user_score,
                            message: user_message.current.value,
                            current: true,
                        }));                     
                        props.history.push('/ranking');
                    }
                }
            >
                한마디 남기고 랭킹 보러가기
            </Button>
        </Container>
    )
}
export default Message;

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

const MessageBox = styled.input`
    padding: 10px;
    margin: 24px 0px;
    border: 2px solid #dadafc;
    border-radius: 30px;
    width: 50%;
`;

const Highlight = styled.span`
    font-size: 1.3em;
    background: yellow;
    border-radius: 20px;
    font-weight: bold;
`;

const Button = styled.button`
    font-size: 20px;
    margin: 20px auto;
    padding: 5px 20px;
    border-radius: 20px;
    border: 0;
`;