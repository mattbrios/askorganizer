import copyImg from '../assets/images/copy.svg';
import Swal from 'sweetalert2';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
} 

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    Swal.fire({
      text: 'Código da sala copiado com sucesso!',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: 'success',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
        <span>Sala</span>
      </div>
      <span>{props.code}</span>
    </button>
  )
}