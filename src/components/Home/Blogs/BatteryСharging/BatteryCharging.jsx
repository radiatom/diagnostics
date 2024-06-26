import React from "react";
import "./BatteryCharging.scss";
import { useDispatch, useSelector } from "react-redux";
import { blogFotosSelector } from "../../../../selectors/selectors";
import { useEffect } from "react";
import { setChFotos } from "../reducerBlogs";

const BatteryCharging = () => {
    const fotosData = useSelector(blogFotosSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setChFotos());
        window.scrollTo(0, 0)
    }, [fotosData]);
    const link = (id) => {
        return fotosData.find((el) => el.id === id) === undefined
            ? ""
            : fotosData.find((el) => el.id === id).link;
        // перевірка, бо якщо в state було лише два обєкта а для завантаження сторінки треба 3 то буде помилка undefined обєкта якого нема, в такому випадку тимчасово даємо йому значення "" поки не завантажиться працюча ссилка
    };
    return (
        <div className="container">
            <div className="batteryCharging">
                <h2 className="batteryCharging__title title" tabIndex='0'>
                    Корисні поради: як правильно заряджати автомобільний
                    акумулятор
                </h2>
                <p>
                    Коли треба заряджати автомобільний акумулятор? Знімати
                    батарею для зарядки або не треба? При якій температурі це
                    робити? Автомобілісти часто ставлять питання, що стосуються
                    особливостей зарядки стартерних акумуляторних батарей.
                    Пов'язано це з тим, що не кожен автомобіліст добре
                    розбирається в електриці, так і на ринку зараз пропонують
                    батареї самих різних типів, обслуговування і зарядка яких
                    мають свої особливості.
                </p>
                <p>
                    Якщо розглядати основні типи АКБ, то всі батареї, що
                    використовуються на транспорті, можна умовно розділити на
                    три великі групи: потребують обслуговування, мало
                    обслуговувані, необслуговувані. Найпершими з'явилися ті, що
                    потребують обслуговування, в них використовувалися решітки,
                    виготовлені зі свинцевого сплаву з додаванням сурми,
                    найсучасніші ті, що повністю не обслуговуються, в них вже
                    використовуються свинцеві решітки з максимально чистого
                    сплаву без сторонніх домішок. Зверніть увагу, що "не
                    потребує обслуговування" в цьому випадку — це відсутність
                    необхідності доливання води в батарею протягом усього
                    терміну її експлуатації. Причому, всупереч поширеній серед
                    автомобілістів помилці, особливої ​​різниці в процесі заряду
                    ці три типи батарей не мають. Давайте докладніше розглянемо
                    кілька актуальних питань, які українські водії ставлять
                    досить часто, і дамо на них відповіді.
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Потрібно заряджати автомобільний акумулятор чи ні?
                </h3>
                <p>
                    Для оцінки поточного стану АКБ є простий спосіб. Для цього
                    потрібен вольтметр, за допомогою цього приладу вимірюється
                    напруга на акумуляторних клемах, відключати його від
                    бортової мережі транспортного засобу не треба. Якщо батарея
                    в хорошому робочому стані і заряджена, то напруга повинна
                    бути на рівні 12,6 — 12,7 В. Перед вимірами врахуйте, що має
                    пройти кілька годин після зупинки двигуна, в іншому випадку
                    показники в момент вимірювання можуть виявитися трохи
                    завищеними.
                </p>
                <p>
                    АКБ, що обслуговують та мало обслуговуються, мають на
                    верхній кришці спеціальні пробки, що дають доступ до
                    нутрощів батареї, через них можна перевірити такий показник,
                    як щільність електроліту. Тут вам знадобиться спеціальний
                    прилад — ареометр. В зарядженій батареї щільність повинна
                    становити 1,27 г/см³. Якщо щільність виявиться нижче, то
                    батарею слід підзарядити. Якщо щільність вище норми, то
                    швидше за все таке джерело живлення потребує доливу води.
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Як зараяджати акумулятор?
                </h3>
                <a href={link(1)} target="_blank" rel="noopener noreferrer"><img src={link(1)} alt="Зарядка акумулятора Battery charging" /></a>
                <p>
                    Для оптимальної зарядки найкраще підходить температура в
                    межах від 0 до +25°C. Якщо у вас зарядний пристрій розумний
                    (сам регулює силу струму та напругу), то вам не потрібно
                    слідкувати за зарядкою. Коли вам потрібно самим вибирати яку
                    силу струму виставити, дотримуйтесь наступних рекомендацій.
                    Для швидкої зарядки: підєднайте пристірй до акумулятора;
                    виставте силу струму так що напруга на акумуляторі була не
                    більша 14,8 вольт; в процесі заряду акумулятора напруга
                    змінюватиметься в більшу сторону, тому слідкуйте щоб напруга
                    на клешнях не піднімалась більше 14,8 вольт (зменьшуйте силу
                    струму); коли сила струпу буде в межах 2.5 - 5 ампер при
                    напрузі 14,8 вольт це означатиме, що акумулятор більше
                    заряду не споживає (ємність максимальна/ акумулятор
                    заряджений). Для повільної зарядки: підєднайте пристрій до
                    акмулятора; виставте 3 ампера струму; вимкніть зарядку коли
                    напруга на клешнях підніметься до 14,8 вольт.{" "}
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Зарядний пристрій проти генератора, який варіант зарядки
                    оптимальніший?
                </h3>
                <p>
                    В ідеальних умовах експлуатації акумулятора ніякий зарядний
                    пристрій не потрібен, бо він нормально зможе заряджатися і
                    відновлюватися від генератора. Фахівці вважають, що заряд
                    від генератора, який відбувається при постійній напрузі,
                    найкорисніший і найбезпечніший.
                </p>
                <p>
                    А ось зарядний пристрій необхідно мати для відновлення АКБ,
                    яка вже розряджена. Тут заряд ведеться при постійному
                    струмі. Це важливо для того, щоб уникнути википання і
                    перезарядження. Всі зарядні пристрої припиняють свою роботу,
                    коли напруга на акумуляторі досягає рівня 14,4 В. Деякі
                    прилади після цього переходять в режим зберігання, в якому
                    підзаряд здійснюється малими струмами. Такий режим часто не
                    дає отримати 100% зарядки.
                </p>
                <p>
                    Є ще одна важлива особливість при використанні зарядного
                    пристрою, він видає конкретний рівень струму, заданий
                    користувачем або конкретним алгоритмом самого приладу. А ось
                    в разі зарядки від генератора акумуляторна батарея вбирає в
                    себе тільки той струм, який потрібен. Саме тому заряд від
                    генератора краще сприймається АКБ. Однак не завжди цього
                    достатньо, якщо ви допустили сильний розряд акумулятора, то
                    відновити його без зарядного пристрою може бути складно.
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Чи можна заряджати АКБ в мороз?
                </h3>
                <p>
                    {" "}
                    Всі знають, з фізики, що чим нижче температура на вулиці,
                    тим гірше акумулятор відновлює свій заряд. Для оптимальної
                    зарядки найкраще підходить температура в межах від 0 до
                    +25°C. Тому дуже часто саме взимку автомобільні акумулятори
                    не встигають під час короткої їзди відновлюватися від
                    генератора. Якщо ваша батарея розрядилася, то заряджати її
                    на вулиці при мінусовій температурі не варто. Це буде
                    малоефективно і може навіть завдати шкоди. У такій ситуації
                    треба занести АКБ в опалювальне приміщення з температурою
                    повітря більше нуля. Потім треба дочекатися поки батарея
                    нагріється, тільки після цього можна приступати до зарядки.
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Чи потрібно знімати АКБ з автомобіля перед зарядкою?
                </h3>
                <p>
                    Ні, знімати АКБ не потрібно, це проста перестраховка. Хоча
                    теоретично під час підзарядки може спостерігатися активне
                    газовиділення, яке може стати причиною вибуху акумулятора.
                    Щоб не було проблем треба дотримуватися лише кількох правил:
                    не курити поблизу АКБ, що заряджається, і стежити за тим,
                    щоб на клемах не було короткого замикання.
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Як правильно заряджати батарею, якщо машина експлуатується
                    нечасто?
                </h3>
                <p>
                    Багато автомобілістів часто залишають свої транспортні
                    засоби на приколі та мало на них їздять. У таких ситуаціях
                    часто використовуються зарядні пристрої, які постійно
                    підживлюють АКБ малим струмом, таким чином підтримується
                    100-процентна зарядженість. Це не дуже корисно для батареї,
                    бо в таких умовах зростає швидкість корозії акумуляторної
                    решітки, що зменшує термін експлуатації АКБ. Експерти
                    рекомендують для машин, які стоять без руху понад 3 тижні,
                    заряджати акумулятор класичним способом — від генератора за
                    рахунок пуску двигуна або від зарядного пристрою. А перед
                    тим, як знову відправити машину на тривале зберігання, АКБ
                    треба зарядити на 100%, інакше може виникнути глибокий
                    розряд, що призведе до того, що машина просто перестане
                    заводитися. У найгіршому випадку акумулятор повністю вийде з
                    ладу і доведеться купувати новий. Під час зарядки
                    акумулятора, може виникати шікідливий, горючий газ, тому
                    уникайте іскроутворень та відкритого вогню. Це може
                    призвезти до вибуху батареї.
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Який рівень напруги говорить про хронічний недозаряд?
                </h3>
                <p>
                    При напрузі на клемах батареї нижче 12,3 В можуть
                    спостерігатися проблеми з пуском мотора, особливо в зимовий
                    період. І якщо акумулятор буде довго перебувати в подібному
                    стані, то для його відновлення доведеться витратити певний
                    час. Заряд потрібно буде проводити струмом не більше 1 А при
                    постійній напрузі. Потім поступово струм можна буде
                    збільшити. Насправді відновлення може бути не завжди
                    успішним, все буде залежати від стану конкретного джерела
                    живлення. Тому не запускайте і не збільшуйте проблему.
                    Рівень заряду АКБ треба перевіряти регулярно, особливо
                    восени напередодні зими.
                </p>
                <p>
                    Коли напруга впала нижче 10,5 В, це говорить про дуже
                    глибокий розряд акумулятора. Якщо розряд стався швидко, то
                    відновлення можна проводити в стандартному режимі,
                    використовуючи ЗП і струм на рівні 10% від номінальної
                    ємності акумулятора. На заряд буде потрібно близько 10-12
                    годин. Якщо ж АКБ вмирала повільно через хронічний
                    недозаряд, то відновлювати треба малими струмами.
                    Аналогічного попереднього розглянутому варіанту.
                </p>
                <h3 className="batteryCharging__title title" tabIndex='0'>
                    Чи можна "прикурювати" акумулятор від іншого автомобіля?
                </h3>
                <a href={link(2)} target="_blank" rel="noopener noreferrer">
                    <img
                        src={link(2)}
                        alt="Прикурювання акумулятора Battery ignition"
                    />
                </a>
                <p>
                    "Прикурювання" — дуже популярний метод пуску двигуна, якщо
                    сів акумулятор, яким дуже часто користуються наші
                    автомобілісти. Хоча існує думка, що це досить небезпечно.
                    Однак можна точно стверджувати, що "прикурювання" буде
                    безпечним при дотриманні простих правил: позитивні клеми
                    донора та потерпілого треба з'єднати між собою, при цьому
                    негативно заряджений вихід донора треба закріпити на кузові
                    автомобіля або на двиуні, який ви намагаєтеся завести. Після
                    підєднання проводів донорм запущеним двигуном мусить
                    заряджати акумулятор потерпілого 15хвилин. Наступний крок:
                    донор глушить двигун, а потерпілий пробує запустити свій
                    двигун, якщо не вийшло, повторити попередній крок але з
                    більшим часом очікування. Не рекомендують потерпілого
                    запускати коли донор має запущений двигун, це може призвезти
                    до виходу з ладу генератора донора. У крайньому випадку
                    донор мусить підняти оберти колінчастого вала до 4-5тис
                    обертів.{" "}
                </p>
                <p>
                    Джерело статті:{" "}
                    <a href="https://130.com.ua/uk/sovety-kak-pravilno-zarjazhat-avtomobilnyj-akkumuljator/" target='new-blank'>
                        130.com.ua
                    </a>
                </p>
            </div>
        </div>
    );
};

export default BatteryCharging;
