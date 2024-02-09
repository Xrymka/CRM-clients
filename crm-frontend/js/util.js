// функция, делающая каждую первую букву слова в строке заглавной
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeFirstLetter }
