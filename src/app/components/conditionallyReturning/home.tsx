import React from 'react';

export const HomePage = () => {
  const isLoggedIn = true; 

  return (
    <div style={{ marginTop: '30px' }}>
      <h1>Página Inicial</h1>
      {isLoggedIn ? (
        <WelcomeMessage />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

const WelcomeMessage = () => {
  return (
    <div>
      <p style={{color: "lime"}}>Bem-vindo ao nosso site! Você está logado.</p>
    </div>
  );
};

const LoginButton = () => {
  return (
    <div>
      <p>Você não está logado. Faça login para acessar nosso site.</p>
      <button style={{width: 50, height: 30}}>Login</button>
    </div>
  );
};
