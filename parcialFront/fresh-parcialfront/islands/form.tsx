import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const submitHandler = async (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
    e.preventDefault();
    const errorMsg: string[] = [];

    if (name === "" || email === "") {
      errorMsg.push(
        "Invalid contact. A field is empty, email is invalid, or the email is already in use.",
      );
    }
    else {
      setError(""); 
      e.currentTarget.submit(); 
    }
  };

  const mostrar = (email) =>{
    return (
        <div>
            <p> {email}</p>
        </div>
    )
  };

  return (
    <div>
      <form
        class="agendaForm"
        accion="/agendacsr"
        method="POST"
        onSubmit={submitHandler}
      >
        <h2 class="h2Form">Add new contact</h2>
        <label for="name"></label>
        <input
          onFocus={(e) => setError("")}
          onInput={(e) => setName(e.currentTarget.value)}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />

        <label for="email"></label>
        <input
          onFocus={(e) => setError("")}
          onInput={(e) => setEmail(e.currentTarget.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

    
        <button
          type="submit"
          onClick={mostrar}
        > Add contact
        </button>
      </form>
    </div>
  );
};
export default Form;
