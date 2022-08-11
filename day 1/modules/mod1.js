function check_pass(password) {
  if (password.length > 8) {
    return true;
  }
  return false;
}

console.log(check_pass("dbkjbjds "));
