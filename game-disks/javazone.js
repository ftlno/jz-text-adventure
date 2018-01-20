const javazone = {
    roomId: 'welcome',
    inventory: [],
    rooms: [
      {
        name:'Living room',
        id:'welcome',
        img: `
                 /$$$$$
                |__  $$
                   | $$  /$$$$$$  /$$    /$$ /$$$$$$  /$$$$$$$$  /$$$$$$  /$$$$$$$   /$$$$$$
                   | $$ |____  $$|  $$  /$$/|____  $$|____ /$$/ /$$__  $$| $$__  $$ /$$__  $$
              /$$  | $$  /$$$$$$$ \  $$/$$/  /$$$$$$$   /$$$$/ | $$  \ $$| $$  \ $$| $$$$$$$$
             | $$  | $$ /$$__  $$  \  $$$/  /$$__  $$  /$$__/  | $$  | $$| $$  | $$| $$_____/
             |  $$$$$$/|  $$$$$$$   \  $/  |  $$$$$$$ /$$$$$$$$|  $$$$$$/| $$  | $$|  $$$$$$$
              \______/  \_______/    \_/    \_______/|________/ \______/ |__/  |__/ \_______/
             `,
        desc:'The demogorgon is walking towards you. The door to the hallway is in front of you',
        items: [],
        exits: [
          { dir: 'door', id: 'hallway' }
        ]
      },
      {
        name:'Hallway',
        id:'hallway',
        img: `
                             ,###/,      ..
                             (###(/ .,/(##,
                             /%&&%(.###%##.
                   .*((##(. /#%&%%(%%###*
      .           .,#####%&&%%&&&&%%%%#/
     ,*.             //(###%#&&&%%&%%,
    ,,**.                /%%%#(%##%%%,.
    .((##/(*.         .*(&&%%%%#%%%%##(/
    .*/(###*           /((%%%%%%%%%((#%#(.
      ///(#*           /((#(#%&%%%%#(((##*.
         .(/        ./(((##%#**(/*/(####(/,
           /(*.    .,/((###(/***(/***/((((//
           ,((/*//(((((/,(#((////////((#((#(/
            (((((/*,.     *((/##(((///(/..##(*
             .,,          ./(##(#/((((//*. ./((,
        `,
        desc:'You are running into the hallway. But the demogorgon is still following you! There is a baseball bat lying on the ground',
        items: [{
          name: 'bat',
          desc: 'Nice looking baseball bat, looks dangerous!',
          isTakeable: true,
          use: ({println}) => {
            println("You hit the demogoron in the face. He died.")
          }}],
        exits: []
      }
    ]
};
