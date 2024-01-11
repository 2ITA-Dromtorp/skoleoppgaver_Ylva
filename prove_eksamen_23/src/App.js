


import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleButtonClick = () => {
    const newMessage = { text: inputValue, read: false };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    localStorage.setItem('key', JSON.stringify([...messages, newMessage]));
    setInputValue('');
  };

  const handleCheckboxChange = (index) => {
    setMessages(prevMessages => {
      return prevMessages.map((message, i) => {
        if (i === index) {
          return {
            ...message,
            read: !message.read
          };
        }
        return message;
      });
    });
  };

  useEffect(() => {
    const savedMessages = localStorage.getItem('key');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  return (
    <div id="page-container">
      <div id='content-wrap'>
        <header className="App-header">
          <h1> Vi Trenger Hjelp feilmeldingssenter! </h1>
          <h3> send inn side feil her og se eldre feilmeldinger av de andre. </h3>
        </header>

        <div className="App-body">
          <div className='boo'>
            <div className="feil">
              <h2> send inn dine feilmeldinger her </h2>
              <div className='text-box'>
                <input
                  id='box'
                  type="text"
                  placeholder="skriv inn feilmelding"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                />
              </div>

              <div className='button-box'>
                <button id='knapp' onClick={handleButtonClick}> send inn feil </button>
              </div>

            </div>

            <div className='eldre-feil'>
              <h2> eldre feilmeldinger </h2>
              <ul>
                {messages.map((message, index) => (
                  <div key={index}>
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={message.read}
                        onChange={() => handleCheckboxChange(index)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <span className={message.read ? 'read-message' : ''}>{message.text}</span>
                  </div>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <footer className="App-footer">
        <div className="kontaktInfo">
          <h3 id='kontakt'> kontakt informasjon </h3>
        </div>
        <div className="info">
          <p id='mail'> mail: VTHbs@example.com </p>
          <p id='tele'> telefon: 12345678</p>
          <p id='adresse'> adresse: boligvei 32</p>
          <p id='sosial'> sosiale medier: VTHBrukerstøtte </p>
        </div>
      </footer>
    </div>
  );
}

export default App;