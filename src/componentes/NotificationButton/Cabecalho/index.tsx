import './Cabecalho.css'
import logo from '../../../assets/img/logo.svg'

const Cabecalho = () => {
    return(
        <header>
            <div className='dsmeta-logo-container'>
                <img src={logo} alt='DSMeta'></img>
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href='https://www.linkedin.com/in/pedrolouzada-programador/'>@pedro-louzada</a>
                </p>
            </div>
        </header>
    )
}

export default Cabecalho;