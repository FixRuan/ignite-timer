import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>1 hora</td>
              <td>Há 2 meses</td>
              <td>Concluída</td>
            </tr>
            <tr>
              <td>Tarefa 2</td>
              <td>30 minutos</td>
              <td>Há 2 dias</td>
              <td>Concluída</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
