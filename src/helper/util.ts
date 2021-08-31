export const enumArg: (enumObj: { [p: string]: string }) => {
  options: string[]
  control: { type: 'select'; labels: { [p: string]: string } }
} = (enumObj: { [key: string]: string }) => {
  return {
    options: Object.values(enumObj),
    control: { type: 'select', labels: enumObj },
  }
}
