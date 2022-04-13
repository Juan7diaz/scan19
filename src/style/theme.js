import { extendTheme } from '@chakra-ui/react'

//https://flatuicolors.com/palette/ca

const primaryLight = '#10ac84'
const primaryDark = '#feca57'
const secondary = '#171923'
const white = '#fff'
const subText = '#9f9f9f'

const colors = {
    themeLight: {
      primary: primaryLight,
      logo: white,
      icon: primaryLight,
      bgInput: white,
      bgIcon: white,
      bgSearchButton: primaryLight,
      SearchButton: white,
      spinner: primaryLight,
      background: '#f6f6f6',
      borderInput: primaryLight,
      cardBackground: white,
      title: secondary,
      number: secondary,
      subtitle: subText,
    },
    themeDark: {
      primary: secondary,
      logo: primaryDark,
      icon: secondary,
      bgIcon: primaryDark,
      spinner: primaryDark,
      borderInput: primaryDark,
      bgSearchButton: primaryDark,
      SearchButton: secondary,
      bgInput: secondary,
      background: '#192334',
      cardBackground: secondary,
      title: white,
      number: white,
      subtitle: subText,
    },
}

export const theme = extendTheme({ colors })