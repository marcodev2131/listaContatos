import React from 'react';
import { AdicionarContato } from './AdicionarContato';
import { ContatosList } from './ContatosList';
import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <AdicionarContato />
      <ContatosList />
    </Container>
  );
};

export default App;
