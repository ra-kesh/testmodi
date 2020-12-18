import React, { useState } from "react";
import "./styles.css";

const emojiDistinory = {
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇧🇶": "Caribbean Netherlands",
  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇧🇻": "Bouvet Island",
  "🇧🇾": "Belarus",
  "🇨🇦": "Canada",
  "🇨🇫": "Central African Republic",
  "🇨🇭": "Switzerland",
  "🇨🇱": "Chile",
  "🇨🇳": "China",
  "🇨🇴": "Colombia",
  "🇨🇷": "Costa Rica",
  "🇨🇺": "Cuba",
  "🇨🇿": "Czechia",
  "🇩🇪": "Germany",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇪🇺": "European Union",
  "🇫🇮": "Finland",
  "🇫🇯": "Fiji",
  "🇱🇺": "Luxembourg",
  "🇱🇻": "Latvia",
  "🇱🇾": "Libya",
  "🇲🇦": "Morocco",
  "🇲🇨": "Monaco",
  "🇳🇬": "Nigeria",
  "🇳🇮": "Nicaragua",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇷": "Nauru",
  "🇳🇺": "Niue",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇭": "Philippines",
  "🇵🇰": "Pakistan",
  "🇵🇱": "Poland",
  "🇵🇳": "Pitcairn Islands",
  "🇵🇷": "Puerto Rico",
  "🇵🇸": "Palestinian Territories",
  "🇵🇹": "Portugal",
  "🇶🇦": "Qatar",
  "🇷🇴": "Romania",
  "🇷🇸": "Serbia",
  "🇷🇺": "Russia",
  "🇸🇦": "Saudi Arabia",
  "🇬🇱": "Greenland",
  "🇬🇲": "Gambia",
  "🇬🇳": "Guinea",
  "🇬🇵": "Guadeloupe",
  "🇬🇶": "Equatorial Guinea",
  "🇬🇷": "Greece",
  "🇬🇸": "South Georgia and South Sandwich Islands",
  "🇬🇹": "Guatemala",
  "🇬🇺": "Guam",
  "🇬🇼": "Guinea-Bissau",
  "🇭🇰": "Hong Kong Sar China",
  "🇭🇲": "Heard and Mcdonald Islands",
  "🇭🇳": "Honduras",
  "🇭🇷": "Croatia",
  "🇭🇹": "Haiti",
  "🇭🇺": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇲": "Isle of Man",
  "🇮🇳": "India",
  "🇮🇴": "British Indian Ocean Territory",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇳": "St. Kitts and Nevis",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇰🇾": "Cayman Islands",
  "🇰🇿": "Kazakhstan",
  "🇱🇦": "Laos"
};

const emojiList = Object.keys(emojiDistinory);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDistinory[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! This emoji is not availabel in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDistinory[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1>Flag Emoji Interpreter</h1>
      </nav>
      <input placeholder="Put Flag emoji here" onChange={inputEventHandler} />
      <div>{meaning}</div>
      <p>Available Flags</p>
      {emojiList.map((item) => {
        return (
          <span
            className="emojiSpan"
            key={item}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
