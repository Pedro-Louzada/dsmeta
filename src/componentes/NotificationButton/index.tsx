import './NotificationButton.css'
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import axios from 'axios';

type Props = {
    saleId: number;
}

function hadleClick(id:number){
     axios(`${BASE_URL}/sale/${id}/notification`)
        .then(response => {
        console.log('Sucesso')
     })
}

const NotificationButton = ( {saleId} : Props) => {
    return(
    <div className="dsmeta-red-btn" onClick={() => hadleClick(saleId)}>
            <img src={icon} alt="Notificar" />
    </div>
    )
}

export default NotificationButton;