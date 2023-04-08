import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import getStatesFromLocalStorage from '../util/getStatesFromLocalStorage';
import { UserFormInfo } from '../components/UserForm/UserForm.model';
import { PokemonInfo } from '../components/Pokemon/Pokemon.model';

export default function Review() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [success, setSuccess] = useState() as any;
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    phoneNumber,
    postalCode,
    province,
    street,
    city,
  } = getStatesFromLocalStorage('userInformation') as UserFormInfo;
  const address = `${street}, ${city}, ${province} ${postalCode}`;
  const { name, image } = getStatesFromLocalStorage(
    'favoritePokemon'
  ) as PokemonInfo;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    // mock API
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('test');
      }, 3000);
    });

    promise
      .then(() => {
        setSuccess(
          'Your information has been successfully uploaded. Redirecting to a new registration... :)'
        );
        setTimeout(() => {
          setSuccess(null);
          setIsConfirmed(false);
        }, 6000);
      })
      .finally(() => {
        setIsUploading(true);
        setTimeout(() => {
          localStorage.clear();
          navigate('/');
        }, 5000);
      });
  };

  return (
    <form className="overflow-hidden min-h-[700px]">
      {success && (
        <p className="bg-orange-300 flex justify-center">✅ {success}</p>
      )}
      <div className="overflow-hidden text-gray-600">
        <section className="min-h-screen p-6 bg-gray-100 ">
          <div className="container max-w-screen-lg mx-auto bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <article>
              <h3 className="font-extrabold text-xl">Review</h3>
              <p className="text-gray-500 mb-6">
                Please review and confirm to submit.
              </p>
            </article>
            <div className="p-5 text-gray-600 border border-gray-700">
              <article>
                <h3 className="bg-blue-300 font-semibold text-xl">
                  Personal Information
                </h3>
              </article>

              <div className="mt-1">
                <span className="text-gray-500 mb-6">
                  <span className="font-semibold">First name: </span>
                  {firstName}
                </span>
              </div>

              <div>
                <span className="text-gray-500 mb-6">
                  <span className="font-semibold">Last name: </span>
                  {lastName}
                </span>
              </div>

              <div>
                <span className="text-gray-500 mb-6">
                  <span className="font-semibold">Phone: </span>
                  {phoneNumber}
                </span>
              </div>

              <div>
                <span className="text-gray-500 mb-6">
                  <span className="font-semibold">Address: </span>
                  {address}
                </span>
              </div>

              <article>
                <h3 className="bg-yellow-300 font-semibold text-xl mt-3">
                  Favorite Pokemon
                </h3>
              </article>

              <div className="mt-1">
                <span className="text-gray-500 mb-6">
                  <span className="font-semibold">Pokemon name: </span>
                  {name}
                </span>

                <img src={image} alt={name} />
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <input
                className="w-4"
                type="checkbox"
                id="agree"
                checked={isConfirmed}
                onClick={() => setIsConfirmed(!isConfirmed)}
              />
              <label className="ml-1" htmlFor="agree">
                Check here to indicate that you have read and agree to submit
                your information to our service.
              </label>
            </div>
          </div>
          <div className="flex justify-end m-5">
            <Button
              text={'Edit Personal Info'}
              customStyle={
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-red-700 disabled:opacity-30'
              }
              disabled={isConfirmed}
              onClick={() => navigate('/')}
            />

            <Button
              text={'Edit Favorite Pokemon'}
              customStyle={
                'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 disabled:bg-red-700 disabled:opacity-30'
              }
              disabled={isConfirmed}
              onClick={() => navigate('/favorite-pokemon')}
            />

            <Button
              customStyle={
                !isConfirmed
                  ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-red-700 ml-2 disabled:opacity-30'
                  : 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
              }
              disabled={!isConfirmed}
              text={isUploading ? 'isUploading...' : 'Confirm & Submit'}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </form>
  );
}
