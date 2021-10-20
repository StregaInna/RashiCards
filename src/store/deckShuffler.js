//this function is here to shuffle the array for initial state
export default function deckShuffler(array) {
    let currentId = array.length;
    while (0 !== currentId) {
        let randomId = Math.floor(Math.random() * currentId)
        currentId--
        let element = array[currentId]
        array[currentId] = array[randomId]
        array[randomId] = element
    }
    return array
  }
