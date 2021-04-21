import { ThemeActionTypes, UPDATE_COLORS, IColors } from './types'

const initialValues: IColors = {
  primary_color: '#f019f0',
  secundary_color: '#080829',
  thirdy_color: '#5e84a8',
  fourth_color: '#dbdb5a',
}

export const ThemeReducer = (
  state: IColors = initialValues,
  action: ThemeActionTypes,
): IColors => {
  switch (action.type) {
    case UPDATE_COLORS:
      return {
        ...action.colors,
      }
    default:
      return state
  }
}
