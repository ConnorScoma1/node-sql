var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "enter",
      message: "Who is entering the store?",
      choices: ["Customer", "Manager"]
    }
  ])
  .then(result => {
    console.log(result);
    if (result.enter === "Manager") {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "confirmManager",
            message: "Are You The Manager?"
          }
        ])
        .then(managerResults => {
          console.log(managerResults);
          if (managerResults.confirmManager === true) {
                enterPassword()
          }
        });
    } else {
      console.log("Welcome into our store");
    }
  });

  function enterPassword() {
    inquirer.prompt([
        {
          type: "input",
          name: "storePassword",
          message: 'Please Enter Your Employee Password'
        }
      ]).then(managerPassword => {
          if(managerPassword.storePassword === 'hello'){
              console.log('You Are Now Clocked In')
          } else {
              console.log('Your Password Is Inccorrect')
          }
      })
  }