import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { RootState } from './store'
import { updateColors } from './store/theme/action'
import { IColors } from './store/theme/types'
import { GlobalStyle } from './styles/globalStyles'
import Theme from './styles/theme/Theme'

const labels: IColors = {
  primary_color: 'Cor 1',
  secundary_color: 'Cor 2',
  thirdy_color: 'Cor 3',
  fourth_color: 'Cor 4',
}
const data = [
  {
    name: 'Group A',
    value: 400,
  },
  {
    name: 'Group B',
    value: 300,
  },
  {
    name: 'Group C',
    value: 300,
  },
  {
    name: 'Group D',
    value: 200,
  },
]
const COLORS = [
  'var(--primary-color)',
  'var(--secondary-color)',
  'var(--thirdy-color)',
  'var(--fourthy-color)',
]

function App() {
  const dispatch = useDispatch()
  const colors = useSelector((state: RootState) => state.ThemeReducer)
  const handleSubmit = (values: IColors) => {
    console.log(values)
  }

  const onChange = (
    name: 'primary_color' | 'secundary_color' | 'thirdy_color' | 'fourth_color',
    value: string,
  ) => {
    const colorsUpdated = {
      ...colors,
    }
    colorsUpdated[name] = value
    dispatch(updateColors(colorsUpdated))
  }
  return (
    <Theme>
      <GlobalStyle />
      <div className="App">
        <h3>Gráfico personalizável</h3>
        <ResponsiveContainer height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Formik initialValues={colors} onSubmit={handleSubmit}>
          {(props) => (
            <Form>
              {Object.entries(labels).map(([field, label], index) => {
                const typedField = field as keyof typeof labels
                return (
                  <label key={index}>
                    {label}
                    <Field
                      name={typedField}
                      type="color"
                      onChange={(e: any) => {
                        props.setFieldValue(typedField, e.target.value)
                        onChange(typedField, e.target.value)
                      }}
                    />
                  </label>
                )
              })}
            </Form>
          )}
        </Formik>
        <small>Selecione uma cor para modificar no gráfico</small>
      </div>
    </Theme>
  )
}

export default App
