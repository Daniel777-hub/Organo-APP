import './ListaSuspensa.css'

const ListaSuspensa = (Props) => {
    console.log(Props.itens)

    return (
        <div className='Lista-suspensa'>
            <label>{Props.label}</label>
            <select>
                {Props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select> 
        </div>
    )
}

export default ListaSuspensa