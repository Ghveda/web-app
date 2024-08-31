'use client';
import { useState } from 'react';
import Register from './register';
import Login from './login';
import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';

export default function AuthModal() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  return (
    <div>
      <span
        role="button"
        onClick={() => setShowLoginModal(true)}
        className="max-h-[10px] rounded-[5px] border-[1px] border-white p-[5px] font-bold text-white"
      >
        {t('auth.sign-in')}
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
