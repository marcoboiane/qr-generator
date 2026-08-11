//Basicamente: pegue o componente App e coloque dentro da página HTML

import { StrictMode } from 'react' //ajuda nos erros
import { createRoot } from 'react-dom/client' //cria a aplicação
import './index.css' //css global
import App from './App.jsx'//importa o componente principal

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


