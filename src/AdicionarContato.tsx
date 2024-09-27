import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarContato } from './contatosSlice';
import { Form } from './styles';

export const AdicionarContato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoContato = {
      id: Date.now(),
      nome,
      email,
      telefone,
    };
    dispatch(adicionarContato(novoContato));
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <button type="submit">Adicionar Contato</button>
    </Form>
  );
};
