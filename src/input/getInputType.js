import Email from './Email'
import Text from './Text'

export default function(fieldType) {
  switch (fieldType) {
    case 'email':
      return Email;
    default:
  }
}
