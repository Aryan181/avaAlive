import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'; // Import the CSS file

// ScriptNewSection component (placeholder code)
const ScriptNewSection = () => {
  useEffect(() => {
    // Place the JavaScript code from scriptNewSection.js here
    console.log('ScriptNewSection is running');
  }, []);

  return null; // Render nothing, but run the script
};

// Script component (placeholder code)
const Script = () => {
  useEffect(() => {
    const loaderBtn = document.querySelector('.loader-btn');
const statusMessage = document.getElementById('status-message');
const typewriter = document.querySelector('.typewriter');

let typeTimer;
//Try learning more about linear regression next!
let typedText = "Recent work loaded into digital playground!\nScroll down to view";
let typedIndex = 0;

function typeWriterEffect() {
  if (typedIndex < typedText.length) {
    typewriter.textContent += typedText.charAt(typedIndex);
    typedIndex++;
    typeTimer = setTimeout(typeWriterEffect, 100);
  } else {
    setTimeout(() => {
      typewriter.style.borderRight = typewriter.style.borderRight === '0.15em solid #c7eeff' ? 'transparent' : '0.15em solid #c7eeff';
      blinkCaret();
    }, 500);
  }
}

function blinkCaret() {
  setTimeout(() => {
    typewriter.style.borderRight = typewriter.style.borderRight === '0.15em solid #c7eeff' ? 'transparent' : '0.15em solid #c7eeff';
    blinkCaret();
  }, 500);
}

function clearTypeWriterEffect() {
  clearTimeout(typeTimer);
  typedIndex = 0;
  typewriter.textContent = '';
  typewriter.style.borderRight = 'transparent';
}
const typewriterContainer = document.querySelector('.typewriter-container');

loaderBtn.addEventListener('mouseenter', () => {
  typewriterContainer.style.display = 'block';
  typeWriterEffect();
});

loaderBtn.addEventListener('mouseleave', () => {
  typewriterContainer.style.display = 'none';
  clearTypeWriterEffect();
});


    console.log('Script is running');
  }, []);

  return null; // Render nothing, but run the script
};

// LiquidLoader component
const LiquidLoader = () => {
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;

      if (windowBottom >= docHeight) {
        history.push('/new-page');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [history]);

  return (
    <section>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15"></feGaussianBlur>
          <feColorMatrix values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 20 -10"></feColorMatrix>
        </filter>
      </svg>
      <div className="loader" id="loader" style={{ animationDuration: '1s' }}>
        <button className="loader-btn"></button>
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
        <span style={{ '--i': 4 }}></span>
        <span style={{ '--i': 5 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 7 }}></span>
        <span style={{ '--i': 8 }}></span>
        <span className="rotate" style={{ '--j': 0 }}></span>
        <span className="rotate" style={{ '--j': 1 }}></span>
        <span className="rotate" style={{ '--j': 2 }}></span>
        <span className="rotate" style={{ '--j': 3 }}></span>
        <span className="rotate" style={{ '--j': 4 }}></span>
      </div>
      <div className="status-message" id="status-message"></div>
      <div className="typewriter-container">
        <p className="typewriter"></p>
      </div>
      <section id="second-section"></section>
      <div>
      
      </div>
      <style>
        {`
          .status-message {
            margin-top: 20px;
          }
          .typewriter-container {
            margin-top: 50px;
          }
        `}
      </style>
      <ScriptNewSection /> {/* Include the ScriptNewSection component */}
      <Script /> {/* Include the Script component */}
    </section>
  );
};

export default LiquidLoader;
