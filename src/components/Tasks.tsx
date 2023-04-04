import { api } from "@kyper/utils/api"

export default function Tasks() {
  const { data: tasks } = api.task.getAll.useQuery()

  return (
    <div>
      {tasks &&
        tasks.map(task => (
          <div key={task.id}>
            <h2>{task.subject}</h2>
          </div>
        ))}
    </div>
  )
}
