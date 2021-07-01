import { Link, useHistory, useParams } from 'react-router-dom'


import LogoLight from '../../assets/images/logo-light.svg';
import LogoDark from '../../assets/images/logo-dark.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { CustomButton } from '../../components/CustomButton';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';
import { Container, Grid, Hidden } from '@material-ui/core';

import { PageRoom } from './styles';
import { ChangeTheme } from '../../components/ChangeTheme';
// import '../../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory()
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  const storageValue = localStorage.getItem('theme');
  const currentTheme = storageValue ? JSON.parse(storageValue).title : 'light';

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
  }

  return (
    <PageRoom>
      <header>
        <Container>
          <div className="content">
            <Link to="/">
              <img className='logo' src={ currentTheme === 'light' ? LogoLight : LogoDark } alt="Askorganizer" />
            </Link>
            <div>
              <RoomCode code={roomId} />
              <Link to={`/rooms/${roomId}`}>
                <CustomButton isOutlined>Sala Visitante</CustomButton>
              </Link>
              <CustomButton isOutlined onClick={handleEndRoom}>Encerrar sala</CustomButton>
            </div>
        </div>
        </Container>
      </header>

      <Container>
        <Grid container>
          <Grid item sm={1} xs={12} />
          <Grid item sm={10} xs={12}>
            <main>
              <div className="room-title">
                <h1>Sala {title}</h1>
                { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
              </div>

              <div className="question-list">
                {questions.map(question => {
                  return (
                    <Question
                      key={question.id}
                      content={question.content}
                      author={question.author}
                      isAnswered={question.isAnswered}
                      isHighlighted={question.isHighlighted}
                    >
                      {!question.isAnswered && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleCheckQuestionAsAnswered(question.id)}
                          >
                            <img src={checkImg} alt="Marcar pergunta como respondida" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleHighlightQuestion(question.id)}
                          >
                            <img src={answerImg} alt="Dar destaque à pergunta" />
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDeleteQuestion(question.id)}
                      >
                        <img src={deleteImg} alt="Remover pergunta" />
                      </button>
                    </Question>
                  );
                })}
              </div>
            </main>
            <Hidden smDown>
              <div className="theme-switch">
                <ChangeTheme />
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </PageRoom>
  );
}