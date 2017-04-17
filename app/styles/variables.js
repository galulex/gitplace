import tinycolor from 'tinycolor2'

const gray = tinycolor('#aaaaaa')
export const blue = tinycolor('#3b8bb9')
export const white = tinycolor('#ffffff')

export const borderColor = gray.lighten(16).toString()

export const navBarBgColor = blue.toString()
export const navLinkColor = white.toString()
export const navLinkHover = blue.darken(5).toString()

export const formButtonHover = blue.darken(5).toString()
export const formFocusInputBorderColor = blue.darken(5).toString()
export const formInputBorderColor = gray.darken(10).toString()
export const formImageColor = gray.darken(60).toString()
