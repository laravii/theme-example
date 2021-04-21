export interface IColors {
  primary_color: string
  secundary_color: string
  thirdy_color: string
  fourth_color: string
}

export const UPDATE_COLORS = 'UPDATE_COLORS'

export type UpdateColors = {
  type: typeof UPDATE_COLORS
  colors: IColors
}

export type ThemeActionTypes = UpdateColors
