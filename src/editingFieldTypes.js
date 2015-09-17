import InputEmail from './InputEmail'
import Text from './Text'

export default function(fieldType) {
  switch (fieldType) {
    case 'email':
      return InputEmail;
    default:
  }
}
