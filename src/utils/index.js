

export const shuffle = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}