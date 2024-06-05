import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Mobile',
    'Inovação e Gestão'
]

    return (
        <section className="formulario">
            <form>
                <h2>preencha os dados para criar card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto label="imagem" placeholder="Digite o endereço da imagem..." />
                <ListaSuspensa label="time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario