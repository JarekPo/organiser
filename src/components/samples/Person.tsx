import React from 'react';

interface PersonProps {
  name: string;
  surname: string;
  age: number;
}

const Person = (props: PersonProps) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Surname: {props.surname}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Person;
