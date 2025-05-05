import { useState } from "react";

export default function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return <h2>Guess the Number!</h2>;
}
function Body() {
  let [value, setValue] = useState("");
  let [count, setCount] = useState(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count <= 0) return;
    const randNumber = Math.floor(Math.random() * 10 + 1);
    setValue("");
    if (randNumber === value) {
      return alert("Correct Guess. Keep Rocking!");
    }
    return alert("Wrong Guess, Try Again");
  };
  function handleCount() {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  }
  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <label>
          Enter the Number {" from 1 to 10 : "}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(+e.target.value)}
          />
        </label>
        <input type="submit" onClick={handleCount} />
      </form>
      <h3>You have {count} change. Well Done !</h3>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p className="para">
        Build with{" "}
        <span>
          <img src="./logo192.png" alt="react icon" height="20px" />
        </span>{" "}
        React JS
      </p>
    </footer>
  );
}
