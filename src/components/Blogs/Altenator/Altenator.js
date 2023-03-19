import React from 'react';
import img1 from "./../../../img/altBlog.png"
import img2 from "./../../../img/altenaorsBlog.png"
import img3 from "./../../../img/ina.jpg"
import s from "./Altenator.module.css"

const Altenator = () => {
      return (
            <div className={s.Altenator}>
                  <h2>Будова генератора</h2>
                  <img src={img1} alt="altenator structure будова генератора" />
                  <img src={img2} alt="altenator генератор" />
                  <h3>Генератор</h3>
                  <p>Генератор — це основне джерело живлення електрообладнання й електросистем автомобіля. Працює при обертанні, яке передається через приводний ремінь від колінчастого вала двигуна.Для постійної роботи генератора необхідно завжди стежити за натягом ременя привода, який визначається прогином ременя в певному місці при додаванні до нього встановленого зусилля.Під час роботи генератора акумуляторна батарея заряджається до необхідного рівня.</p>
                  <h3>Шків (обгінна муфта)</h3>
                  <img src={img3} alt="обгонна муфта шків" />
                  <p>Обгінна муфта приводного ремня — це храповий механізм, завдяки якому тяга передається при обертанні тільки в один бік. Це сильно збільшує ресурс нагяжного механізму, роликів, приводного ремня, підшипників генератора.</p>
                  <h3>Перевірка генератора</h3>
                  <p> Деякі автомобілісти використовують небезпечний метод перевірки роботи генератора способом відключення негативної клеми від акумуляторної батареї. На автомобілі з карбюраторним двигуном такий фокус робити можна, тільки обережно. А от на машинах із сучасною системою керування двигуном (з ЕБК) це може призвести до виходу з ладу електронного блока керування та інших елементів електросистеми автомобіля. Так робити не варто! Напруга перевіряється тестером на акумуляторі. Якщо акумулятор свинцевий, вона мусить бути в межах 13.9-14.9 вольт. Перевіряють напругу на всіх можливиих умовах споживанння та на всіх кількостях обертів колінчастого валу.</p>
                  <h3>Несправності генератора</h3>
                  <ul>
                        Механічні:
                        <li>зношення шківа генератора, заклинювання, ослаблення (пропускання в обидві сторони) .</li>
                        <li>корозія статора;</li>
                        <li>знос вугільних щіток;</li>
                        <li>знос колекторних кілець (колектора);</li>
                        <li>заклинювання/знос підшипників генератора;</li>
                        <li>механічне пошкодження корпусу генератора.</li>
                        Електричні:
                        <li>замикання та/або обрив обмотки статора;</li>
                        <li>замикання та/або обрив обмотки ротора;</li>
                        <li>вихід з ладу реле регулятора;</li>
                        <li>пробої або обрив діодів діодного моста.</li>
                  </ul>
            </div>
      );
}

export default Altenator;