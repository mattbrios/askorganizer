import { useHistory } from 'react-router-dom'
import { FormEvent, useContext, useState } from 'react';

import illustrationImg from '../../assets/images/illustration.svg'
import LogoLight from '../../assets/images/logo-light.svg';
import LogoDark from '../../assets/images/logo-dark.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { database } from '../../services/firebase';
import { Grid, Hidden } from '@material-ui/core';
import Swal from 'sweetalert2';

import { CustomButton } from '../../components/CustomButton';
import { useAuth } from '../../hooks/useAuth';

import { ChangeTheme } from '../../components/ChangeTheme';
import { PageAuth } from './styles';
import { ThemeContext } from 'styled-components';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('');
  const { title } = useContext(ThemeContext);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      Swal.fire('Oops...', 'Essa sala não existe. Tente outro código da sala.', 'error');
      // alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      Swal.fire('Tarde demais...', 'Esta sala já foi encerrada!', 'error');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <PageAuth>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <aside>
            <Hidden smDown>
              <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            </Hidden>
            <strong>Se perdendo no meio das perguntas?</strong>
            <p>Organize as perguntas de sua audiência em tempo-real</p>
          </aside>
        </Grid>
        <Grid item sm={6} xs={12}>
          <main>
            <div className="main-content">
              <img src={ title === 'light' ? LogoLight : LogoDark } alt="AskOrganizer" />
              <button onClick={handleCreateRoom} className="create-room">
                <img src={googleIconImg} alt="Logo do Google" />
                Crie sua sala com o Google
              </button>
              <div className="separator">ou entre em uma sala</div>
              <form onSubmit={handleJoinRoom}>
                <input 
                  type="text"
                  placeholder="Digite o código da sala"
                  onChange={event => setRoomCode(event.target.value)}
                  value={roomCode}
                />
                <CustomButton type="submit">
                  Entrar na sala
                </CustomButton>
              </form>
            </div>
          </main>
          <div className="theme-switch">
            <ChangeTheme />
          </div>
        </Grid>
      </Grid>
    </PageAuth>
  )
}