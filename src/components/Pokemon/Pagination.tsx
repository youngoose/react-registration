import React from 'react';

export default function Pagination({
  goToPrevPage,
  goToNextPage,
}: {
  goToPrevPage: any;
  goToNextPage: any;
}) {
  return (
    <>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </>
  );
}
