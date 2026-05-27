export default function Cadastro ({navegar}) {

    return (
        <div>
            <h1>CADASTRO</h1>
            <button onClick={() => navegar('login')}>ja tenho cadastro</button>
        </div>
    )
}