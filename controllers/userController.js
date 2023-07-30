
import User from "../models/user";

export const queryUser = (req, res) => {
  const user = new User(
    // get the name from the query string
    req.query.user
  );
  res.send(user.greetUser());
}

export const queryUserHtml = (req, res) => {
  const user = new User(
    // get the name from the query string
    req.query.user
  );
  res.send(`
    <html>
      <body style="background-color: #000">
        <h1 style="color: #fff">${user.greetUser()}</h1>
      </body>
    </html>
  `);
}

export const queryUserJson = (req, res) => {
  const user = new User(
    // get the name from the query string
    req.query.user
  );
  res.json({
    greeting: user.greetUser()
  });
}