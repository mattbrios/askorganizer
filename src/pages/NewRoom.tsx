import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo2.svg';

import { CustomButton } from '../components/CustomButton';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { Grid, Hidden } from '@material-ui/core';

import '../styles/auth.scss';
import { ChangeTheme } from '../components/ChangeTheme';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('');

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
    <div id="page-auth">
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
              <img src={logoImg} alt="Letmeask" />
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
    </div>
  )
}