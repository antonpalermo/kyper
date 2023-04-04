import { api } from "@kyper/utils/api"
import { Form, Formik, type FormikHelpers } from "formik"

type TaskInput = {
  subject: string
}

export default function Home() {
  const { mutate, isLoading: isCreating } = api.task.create.useMutation()

  const initialData: TaskInput = {
    subject: ""
  }

  function onSubmit({ subject }: TaskInput, _: FormikHelpers<TaskInput>) {
    mutate({ subject })
  }

  return (
    <div>
      <Formik initialValues={initialData} onSubmit={onSubmit}>
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <h1>Create Task</h1>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
              />
            </div>
            <button disabled={isSubmitting && isCreating} type="submit">
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
