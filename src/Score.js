import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Score = () => {

    const score = useSelector(state => state.rank.score);
    const name = useSelector(state => state.quiz.name);
    const score_text = useSelector(state => state.rank.score_text);
    const history = useHistory();
    let text = null;
    const scores = Object.keys(score_text).reverse()

    for(var i in scores){
        if (score >= parseInt(scores[i])){
            text = score_text[scores[i]]
            break;
        }
        else {
            text = name + ' 에 대해 아무것도 모르는군요 =('
        }
    }

    return (
        <Container>
            <Text>
                <Highlight>{name}</Highlight> 퀴즈에 대한 대 점수는 <br />
                <Highlight>{score}</Highlight> 점
            </Text>
            <Text>
                {text}
            </Text>
            <Button
                style={{ width: '300px', color: 'skyblue' }}
                onClick={() => { history.push('/message') }}
            >
                {name}에게 한 마디
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
`
const Text = styled.p`
    font-size: 25px;
    margin-bottom: 50px;
`;

const Highlight = styled.span`
    font-size: 1.3em;
    background: yellow;
    border-radius: 20px;
    font-weight: bold;
`;

const Button = styled.button`
    font-size: 20px;
    margin: 10px auto;
    padding: 5px 20px;
    border-radius: 20px;
    border: 0;
`;

export default Score;