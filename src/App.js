import React, {useState} from 'react';
import QRCode from 'qrcode';
import './App.css';


function App() { 
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }
  return (
    <div  className="big-content">
      <h1 className="tilteofdiv">Generate your Qr code</h1>
      <div className="form-control">
          <input type="text" placeholder="Enter you text message" onChange={(e) => setText(e.target.value)}></input>
          <button onClick={() => generateQrCode()}>generate</button>
      </div>
      <div className="qrdisplay">
         {imageUrl ? (
                <a href={imageUrl} download>
                <img src={imageUrl} alt="img"/>
                </a>) : null}
      </div>
    </div>
  )
}
export default App;
