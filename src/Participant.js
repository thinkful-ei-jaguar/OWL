import React from 'react';
import ReactDom from 'react-dom';

const participants = [
    {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
    {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
    },
    {
        id: 4,
        name: 'Frank Runciman',
        avatar:
            'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }
  ];


export default function Participant(props) {
  const participantArray = participants.map(person => {
    let inSesh = 'yes';    
    let onStageo = 'yes';
    if (person.inSession === false) {
            inSesh = 'no';
        }
    if (person.onStage === false) {
            onStageo = 'no';
        }
        return (
        <div>
        <img src ={person.avatar} alt='alt text' />
        <h3>Name: {person.name}</h3>
        <p>In session?: {inSesh}</p>
        <p>On Stage?: {onStageo}</p>
        </div>)
  })
  return (
    <div>
        {participantArray}
    </div>
  )
}

