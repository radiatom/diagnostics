const serverData = {
      testCard:{
            1.1: {
                  linkNumber: 1.1,
                  problem: "Дайте відповідь на питання",
                  testText:
                  <div>
                        <h6>Коли працює стартер, двигун провертається без зупинок?</h6>
                        <div>Так-означає, що стартер завжди провертає двигун без зупинок.</div>
                        <div>Ні-означає, що коли стартер працює, двигун ніколи не обертається або інколи не обертається.</div>
                  </div> 
                  ,
                  linkNumberYes: 6.5,
                  linkNumberNo: 1.2,
                  solutionYes:1.1,
                  solutionNo:1.0,
                  img: null,
                  video: null,
            },
            1.2: {
                  linkNumber: 1.2,
                  problem: "Дайте відповідь на питання",
                  testText: 'Стартер провертає двигун на декілька обертів ,а потім починає крутитись в холосту, перестаючи проверти двигун?',
                  linkNumberYes: 1.2_13_1,
                  linkNumberNo: 1.2_13_0,
                  solutionYes:1.2,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            1.2_13_1: {
                  linkNumber: `1.2_13_1${' Yes'}`,
                  problem: "Дайте відповідь на питання",
                  testText: 'Чути як стартер працює,але мотор не крутиться?',
                  linkNumberYes: 1.4,
                  linkNumberNo: 1.2,
                  solutionYes:1.3,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            1.2_13_0: {
                  linkNumber: `1.2_13_0${' No'}`,
                  problem: "Дайте відповідь на питання",
                  testText: 'Чути як стартер працює,але мотор не крутиться?',
                  linkNumberYes: 1.4,
                  linkNumberNo: 1.3_66_1,
                  solutionYes:1.3,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            1.3_66_1:{
                  linkNumber: `1.3_66_1${' No'}`,
                  problem: "Щось не так",
                  testText: 'Ви дали дві різні відповіді на одне питання, можливо ви помились або вам ця діагностика не підходить.',
                  linkNumberYes: 1.1,
                  linkNumberNo: 1.1,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            1.4: {
                  linkNumber: 1.4,
                  problem: "Дайте відповідь на питання",
                  testText: 'Під час роботи стартера чути голосний гуркіт, скрегіт?',
                  linkNumberYes: 6.7,
                  linkNumberNo: 6.7,
                  solutionYes:1.4,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            1.5: {
                  linkNumber: 1.5,
                  problem: "Дайте відповідь на питання",
                  testText: 'Зуби на стартері пошкодженні?',
                  linkNumberYes: 1.9,
                  linkNumberNo: 1.9,
                  solutionYes:1.5,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            1.7: {
                  linkNumber: 1.7,
                  problem: "Дайте відповідь на питання",
                  testText: 'Вінець рухається окремо від маховика?',
                  linkNumberYes: 2.0,
                  linkNumberNo: 2.0,
                  solutionYes:1.7,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            1.9: {
                  linkNumber: 1.9,
                  problem: "Дайте відповідь на питання",
                  testText: "Потрібно перевірити чи пошкоджені зуби на вінцю маховика. Поставте мітку на маховику, прокручуйте колнчастий вал та дивіться на зуби на вінцю маховика. Прокручуйте колінчастий вал поки зробите повний оберт. Зуби на вінцю маховика пошкодженні?",
                  linkNumberYes: 1.7,
                  linkNumberNo: 1.7,
                  solutionYes:1.6,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            2.0: {
                  linkNumber: 2.0,
                  problem: "Дайте відповідь на питання",
                  testText: 'Візьміть стартер в руки, пробуйте прокрутити бендикс, в один напрямок він мусить крутити з собою якір(але щоб це зробити потрібна велика сила, тому якщо він не провертається це теж показник ,що все добре) ,а в інший напрямок мусить крутитись лише сам бендикс(обовязково мусить крутись з легким супротивом). У вашому випадку бендикс крутисться в один напрямок дуже легко, без легкого суротиву?',
                  linkNumberYes: 6.9,
                  linkNumberNo: 2.1,
                  solutionYes:1.8,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            2.1: {
                  linkNumber: 2.1,
                  problem: "Дайте відповідь на питання",
                  testText: 'Бендикс не працює як муфта, він заблокований в обидві строни, в жодну з сторін не провертається?',
                  linkNumberYes: 6.9,
                  linkNumberNo: 6.9,
                  solutionYes:1.9,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            6.5: {
                  linkNumber: 6.5,
                  problem: "Дайте відповідь на питання",
                  testText: 'Під час роботи стартера чути шум, жужання, скрегіт, буксування?',
                  linkNumberYes: 6.7,
                  linkNumberNo: 6.6,
                  solutionYes:1.4,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            6.6: {
                  linkNumber: 6.6,
                  problem: "Проблем не виявленно",
                  testText: 'Можливо у вас нема проблем в даний час, або ви просто не ту діагностику провели.',
                  linkNumberYes: 1.1,
                  linkNumberNo: 1.1,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            6.7: {
                  linkNumber: 6.7,
                  problem: "Дайте відповідь на питання",
                  testText: 'Щоб вияснити що у вас вийшло з ладу потрібно демонтувати стартер. Вам до снаги така задача?',
                  linkNumberYes: 6.8,
                  linkNumberNo: 7.6,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            6.8: {
                  linkNumber: 6.8,
                  problem: "Потрібно зловити момент коли стартер шумить або не провертає двигун, і тоді його демонтувати.",
                  testText: '',
                  linkNumberYes: 1.5,
                  linkNumberNo: 1.5,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            6.9: {
                  linkNumber: 6.9,
                  problem: "Дайте відповідь на питання",
                  testText: 'Щоб вияснити ,що у вас вийшло з ладу потрібно розібрати стартер. Вам до снаги така задача?',
                  linkNumberYes: 7.2,
                  linkNumberNo: 7.6,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.0: {
                  linkNumber: 7.0,
                  problem: "Ось що ви вияснили:",
                  testText: '',
                  linkNumberYes: 7.0,
                  linkNumberNo: 7.0,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.1: {
                  linkNumber: 7.1,
                  problem: "Дайте відповідь на питання",
                  testText: 'Чи пошкодженна ізоляція на якорі?',
                  linkNumberYes: 7.4,
                  linkNumberNo: 7.4,
                  solutionYes:2.3,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.2: {
                  linkNumber: 7.2,
                  problem: "Дайте відповідь на питання",
                  testText: 'Вісь у втулках має великий люфт?',
                  linkNumberYes: 7.3,
                  linkNumberNo: 7.3,
                  solutionYes:2.0,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.3: {
                  linkNumber: 7.3,
                  problem: "Дайте відповідь на питання",
                  testText: 'Підшипники розвалилися, крутяться з ривками, шумлять?',
                  linkNumberYes: 7.7,
                  linkNumberNo: 7.7,
                  solutionYes:2.1,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.4: {
                  linkNumber: 7.4,
                  problem: "Дайте відповідь на питання",
                  testText: 'Вимийте редуктор від мастила. В ньому відсутні зуби, присутні тріщини, пошкодження?',
                  linkNumberYes: 7.0,
                  linkNumberNo: 7.5,
                  solutionYes:2.4,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.5: {
                  linkNumber: 7.5,
                  problem: "Дайте відповідь на питання",
                  testText: 'Вал в редукторі крутиться легко та без ривків?',
                  linkNumberYes: 7.0,
                  linkNumberNo: 7.0,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.6: {
                  linkNumber: 7.6,
                  problem: "Зверніться до нашого сервісу ####",
                  testText: 'Скажіть, що ваша проблема полягає в тому, що...',
                  linkNumberYes: 1.1,
                  linkNumberNo: 1.1,
                  solutionYes:null,
                  solutionNo:null,
                  img: null,
                  video: null,
            },
            7.7: {
                  linkNumber: 7.7,
                  problem: "Дайте відповідь на питання",
                  testText: 'Чи є на якорі сліди тертя об статор?',
                  linkNumberYes: 7.1,
                  linkNumberNo: 7.1,
                  solutionYes:null,
                  solutionNo:2.5,
                  img: null,
                  video: null,
            },
      },
      resaultDiagnostic:{
            // 0.9:{
            //       text:'Test',
            //       solution: true,
            // },
            1.0:{
                  text:'Cтартер працює, двигун ніколи не обертається або інколи не обертається',
                  solution: false,
            },
            1.1:{
                  text:'Cтартер завжди провертає двигун без зупинок.',
                  solution: false,
            },
            1.2:{
                  text:'Стартер провертає двигун на декілька обертів ,а потім починає крутитись в холосту.',
                  solution: false,
            },
            1.3:{
                  text:'Стартер працює,але мотор не крутиться.',
                  solution: false,
            },
            1.4:{
                  text:'Під час роботи стартера чути шум.',
                  solution: false,
            },
            1.5:{
                  text:'На бендиксі пошкоджені зуби, його потрібно заміннити (якщо вам шкода грошей, або немає запчастин, і ви впевнені що муфта тримає навантаження ,і проблема лише в поганих зубах, просто загостріть їх, але ви повинні знати який мають вигляд цілі зуби) .',
                  solution: false,
            },
            1.6:{
                  text:'Пошкоджені зуби на вінцю маховика, потрібно замінити вінець маховика, або весь маховик з вінцем разом.',
                  solution: false,
            },
            1.7:{
                  text:'Вінець відділився від маховика. Таке буває дуууже рідко. Потрібно замінити маховик з вінцем разом, або приварити вінець до маховика.',
                  solution: false,
            },
            1.8:{
                  text:'Є підозра що бендикс дуже зношений, його потрібно замінити щоб перестрахуватись.',
                  solution: false,
            },
            1.9:{
                  text:'Бендикс заклинив, можливо в нього попала вода. Потрібно його замінити.',
                  solution: false,
            },
            2.0:{
                  text:'У втулках вісь має великий люфт, втулки потрібно замінити.',
                  solution: false,
            },
            2.1:{
                  text:'Підшипники пошкодженні, їх потрібно замінити.',
                  solution: false,
            },
            2.2:{
                  text:'На якорі є сліди тертя об статор,якщо ви ще не перевірили втулки і підшипники то зробіть це.',
                  solution: false,
            },
            2.3:{
                  text:'На якорі пошкодженна ізоляція, через це стартер може повільно працювати, може працювати з перебоями, або не працювати взагалі. Якір потрібно замінити.',
                  solution: false,
            },
            2.4:{
                  text:'Редуктор пошкоджений, його потрібно замінити.',
                  solution: false,
            },
            2.5:{
                  text:'Потрібно вичистити кожеш зуб редуктора, поки вал не буде крутитись легко без ривків. Якщо не вдається замінити редуктор.',
                  solution: false,
            },
      
      }
      
}
export default serverData
