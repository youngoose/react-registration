import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function PrevNextButton({
  onSuccessSubmit,
}: {
  onSuccessSubmit: any;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end m-5">
      <Button
        text={'< Previous Page'}
        customStyle={
          onSuccessSubmit
            ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-red-700 ml-2 disabled:opacity-30'
            : 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
        }
        disabled={onSuccessSubmit}
        onClick={() => navigate('/')}
      />

      <Button
        customStyle={
          !onSuccessSubmit
            ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-red-700 ml-2 disabled:opacity-30'
            : 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
        }
        disabled={!onSuccessSubmit}
        text={'Save & Review >'}
        onClick={() => navigate('/review')}
      />
    </div>
  );
}
