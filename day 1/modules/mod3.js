function check_pass(password) {
  if (password.length > 8) {
    return true;
  }
  return false;
}

const name = "Precious";
const age = 89;

module.exports = [check_pass, name, age];
