export const monthByNumber = number => {
  if(number < 0 || number > 11)
    return "Número inválido"

  return MONTHS[number]
}

export const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
]
