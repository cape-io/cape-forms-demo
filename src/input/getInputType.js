import Email from './Email'
import Dates from './Dates'

export default function(fieldType) {
  switch (fieldType) {
    case 'email':
      return Email;
    case 'date':
    case 'dateTime':
      return Dates;
    default:
      return Email;
  }
}
