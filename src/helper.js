const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const REGEX_PHONE = /^([\d\-\+\,\(\)]){6,20}$/

export function isValidEmail(email) {
  return REGEX_EMAIL.test(email)
}

export function isValidPhone(phone) {
  return REGEX_PHONE.test(phone)
}
