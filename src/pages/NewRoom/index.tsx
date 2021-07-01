import { FormEvent, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg';
import LogoLight from '../../assets/images/logo-light.svg';
import LogoDark from '../../assets/images/logo-dark.svg';

import { CustomButton } from '../../components/CustomButton';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { Grid, Hidden } from '@material-ui/core';

import { PageAuth } from './styles';
import { ChangeTheme } from '../../components/ChangeTheme';
import { ThemeContext } from 'styled-components';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('');
  const { title } = useContext(ThemeContext);

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
              <h2>Criar uma nova sala</h2>
              <form onSubmit={handleCreateRoom}>
                <input 
                  type="text"
                  placeholder="Nome da sala"
                  onChange={event => setNewRoom(event.target.value)}
                  value={newRoom}
                />
                <CustomButton type="submit">
                  Criar sala
                </CustomButton>
              </form>
              <p>
                Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
              </p>
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