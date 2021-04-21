import { UPDATE_COLORS, IColors } from './types'

export const updateColors = (colors: IColors) => {
  return {
    type: UPDATE_COLORS,
    colors: colors,
  }
}
