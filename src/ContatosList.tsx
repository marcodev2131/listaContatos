import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { removerContato } from './contatosSlice';
import { List } from './styles';

export const ContatosList: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contatos.items);
  const dispatch = useDispatch();

  const handleRemover = (id: number) => {
    dispatch(removerContato(id));
  };

  return (
    <List>
      {contatos.map(contato => (
        <li key={contato.id}>
          <strong>{contato.nome}</strong> - {contato.email} - {contato.telefone}
          <button onClick={() => handleRemover(contato.id)}>Remover</button>
        </li>
      ))}
    </List>
  );
};
