function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)

    console.log('The original string is: ', stringToSplit)
    console.log('The separator is: ', separator)
    console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
    console.log(`this is arrayOfStrings ${arrayOfStrings}`)

}
const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const space = ' '
const comma = ','
const period = '"'

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)
splitString(monthString, period)