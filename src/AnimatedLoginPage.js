import React, { useState } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import { useNavigate } from 'react-router-dom';
import styles from './AnimatedLoginPage.module.css';

const AnimatedLoginPage = () => {
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setHidden(true);
    // Perform any additional actions here, such as authentication
  };

  const handleAnimationComplete = () => {
    setHidden(false);
    navigate('/new-component');
  };

  return (
    <div className={styles.container}>
      <div className={styles.square}>
        <i style={{ '--clr': '#0078ff' }}></i>
        <i style={{ '--clr': '#0078ff' }}></i>
        <i style={{ '--clr': '#0078ff' }}></i>
        <div className={styles.login}>
          <div className={styles.inputBx}>
            <div className={styles.buttonContainer}>
              <ParticleEffectButton
                color="#0078ff"
                hidden={hidden}
                onComplete={handleAnimationComplete}
              >
                <button onClick={handleClick}> Meet Ava </button>
              </ParticleEffectButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLoginPage;
