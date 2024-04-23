import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function LanguageButton() {
  const { language, setLanguage } = useContext(LanguageContext);

  function handleOptionChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <form className="border-none hover:border-none">
      <select
        onChange={handleOptionChange}
        id="states"
        className="text-lg lg:text-2xl font-mono cursor-pointer flex items-center justify-center rounded-full p-2 bg-violet-brand text-white hover:text-violet-brand hover:bg-white hover:font-extrabold hover:border-none"
      >
        <option className="" selected value="EN">
          English
        </option>
        <option className="" value="ES">
          Español
        </option>
      </select>
    </form>
  );
}
export default LanguageButton;