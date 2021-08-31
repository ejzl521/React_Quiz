import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Progressbar() {
    const quizList = useSelector(state => state.quiz.quizList);
    const answer = useSelector(state => state.quiz.answer);
    
    return (
        <Container>
            <Progress width={((answer.length + 1) / quizList.length) * 100 + "%"} />
            <Dot />
        </Container>

    );
}

export default Progressbar;

const Container = styled.div`
  margin: 50px auto;
  background-color: #eee;
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background-color: blue;
  width: ${props => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  border: 10px solid blue;
  border-radius: 35px;
  background: yellow;
  margin-left: -35px;
`