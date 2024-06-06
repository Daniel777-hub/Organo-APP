import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import React, { useState } from 'react';

const Formulario = (props) => {

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Mobile',
    'Inovação e Gestão'
]

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')


const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado ({
        nome: nome,
        cargo: cargo,
        imagem: imagem,
        time: time        
    })
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>preencha os dados para criar card do colaborador</h2>
                <CampoTexto
                 obrigatorio={true}
                  label="Nome"
                   placeholder="Digite seu nome..." 
                  valor={nome}
                  aoAlterado={valor => setNome(valor)}
                  />
                <CampoTexto
                 obrigatorio={true}
                  label="Cargo
                  " placeholder="Digite seu cargo..." 
                  aoAlterado={valor => setCargo(valor)}
                  />
                <CampoTexto
                 label="imagem"
                  placeholder="Digite o endereço da imagem..." 
                  valor={imagem}
                  aoAlterado={valor => setImagem(valor)}
                  />
                <ListaSuspensa 
                obrigatorio={true}
                 label="time"
                  itens={times}
                  valor={time}
                  aoAlterado={valor => setTime(valor)}
                  />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario