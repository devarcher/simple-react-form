import React from 'react';

const Person = ( {personData} ) => {

  const { lastName, dob, age, gender } = personData;
  console.log(personData)

  return (
    <div>
      {personData.lastName}
      {personData.dob}
      {personData.age}
      {personData.gender}
    </div>
  )
}

export default Person;