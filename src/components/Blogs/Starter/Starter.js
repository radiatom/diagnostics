import React from 'react';
import img1 from "./../../../img/stater-structure.png"
import img2 from "./../../../img/fotoBlog1.jpg"
import img3 from "./../../../img/startersBlog.jpg"
import s from "./Starter.module.css"

const Starter = () => {
      return (
            <div className={s.starter}>
                  <h2>Будова стартера</h2>
                  <img src={img1} alt="stater structure" />
                  <img src={img3} alt="starters" />
                  <h3>Принцип роботи стартера</h3>
                  <p>Після того, як ви вставили ключ у замок запалювання і провернули його в положення пуску, на вивід влягуючого прийшов сигнал (+), сердечник перемістився всередину обмотки втягуючого і, тягнучи за собою вилку, змістив бендикс стартера до зачеплення із зубчастим вінцем маховика. Далі сердечник втягувального реле пересуватиметься, поки не відбудеться з’єднання контактів виводів в середині втягуючого (+від АКБ та виводом шини). Тільки-но контакти з’єднаються, через них потече електричний струм від акумуляторної батареї до щіток(якщо в статор з катушкою-через катушку до щіток) і до контактного кільця, якір стартера стане обертатися, передаючи своє обертання через шестерню на маховик і колінвал відповідно. Після того, як двигун запуститься, ви відпустите ключ і він повернеться з нефіксованого положення пуску в положення запалювання. У цей момент вимкнеться живлення до обмотки втягувального реле — і сердечник під впливом поворотної пружини повернеться в початкове положення. Також у початкове положення повернеться і бендикс стартера.</p>
                  <h3>Бендикс (обгінна муфта)</h3>
                  <img src={img2} alt="бендикс" />
                  <p>Обгінна муфта — це храповий механізм, завдяки якому тяга передається при обертанні тільки в один бік. Це захист стартера від забудькуватості і недосвідченості водія. Річ у тім, що на початку роботи двигун набирає обертів холостого ходу, які можуть досягати 800—1000 об/хв. Якщо забути вимкнути стартер, після початку роботи двигуна ті самі 800 об/хв через маховик почнуть передаватися назад на стартер, що призведе до його неминучого пошкодження. Обгінна муфта попередить такі плачевні наслідки.</p>
                  <h3>Профілактика поломок</h3>
                  <ul>
                        Для запобігання поломки стартера потрібно дотримуватися наступних рекомендацій:
                        <li>Не затримуйте ключ замка в активному стані довше 3-4 секунд.</li>
                        <li>Вмикайте стартер не більше ніж на 10 сек. Якщо двигун автомобіля не запустився, секунд на 30 залиште в спокої стартер, так як він охолоджується дуже повільно. Після 2-3 безуспішних пусків двигуна зробіть приблизно 4-5 хвилинну паузу;</li>
                        <li>Після пуску двигуна вимикайте стартер. Якщо цього не зробити вчасно, то 2-3 секунди просто знищать вузол. Адже під час пуску двигуна якір стартера має частоту обертання 1500 оборотів / хвилину, а після пуску якір почне обертатися з більшою у багато разів швидкістю (якщо Бендикс зачеплений з маховиком двигуна). Збільшення оборотів спричинить збільшення зносу всіх деталей стартера, що спричинить повне руйнування вузла. Слідкуйте за цим моментом, не допускайте такого безглуздого обертання. До слова, цей же ефект притаманний при несправності замка запалювання.</li>
                        <li>Слідкуйте за контактами в клемах акумуляторної батареї. Частенько буває, що клеми окислюються, і стартер не приймає потрібний йому струм, внаслідок чого не розвиває достатній крутний момент. Двигун не запускається, і ми замість елементарного очищення клем несемо вузол в ремонт. Звичайно, майстри пояснять причину, але час і гроші будуть витрачені даремно</li>
                        <li>Не рухайтеся автомобілем за допомогою стартера. Варто врахувати, що чим менше обертів, тим більше струму надходить на обмотки стартера. Якщо ви поставите машину на ручне гальмо, ввімкніть передачу, а потім включите стартер, то через 30 секунд такого божевілля обмотки вузла просто згорять, та й ще акумулятор прийде в непридатність.</li>
                        <li>Не здійснюють розбирання і збирання стартера при відсутності досвіду в цій справі.</li>
                  </ul>
            </div>
      );
}

export default Starter;
