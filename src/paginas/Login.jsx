import { useState } from "react";

export default function Login ({navegar}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const entrar = async () => {
        const resposta = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, senha})
        });
        const data = await resposta.json()
        console.log(data);
        alert(data.message)
        if(data.login){
            navegar('usuarios')
        }
        
    }

    return (
        <div>
            <h1>login</h1>

             <input type="text" id="email"
            placeholder="DIGITE EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
             <input type="text" id="senha"
            placeholder="DIGITE A SENHA"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />

            <br />
            <br />

            <button onClick={() => entrar()}>ENTRAR</button>
            <button onClick={() => navegar('cadastro')}>nao tenho cadastro</button>
        </div>
    )
}