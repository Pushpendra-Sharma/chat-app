'use client';
import React, { useCallback, useState } from 'react';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');

  const [formData, setFormData] = useState({});

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') setVariant('REGISTER');
    else setVariant('LOGIN');
  }, [variant]);

  return <div>AuthForm</div>;
};

export default AuthForm;
