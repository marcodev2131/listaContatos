import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

interface ContatosState {
  items: Contato[];
}

const initialState: ContatosState = {
  items: [],
};

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.items.push(action.payload);
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { adicionarContato, removerContato, editarContato } = contatosSlice.actions;
export default contatosSlice.reducer;
