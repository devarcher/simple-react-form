import React from 'react';

const Person = (props) => {

  const { personData } = props
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