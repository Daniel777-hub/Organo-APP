import './ListaSuspensa.css'

const ListaSuspensa = (Props) => {

    return (
        <div className='Lista-suspensa'>
            <label>{Props.label}</label>
            <select onChange={evento => Props.aoAlterado(evento.target.value)} required={Props.required} value={Props.value}>
                {Props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select> 
        </div>
    )
}

export default ListaSuspensa