import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const BookingSchema = Yup.object().shape({
  date: Yup.date().required('This field is required!'),
  time: Yup.string()
    .oneOf(['17:00', '18:00', '19:00', '20:00'])
    .required('This field is required!'),
  guests: Yup.number()
    .min(1, 'At least one peroson to make a reservation!')
    .max(10, "Can't exceed 10 people!")
    .required('This field is required!'),
  occasion: Yup.string()
    .oneOf(['Birthday', 'Anniversary'])
    .required('This field is required!'),
})

const submitAPI = (values: any) => {
  console.log(values)
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(values),
  // }

  // fetch('', options)
  //   .then((response) => response.json())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log(error))

  return true
}

export default function ReservationForm() {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday',
      }}
      validationSchema={BookingSchema}
      onSubmit={(values) => {
        // console.log(values)
        const isValid = submitAPI(values)
        if (isValid) {
          navigate('/confirmed-booking')
        }
      }}
    >
      <Form className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="">Reservation Date</label>
          <Field name="date" type="date" />
          <div className="error">
            <ErrorMessage name="date" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time">Reservation time</label>
          <Field name="time" component="select">
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
          </Field>
          <div className="error">
            <ErrorMessage name="time" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="guests">Number of guests</label>
          <Field
            placeholder="Guests"
            className="p-4 border border-slate-300 rounded-lg bg-white"
            name="guests"
          />
          <div className="error">
            <ErrorMessage name="guests" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="occasion">Reservation time</label>
          <Field name="occasion" component="select">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <div className="error">
            <ErrorMessage name="occasion" />
          </div>
        </div>
        <button
          type="submit"
          className="p-4 bg-slate-900 rounded-lg text-white flex flex-row items-center justify-center"
        >
          Submit
        </button>
      </Form>
    </Formik>
  )
}
