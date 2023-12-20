import { useState } from 'react'

//***********************************************************//
//                  Formulaire                               //
//***********************************************************//

// const Form = (props) => {
//     const [value, setValue] = useState({
//         submitted : false,
//         username : ""
//     });

//     const handleChange = (event) => {
//         setValue({
//             submitted: false,
//             username : event.target.value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setValue({
//             submitted: true,
//             username : event.target.username.value
//         });
//     };

//     return (
//         <>
//             {
//                 value.submitted === true && (
//                     <p>Dernier ajout : {value.username}</p>
//                 )
//             }
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         name="username"
//                         id="username"
//                         type="text"
//                         value={value.username}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <input type="submit" value="Add" />
//             </form>
//         </>
//     );
// };


//***********************************************************//
//                  Formulaire connexion                     //
//***********************************************************//


// const Form = (props) => {
//     const [state, setState] = useState({
//         submitted : false,
//         email : "",
//         password : "",
//     });

//     const handleEmailChange = (event) => {
//         setState({
//             submitted: false,
//             email : event.target.value
//         });
//     };

//     const handlePasswordChange = (event) => {
//         setState({
//             submitted: false,
//             password : event.target.value
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setState({
//             submitted: true,
//             email : event.target.email.value,
//             password : event.target.password.value
//         });
//     };

//     return (
//         <>
//             {
//                 state.submitted === false && (
//                     <form onSubmit={handleSubmit}>
//                         <fieldset>
//                             <label htmlFor="email">
//                                 Email
//                             </label>
//                             <input type="email" name="email" id="email" onChange={handleEmailChange} />
//                         </fieldset>
//                         <fieldset>
//                             <label htmlFor="password">
//                                 Mot de passe
//                             </label>
//                             <input type="password" name="password" id="password" onChange={handlePasswordChange}/>
//                         </fieldset>
//                         <button type="submit">Connexion</button>
//                     </form>
//                 )
//             }
//             {
//                 state.submitted === true && (
//                     <p>Vous êtes déjà connecté</p>
//                 )
//             }
//         </>
//     );
// };



//***********************************************************//
//                  Formulaire inscription                   //
//***********************************************************//

const Form = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [newUser, setNewUser] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const matchPass = () => {
    if (values.password !== values.confirmPassword) {
      setPasswordsMatch(false);
      console.log("Les mots de passe ne correspondent pas");
    } else {
      setPasswordsMatch(true);
      console.log("Form submitted");
      setNewUser({ ...values });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    matchPass();
  };
  
  return (
      <>
      {
        newUser && (
        <article>
          <h2>Nouvel utilisateur :</h2>
          <p>Prénom : {newUser.firstName}</p>
          <p>Nom : {newUser.lastName}</p>
          <p>Email : {newUser.email}</p>
        </article>
        )
      }
      
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label for="firstName">
            Prénom  
          </label>
            <input
            	name="firstName"
            	id="firstName"
              type="text"
              onChange={handleChange}
            />
        </fieldset>
        <fieldset>
          <label for="lastName">
            Nom 
          </label>
            <input
            	name="lastName"
            	id="lastName"
              type="text"
              onChange={handleChange}
            />
        </fieldset>
        <fieldset>
          <label for="email">
            email 
          </label>
            <input
            	name="email"
            	id="email"
              type="email"
              onChange={handleChange}
            />
        </fieldset>
        <fieldset>
          <label for="password">
            Mot de passe 
          </label>
            <input
            	name="password"
            	id="password"
              type="password"
              onChange={handleChange}
            />
        </fieldset>
        <fieldset>
          <label for="confirmPassword">
            Confirmer le mot de passe 
          </label>
            <input
            	name="confirmPassword"
            	id="confirmPassword"
              type="password"
              onChange={handleChange}
            />
        </fieldset>
        {passwordsMatch === true && (
          <button type="submit">Connexion</button>
        )}
        {passwordsMatch === false && (
          <p>Les mots de passe ne correspondent pas</p>
        )}
      </form>
    </>
  );
};



export default Form;
