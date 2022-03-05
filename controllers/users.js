exports.getSignIn = (req, res) => {
  try {
    res.render("auth/signin");
  } catch (e) {
    res.status(500).send("");
  }
};

exports.getSignUp = (req, res) => {
  try {
    res.render("auth/signup");
  } catch (e) {
    res.status(500).send("");
  }
};

exports.postSignIn = (req, res) => {
    console.log(req.body)
  try {
    res.render("auth/signin");
  } catch (e) {
    res.status(500).send("");
  }
};

exports.postignUp = (req, res) => {
  try {
    res.render("auth/signup");
  } catch (e) {
    res.status(500).send("");
  }
};
