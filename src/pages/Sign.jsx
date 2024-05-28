import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useMediaQuery } from 'react-responsive';
import Buttons from '../components/Buttons';
import "../CSS/Sign.css" 
import MainHead from "../components/MainHead"

const Sign = () => {
  const signatureCanvas = useRef();

  const clearSignature = () => {
    signatureCanvas.current.clear();
  };

  const downloadSignature = () => {
    const dataURL = signatureCanvas.current.toDataURL();
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'signature.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handlePenColorChange = (e) => { // Renamed from penColor to handlePenColorChange
    setPenColor(e.target.value);
  };

  const handleCanvasColorChange = (e) => { // Renamed from handleColorChange to handleCanvasColorChange
    setCanvasColor(e.target.value);
  };

  const handlePenThicknessChange = (e) => { // Renamed from penTHICKNESS to handlePenThicknessChange
    setPenThickness(parseInt(e.target.value));
  };

  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [penColor, setPenColor] = useState("black");
  const [canvasColor, setCanvasColor] = useState('white');
  const [penThickness, setPenThickness] = useState(5);


  const isMobile = useMediaQuery({ maxWidth: 540 });
  const dynamicCanvasWidth = isMobile ? window.innerWidth : 850;
  const dynamicCanvasHeight = isMobile ? window.innerHeight : 550;

  return (
    <div>
       
      <div className="flex flex-col items-center">
        <div className='flex justify-center gap-10 font-semibold'>
          <div className="flex items-center mb-4 text-white">
            <input
              type="color"
              value={canvasColor}
              id="colorInput"
              placeholder="Canvas Color"
              onChange={handleCanvasColorChange}
              className="w-12 h-12 mr-2"
            />
            Canvas Color
          </div>
          <div className="flex items-center mb-4 text-white">
            <input
              type="color"
              value={penColor}
              onChange={handlePenColorChange}
              className="w-12 h-12 mr-2"
            />
            Pen Color
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="10"
              value={penThickness}
              onChange={handlePenThicknessChange}
              className="w-32"
            />
          </div>
        </div>
        <SignatureCanvas
          ref={signatureCanvas}
          penColor={penColor}
          canvasProps={{
            width: dynamicCanvasWidth,
            height: dynamicCanvasHeight,
            className: 'signature-canvas',
            minWidth: 0.5,
            maxWidth: 3,
            style: { backgroundColor: canvasColor },
          }}
          minWidth={penThickness}
        />
        <div className="flex justify-center m-5 gap-10">
          <Buttons onClick={clearSignature} text="Clear" />
          <Buttons onClick={downloadSignature} text="Download" />
        </div>
      </div>
    </div>
  );
};

export default Sign;
