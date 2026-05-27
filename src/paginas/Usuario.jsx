import { useEffect } from "react"
import { useState } from "react"

export default function Usuarios () {
    const [contador, setContador] = useState(0)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [usuarios, setUsuarios] = useState([])
    const [modal, setModal] = useState(false)
    
    useEffect(() => {
        document.title = 'contagem ' + contador;
        const buscarUsuarios = async () => {
            const resposta = await fetch('http://localhost:3000/usuarios')
            const data = await resposta.json()
            setUsuarios(data);
            console.log(data);
        } 
        buscarUsuarios()

    }, [contador])

    const editar = (usuario) => {
    if(!usuario || !usuario.nome){
        alert('erro ao buscar usuario')
        return
    }
        setModal(true)
        setEmail(usuario.email)
        setNome(usuario.nome)
        setSenha(usuario.senha)
        console.log(usuario);
    }
    const confirmarEdicao = () => {
        console.log('confirmar edição');
    }

    return (
        <div>
            <h1>Usuarios</h1>
            <h1>{contador}</h1>

            <button onClick={() => {setContador(contador + 1)}}>
                somar
            </button>

            {modal && (
                <div className="fundo-modal">
                    <div className="modal-content">

                        <input type="text" id="email"
                        placeholder="DIGITE EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
            
                        <input type="text" id="nome"
                        placeholder="DIGITE NOME"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
            
                        <input type="text" id="senha"
                        placeholder="DIGITE SENHA"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        />
            
                        <button onClick={confirmarEdicao}>Confirmar Edição</button>
                    </div>
                </div>
            )}



            <h3>{email}</h3>


            <ul>
                {usuarios.map( (usuario) => (
                    <li key={usuario.id}>
                        <b>{usuario.nome}</b>
                        STATUS: { usuario.ativo ? 'Ativo' : 'Desativo' }
                        <br />
                        <button onClick={() => editar(usuario)}>editar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}