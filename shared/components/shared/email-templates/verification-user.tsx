import React from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
  <div>
    <p>
      Potvrzovací kód: <h2>{code}</h2>
    </p>

    <p>
      <a href={`https://super-pizza-delta.vercel.app/auth/verify?code=${code}`}>Potvrzení registrace</a>
    </p>
  </div>
);
