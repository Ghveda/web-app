'use client';
import { useState } from 'react';
import Register from './register';
import Login from './login';

export default function AuthModal() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div>
      <span
        role="button"
        onClick={() => setShowLoginModal(true)}
        className="max-h-[10px] rounded-[5px] border-[1px] border-white p-[5px] font-bold text-white"
      >
        Sign in | up
      </span>
      <Login
        showModal={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        setShowRegisterModal={() => setShowRegisterModal(true)}
      />
      <Register
        showModal={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        setShowLoginModal={() => setShowLoginModal(true)}
      />
    </div>
  );
}
