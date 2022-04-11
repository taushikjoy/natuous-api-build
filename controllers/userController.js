const fs = require('fs');


const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
  );

exports.getAllUsers = (req, res) => {
    res.json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  };

  exports.createuser = (req, res) => {
    // const newId = users[users.length - 1].id + 1;
    const newUser = req.body;
    users.push(newUser);
    fs.writeFile(
      `${__dirname}/dev-data/data/users.json`,
      JSON.stringify(users),
      (err) => {
        console.log(err);
      }
    );
    res.send('ok');
  };

  exports.getUser = (req, res) => {
    res.json({
      status: 'success',
      
      data: {
        message :'this route is not yet defined'
      },
    });
  };

  exports.updateUser = (req, res) => {
    res.json({
      status: 'success',
      
      data: {
        message :'this route is not yet defined'
      },
    });
  };

  exports.deleteUser = (req, res) => {
    res.json({
      status: 'success',
      
      data: {
        message :'this route is not yet defined'
      },
    });
  };