function check_pass(password) {
  if (password.length > 8) {
    return true;
  }
  return false;
}

module.exports = check_pass;
