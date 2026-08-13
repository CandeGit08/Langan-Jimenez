import { useState } from 'react';

export default function NotaInput(props) {
    const [nota, setNota] = useState("");
    const OnAgregarNota = () => {
        props.onAgregarNota(nota);
        setNota("");
    }
    return (
        <input type="number" value={nota} onChange={(event) => setNota(event.target.value)}></input>
        
    );
}