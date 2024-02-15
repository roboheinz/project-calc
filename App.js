import { useReducer } from 'react';
import BangunContext, { bangunReducer, initialState } from './context/DataContext';
import Dashboard from './src/component/Dashboard';

const App = () => {
  const [state, dispatch] = useReducer(bangunReducer, initialState);

  return (
    <BangunContext.Provider value={{ state, dispatch }}>
      <Dashboard />
    </BangunContext.Provider>
  );
};

export default App;
