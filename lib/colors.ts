export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

export interface Color {
  name: string
  shades: ColorShade[]
}

export const colors: Color[] = [
  { name: 'primary', shades: [50, 100, 400, 700, 900] },
  { name: 'secondary', shades: [50, 100, 400, 700, 900] },
  { name: 'danger', shades: [50, 100, 400, 700, 900] },
  { name: 'warn', shades: [50, 100, 400, 700, 900] },
  { name: 'sea', shades: [50, 100, 400, 700, 900] },
  { name: 'royal', shades: [50, 100, 400, 700, 900] },
  { name: 'plum', shades: [50, 100, 400, 700, 900] },
  { name: 'grey', shades: [50, 100, 200, 300, 400, 500, 700, 800, 900] },
]
