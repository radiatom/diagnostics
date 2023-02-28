// const serverData={
//       1.1:{
//             linkNumber: 1.1,
//             problem:"test text",
//             testText: 'Стартер постійно провертає мотор?',
//             linkNumberYes: 6.5,
//             linkNumberNo: 1.2,
//             img: null,
//             video: null,
//       }

// }
// console.log(serverData)
// const mas=[]
// mas.push(0)
// mas.push(12)
// console.log(mas)
const resaultDiagnostics = {
      1.0: {
            text: 'Cтартер працює, двигун ніколи не обертається або інколи не обертається',
            solution: false,
      },
      1.1: {
            text: 'Cтартер завжди провертає двигун без зупинок.',
            solution: false,
      },
      1.2: {
            text: 'Стартер провертає двигун на декілька обертів ,а потім починає крутитись в холосту.',
            solution: false,
      },
      1.3: {
            text: 'Стартер працює,але мотор не крутиться.',
            solution: true,
      },
      1.4: {
            text: 'Під час роботи стартера чути шум.',
            solution: false,
      },
      1.5: {
            text: 'На бендиксі пошкоджені зуби, його потрібно заміннити (якщо вам шкода грошей, або немає запчастин, і ви впевнені що муфта тримає навантаження ,і проблема лише в поганих зубах, просто загостріть їх, але ви повинні знати який мають вигляд цілі зуби) .',
            solution: false,
      },
      1.6: {
            text: 'Пошкоджені зуби на вінцю маховика, потрібно замінити вінець маховика, або весь маховик з вінцем разом.',
            solution: false,
      },
      1.7: {
            text: 'Вінець відділився від маховика. Таке буває дуууже рідко. Потрібно замінити маховик з вінцем разом, або приварити вінець до маховика.',
            solution: false,
      },
      1.8: {
            text: 'Є підозра що бендикс дуже зношений, його потрібно замінити щоб перестрахуватись.',
            solution: false,
      },
      1.9: {
            text: 'Бендикс заклинив, можливо в нього попала вода. Потрібно його замінити.',
            solution: true,
      },
      2.0: {
            text: 'У втулках вісь має великий люфт, втулки потрібно замінити.',
            solution: false,
      },
      2.1: {
            text: 'Підшипники пошкодженні, їх потрібно замінити.',
            solution: false,
      },
      2.2: {
            text: 'На якорі є сліди тертя об статор,якщо ви ще не перевірили втулки і підшипники то зробіть це.',
            solution: false,
      },
      2.3: {
            text: 'На якорі пошкодженна ізоляція, через це стартер може повільно працювати, може працювати з перебоями, або не працювати взагалі. Якір потрібно замінити.',
            solution: false,
      },
      2.4: {
            text: 'Редуктор пошкоджений, його потрібно замінити.',
            solution: false,
      },
      2.5: {
            text: 'Потрібно вичистити кожеш зуб редуктора, поки вал не буде крутитись легко без ривків. Якщо не вдається замінити редуктор.',
            solution: true,
      },

}
// const finishResaultDiagnostic = Object.entries(resaultDiagnostics).map(([key, value]) => {
//       let arr = []
//       if (value.solution === true) {
//             arr.push(value.text)
//       }
//       return arr
// });
// console.log(finishResaultDiagnostic)

// const finishResaultDiagnostic = Object.entries(resaultDiagnostics).map(([key, value]) => {
//       return value.solution? value.text:undefined
// }).filter(el=>el!==undefined)
// console.log(finishResaultDiagnostic);

// const getResaultDiagnosticData = () => (dispatch) => {
//       console.log(resaultDiagnostic)

//       const resaultDiagnosticData = resaultDiagnostic
//       console.log(resaultDiagnosticData)
//       const finishResaultDiagnostic = Object.entries(resaultDiagnosticData).map(([key, value]) => {
//             let arr = []
//             if (value.resault === true) {
//                   arr.push(value.text)
//             }
//             return arr
//       });
//       console.log(finishResaultDiagnostic)
// }
// getResaultDiagnosticData()
// console.log('end')
// const getResaultDiagnosticData = () => {
//       const finishResaultDiagnostic = {
//             1.0: {
//                   // це заглушка
//                   text: '',
//                   solution: false,
//             },
//             1.1: {
//                   text: '',
//                   solution: false,
//             },
//             1.2: {
//                   text: 'Якщо пошкоджені магніти - замінити цілий статор, якщо пошкоджена ізоляція катушки - розібрати статор, відновити ізоляцію (є ризик, що стане гірше навіть якщо ізоляцію відновити. Після розборки статора змінює форму і через це починає сильно чиркати якорь.) рекомендовано замінити статор повністю.',
//                   solution: false,
//             },
//             1.3: {
//                   text: 'Бендикс не працює як муфта, він пропускає в обидві сторони. Його потрібно замінити.',
//                   solution: false,
//             }
//       }
//       sessionStorage.setItem('res', JSON.stringify(finishResaultDiagnostic));
//       const res = JSON.parse(sessionStorage.getItem('res'))
//       console.log(res)
// }
// getResaultDiagnosticData()
// const resault=['dfs']
// resault[0] === undefined||resault[0] === '' ?
//       console.log('yes')
//       :
//       console.log('no')