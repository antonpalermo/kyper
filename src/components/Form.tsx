import { api } from "@kyper/utils/api"
import { Form, Formik, type FormikHelpers } from "formik"

import toast from "react-hot-toast"
// import Tasks from "@kyper/components/Tasks"

type TaskInput = {
  subject: string
}

export default function FormSub() {
  const ctx = api.useContext()

  const { mutate, isLoading: isCreating } = api.notes.create.useMutation({
    onSuccess: async () => {
      // TODO: add react hot toast.
      toast.success("Successfully created!")
      await ctx.notes.getAll.invalidate()
    }
  })

  const initialData: TaskInput = {
    subject: ""
  }

  function onSubmit({ subject }: TaskInput, _: FormikHelpers<TaskInput>) {
    mutate({ subject })
  }

  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values, handleChange, isSubmitting }) => (
        <Form>
          <h1>Create Task</h1>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
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
  )
}
