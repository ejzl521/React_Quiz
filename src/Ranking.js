import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Ranking = () => {

    const _ranking = useSelector(state => state.rank.result);
    console.log(_ranking);
    const ranking = _ranking.sort((a, b) => {
        return b.score - a.score;
    })

    return (
        <div>
            <Topbar>
                <p>
                    <span>{ranking.length}명</span>의 사람들 중 당신은?
                </p>
            </Topbar>
            <RankContainer>
                {ranking.map((l, idx) => {
                    let current = false;
                    if(l.current === true){
                        current = true;
                    }
                    return (
                        // current라는 props를 사용해서 현재 퀴즈 푼 사람을 색깔로 강조
                        <RankItem key={idx} current={current}>
                            <Rank>
                                {idx + 1}등
                            </Rank>
                            <RankText>
                                <span>{l.name}</span> {l.score}점 <br/>{l.message}
                            </RankText>
                        </RankItem>
                    );

                })}
                <Button>재도전하기</Button>
            </RankContainer>
            
        </div>
    );
}

export default Ranking;

const Topbar = styled.div`
    position: fixed;
    display: flex; 
    align-items: center;
    justify-content: center;
    top:0;
    left: 20vw;
    width: 60vw;
    height: 20vh;
    border: 2px solid #ddd;
    background-color: #fff;
    & > p {
        font-size: 3vw;
        text-align: center;
    }

    & > p > span {
        border-radius: 30px;
        font-size: 4vw;
        background-color: #fef5d4;
        font-weight: 600;
        padding: 4px 8px;
    }
`;

const RankContainer = styled.div` 
    margin: 20vh 20vw;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    border: 2px solid #ddd;
`;

const RankItem = styled.div`
    width: 40vw;
    margin: 10px auto;
    border: 2px solid #ddd;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: ${props => props.current? "#ffd6aa" : "#ffffff"};
`;

const Rank = styled.div`
    font-size: 5vw;
    font-weight bold;
    margin: 2px 5px;
`;

const RankText = styled.div`
    font-size: 2vw;
    & > span{
        color: blue;
        font-size: 2.5vw;
        font-weight: bold;
    }
`;

const Button = styled.button`
    position: fixed;
    width: 30vw;
    color: skyblue;
    top: 80vh;
    font-size: 20px;
    margin: 20px auto;
    padding: 5px 20px;
    border-radius: 20px;
    border: 0;
`;