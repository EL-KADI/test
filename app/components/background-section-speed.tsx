import React from 'react';

const BackgroundSectionSpeed = () => {
  return (
    <div className="relative h-screen">
      <img
        className="absolute top-0 right-0 w-[250px]"
        alt="Background Image"
        src="data:image/svg+xml,%3csvg%20width='398'%20height='897'%20viewBox='0%200%20398%20897'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='-36'%20y='448.368'%20width='685'%20height='685'%20rx='88'%20transform='rotate(-45%20-36%20448.368)'%20fill='%23092346'/%3e%3c/svg%3e"
      />
      <img
        className="absolute top-0 left-0 w-[250px]"
        alt="Background Image"
        src="data:image/svg+xml,%3csvg%20width='399'%20height='897'%20viewBox='0%200%20399%20897'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='-534'%20y='448.368'%20width='685'%20height='685'%20rx='88'%20transform='rotate(-45%20-534%20448.368)'%20fill='%23092346'/%3e%3c/svg%3e"
      />
      <img
        className="absolute left-1/2 transform top-[10%] -translate-x-1/2"
        alt="Background Image"
        src="/center-bg.svg"
      />
    </div>
  );
};

export default BackgroundSectionSpeed;