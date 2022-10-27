import ReactDOM from 'react-dom'
import App from './components/App'
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'

ReactDOM.render(
  <QueryClientProvider client={new QueryClient()}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
)
