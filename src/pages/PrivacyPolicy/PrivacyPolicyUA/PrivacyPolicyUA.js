import React, {useEffect, useState} from 'react';
import classes from "../PrivacPolicy.module.scss";
import Header from "../../../components-ui/Header/Header";
import Footer from "../../../components-ui/Footer/Footer";
import useAsyncEffect from "../../../utils/AsyncEffect";
import accountServiceInstance from "../../../service/AccountService";

const PrivacyPolicyUA = () => {
    const [user, setUser] = useState(null)
    useAsyncEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                const responce = accountServiceInstance.getUser();
                setUser(responce)
            } catch (e) {
                localStorage.removeItem('token')
            }
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className={classes.wrapper}>
            <Header user={user}/>
            <div className={classes.content}>
                <div className={classes.title}>Договір публічної оферти</div>

                <div className={classes.content_title}>
                    1. ЗАГАЛЬНІ ПОЛОЖЕННЯ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        Інтернет-магазин «Go to win» (суб’єкт господарювання –«GOW») (далі — Продавець) публікує цей
                        договір, що є публічним договором-офертою (далі — Договір) і має відповідну юридичну силу, про
                        продаж товарів, відображених на офіційному інтернет-сайті Продавця, на адресу як фізичних, так і
                        юридичних осіб (далі — Покупець).
                    </div>
                    <div className={classes.content_text}>
                        Відповідно до статей 633, 641, 642 Цивільного Кодексу України (далі — ЦКУ) та Правил продажу
                        товарів на замовлення та поза торговельними або офісними приміщеннями, затверджених наказом
                        Міністерства економіки України від 19.04.2007 №103, даний документ є офертою, а факт здійснення
                        покупцем замовлення в усній (по телефону або в магазині, офісі) або письмовій (через сайт або
                        електрону пошту) формі та отримання даного замовлення Продавцем є повним та безперечним
                        прийняттям даного публічного договору та інформації, викладеної на сайті.
                    </div>
                    <div className={classes.content_text}>
                        Використання послуг та купівля товарів, що надаються інтернет-магазином «Go to win», передбачає
                        згоду особи, що користується послугами або купує товар, з правилами, строками, обмеженнями та
                        іншими умовами співпраці, викладеними в даному документі.
                    </div>
                    <div className={classes.content_text}>
                        Використання послуг та купівля товарів, що надаються інтернет-магазином «Go to win», передбачає
                        згоду особи, що користується послугами або купує товар, з правилами, строками, обмеженнями та
                        іншими умовами співпраці, викладеними в даному документі.
                    </div>
                    <div className={classes.content_text}>
                        У даному Договорі, якщо зміст не потребує іншого, терміни слід тлумачити наступним чином:
                        «Оферта» — публічна пропозиція Продавця, адресована будь-якій фізичній та юридичній особі з
                        метою укласти договір купівлі-продажу на існуючих умовах, зазначених у Договорі.
                    </div>
                    <div className={classes.content_text}>
                        У даному Договорі, якщо зміст не потребує іншого, терміни слід тлумачити наступним чином:
                        «Оферта» — публічна пропозиція Продавця, адресована будь-якій фізичній та юридичній особі з
                        метою укласти договір купівлі-продажу на існуючих умовах, зазначених у Договорі.
                    </div>
                    <div className={classes.content_text}>
                        «Товар» — перелік найменувань асортименту, представлений на офіційному сайті Продавця, але
                        не обмежений тільки сайтом.
                    </div>
                    <div className={classes.content_text}>
                        «Інтернет-магазин» («Продавець») — компанія, що реалізує Товар, представлений (відображений) в
                        інтернет-магазині, але не обмежений тільки сайтом.
                    </div>

                    <div className={classes.content_text}>
                        «Покупець» — фізична або юридична особа, що вступила в договірні відносини з Продавцем на
                        умовах, зазначених у Договорі.
                    </div>
                    <div className={classes.content_text}>
                        «Акцепт» — повне та беззаперечне прийняття Покупцем умов Договору.
                    </div>

                    <div className={classes.content_text}>
                        «Замовлення» — окремі позиції з асортиментного переліку Товару, вказані Покупцем при розміщенні
                        заявки на інтернет-сайті Продавця або замовлені будь-яким іншим способом.
                    </div>
                    <div className={classes.content_text}>
                        «Кур’єрська доставка» — безпосередня передача Товару від Продавця до Покупця залученими
                        Продавцем третіми особами та/або Продавцем
                    </div>
                    <div className={classes.content_text}>
                        Продавець не здійснює доставку Товару самостійно.
                    </div>

                    <div className={classes.content_text}>
                        «Сайт» — веб-сторінка Продавця: gotowin.co
                    </div>
                </div>


                <div className={classes.content_title}>
                    ПРЕДМЕТ ДОГОВОРУ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        2.1. Продавець здійснює продаж Покупцю Товару відповідно до чинних на момент здійснення
                        замовлення цін та строків, а Покупець здійснює оплату і приймання Товару відповідно до умов
                        цього Договору.
                    </div>
                    <div className={classes.content_text}>
                        2.2. Цей договір є офіційним документом Продавця та невід’ємною частиною Оферти.
                    </div>
                </div>


                <div className={classes.content_title}>
                    МОМЕНТ УКЛАДАННЯ ДОГОВОРУ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        3.1. Текст Договору є публічною офертою (відповідно до статей 633, 643 Цивільного Кодексу
                        України та Правил продажу товарів на замовлення та поза торговельними або офісними приміщеннями,
                        затверджених наказом Міністерства економіки України від 19.04.2007 № 103).
                    </div>

                    <div className={classes.content_text}>
                        3.2. Покупець може оформити замовлення самостійно на Сайті.
                    </div>

                    <div className={classes.content_text}>
                        3.3. Замовлення Продавцем приймаються щодня без перерви і вихідних.
                    </div>

                    <div className={classes.content_text}>
                        3.4. Щоб оформити Замовлення через Сайт Покупцю необхідно:
                        – обрати Товари, відображені на Сайті, їх кількість, та натиснути «Замовити», Товар буде
                        автоматично додано до розділу «Кошик»;
                        – заповнити дані у відповідній електронній формі замовлення, обрати спосіб оплати Товару;
                        – після закінчення замовлення вибрати функцію «ЗАМОВИТИ».
                    </div>

                    <div className={classes.content_text}>
                        3.5. Замовлення вважається оформленим та прийнятим до виконання Продавцем з моменту отримання
                        підтвердження вказаним Замовником способом зв’язку (e-mail, телефоном).
                    </div>
                    <div className={classes.content_text}>
                        3.6. У випадку, якщо Замовником не отримано повідомлення про підтвердження його замовлення, таке
                        замовлення вважається не оформленим та не підлягає виконанню.
                    </div>
                    <div className={classes.content_text}>
                        3.7. Покупець несе повну відповідальність за правильність та достовірність даних, вказаних ним
                        при оформленні замовлення.
                    </div>
                    <div className={classes.content_text}>
                        3.8. Продавець зобов’язується надати Покупцю усю інформацію, що пов’язана з товарами,
                        оформленням та виконанням замовлення, та є необхідною для здійснення вибору та оформлення
                        замовлення.
                    </div>
                </div>

                <div className={classes.content_title}>
                    ДОСТАВКА ЗАМОВЛЕННЯ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        4.1. Товар доставляється Продавцем або залученими ним третіми особами.
                    </div>
                    <div className={classes.content_text}>
                        4.2. Територія доставки товарів, запропонованих на Сайті, необмежена, детальну інформацію щодо
                        території доставки та суми мінімального замовлення розміщено на Сайті за посиланням: gotowin.co
                    </div>
                    <div className={classes.content_text}>
                        4.3. Режим роботи Продавця та час доставки зазначаються на Сайті.
                    </div>
                    <div className={classes.content_text}>
                        4.4. Затримки у доставці Товарів можливі за умови настання непередбачених обставини, що сталися
                        не з вини Продавця.
                    </div>
                    <div className={classes.content_text}>
                        4.5. Доставка Замовлення Покупцеві здійснюється Продавцем на адресу, вказану у замовленні.
                    </div>
                    <div className={classes.content_text}>
                        4.6. Право власності на Товар, а також ризик його випадкового пошкодження чи втрати переходять
                        до Покупця з моменту передачі Товару.
                    </div>
                    <div className={classes.content_text}>4.7. При прийнятті Замовлення, Покупець зобов’язаний
                        перевірити Товар. Оплата Товару Покупцем свідчить про те, що претензій до Товару не заявлено і
                        Продавець повністю і належним чином виконав свій обов’язок щодо передачі Товару
                    </div>
                </div>

                <div className={classes.content_title}>
                    ОПЛАТА ТОВАРУ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>5.1. Ціна Товару вказується в гривнях.</div>
                    <div className={classes.content_text}>5.2. Загальна вартість замовлення складається з вартості усіх
                        Товарів, з урахуванням актуальної на час оформлення замовлення вартості цих Товарів, вказаної на
                        Сайті, усіх податків та зборів, а також з вартості комплектації замовлення.
                    </div>
                    <div className={classes.content_text}>5.3. Загальна вартість замовлення відображається на інтернет
                        сайті Продавця та повідомляється будь-яким із засобів зв’язку обраних Замовником при
                        підтвердженні замовлення.
                    </div>
                    <div className={classes.content_text}>
                        5.4. Оплата Товару здійснюється в безготівковому порядку, передбаченому в розділі сайту
                        «оплата».
                    </div>
                    <div className={classes.content_text}>5.5. Оплата Товарів здійснюється в національній валюті
                        України.
                    </div>
                    <div className={classes.content_text}>5.6. Вартість та асортимент товарів на Сайті може бути змінена
                        Продавцем на власний розсуд в будь-який час без необхідності повідомлення про це Покупця. При
                        цьому, вартість товарів, що вказана на Сайті на час оформлення конкретного замовлення, є
                        актуальною для оформлення цього замовлення.
                    </div>
                </div>


                <div className={classes.content_title}>
                    ПОРЯДОК ПОВЕРНЕННЯ ТОВАРУ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        6.1. Покупець має право відмовитися від отриманого товару неналежної якості після його огляду в
                        момент прийому товару.
                    </div>
                    <div className={classes.content_text}>
                        6.2. В разі відмови від товару неналежної якості, вартість якого була сплачена Покупцем шляхом
                        безготівкового розрахунку, Продавець повертає кошти Покупцеві за товар неналежної якості
                        протягом 3-х банківських днів.
                    </div>
                </div>

                <div className={classes.content_title}>
                    ПРАВА ТА ОБОВ’ЯЗКИ СТОРІН
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        7.1. Згідно цього Договору Продавець бере на себе зобов’язання продати Товари, запропоновані до
                        продажу на Сайті відповідно до оформленого належним чином Замовлення Покупця та умов даної
                        оферти, а Покупець зобов’язується прийняти та оплатити замовлені ним Товари.
                    </div>
                    <div className={classes.content_text}>
                        7.2. Даний Договір поширюється на всі Товари, продемонстровані на Сайті на момент здійснення
                        Замовлення Покупцем.
                    </div>

                    <div className={classes.content_text}>
                        7.3. Продавець зобов’язується:
                        продавати Товари, передбачені умовами цього Договору;
                        забезпечити можливість замовлення та оплати Товарів;
                        надавати консультації з питань користування Сайтом та оформлення Замовлення;
                    </div>

                    <div className={classes.content_text}>
                        7.4. Продавець має право:
                        відмовити у продажі та/або передачі замовлених Товарів у зв’язку з неналежним виконанням
                        Покупцем своїх зобов’язань відповідно до цього Договору;
                        вносити зміни до цього Договору в односторонньому порядку;
                        вносити зміни щодо інформації, розміщеної на Сайті в односторонньому порядку та на власний
                        розсуд;
                        залучати третіх осіб для виконання своїх зобов’язань перед Покупцем;
                        змінювати умови та/або строк доставки Товарів Покупцю за умови повідомлення Покупця про такі
                        зміни за вказаним ним при здійсненні замовлення номером телефону;
                    </div>

                    <div className={classes.content_text}>
                        7.5. Покупець зобов’язується:
                        дотримуватись умов цього Договору;
                        прийняти Товар належної якості, який відповідає замовленню Покупця;
                        оплатити Товар до його отримання або в момент його отримання;
                        перевірити кількість та найменування замовлених Товарів при їх отриманні.
                    </div>

                    <div className={classes.content_text}>
                        7.6. Покупець має право: – вимагати від Продавця продажу Товарів у відповідності до умов цього
                        Договору.
                    </div>
                </div>

                <div className={classes.content_title}>
                    ВІДПОВІДАЛЬНІСТЬ СТОРІН
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        8.1. У разі невиконання або неналежного виконання своїх зобов’язань за Договором Сторони несуть
                        відповідальність, передбачену чинним законодавством та цим Договором.
                    </div>
                    <div className={classes.content_text}>
                        8.2. Продавець не несе відповідальності за шкоду, заподіяну Покупцеві внаслідок неналежного
                        використання та зберігання придбаних ним Товарів.
                    </div>
                    <div className={classes.content_text}>
                        8.3. У випадках, не передбачених цим Договором, Сторони несуть відповідальність, встановлену
                        чинним законодавством України
                    </div>
                    <div className={classes.content_text}>
                        8.4. Продавець розглядає претензії Покупців протягом 30 (тридцять) робочих днів з моменту
                        отримання таких претензій.
                    </div>
                    <div className={classes.content_text}>
                        8.5. Покупець несе відповідальність за правильність внесених даних до форми Замовлення.
                    </div>

                </div>

                <div className={classes.content_title}>
                    ПОРЯДОК ВИРІШЕННЯ СПОРІВ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        9.1 Всі розбіжності, які можуть виникнути щодо цього Договору або у зв’язку з його виконанням
                        Покупець та Продавець вирішують шляхом проведення переговорів. Досудовий порядок врегулювання
                        спору є обов’язковим.
                    </div>
                    <div className={classes.content_text}>
                        9.2. У випадку, якщо Покупець та Продавець не зможуть досягти згоди по зі спірних питань шляхом
                        переговорів, ці питання підлягають вирішенню згідно з діючим законодавством України.
                    </div>
                </div>

                <div className={classes.content_title}>
                    КОНФІДЕНЦІЙНІСТЬ І ЗАХИСТ ІНФОРМАЦІЇ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        10.1. Покупець дає свою згоду Продавцю на збір, обробку, накопичення, зберігання та використання
                        своїх персональних даних (ім’я, номер мобільного телефону та інші персональні дані), а також
                        передання їх третім особам виключно з ціллю та в межах забезпечення Продавцем виконання
                        обов’язків покладених на нього відповідно до умов даної оферти. Персональні дані Покупця
                        обробляються відповідно до Закону України від 01 червня 2010 № 2297-VI «Про захист персональних
                        даних». Персональні дані Покупців зберігаються в базі даних Продавця. Персональні дані Покупців
                        збираються виключно з метою виконання умов даної оферти, дотримання норм у сфері регулювання
                        податкових відносин, відносин у сфері бухгалтерського обліку та відносин у сфері реклами.
                    </div>
                    <div className={classes.content_text}>
                        10.2. Продавець має право відправляти інформаційні, в тому числі рекламні повідомлення, на
                        мобільний телефон Покупця з його згоди. Покупець має право відмовитися від отримання рекламної
                        та іншої інформації без пояснення причин відмови, направивши письмову заяву про відмову від
                        отримання рекламної та іншої інформації Продавцю за адресою, вказаною на Сайті. Сервісні
                        повідомлення, що інформують Покупця про замовлення і етапи його обробки, відправляються
                        автоматично і не можуть бути відхилені Покупцем.
                    </div>

                    <div className={classes.content_text}>
                        10.3. Продавець не несе відповідальності за відомості, надані Покупцем на Сайті в
                        загальнодоступній формі.
                    </div>

                    <div className={classes.content_text}>10.4. Продавець вправі здійснювати записи телефонних розмов з
                        Покупцем, попередньо повідомивши Покупця про такий запис. При цьому Продавець зобов’язується:
                        запобігати спробам несанкціонованого доступу до інформації, отриманої в ході телефонних
                        переговорів, та/або передачу її третім особам, які не мають безпосереднього відношення до
                        виконання Замовлень, відповідно до Закону України від 02.10.1992 року № 2657-XII «Про
                        інформацію».
                    </div>

                </div>


                <div className={classes.content_title}>
                    ТЕРМІН ДІЇ ДОГОВОРУ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>11.1. Цей Договір вважається укладеним в момент завершення
                        оформлення замовлення Покупцем та підтвердження прийняття замовлення до виконання Продавцем.
                    </div>
                    <div className={classes.content_text}>11.2. Договір діє до повного виконання сторонами всіх умов
                        цього Договору.
                    </div>
                </div>


                <div className={classes.content_title}>
                    АВТОРСЬКІ ПРАВА
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        12.1. Уся текстова інформація та графічні зображення, що розміщені на сайті https://gotowin.co,
                        є власністю «GOW».
                    </div>
                </div>

                <div className={classes.content_title}>
                    ФОРС-МАЖОРНІ ОБСТАВИНИ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>13.1. Продавець звільняється від відповідальності за часткове
                        або повне невиконання зобов’язань по цьому Договору, якщо таке невиконання зобов’язань являється
                        наслідком обставин непоборної сили. Під обставинами непереборної сили розуміються надзвичайні та
                        невідворотні обставини, що об’єктивно унеможливлюють виконання зобов’язань, передбачених умовами
                        договору, виникнення та існування яких є поза контролем Продавця. До обставин непереборної сили
                        належать у тому числі: загроза війни, збройний конфлікт або серйозна погроза такого конфлікту,
                        акти тероризму, диверсії, пожежа, вибух, тривалі перерви в роботі транспорту, регламентовані
                        умовами відповідних рішень та актами державних органів влади, ембарго, заборона (обмеження)
                        експорту/імпорту тощо,рішення органів влади, зміни національного законодавства, збій в роботі
                        технічних систем, що використовуються Продавцем, злочинні дії третіх осіб по відношенню до
                        Продавця, а також викликані винятковими погодними умовами і стихійним лихом, затори на дорогах,
                        тощо.
                    </div>
                </div>

                <div className={classes.content_title}>
                    ДОДАТКОВІ УМОВИ
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        14.1. Продавець вправі переуступати або яким-небудь іншим способом передавати свої права та
                        обов’язки, що випливають з його відносин з Покупцем, третім особам.
                    </div>
                    <div className={classes.content_text}>
                        14.2. Сайт може бути тимчасово частково або повністю недоступний внаслідок проведення технічних,
                        профілактичних або інших робіт, або з будь-яких інших причин технічного характеру
                    </div>
                    <div className={classes.content_text}>14.3. З усіх питань, які не передбачені умовами даної оферти,
                        Покупець та Продавець керуються чинним законодавством України.
                    </div>
                    <div className={classes.content_text}>14.4. У випадку встановлення особливих умов стосовно
                        асортименту, вартості Товарів, інших умов замовлення у зв’язку з проведенням акцій, тощо – такі
                        дії не будуть вважатися порушенням п. 2 ст. 633 Цивільного кодексу України.
                    </div>
                    <div className={classes.content_text}>14.5. Оформляючи замовлення незалежно від способу оформлення
                        (усно по телефону чи в електронній формі на Сайті) Покупець підтверджує наступне:
                        Покупець ознайомлений з умовами цієї пропозиції (оферти) укласти Договір та акцептує їх у повній
                        мірі та беззастережно;
                        Покупець ознайомлений та погоджується з асортиментом та вартістю Товарів, умовами їх оплати та
                        доставки, іншими умовами купівлі-продажу Товарів, зазначеними на Сайті;
                        Усі надані Покупцем при оформленні замовлення дані (перелік Товарів, свої персональні дані,
                        адресу доставки, номер телефону тощо) є актуальними та повними.
                        Покупець надав усі необхідні деталі замовлення стосовно асортименту, кількості Товарів, тощо,
                        які мав намір надати, під час оформлення замовлення.
                        Внесення змін до замовлення або відмова від замовлення після його підтвердження не допускається.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicyUA;
