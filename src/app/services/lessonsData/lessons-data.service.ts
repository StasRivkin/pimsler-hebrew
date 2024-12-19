import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsDataService {

  private firstLessonData = {
    lessons: [
      {
        lesson: "1",
        words: [
          {translation: "Извините", hebrew: "סליחה", transcription: "СЛИХА"},
          {translation: "Английский", hebrew: "אנגלית", transcription: "АНГЛИТ"},
          {translation: "Ты (жен. род)", hebrew: "את", transcription: "АТ"},
          {translation: "Ты (муж. род)", hebrew: "אתה", transcription: "АТА"},
          {translation: "Ты понимаешь (жен. род)", hebrew: "מבינה את", transcription: "АТ МЭВИНА?"},
          {translation: "Ты понимаешь (муж. род)", hebrew: "מבין אתה", transcription: "АТА МЭВИН?"},
          {
            translation: "Ты понимаешь английский (жен. род)",
            hebrew: "אנגלית מבינה את",
            transcription: "АТ МЭВИНА АНГЛИТ?"
          },
          {
            translation: "Ты понимаешь английский (муж. род)",
            hebrew: "אנגלית מבין אתה",
            transcription: "АТА МЭВИН АНГЛИТ?"
          },
          {translation: "Нет!", hebrew: "לא", transcription: "ЛЁ"},
          {translation: "Я", hebrew: "אני", transcription: "АНИ"},
          {
            translation: "Я понимаю английский (жен. род)",
            hebrew: "אנגלית מבינה אני",
            transcription: "АНИ МЭВИНА АНГЛИТ"
          },
          {
            translation: "Я понимаю английский (муж. род)",
            hebrew: "אנגלית מבין אני",
            transcription: "АНИ МЭВИН АНГЛИТ"
          },
          {
            translation: "Я не понимаю английский (жен. род)",
            hebrew: "אנגלית מבינה לא אני",
            transcription: "АНИ ЛЁ МЕВИНА АНГЛИТ"
          },
          {
            translation: "Я не понимаю английский (муж. род)",
            hebrew: "אנגלית מבין לא אני",
            transcription: "АНИ ЛЁ МЭВИН АНГЛИТ"
          }
        ]
      },
      {
        lesson: "2",
        words: [
          {translation: "Иврит", hebrew: "עברית", transcription: "ИВРИТ"},
          {
            translation: "Ты понимаешь иврит (жен. род)",
            hebrew: "עברית מבינה את",
            transcription: "АТ МЭВИНА ИВРИТ?"
          },
          {
            translation: "Ты понимаешь иврит (муж. род)",
            hebrew: "עברית מבין אתה",
            transcription: "АТА МЭВИН ИВРИТ?"
          },
          {translation: "Немного", hebrew: "קצת", transcription: "КЦАТ"},
          {translation: "Американец", hebrew: "אמריקאי", transcription: "АМЕРИКАЙ"},
          {translation: "Американка", hebrew: "אמריקאית", transcription: "АМЕРИКАЙТ"},
          {translation: "Здравствуйте", hebrew: "שלום", transcription: "ШАЛОМ"}
        ]
      },
      {
        lesson: "3",
        words: [
          {
            translation: "Как твои дела?",
            hebrew: "מה שלומך?",
            transcription: "МА ШЛОМХА? (м.р.) МА ШЛОМЭХ? (ж.р.)"
          },
          {translation: "Спасибо", hebrew: "תודה", transcription: "ТОДА"},
          {translation: "Хорошо", hebrew: "טוב", transcription: "ТОВ"},
          {translation: "До свидания", hebrew: "שלום!", transcription: "ШАЛОМ!"},
          {translation: "Не очень хорошо", hebrew: "לא כל כך טוב", transcription: "ЛЁ КОЛЬ КАХ ТОВ"},
          {translation: "Очень хорошо", hebrew: "מאוד טוב", transcription: "МЭОД ТОВ"}
        ]
      },
      {
        lesson: "4",
        words: [
          {translation: "Я израильтянин", hebrew: "אני ישראלי", transcription: "АНИ ИЗРАИЛИ (м.р.)"},
          {translation: "Я израильтянка", hebrew: "אני ישראלית", transcription: "АНИ ИЗРАИЛИТ (ж.р.)"},
          {translation: "Ты говоришь (жен. род)", hebrew: "את מדברת", transcription: "АТ МЕДАБЭРЭТ"},
          {translation: "Ты говоришь (муж. род)", hebrew: "אתה מדבר", transcription: "АТА МЕДАБЕР"},
          {translation: "Я говорю (жен. род)", hebrew: "אני מדברת", transcription: "АНИ МЕДАБЭРЭТ"},
          {translation: "Я говорю (муж. род)", hebrew: "אני מדבר", transcription: "АНИ МЕДАБЕР"},
          {translation: "Я не говорю (жен. род)", hebrew: "אני לא מדברת", transcription: "АНИ ЛЁ МЕДАБЭРЭТ"},
          {translation: "Я не говорю (муж. род)", hebrew: "אני לא מדבר", transcription: "АНИ ЛЁ МЕДАБЕР"}
        ]
      },
      {
        lesson: "5",
        words: [
          {translation: "Где?", hebrew: "איפה?", transcription: "ЭЙФО?"},
          {translation: "Улица", hebrew: "רחוב", transcription: "РЕХОВ"},
          {translation: "Площадь", hebrew: "כיכר", transcription: "КИКАР"},
          {translation: "Это", hebrew: "זה", transcription: "ЗЭ"},
          {translation: "Здесь", hebrew: "פה", transcription: "ПО"},
          {translation: "Там", hebrew: "שם", transcription: "ШАМ"}
        ]
      },
      {
        lesson: "6",
        words: [
          {translation: "Вода", hebrew: "מים", transcription: "МАЙМ"},
          {translation: "Хлеб", hebrew: "לחם", transcription: "ЛЕХЕМ"},
          {translation: "Молоко", hebrew: "חלב", transcription: "ХАЛАВ"},
          {translation: "Яблоко", hebrew: "תפוח", transcription: "ТАПУАХ"},
          {translation: "Яблоки", hebrew: "תפוחים", transcription: "ТАПУХИМ"}
        ]
      },
      {
        lesson: "7",
        words: [
          {translation: "Собака", hebrew: "כלב", transcription: "КЕЛЕВ"},
          {translation: "Кошка", hebrew: "חתול", transcription: "ХАТУЛ"},
          {translation: "Птица", hebrew: "ציפור", transcription: "ЦИПОР"},
          {translation: "Дом", hebrew: "בית", transcription: "БАЙТ"},
          {translation: "Кровать", hebrew: "מיטה", transcription: "МИТА"}
        ]
      },
      {
        lesson: "8",
        words: [
          {translation: "Машина", hebrew: "רכב", transcription: "РЕХЕВ"},
          {translation: "Автобус", hebrew: "אוטובוס", transcription: "ОТОБУС"},
          {translation: "Поезд", hebrew: "רכבת", transcription: "РАКЕВЕТ"},
          {translation: "Самолет", hebrew: "מטוס", transcription: "МАТОС"},
          {translation: "Велосипед", hebrew: "אופניים", transcription: "ОФНАИМ"}
        ]
      },
      {
        lesson: "9",
        words: [
          {translation: "Работа", hebrew: "עבודה", transcription: "АВОДА"},
          {translation: "Учёба", hebrew: "לימודים", transcription: "ЛИМУДИМ"},
          {translation: "Отдых", hebrew: "חופשה", transcription: "ХУФША"},
          {translation: "Школа", hebrew: "בית ספר", transcription: "БЭЙТ СЕФЕР"},
          {translation: "Университет", hebrew: "אוניברסיטה", transcription: "ОНИВЕРСИТА"}
        ]
      },
      {
        lesson: "10",
        words: [
          {translation: "Семья", hebrew: "משפחה", transcription: "МИШПАХА"},
          {translation: "Мать", hebrew: "אמא", transcription: "ИМА"},
          {translation: "Отец", hebrew: "אבא", transcription: "АБА"},
          {translation: "Брат", hebrew: "אח", transcription: "АХ"},
          {translation: "Сестра", hebrew: "אחות", transcription: "АХОТ"},
          {translation: "Дочь", hebrew: "בת", transcription: "БАТ"},
          {translation: "Сын", hebrew: "בן", transcription: "БЕН"}
        ]
      },
      {
        lesson: "11",
        words: [
          {translation: "Папа", hebrew: "אבא", transcription: "АБА"},
          {translation: "Мама", hebrew: "אמא", transcription: "ИМА"},
          {translation: "Семья", hebrew: "משפחה", transcription: "МИШПАХА"},
          {translation: "Брат", hebrew: "אח", transcription: "АХ"},
          {translation: "Сестра", hebrew: "אחות", transcription: "АХОТ"},
          {translation: "Родители", hebrew: "הורים", transcription: "ОРИМ"},
          {translation: "Дедушка", hebrew: "סבא", transcription: "САБА"},
          {translation: "Бабушка", hebrew: "סבתא", transcription: "САВТА"}
        ]
      },
      {
        lesson: "12",
        words: [
          {translation: "Человек", hebrew: "אדם", transcription: "АДАМ"},
          {translation: "Мужчина", hebrew: "גבר", transcription: "ГЕВЕР"},
          {translation: "Женщина", hebrew: "אישה", transcription: "ИША"},
          {translation: "Девочка", hebrew: "ילדה", transcription: "ЯЛДА"},
          {translation: "Мальчик", hebrew: "ילד", transcription: "ЙЕЛЕД"},
          {translation: "Друг", hebrew: "חבר", transcription: "ХАВЕР"},
          {translation: "Подруга", hebrew: "חברה", transcription: "ХАВЕРА"}
        ]
      },
      {
        lesson: "13",
        words: [
          {translation: "Лететь", hebrew: "לטוס", transcription: "ЛАТУС"},
          {translation: "Полёт", hebrew: "טיסה", transcription: "ТИСА"},
          {translation: "Самолет", hebrew: "מטוס", transcription: "МАТОС"},
          {translation: "Аэропорт", hebrew: "שדה תעופה", transcription: "СДЭ ТЕУФА"},
          {translation: "Путевка", hebrew: "חופשה", transcription: "ХУФША"},
          {translation: "Гостиница", hebrew: "מלון", transcription: "МАЛОН"}
        ]
      },
      {
        lesson: "14",
        words: [
          {translation: "Магазин", hebrew: "חנות", transcription: "ХАНУТ"},
          {translation: "Торговый центр", hebrew: "מרכז קניות", transcription: "МЕРКАЗ КНИОТ"},
          {translation: "Покупка", hebrew: "קנייה", transcription: "КНИЯ"},
          {translation: "Продажа", hebrew: "מכירה", transcription: "МЕХИРА"},
          {translation: "Цена", hebrew: "מחיר", transcription: "МЕХИР"}
        ]
      },
      {
        lesson: "15",
        words: [
          {translation: "Есть", hebrew: "לאכול", transcription: "ЛЕЭХОЛ"},
          {translation: "Пить", hebrew: "לשתות", transcription: "ЛИШТОТ"},
          {translation: "Ужин", hebrew: "ערב", transcription: "ЭРЕВ"},
          {translation: "Завтрак", hebrew: "ארוחת בוקר", transcription: "АРУХАТ БОКЕР"},
          {translation: "Обед", hebrew: "ארוחת צהריים", transcription: "АРУХАТ ЦОХАРАИМ"},
          {translation: "Ресторан", hebrew: "מסעדה", transcription: "МЕССАДА"}
        ]
      },
      {
        lesson: "16",
        words: [
          {translation: "Вкусно", hebrew: "טעים", transcription: "ТАИМ"},
          {translation: "Невкусно", hebrew: "לא טעים", transcription: "ЛЁ ТАИМ"},
          {translation: "Кофе", hebrew: "קפה", transcription: "КАФЕ"},
          {translation: "Чай", hebrew: "תה", transcription: "ТЕ"},
          {translation: "Сок", hebrew: "מיץ", transcription: "МИЦ"}
        ]
      },
      {
        lesson: "17",
        words: [
          {translation: "День", hebrew: "יום", transcription: "ЙОМ"},
          {translation: "Ночь", hebrew: "לילה", transcription: "ЛАЙЛА"},
          {translation: "Утро", hebrew: "בוקר", transcription: "БОКЕР"},
          {translation: "Вечер", hebrew: "ערב", transcription: "ЭРЕВ"},
          {translation: "Сегодня", hebrew: "היום", transcription: "ХА-ЙОМ"},
          {translation: "Завтра", hebrew: "מחר", transcription: "МАХАР"},
          {translation: "Вчера", hebrew: "אתמול", transcription: "ЭТМОЛ"}
        ]
      },
      {
        lesson: "18",
        words: [
          {translation: "Где", hebrew: "איפה", transcription: "ЭЙФО"},
          {translation: "Как", hebrew: "איך", transcription: "ЭЙХ"},
          {translation: "Почему", hebrew: "למה", transcription: "ЛАМА"},
          {translation: "Что", hebrew: "מה", transcription: "МА"},
          {translation: "Когда", hebrew: "מתי", transcription: "МАТАЙ"}
        ]
      },
      {
        lesson: "19",
        words: [
          {translation: "Далеко", hebrew: "רחוק", transcription: "РАХОК"},
          {translation: "Близко", hebrew: "קרוב", transcription: "КАРОВ"},
          {translation: "Большой", hebrew: "גדול", transcription: "ГАДОЛ"},
          {translation: "Маленький", hebrew: "קטן", transcription: "КАТАН"},
          {translation: "Широкий", hebrew: "רחב", transcription: "РАХАВ"}
        ]
      },
      {
        lesson: "20",
        words: [
          {translation: "Высокий", hebrew: "גבוה", transcription: "ГАВОА"},
          {translation: "Низкий", hebrew: "נמוך", transcription: "НАМУХ"},
          {translation: "Красивый", hebrew: "יפה", transcription: "ЯФЕ"},
          {translation: "Уродливый", hebrew: "מכוער", transcription: "МЕХООР"},
          {translation: "Трудный", hebrew: "קשה", transcription: "КАШЕ"}
        ]
      },
      {
        lesson: "21",
        words: [
          {translation: "Легкий", hebrew: "קל", transcription: "КАЛ"},
          {translation: "Сложный", hebrew: "מורכב", transcription: "МУРКАВ"},
          {translation: "Глупый", hebrew: "טיפש", transcription: "ТИПЕШ"},
          {translation: "Умный", hebrew: "חכם", transcription: "ХАХАМ"},
          {translation: "Интересный", hebrew: "מעניין", transcription: "МЕАНЬЕН"}
        ]
      },
      {
        lesson: "22",
        words: [
          {translation: "Чистый", hebrew: "נקי", transcription: "НАКИ"},
          {translation: "Грязный", hebrew: "מלוכלך", transcription: "МЕЛУХЛАХ"},
          {translation: "Короткий", hebrew: "קצר", transcription: "КАТЦАР"},
          {translation: "Длинный", hebrew: "ארוך", transcription: "АРОХ"},
          {translation: "Толстый", hebrew: "שמן", transcription: "ШАМЕН"}
        ]
      },
      {
        lesson: "23",
        words: [
          {translation: "Тонкий", hebrew: "דק", transcription: "ДАК"},
          {translation: "Молоко", hebrew: "חלב", transcription: "ХАЛАВ"},
          {translation: "Сок", hebrew: "מיץ", transcription: "МИЦ"},
          {translation: "Хлеб", hebrew: "לחם", transcription: "ЛЕХЕМ"},
          {translation: "Мясо", hebrew: "בשר", transcription: "БАСАР"}
        ]
      },
      {
        lesson: "24",
        words: [
          {translation: "Яблоко", hebrew: "תפוח", transcription: "ТАПУАХ"},
          {translation: "Банан", hebrew: "בננה", transcription: "БАНАНА"},
          {translation: "Апельсин", hebrew: "תפוז", transcription: "ТАПУЗ"},
          {translation: "Груша", hebrew: "אגס", transcription: "АГАС"},
          {translation: "Виноград", hebrew: "ענבים", transcription: "АНАВИМ"}
        ]
      },
      {
        lesson: "25",
        words: [
          {translation: "Огурец", hebrew: "מלפפון", transcription: "МЕЛАФЕФОН"},
          {translation: "Помидор", hebrew: "עגבנייה", transcription: "АГАВНИЯ"},
          {translation: "Картофель", hebrew: "תפוח אדמה", transcription: "ТАПУАХ АДАМА"},
          {translation: "Лук", hebrew: "בצל", transcription: "БАЦЕЛ"},
          {translation: "Морковь", hebrew: "גזר", transcription: "ГЕЗЕР"}
        ]
      },
      {
        lesson: "26",
        words: [
          {translation: "Рыба", hebrew: "דג", transcription: "ДАГ"},
          {translation: "Мясо", hebrew: "בשר", transcription: "БАСАР"},
          {translation: "Курица", hebrew: "עוף", transcription: "ОФ"},
          {translation: "Суп", hebrew: "מרק", transcription: "МАРАК"},
          {translation: "Чай", hebrew: "תה", transcription: "ТЕ"}
        ]
      },
      {
        lesson: "27",
        words: [
          {translation: "Кофе", hebrew: "קפה", transcription: "КАФЕ"},
          {translation: "Вода", hebrew: "מים", transcription: "МАЙМ"},
          {translation: "Молоко", hebrew: "חלב", transcription: "ХАЛАВ"},
          {translation: "Сок", hebrew: "מיץ", transcription: "МИЦ"},
          {translation: "Пиво", hebrew: "בירה", transcription: "БИРА"}
        ]
      },
      {
        lesson: "28",
        words: [
          {translation: "Вино", hebrew: "יין", transcription: "ЯИН"},
          {translation: "Коньяк", hebrew: "קונьяק", transcription: "КОНИЯК"},
          {translation: "Виски", hebrew: "וויסקי", transcription: "ВИСКИ"},
          {translation: "Шампанское", hebrew: "שמפניה", transcription: "ШАМПАНИЯ"}
        ]
      },
      {
        lesson: "29",
        words: [
          {translation: "Чашка", hebrew: "ספל", transcription: "СЕФЕЛ"},
          {translation: "Стакан", hebrew: "כוס", transcription: "КОС"},
          {translation: "Тарелка", hebrew: "צלחת", transcription: "ЦАЛАХАТ"},
          {translation: "Ложка", hebrew: "כף", transcription: "КАФ"},
          {translation: "Вилка", hebrew: "מזלג", transcription: "МАЗАЛЕГ"}
        ]
      },
      {
        lesson: "30",
        words: [
          {translation: "Нож", hebrew: "סכין", transcription: "САКИН"},
          {translation: "Торт", hebrew: "עוגה", transcription: "УГА"},
          {translation: "Конфеты", hebrew: "סוכריות", transcription: "СУКАРИОТ"},
          {translation: "Шоколад", hebrew: "שוקולד", transcription: "ШОКОЛАД"}
        ]
      }
    ]
  };
  private secondLessonData = {
    lessons: [
      {
        lesson: "1",
        words: [
          {translation: "Два дня", hebrew: "יומיים", transcription: "ЁМАЙМ"},
          {
            translation: "Да, мне очень нравится Тель – Авив",
            hebrew: "כן תל אביב מאוד",
            transcription: "КЕН ТЕЛЬ АВИВ МЭОД"
          },
          {translation: "Она отвечает", hebrew: "עונה היא", transcription: "ХИ ОНА"},
          {
            translation: "Сколько времени ты здесь?",
            hebrew: "כמה זמן אתה פה?",
            transcription: "КАМА ЗМАН АТА ПО?"
          },
          {translation: "С какого ты здесь?", hebrew: "מתי אתה פה?", transcription: "МИ МАТАЙ АТА ПО?"},
          {translation: "Со вчера", hebrew: "אתמול", transcription: "ЭТМОЛЬ"},
          {translation: "Когда ты приехал?", hebrew: "מתי הגעת?", transcription: "МАТАЙ ИГАТА?"},
          {translation: "Мы приехали", hebrew: "הגענו", transcription: "ИГАНУ"},
          {translation: "Я приехал", hebrew: "הגעתי", transcription: "ИГАТИ"},
          {translation: "Я здесь несколько дней", hebrew: "אני פה כמה ימים", transcription: "АНИ ПО КАМА ЯМИМ"},
          {translation: "Я здесь два дня", hebrew: "אני פה יומיים", transcription: "АНИ ПО ЁМАЙМ"},
          {
            translation: "НА сколько времени ты здесь остаешься?",
            hebrew: "כמה זמן אתה נשאר פה?",
            transcription: "КАМА ЗМАН АТА НИШАР ПО?"
          },
          {translation: "Как она спрашивает?", hebrew: "איך היא שואלת?", transcription: "ЭЙХ ХИ ШОЭЛЕТ?"},
          {translation: "Что ты делал вчера?", hebrew: "מה עשית אתמול?", transcription: "МА АСИТА ЭТМОЛЬ?"},
          {translation: "Мы ходили", hebrew: "הלכנו", transcription: "ХАЛАХНУ"},
          {translation: "Куда ты идешь?", hebrew: "לאן את הולכת?", transcription: "ЛЕАН АТ ОЛЕХЕТ?"},
          {translation: "Для моего мужа", hebrew: "בשביל בעלי", transcription: "БИШВИЛЬ БААЛИ"},
          {
            translation: "Я иду купить что-нибудь для моего мужа",
            hebrew: "אני הולכת לקנות משהו בשביל בעלי",
            transcription: "АНИ ОЛЕХЕТ ЛИКНОТ МАШЕУ БИШВИЛЬ БААЛИ"
          },
          {
            translation: "Что ты делал вчера утром?",
            hebrew: "מה עשית אתמול בבוקר?",
            transcription: "МА АСИТА ЭТМОЛЬ БА БОКЕР?"
          },
          {
            translation: "Мы ходили в хороший ресторан",
            hebrew: "הלכנו למסעדה טובה",
            transcription: "ХАЛАХНУ ЛЭ МИСАДА ТОВА"
          },
          {translation: "Мы ездили", hebrew: "נשענו", transcription: "НАСАНУ"}
        ]
      },
      {
        lesson: "2",
        words: [
          {translation: "Правильно", hebrew: "נכון", transcription: "НАХОН"},
          {translation: "Я ездил", hebrew: "נסתי", transcription: "НАСАТИ"},
          {translation: "Когда ты приехал?", hebrew: "מתי הגעת?", transcription: "МАТАЙ ИГАТА?"},
          {
            translation: "Но я ничего не видел",
            hebrew: "אבל לא ראיתי כלום",
            transcription: "АВАЛЬ ЛО РАИТИ КЛЮМ"
          },
          {translation: "Я видел", hebrew: "ראיתי", transcription: "РАИТИ"},
          {translation: "Ты видел друзей здесь?", hebrew: "ראית חברים פה?", transcription: "РАИТА ХАВЕРИМ ПО?"},
          {translation: "Я иду", hebrew: "אני הולך", transcription: "АНИ ОЛЕХ"},
          {
            translation: "Я не купил ничего для нашей дочери",
            hebrew: "לא קניתי כלום בשביל הבת שלנו",
            transcription: "ЛО КАНИТИ КЛЮМ БИШВИЛЬ АБАТ ШЕЛЯНУ"
          },
          {translation: "Мы остаёмся здесь", hebrew: "אנחנו נשארים פה", transcription: "АНАХНУ НИШАРИМ ПО"},
          {
            translation: "Моя жена едет в Хайфу",
            hebrew: "אשתי נוסעת לחיפה",
            transcription: "ИШТИ НОСЕАТ ЛЭ ХАЙФА"
          },
          {
            translation: "Наша дочь живет в Хайфе",
            hebrew: "הבת שלנו גרה בחיפה",
            transcription: "АБАТ ШЕЛЯНУ ГАРА БЭ ХАЙФА"
          },
          {
            translation: "Сегодня моя жена арендовала машину",
            hebrew: "היום אשתי שכרה מכונית",
            transcription: "АЕМ ИШТИ САХРА МЕХОНИТ"
          },
          {
            translation: "Мы нуждаемся в машине",
            hebrew: "אנחנו צריכים מכונית",
            transcription: "АНАХНУ ЦРИХИМ МЕХОНИТ"
          },
          {
            translation: "Мы едем увидеть нашу дочь",
            hebrew: "אנחנו נוסעים לראות את הבת שלנו",
            transcription: "АНАХНУ НОС-ИМ ЛИР-ОТ ЭТ-АБАТ ШЕЛЯНУ"
          },
          {translation: "Ты видел друзей", hebrew: "ראית חברים?", transcription: "РАИТА ХАВЕРИМ?"},
          {translation: "Не видел", hebrew: "לא ראיתי", transcription: "ЛО РАИТИ"},
          {
            translation: "Наш сын живет в Америке",
            hebrew: "הבן שלנו גר באמריקה",
            transcription: "АБЭН ШЕЛЯНУ ГАР БЭ АМЕРИКА"
          },
          {
            translation: "Мы не видели нашего сына вчера",
            hebrew: "לא ראינו את הבן שלנו אתמול",
            transcription: "ЛО РАИНУ АБЭН ШЕЛЯНУ ЭТМОЛЬ"
          },
          {translation: "Наш сын приехал", hebrew: "הבן שלנו הגיע", transcription: "АБЭН ШЕЛЯНУ ИГИА"},
          {
            translation: "Мы хотим остаться там два дня, потому что мы хотим увидеть нашего сына",
            hebrew: "אנחנו רוצים להישאר שם יומיים, כי אנחנו רוצים לראות את הבן שלנו",
            transcription: "АНАХНУ РОЦИМ ЛЕИШАЭР ШАМ, КИ ЛИРОТ АБЭН ШЕЛЯНУ"
          }
        ]
      },
      {
        lesson: "3",
        words: [
          {translation: "Когда вы приехали?", hebrew: "מתי הגעתם?", transcription: "МАТАЙ ИГАТЭМ?"},
          {
            translation: "Мы приехали вчера вечером с нашей дочерью",
            hebrew: "הגענו אתמול בערב עם הבת שלנו",
            transcription: "ИГАНУ ЭТМОЛЬ БА ЭРЭВ ИМ АБАТ ШЕЛЯНУ"
          },
          {
            translation: "Она живет в Тель-Авиве",
            hebrew: "היא גרה בתל אביב",
            transcription: "ХИ ГАРА БЭ ТЕЛЬ-АВИВ"
          },
          {
            translation: "У меня не было много времени",
            hebrew: "לא היה לי הרבה זמן",
            transcription: "ЛЁ АЯ ЛИ АРБЭ ЗМАН"
          },
          {translation: "Работа", hebrew: "עבודה", transcription: "АВОДА"},
          {
            translation: "У меня было много работы",
            hebrew: "הייתה לי הרבה עבודה",
            transcription: "АИТА ЛИ АРБЭ АВОДА"
          },
          {
            translation: "У меня не было машины",
            hebrew: "לא הייתה לי מכונית",
            transcription: "ЛО АИТА ЛИ МЕХОНИТ"
          },
          {translation: "Что ты делала вчера?", hebrew: "מה עשית אתמול?", transcription: "МА АСИТ ЭТМОЛЬ?"},
          {
            translation: "Я иду сегодня работать в Хайфе",
            hebrew: "אני הולך לעבוד בחיפה היום",
            transcription: "АНИ ОЛЕХ ЛААВОД БЭ ХАЙФА АЕМ"
          },
          {
            translation: "Я хочу поехать в Хайфу",
            hebrew: "אני רוצה לנסוע לחיפה",
            transcription: "АНИ РОЦЕ ЛЕНСОА ЛЭ ХАЙФА"
          },
          {
            translation: "Я хочу взять машину на день",
            hebrew: "אני רוצה לשכור מכונית ליום אחד",
            transcription: "АНИ РОЦЕ ЛИСКОР МЕХОНИТ ЛЕЙОМ ЭХАД"
          },
          {
            translation: "Я хочу работать на несколько дней",
            hebrew: "אני רוצה לעבוד לכמה ימים",
            transcription: "АНИ РОЦЕ ЛААВОД ЛЕКАМА ЯМИМ"
          }
        ]
      },
      {
        lesson: "4",
        words: [
          {translation: "Я буду работать", hebrew: "אני אעבוד", transcription: "АНИ ААВОД"},
          {translation: "Он будет работать", hebrew: "הוא יעבוד", transcription: "ХУ ЯАВОД"},
          {translation: "Она будет работать", hebrew: "היא תעבוד", transcription: "ХИ ТААВОД"},
          {translation: "Мы будем работать", hebrew: "אנחנו נַעֲבוֹד", transcription: "АНАХНУ НААВОД"},
          {translation: "Вы будете работать", hebrew: "אתם תעבדו", transcription: "АТЕМ ТАВДУ"},
          {translation: "Они будут работать", hebrew: "הם יעבדו", transcription: "ХЕМ ЯАВДУ"},
          {translation: "Я буду готовить", hebrew: "אני אכין", transcription: "АНИ ЭХИН"},
          {translation: "Ты будешь готовить", hebrew: "אתה תכין", transcription: "АТА ТАХИН"},
          {translation: "Он будет готовить", hebrew: "הוא יכין", transcription: "ХУ ЯХИН"},
          {translation: "Мы будем готовить", hebrew: "אנחנו נכין", transcription: "АНАХНУ НЭХИН"},
          {translation: "Вы будете готовить", hebrew: "אתם תכינו", transcription: "АТЕМ ТАХИНУ"},
          {translation: "Они будут готовить", hebrew: "הם יכינו", transcription: "ХЕМ ЯХИНУ"},
          {translation: "Я буду пить", hebrew: "אני אשתי", transcription: "АНИ АШТЕ"},
          {translation: "Ты будешь пить", hebrew: "אתה תשתה", transcription: "АТА ТАШТЕ"},
          {translation: "Он будет пить", hebrew: "הוא ישתה", transcription: "ХУ ЯШТЕ"},
          {translation: "Мы будем пить", hebrew: "אנחנו נשתה", transcription: "АНАХНУ НИШТЕ"},
          {translation: "Вы будете пить", hebrew: "אתם תשתו", transcription: "АТЕМ ТАШТУ"},
          {translation: "Они будут пить", hebrew: "הם ישתו", transcription: "ХЕМ ЯШТУ"}
        ]
      },
      {
        lesson: "5",
        words: [
          {translation: "Я хочу пить воду", hebrew: "אני רוצה לשתות מים", transcription: "АНИ РОЦЕ ЛИШТОТ МАИМ"},
          {
            translation: "Ты хочешь пить кофе",
            hebrew: "אתה רוצה לשתות קפה",
            transcription: "АТА РОЦЕ ЛИШТОТ КАФЕ"
          },
          {
            translation: "Мы хотим пить чай",
            hebrew: "אנחנו רוצים לשתות תה",
            transcription: "АНАХНУ РОЦИМ ЛИШТОТ ТЕ"
          },
          {translation: "Он хочет пить сок", hebrew: "הוא רוצה לשתות מיץ", transcription: "ХУ РОЦЕ ЛИШТОТ МИЦ"},
          {
            translation: "Она хочет пить воду",
            hebrew: "היא רוצה לשתות מים",
            transcription: "ХИ РОЦЕ ЛИШТОТ МАИМ"
          },
          {translation: "Мы хотим пить", hebrew: "אנחנו רוצים לשתות", transcription: "АНАХНУ РОЦИМ ЛИШТОТ"},
          {translation: "Ты хочешь пить", hebrew: "אתה רוצה לשתות", transcription: "АТА РОЦЕ ЛИШТОТ"},
          {translation: "Они хотят пить", hebrew: "הם רוצים לשתות", transcription: "ХЕМ РОЦИМ ЛИШТОТ"},
          {translation: "Я пью воду", hebrew: "אני שותה מים", transcription: "АНИ ШОТЭ МАИМ"},
          {translation: "Ты пьешь кофе", hebrew: "אתה שותה קפה", transcription: "АТА ШОТЭ КАФЕ"},
          {translation: "Она пьет чай", hebrew: "היא שותה תה", transcription: "ХИ ШОТЭ ТЕ"},
          {translation: "Он пьет сок", hebrew: "הוא שותה מיץ", transcription: "ХУ ШОТЭ МИЦ"},
          {translation: "Я буду пить чай", hebrew: "אני אשתה תה", transcription: "АНИ ЭШТЕ ТЕ"},
          {translation: "Мы будем пить сок", hebrew: "אנחנו נשתה מיץ", transcription: "АНАХНУ НИШТЕ МИЦ"},
          {translation: "Он хочет пить чай", hebrew: "הוא רוצה לשתות תה", transcription: "ХУ РОЦЕ ЛИШТОТ ТЕ"}
        ]
      },
      {
        lesson: "6",
        words: [
          {translation: "Я не знаю", hebrew: "אני לא יודע", transcription: "АНИ ЛО ЙОДЭА"},
          {translation: "Ты знаешь?", hebrew: "אתה יודע?", transcription: "АТА ЙОДЭА?"},
          {translation: "Он не знает", hebrew: "הוא לא יודע", transcription: "ХУ ЛО ЙОДЭА"},
          {translation: "Она не знает", hebrew: "היא לא יודעת", transcription: "ХИ ЛО ЙОДАТ"},
          {translation: "Мы не знаем", hebrew: "אנחנו לא יודעים", transcription: "АНАХНУ ЛО ЙОДИМ"},
          {translation: "Вы не знаете", hebrew: "אתם לא יודעים", transcription: "АТЕМ ЛО ЙОДИМ"},
          {translation: "Они не знают", hebrew: "הם לא יודעים", transcription: "ХЕМ ЛО ЙОДИМ"},
          {translation: "Я знаю", hebrew: "אני יודע", transcription: "АНИ ЙОДЭА"},
          {translation: "Ты знаешь", hebrew: "אתה יודע", transcription: "АТА ЙОДЭА"},
          {translation: "Он знает", hebrew: "הוא יודע", transcription: "ХУ ЙОДЭА"},
          {translation: "Она знает", hebrew: "היא יודעת", transcription: "ХИ ЙОДАТ"},
          {translation: "Мы знаем", hebrew: "אנחנו יודעים", transcription: "АНАХНУ ЙОДИМ"},
          {translation: "Вы знаете", hebrew: "אתם יודעים", transcription: "АТЕМ ЙОДИМ"},
          {translation: "Они знают", hebrew: "הם יודעים", transcription: "ХЕМ ЙОДИМ"},
          {
            translation: "Он не знает, что делать",
            hebrew: "הוא לא יודע מה לעשות",
            transcription: "ХУ ЛО ЙОДЭА МА ЛААСОТ"
          }
        ]
      },
      {
        lesson: "7",
        words: [
          {translation: "Я люблю работать", hebrew: "אני אוהב לעבוד", transcription: "АНИ ОЭВ ЛААВОД"},
          {
            translation: "Ты любишь читать книги",
            hebrew: "אתה אוהב לקרוא ספרים",
            transcription: "АТА ОЭВ ЛИКРО СЕФАРИМ"
          },
          {translation: "Она любит готовить", hebrew: "היא אוהבת לבשל", transcription: "ХИ ОЭВЕТ ЛЕВШЕЛ"},
          {translation: "Мы любим гулять", hebrew: "אנחנו אוהבים לטייל", transcription: "АНАХНУ ОЭВИМ ЛЕТАЕЛ"},
          {
            translation: "Вы любите слушать музыку",
            hebrew: "אתם אוהבים לשמוע מוזיקה",
            transcription: "АТЕМ ОЭВИМ ЛИШМОА МУЗИКА"
          },
          {translation: "Они любят играть", hebrew: "הם אוהבים לשחק", transcription: "ХЕМ ОЭВИМ ЛИСАХЕК"},
          {translation: "Я люблю пить кофе", hebrew: "אני אוהב לשתות קפה", transcription: "АНИ ОЭВ ЛИШТОТ КАФЕ"},
          {translation: "Ты любишь путешествовать", hebrew: "אתה אוהב לטוס", transcription: "АТА ОЭВ ЛАТУС"},
          {
            translation: "Он любит читать газеты",
            hebrew: "הוא אוהב לקרוא עיתונים",
            transcription: "ХУ ОЭВ ЛИКРО ИТОНОИМ"
          },
          {
            translation: "Мы любим смотреть фильмы",
            hebrew: "אנחנו אוהבים לראות סרטים",
            transcription: "АНАХНУ ОЭВИМ ЛИРОТ СЕРАТИМ"
          },
          {translation: "Они любят танцевать", hebrew: "הם אוהבים לרקוד", transcription: "ХЕМ ОЭВИМ ЛАРКОД"},
          {translation: "Я люблю учить", hebrew: "אני אוהב ללמוד", transcription: "АНИ ОЭВ ЛИЛЬМОД"},
          {translation: "Ты любишь работать", hebrew: "אתה אוהב לעבוד", transcription: "АТА ОЭВ ЛААВОД"},
          {translation: "Он любит плавать", hebrew: "הוא אוהב לשחות", transcription: "ХУ ОЭВ ЛИСХОТ"},
          {translation: "Мы любим отдыхать", hebrew: "אנחנו אוהבים לנוח", transcription: "АНАХНУ ОЭВИМ ЛАНУАХ"}
        ]
      },
      {
        lesson: "8",
        words: [
          {translation: "Как ты себя чувствуешь?", hebrew: "איך אתה מרגיש?", transcription: "ЭЙХ АТА МАРГИШ?"},
          {translation: "Я чувствую себя хорошо", hebrew: "אני מרגיש טוב", transcription: "АНИ МАРГИШ ТОВ"},
          {translation: "Ты чувствуешь себя плохо", hebrew: "אתה מרגיש רע", transcription: "АТА МАРГИШ Ра"},
          {
            translation: "Она чувствует себя усталой",
            hebrew: "היא מרגישה עייפה",
            transcription: "ХИ МАРГИША АЙЕФА"
          },
          {
            translation: "Мы чувствуем себя прекрасно",
            hebrew: "אנחנו מרגישים מצוין",
            transcription: "АНАХНУ МАРГИШИМ МЕЦУЙАН"
          },
          {
            translation: "Вы чувствуете себя лучше?",
            hebrew: "אתם מרגישים יותר טוב?",
            transcription: "АТЕМ МАРГИШИМ ЙОТЭР ТОВ?"
          },
          {translation: "Они чувствуют себя хорошо", hebrew: "הם מרגישים טוב", transcription: "ХЕМ МАРГИШИМ ТОВ"},
          {
            translation: "Как ты себя чувствуешь сейчас?",
            hebrew: "איך אתה מרגיש עכשיו?",
            transcription: "ЭЙХ АТА МАРГИШ АХШАВ?"
          },
          {
            translation: "Я чувствую себя немного усталым",
            hebrew: "אני מרגיש קצת עייף",
            transcription: "АНИ МАРГИШ КЦАТ АЙЕФ"
          },
          {translation: "Он чувствует себя плохо", hebrew: "הוא מרגיש רע", transcription: "ХУ МАРГИШ Ра"},
          {
            translation: "Она чувствует себя нормально",
            hebrew: "היא מרגישה בסדר",
            transcription: "ХИ МАРГИША БЕСЕДЕР"
          },
          {
            translation: "Мы чувствуем себя здоровыми",
            hebrew: "אנחנו מרגישים בריאים",
            transcription: "АНАХНУ МАРГИШИМ БАРИМ"
          },
          {
            translation: "Вы чувствуете себя хуже?",
            hebrew: "אתם מרגישים יותר גרוע?",
            transcription: "АТЕМ МАРГИШИМ ЙОТЭР ГАРУА?"
          },
          {
            translation: "Они чувствуют себя очень хорошо",
            hebrew: "הם מרגישים מאוד טוב",
            transcription: "ХЕМ МАРГИШИМ МЕОД ТОВ"
          }
        ]
      },
      {
        lesson: "9",
        words: [
          {translation: "Это моя книга", hebrew: "זאת הספר שלי", transcription: "ЗОТ ХАСЕФЕР ШЕЛИ"},
          {translation: "Это твоя сумка", hebrew: "זאת התיק שלך", transcription: "ЗОТ ХАТИК ШЕЛХА"},
          {translation: "Это его машина", hebrew: "זאת המכונית שלו", transcription: "ЗОТ ХАМЕХОНИТ ШЕЛО"},
          {translation: "Это её ручка", hebrew: "זאת העט שלה", transcription: "ЗОТ ХАЭТ ШЕЛА"},
          {translation: "Это наш дом", hebrew: "זה הבית שלנו", transcription: "ЗЕ ХАБАЙТ ШЕЛАНУ"},
          {translation: "Это ваша работа", hebrew: "זו העבודה שלכם", transcription: "ЗО АВОДА ШЕЛАХЕМ"},
          {translation: "Это их школа", hebrew: "זאת בית הספר שלהם", transcription: "ЗОТ БЕЙТ ХА-СЕФЕР ШЕЛАЕМ"},
          {translation: "Это моя ошибка", hebrew: "זאת הטעות שלי", transcription: "ЗОТ ХА-ТАУТ ШЕЛИ"},
          {translation: "Это твоя идея", hebrew: "זאת הרעיון שלך", transcription: "ЗОТ ХАРААЁН ШЕЛХА"},
          {translation: "Это его идея", hebrew: "זאת הרעיון שלו", transcription: "ЗОТ ХАРААЁН ШЕЛО"},
          {translation: "Это её работа", hebrew: "זאת העבודה שלה", transcription: "ЗОТ АВОДА ШЕЛА"},
          {translation: "Это наша встреча", hebrew: "זו הפגישה שלנו", transcription: "ЗО ХА-ПГИША ШЕЛАНУ"},
          {translation: "Это ваша школа", hebrew: "זו בית הספר שלכם", transcription: "ЗО БЕЙТ ХА-СЕФЕР ШЕЛАХЕМ"},
          {translation: "Это их ошибка", hebrew: "זו הטעות שלהם", transcription: "ЗО ХА-ТАУТ ШЕЛАЕМ"}
        ]
      },
      {
        lesson: "10",
        words: [
          {
            translation: "Я буду там через час",
            hebrew: "אני אהיה שם בעוד שעה",
            transcription: "АНИ АХИЕ ШАМ БЕОД ШАА"
          },
          {
            translation: "Он будет дома через два часа",
            hebrew: "הוא יהיה בבית בעוד שעתיים",
            transcription: "ХУ АХИЕ БЕЙТ БЕОД ШААТАИМ"
          },
          {translation: "Мы будем ждать тебя", hebrew: "אנחנו נחכה לך", transcription: "АНАХНУ НАХАКЕ ЛЕХА"},
          {translation: "Ты будешь работать завтра", hebrew: "אתה תעבוד מחר", transcription: "АТА ТААВОД МАХАР"},
          {
            translation: "Она будет отдыхать в отпуске",
            hebrew: "היא ת休休 בחופשה",
            transcription: "ХИ ТИТПШЕ БЕ-ХОФША"
          },
          {
            translation: "Они будут учить русский язык",
            hebrew: "הם ילמדו רוסית",
            transcription: "ХЕМ ЙИЛМЕДУ РУСИТ"
          },
          {
            translation: "Я буду гулять в парке",
            hebrew: "אני אצא לטיול בפארק",
            transcription: "АНИ ЭЦЕ ЛЕТИУЛ БЕ-ПАРК"
          },
          {
            translation: "Вы будете смотреть новый фильм",
            hebrew: "אתם תצפו בסרט חדש",
            transcription: "АТЕМ ТЦИПО БЕ-СЕРЕТ ХАДАШ"
          },
          {
            translation: "Мы будем обсуждать этот проект",
            hebrew: "אנחנו נדבר על הפרויקט הזה",
            transcription: "АНАХНУ НЕДАБЕР АЛЬ ХА-ПРОЕКТ ХАЗЕ"
          },
          {
            translation: "Он будет готовить ужин",
            hebrew: "הוא יכין ארוחת ערב",
            transcription: "ХУ ЯХИН АРУХАТ ЭРЕВ"
          }
        ]
      },
      {
        lesson: "11",
        words: [
          {translation: "Как ты себя чувствуешь?", hebrew: "איך אתה מרגיש?", transcription: "ЭЙХ АТА МАРГИШ?"},
          {translation: "Я чувствую себя хорошо", hebrew: "אני מרגיש טוב", transcription: "АНИ МАРГИШ ТОВ"},
          {translation: "Ты чувствуешь себя плохо", hebrew: "אתה מרגיש רע", transcription: "АТА МАРГИШ Ра"},
          {
            translation: "Она чувствует себя усталой",
            hebrew: "היא מרגישה עייפה",
            transcription: "ХИ МАРГИША АЙЕФА"
          },
          {
            translation: "Мы чувствуем себя прекрасно",
            hebrew: "אנחנו מרגישים מצוין",
            transcription: "АНАХНУ МАРГИШИМ МЕЦУЙАН"
          },
          {
            translation: "Вы чувствуете себя лучше?",
            hebrew: "אתם מרגישים יותר טוב?",
            transcription: "АТЕМ МАРГИШИМ ЙОТЭР ТОВ?"
          },
          {translation: "Они чувствуют себя хорошо", hebrew: "הם מרגישים טוב", transcription: "ХЕМ МАРГИШИМ ТОВ"},
          {
            translation: "Как ты себя чувствуешь сейчас?",
            hebrew: "איך אתה מרגיש עכשיו?",
            transcription: "ЭЙХ АТА МАРГИШ АХШАВ?"
          },
          {
            translation: "Я чувствую себя немного усталым",
            hebrew: "אני מרגיש קצת עייף",
            transcription: "АНИ МАРГИШ КЦАТ АЙЕФ"
          },
          {translation: "Он чувствует себя плохо", hebrew: "הוא מרגיש רע", transcription: "ХУ МАРГИШ Ра"}
        ]
      },
      {
        lesson: "12",
        words: [
          {translation: "Я работаю каждый день", hebrew: "אני עובד כל יום", transcription: "АНИ ОВЕД КОЛЬ ЙОМ"},
          {translation: "Ты работаешь в офисе", hebrew: "אתה עובד במשרד", transcription: "АТА ОВЕД БЕМИСРАД"},
          {translation: "Он работает в школе", hebrew: "הוא עובד בבית ספר", transcription: "ХУ ОВЕД БЕЙТ СЕФЕР"},
          {
            translation: "Она работает в больнице",
            hebrew: "היא עובדת בבית חולים",
            transcription: "ХИ ОВЕДЕТ БЕЙТ ХОЛИМ"
          },
          {
            translation: "Мы работаем в банке",
            hebrew: "אנחנו עובדים בבנק",
            transcription: "АНАХНУ ОВДИМ БЕ-БАНК"
          },
          {
            translation: "Вы работаете в магазине",
            hebrew: "אתם עובדים בחנות",
            transcription: "АТЕМ ОВДИМ БЕ-ХАНУТ"
          },
          {
            translation: "Они работают в ресторане",
            hebrew: "הם עובדים במסעדה",
            transcription: "ХЕМ ОВДИМ БЕ-МИСАДА"
          },
          {
            translation: "Я учусь в университете",
            hebrew: "אני לומד באוניברסיטה",
            transcription: "АНИ ЛОМЕД БЭ-УНИВЕРСИТА"
          },
          {
            translation: "Ты учишься в колледже",
            hebrew: "אתה לומד במכללה",
            transcription: "АТА ЛОМЕД БЕ-МИХЛАЛА"
          },
          {translation: "Он учится в школе", hebrew: "הוא לומד בבית ספר", transcription: "ХУ ЛОМЕД БЕЙТ СЕФЕР"}
        ]
      },
      {
        lesson: "13",
        words: [
          {translation: "Я могу помочь тебе", hebrew: "אני יכול לעזור לך", transcription: "АНИ ЯХОЛ ЛААЗОР ЛЕХА"},
          {
            translation: "Ты можешь работать здесь",
            hebrew: "אתה יכול לעבוד כאן",
            transcription: "АТА ЯХОЛ ЛААВОД КАН"
          },
          {
            translation: "Она может помочь мне",
            hebrew: "היא יכולה לעזור לי",
            transcription: "ХИ ЕХОЛА ЛААЗОР ЛИ"
          },
          {
            translation: "Мы можем пойти в кино",
            hebrew: "אנחנו יכולים ללכת לקולנוע",
            transcription: "АНАХНУ ЕХОЛИМ ЛАЛЕХЕТ ЛЕКОЛНОА"
          },
          {
            translation: "Вы можете встретиться со мной",
            hebrew: "אתם יכולים להיפגש איתי",
            transcription: "АТЕМ ЕХОЛИМ ЛЕ-ИПАГЕШ ИТИ"
          },
          {
            translation: "Они могут остаться дома",
            hebrew: "הם יכולים להישאר בבית",
            transcription: "ХЕМ ЕХОЛИМ ЛЕ-ИШАР БЕ-БЕЙТ"
          },
          {
            translation: "Я могу говорить на иврите",
            hebrew: "אני יכול לדבר בעברית",
            transcription: "АНИ ЯХОЛ ЛЕДАБЕР БЕ-ИВРИТ"
          },
          {
            translation: "Ты можешь писать на русском",
            hebrew: "אתה יכול לכתוב ברוסית",
            transcription: "АТА ЯХОЛ ЛИХТОВТ БЕ-РУСИТ"
          },
          {
            translation: "Он может читать на английском",
            hebrew: "הוא יכול לקרוא באנגלית",
            transcription: "ХУ ЯХОЛ ЛИКРО БЕ-АНГЛИТ"
          },
          {
            translation: "Мы можем поехать на море",
            hebrew: "אנחנו יכולים לנסוע לים",
            transcription: "АНАХНУ ЕХОЛИМ ЛИНСОА ЛЯЯМ"
          }
        ]
      },
      {
        lesson: "14",
        words: [
          {translation: "Где ты был вчера?", hebrew: "איפה היית אתמול?", transcription: "ЭЙФО ХАИТА ЭТМОЛ?"},
          {translation: "Я был на работе", hebrew: "הייתי בעבודה", transcription: "ХАЙТИ БЕ-АВОДА"},
          {translation: "Ты был дома?", hebrew: "היית בבית?", transcription: "ХАИТА БЕЙТ?"},
          {translation: "Она была на встрече", hebrew: "היא הייתה בפגישה", transcription: "ХИ ХАЙТА БЕ-ПГИША"},
          {translation: "Мы были в ресторане", hebrew: "היינו במסעדה", transcription: "ХАИНУ БЕ-МИСАДА"},
          {translation: "Вы были в отпуске?", hebrew: "הייתם בחופשה?", transcription: "ХАЙТЕМ БЕ-ХОФША?"},
          {translation: "Они были в кино", hebrew: "הם היו בקולנוע", transcription: "ХЕМ ХАЮ БЕ-КОЛНОА"},
          {translation: "Я был в магазине", hebrew: "הייתי בחנות", transcription: "ХАЙТИ БЕ-ХАНУТ"},
          {translation: "Ты был в школе?", hebrew: "היית בבית ספר?", transcription: "ХАИТА БЕЙТ СЕФЕР?"},
          {
            translation: "Он был в командировке",
            hebrew: "הוא היה בנסיעה לעבודה",
            transcription: "ХУ ХАЯ БЕ-НЕСИЯ ЛА-АВОДА"
          }
        ]
      },
      {
        lesson: "15",
        words: [
          {
            translation: "Как ты себя чувствуешь сегодня?",
            hebrew: "איך אתה מרגיש היום?",
            transcription: "ЭЙХ АТА МАРГИШ ХА-ЙОМ?"
          },
          {translation: "Я чувствую себя хорошо", hebrew: "אני מרגיש טוב", transcription: "АНИ МАРГИШ ТОВ"},
          {
            translation: "Ты чувствуешь себя лучше?",
            hebrew: "אתה מרגיש יותר טוב?",
            transcription: "АТА МАРГИШ ЙОТЭР ТОВ?"
          },
          {translation: "Она чувствует себя плохо", hebrew: "היא מרגישה רע", transcription: "ХИ МАРГИША РА"},
          {
            translation: "Мы чувствуем себя прекрасно",
            hebrew: "אנחנו מרגישים מצוין",
            transcription: "АНАХНУ МАРГИШИМ МЕЦУЙАН"
          },
          {
            translation: "Они чувствуют себя усталыми",
            hebrew: "הם מרגישים עייפים",
            transcription: "ХЕМ МАРГИШИМ АЙЕФИМ"
          },
          {
            translation: "Он чувствует себя очень усталым",
            hebrew: "הוא מרגיש מאוד עייף",
            transcription: "ХУ МАРГИШ МЕОД АЙЕФ"
          },
          {translation: "Ты чувствуешь себя хорошо?", hebrew: "אתה מרגיש טוב?", transcription: "АТА МАРГИШ ТОВ?"},
          {translation: "Я не чувствую себя плохо", hebrew: "אני לא מרגיש רע", transcription: "АНИ ЛО МАРГИШ РА"},
          {
            translation: "Она чувствует себя немного усталой",
            hebrew: "היא מרגישה קצת עייפה",
            transcription: "ХИ МАРГИША КЦАТ АЙЕФА"
          }
        ]
      },
      {
        lesson: "16",
        words: [
          {
            translation: "Мы будем работать завтра",
            hebrew: "אנחנו נעבוד מחר",
            transcription: "АНАХНУ НААВОД МАХАР"
          },
          {
            translation: "Ты будешь учиться в университете",
            hebrew: "אתה תלמד באוניברסיטה",
            transcription: "АТА ТИЛЬМЕД БЭ-УНИВЕРСИТА"
          },
          {
            translation: "Он будет работать в магазине",
            hebrew: "הוא יעבוד בחנות",
            transcription: "ХУ ЯАВОД БЕ-ХАНУТ"
          },
          {
            translation: "Она будет путешествовать по миру",
            hebrew: "היא תטוס ברחבי העולם",
            transcription: "ХИ ТИТУС БЕРАХАВЕЙ ОЛАМ"
          },
          {
            translation: "Мы будем смотреть новый фильм",
            hebrew: "אנחנו נצפה בסרט חדש",
            transcription: "АНАХНУ НЕЦПЕ БЕ-СЕРЕТ ХАДАШ"
          },
          {
            translation: "Они будут работать над проектом",
            hebrew: "הם יעבדו על פרויקט",
            transcription: "ХЕМ ЯАВДУ АЛЬ ПРОЕКТ"
          },
          {
            translation: "Ты будешь готовить ужин",
            hebrew: "אתה תכין ארוחת ערב",
            transcription: "АТА ТАХИН АРУХАТ ЭРЕВ"
          },
          {
            translation: "Я буду готовить обед",
            hebrew: "אני אכין ארוחת צהריים",
            transcription: "АНИ АХИН АРУХАТ ЦАХАРАИМ"
          },
          {
            translation: "Вы будете работать в офисе",
            hebrew: "אתם תעבדו במשרד",
            transcription: "АТЕМ ТААВДУ БЕМИСРАД"
          },
          {translation: "Она будет отдыхать", hebrew: "היא תנוח", transcription: "ХИ ТАНУАХ"}
        ]
      },
      {
        lesson: "17",
        words: [
          {translation: "Где ты был вчера?", hebrew: "איפה היית אתמול?", transcription: "ЭЙФО ХАИТА ЭТМОЛ?"},
          {translation: "Я был на работе", hebrew: "הייתי בעבודה", transcription: "ХАЙТИ БЕ-АВОДА"},
          {translation: "Ты был дома?", hebrew: "היית בבית?", transcription: "ХАИТА БЕЙТ?"},
          {translation: "Она была на встрече", hebrew: "היא הייתה בפגישה", transcription: "ХИ ХАЙТА БЕ-ПГИША"},
          {translation: "Мы были в ресторане", hebrew: "היינו במסעדה", transcription: "ХАИНУ БЕ-МИСАДА"},
          {translation: "Вы были в отпуске?", hebrew: "הייתם בחופשה?", transcription: "ХАЙТЕМ БЕ-ХОФША?"},
          {translation: "Они были в кино", hebrew: "הם היו בקולנוע", transcription: "ХЕМ ХАЮ БЕ-КОЛНОА"},
          {translation: "Я был в магазине", hebrew: "הייתי בחנות", transcription: "ХАЙТИ БЕ-ХАНУТ"},
          {translation: "Ты был в школе?", hebrew: "היית בבית ספר?", transcription: "ХАИТА БЕЙТ СЕФЕР?"},
          {
            translation: "Он был в командировке",
            hebrew: "הוא היה בנסיעה לעבודה",
            transcription: "ХУ ХАЯ БЕ-НЕСИЯ ЛА-АВОДА"
          }
        ]
      },
      {
        lesson: "18",
        words: [
          {translation: "Я был там вчера", hebrew: "הייתי שם אתמול", transcription: "ХАЙТИ ШАМ ЭТМОЛ"},
          {
            translation: "Ты был на работе вчера?",
            hebrew: "היית בעבודה אתמול?",
            transcription: "ХАИТА БЕ-АВОДА ЭТМОЛ?"
          },
          {
            translation: "Он был в школе вчера",
            hebrew: "הוא היה בבית ספר אתמול",
            transcription: "ХУ ХАЯ БЕЙТ СЕФЕР ЭТМОЛ"
          },
          {translation: "Я работал в магазине", hebrew: "עבדתי בחנות", transcription: "АВАДТИ БЕ-ХАНУТ"},
          {
            translation: "Ты учился в университете",
            hebrew: "למדת באוניברסיטה",
            transcription: "ЛАМАДТА БЭ-УНИВЕРСИТА"
          },
          {translation: "Он работал в офисе", hebrew: "עבד במשרד", transcription: "АВАД БЕМИСРАД"},
          {translation: "Мы отдыхали на пляже", hebrew: "נחנו נחנו בחוף", transcription: "НАХНУ НАХНУ БЕ-ХОФ"},
          {translation: "Они были в кино", hebrew: "הם היו בקולנוע", transcription: "ХЕМ ХАЮ БЕ-КОЛНОА"},
          {translation: "Я был в отпуске", hebrew: "הייתי בחופשה", transcription: "ХАЙТИ БЕ-ХОФША"},
          {translation: "Ты был в ресторане?", hebrew: "היית במסעדה?", transcription: "ХАИТА БЕ-МИСАДА?"}
        ]
      },
      {
        lesson: "19",
        words: [
          {
            translation: "Ты хочешь пойти в парк?",
            hebrew: "אתה רוצה ללכת לפארק?",
            transcription: "АТА РОЦЕ ЛАЛЕХЕТ ЛЕ-ПАРК?"
          },
          {
            translation: "Я хочу поехать на море",
            hebrew: "אני רוצה לנסוע לים",
            transcription: "АНИ РОЦЕ ЛИНСОА ЛЯЯМ"
          },
          {
            translation: "Она хочет поехать в горы",
            hebrew: "היא רוצה לנסוע להרים",
            transcription: "ХИ РОЦА ЛИНСОА ЛЕ-ХАРИМ"
          },
          {
            translation: "Мы хотим поехать в Москву",
            hebrew: "אנחנו רוצים לנסוע למוסקבה",
            transcription: "АНАХНУ РОЦИМ ЛИНСОА ЛЕ-МОСКВА"
          },
          {
            translation: "Ты хочешь смотреть этот фильм?",
            hebrew: "אתה רוצה לראות את הסרט הזה?",
            transcription: "АТА РОЦЕ ЛИРОТ ЭТ ХА-СЕРЕТ ХАЗЕ?"
          },
          {
            translation: "Я хочу поужинать в ресторане",
            hebrew: "אני רוצה לאכול במסעדה",
            transcription: "АНИ РОЦЕ ЛЕЭХОЛ БЕ-МИСАДА"
          },
          {
            translation: "Вы хотите отдыхать на пляже?",
            hebrew: "אתם רוצים לנוח בחוף?",
            transcription: "АТЕМ РОЦИМ ЛАНУАХ БЕ-ХОФ?"
          },
          {
            translation: "Они хотят работать в офисе",
            hebrew: "הם רוצים לעבוד במשרד",
            transcription: "ХЕМ РОЦИМ ЛААВОД БЕМИСРАД"
          },
          {
            translation: "Ты хочешь пойти в кино?",
            hebrew: "אתה רוצה ללכת לקולנוע?",
            transcription: "АТА РОЦЕ ЛАЛЕХЕТ ЛЕКОЛНОА?"
          },
          {
            translation: "Мы хотим посмотреть этот фильм",
            hebrew: "אנחנו רוצים לראות את הסרט הזה",
            transcription: "АНАХНУ РОЦИМ ЛИРОТ ЭТ ХА-СЕРЕТ ХАЗЕ"
          }
        ]
      },
      {
        lesson: "20",
        words: [
          {
            translation: "Я думаю, что ты прав",
            hebrew: "אני חושב שאתה צודק",
            transcription: "АНИ ХОШЕВ ШЕ-АТА ЦОДЕК"
          },
          {
            translation: "Ты думаешь, что она права?",
            hebrew: "אתה חושב שהיא צודקת?",
            transcription: "АТА ХОШЕВ ШЕ-ХИ ЦОДЕКЕТ?"
          },
          {
            translation: "Он думает, что это хорошая идея",
            hebrew: "הוא חושב שזו רעיון טוב",
            transcription: "ХУ ХОШЕВ ШЕ-ЗО РААЙОН ТОВ"
          },
          {
            translation: "Мы думаем, что это интересный фильм",
            hebrew: "אנחנו חושבים שזה סרט מעניין",
            transcription: "АНАХНУ ХОШВИМ ШЕ-ЗО СЕРЕТ МЕАНЬЕН"
          },
          {
            translation: "Вы думаете, что это правильно?",
            hebrew: "אתם חושבים שזה נכון?",
            transcription: "АТЕМ ХОШВИМ ШЕ-ЗО НАХОН?"
          },
          {
            translation: "Они думают, что он ошибается",
            hebrew: "הם חושבים שהוא טועה",
            transcription: "ХЕМ ХОШВИМ ШЕ-ХУ ТОЭ"
          },
          {
            translation: "Я думаю, что это важное решение",
            hebrew: "אני חושב שזו החלטה חשובה",
            transcription: "АНИ ХОШЕВ ШЕ-ЗО ХАХЛАТА ХАШУВА"
          },
          {
            translation: "Ты думаешь, что она ошибается?",
            hebrew: "אתה חושב שהיא טועה?",
            transcription: "АТА ХОШЕВ ШЕ-ХИ ТОЭ?"
          },
          {
            translation: "Мы думаем, что это не совсем правильно",
            hebrew: "אנחנו חושבים שזה לא בדיוק נכון",
            transcription: "АНАХНУ ХОШВИМ ШЕ-ЗО ЛО БЕДЮК НАХОН"
          },
          {translation: "Ты уверен в этом?", hebrew: "אתה בטוח בזה?", transcription: "АТА БАТУАХ БЕЗЕ?"}
        ]
      },
      {
        lesson: "21",
        words: [
          {
            translation: "Как ты себя чувствуешь сегодня?",
            hebrew: "איך אתה מרגיש היום?",
            transcription: "ЭЙХ АТА МАРГИШ ХА-ЙОМ?"
          },
          {translation: "Я чувствую себя хорошо", hebrew: "אני מרגיש טוב", transcription: "АНИ МАРГИШ ТОВ"},
          {
            translation: "Ты чувствуешь себя лучше?",
            hebrew: "אתה מרגיש יותר טוב?",
            transcription: "АТА МАРГИШ ЙОТЭР ТОВ?"
          },
          {translation: "Она чувствует себя плохо", hebrew: "היא מרגישה רע", transcription: "ХИ МАРГИША РА"},
          {
            translation: "Мы чувствуем себя прекрасно",
            hebrew: "אנחנו מרגישים מצוין",
            transcription: "АНАХНУ МАРГИШИМ МЕЦУЙАН"
          },
          {
            translation: "Они чувствуют себя усталыми",
            hebrew: "הם מרגישים עייפים",
            transcription: "ХЕМ МАРГИШИМ АЙЕФИМ"
          },
          {
            translation: "Он чувствует себя очень усталым",
            hebrew: "הוא מרגיש מאוד עייף",
            transcription: "ХУ МАРГИШ МЕОД АЙЕФ"
          },
          {translation: "Ты чувствуешь себя хорошо?", hebrew: "אתה מרגיש טוב?", transcription: "АТА МАРГИШ ТОВ?"},
          {translation: "Я не чувствую себя плохо", hebrew: "אני לא מרגיש רע", transcription: "АНИ ЛО МАРГИШ РА"},
          {
            translation: "Она чувствует себя немного усталой",
            hebrew: "היא מרגישה קצת עייפה",
            transcription: "ХИ МАРГИША КЦАТ АЙЕФА"
          }
        ]
      },
      {
        lesson: "22",
        words: [
          {
            translation: "Мы будем работать завтра",
            hebrew: "אנחנו נעבוד מחר",
            transcription: "АНАХНУ НААВОД МАХАР"
          },
          {
            translation: "Ты будешь учиться в университете",
            hebrew: "אתה תלמד באוניברסיטה",
            transcription: "АТА ТИЛЬМЕД БЭ-УНИВЕРСИТА"
          },
          {
            translation: "Он будет работать в магазине",
            hebrew: "הוא יעבוד בחנות",
            transcription: "ХУ ЯАВОД БЕ-ХАНУТ"
          },
          {
            translation: "Она будет путешествовать по миру",
            hebrew: "היא תטוס ברחבי העולם",
            transcription: "ХИ ТИТУС БЕРАХАВЕЙ ОЛАМ"
          },
          {
            translation: "Мы будем смотреть новый фильм",
            hebrew: "אנחנו נצפה בסרט חדש",
            transcription: "АНАХНУ НЕЦПЕ БЕ-СЕРЕТ ХАДАШ"
          },
          {
            translation: "Они будут работать над проектом",
            hebrew: "הם יעבדו על פרויקט",
            transcription: "ХЕМ ЯАВДУ АЛЬ ПРОЕКТ"
          },
          {
            translation: "Ты будешь готовить ужин",
            hebrew: "אתה תכין ארוחת ערב",
            transcription: "АТА ТАХИН АРУХАТ ЭРЕВ"
          },
          {
            translation: "Я буду готовить обед",
            hebrew: "אני אכין ארוחת צהריים",
            transcription: "АНИ АХИН АРУХАТ ЦАХАРАИМ"
          },
          {
            translation: "Вы будете работать в офисе",
            hebrew: "אתם תעבדו במשרד",
            transcription: "АТЕМ ТААВДУ БЕМИСРАД"
          },
          {translation: "Она будет отдыхать", hebrew: "היא תנוח", transcription: "ХИ ТАНУАХ"}
        ]
      },
      {
        lesson: "23",
        words: [
          {translation: "Где ты был вчера?", hebrew: "איפה היית אתמול?", transcription: "ЭЙФО ХАИТА ЭТМОЛ?"},
          {translation: "Я был на работе", hebrew: "הייתי בעבודה", transcription: "ХАЙТИ БЕ-АВОДА"},
          {translation: "Ты был дома?", hebrew: "היית בבית?", transcription: "ХАИТА БЕЙТ?"},
          {translation: "Она была на встрече", hebrew: "היא הייתה בפגישה", transcription: "ХИ ХАЙТА БЕ-ПГИША"},
          {translation: "Мы были в ресторане", hebrew: "היינו במסעדה", transcription: "ХАИНУ БЕ-МИСАДА"},
          {translation: "Вы были в отпуске?", hebrew: "הייתם בחופשה?", transcription: "ХАЙТЕМ БЕ-ХОФША?"},
          {translation: "Они были в кино", hebrew: "הם היו בקולנוע", transcription: "ХЕМ ХАЮ БЕ-КОЛНОА"},
          {translation: "Я был в магазине", hebrew: "הייתי בחנות", transcription: "ХАЙТИ БЕ-ХАНУТ"},
          {translation: "Ты был в школе?", hebrew: "היית בבית ספר?", transcription: "ХАИТА БЕЙТ СЕФЕР?"},
          {
            translation: "Он был в командировке",
            hebrew: "הוא היה בנסיעה לעבודה",
            transcription: "ХУ ХАЯ БЕ-НЕСИЯ ЛА-АВОДА"
          }
        ]
      },
      {
        lesson: "24",
        words: [
          {translation: "Я был там вчера", hebrew: "הייתי שם אתמול", transcription: "ХАЙТИ ШАМ ЭТМОЛ"},
          {
            translation: "Ты был на работе вчера?",
            hebrew: "היית בעבודה אתמול?",
            transcription: "ХАИТА БЕ-АВОДА ЭТМОЛ?"
          },
          {
            translation: "Он был в школе вчера",
            hebrew: "הוא היה בבית ספר אתמול",
            transcription: "ХУ ХАЯ БЕЙТ СЕФЕР ЭТМОЛ"
          },
          {translation: "Я работал в магазине", hebrew: "עבדתי בחנות", transcription: "АВАДТИ БЕ-ХАНУТ"},
          {
            translation: "Ты учился в университете",
            hebrew: "למדת באוניברסיטה",
            transcription: "ЛАМАДТА БЭ-УНИВЕРСИТА"
          },
          {translation: "Он работал в офисе", hebrew: "עבד במשרד", transcription: "АВАД БЕМИСРАД"},
          {translation: "Мы отдыхали на пляже", hebrew: "נחנו נחנו בחוף", transcription: "НАХНУ НАХНУ БЕ-ХОФ"},
          {translation: "Они были в кино", hebrew: "הם היו בקולנוע", transcription: "ХЕМ ХАЮ БЕ-КОЛНОА"},
          {translation: "Я был в отпуске", hebrew: "הייתי בחופשה", transcription: "ХАЙТИ БЕ-ХОФША"},
          {translation: "Ты был в ресторане?", hebrew: "היית במסעדה?", transcription: "ХАИТА БЕ-МИСАДА?"}
        ]
      },
      {
        lesson: "25",
        words: [
          {
            translation: "Ты хочешь пойти в парк?",
            hebrew: "אתה רוצה ללכת לפארק?",
            transcription: "АТА РОЦЕ ЛАЛЕХЕТ ЛЕ-ПАРК?"
          },
          {
            translation: "Я хочу поехать на море",
            hebrew: "אני רוצה לנסוע לים",
            transcription: "АНИ РОЦЕ ЛИНСОА ЛЯЯМ"
          },
          {
            translation: "Она хочет поехать в горы",
            hebrew: "היא רוצה לנסוע להרים",
            transcription: "ХИ РОЦА ЛИНСОА ЛЕ-ХАРИМ"
          },
          {
            translation: "Мы хотим поехать в Москву",
            hebrew: "אנחנו רוצים לנסוע למוסקבה",
            transcription: "АНАХНУ РОЦИМ ЛИНСОА ЛЕ-МОСКВА"
          },
          {
            translation: "Ты хочешь смотреть этот фильм?",
            hebrew: "אתה רוצה לראות את הסרט הזה?",
            transcription: "АТА РОЦЕ ЛИРОТ ЭТ ХА-СЕРЕТ ХАЗЕ?"
          },
          {
            translation: "Он хочет купить новую машину",
            hebrew: "הוא רוצה לקנות רכב חדש",
            transcription: "ХУ РОЦЕ ЛИКНОТ РЕХЕВ ХАДАШ"
          },
          {
            translation: "Она хочет работать в этом офисе",
            hebrew: "היא רוצה לעבוד במשרד הזה",
            transcription: "ХИ РОЦА ЛААВОД БЕМИСРАД ХАЗЕ"
          },
          {
            translation: "Мы хотим поужинать в ресторане",
            hebrew: "אנחנו רוצים לאכול במסעדה",
            transcription: "АНАХНУ РОЦИМ ЛЕЭХОЛ БЕ-МИСАДА"
          },
          {
            translation: "Они хотят поехать на экскурсию",
            hebrew: "הם רוצים לנסוע לסיור",
            transcription: "ХЕМ РОЦИМ ЛИНСОА ЛЕ-СИЮР"
          },
          {
            translation: "Я хочу поехать в страну",
            hebrew: "אני רוצה לנסוע למדינה",
            transcription: "АНИ РОЦЕ ЛИНСОА ЛЕ-МЕДИНА"
          }
        ]
      },
      {
        lesson: "26",
        words: [
          {translation: "Ты согласен?", hebrew: "אתה מסכים?", transcription: "АТА МАСКИМ?"},
          {translation: "Я согласен", hebrew: "אני מסכים", transcription: "АНИ МАСКИМ"},
          {translation: "Она согласна", hebrew: "היא מסכימה", transcription: "ХИ МАСКИМА"},
          {translation: "Мы согласны", hebrew: "אנחנו מסכימים", transcription: "АНАХНУ МАСКИМИМ"},
          {translation: "Вы согласны?", hebrew: "אתם מסכימים?", transcription: "АТЕМ МАСКИМИМ?"},
          {translation: "Они согласны", hebrew: "הם מסכימים", transcription: "ХЕМ МАСКИМИМ"},
          {translation: "Ты не согласен?", hebrew: "אתה לא מסכים?", transcription: "АТА ЛО МАСКИМ?"},
          {translation: "Она не согласна", hebrew: "היא לא מסכימה", transcription: "ХИ ЛО МАСКИМА"},
          {translation: "Мы не согласны", hebrew: "אנחנו לא מסכימים", transcription: "АНАХНУ ЛО МАСКИМИМ"},
          {translation: "Они не согласны", hebrew: "הם לא מסכימים", transcription: "ХЕМ ЛО МАСКИМИМ"}
        ]
      },
      {
        lesson: "27",
        words: [
          {translation: "Ты ждешь меня?", hebrew: "אתה מחכה לי?", transcription: "АТА МЕХАКЕ ЛИ?"},
          {translation: "Я жду тебя", hebrew: "אני מחכה לך", transcription: "АНИ МЕХАКЕ ЛАХ"},
          {translation: "Она ждет нас", hebrew: "היא מחכה לנו", transcription: "ХИ МЕХАКА ЛАНУ"},
          {translation: "Мы ждем их", hebrew: "אנחנו מחכים להם", transcription: "АНАХНУ МЕХАКИМ ЛЭЕМ"},
          {translation: "Вы ждете нас?", hebrew: "אתם מחכים לנו?", transcription: "АТЕМ МЕХАКИМ ЛАНУ?"},
          {translation: "Они ждут нас", hebrew: "הם מחכים לנו", transcription: "ХЕМ МЕХАКИМ ЛАНУ"},
          {translation: "Ты ждешь кого?", hebrew: "אתה מחכה למי?", transcription: "АТА МЕХАКЕ ЛЕМИ?"},
          {translation: "Я жду их", hebrew: "אני מחכה להם", transcription: "АНИ МЕХАКЕ ЛЭЕМ"},
          {translation: "Он ждет тебя", hebrew: "הוא מחכה לך", transcription: "ХУ МЕХАКЕ ЛАХ"},
          {
            translation: "Мы ждем машину",
            hebrew: "אנחנו מחכים למכונית",
            transcription: "АНАХНУ МЕХАКИМ ЛЕ-МЕХОНИТ"
          }
        ]
      },
      {
        lesson: "28",
        words: [
          {translation: "Ты сидишь на стуле", hebrew: "אתה יושב על כיסא", transcription: "АТА ЙОШЕВ АЛ КИСЭ"},
          {translation: "Я стою", hebrew: "אני עומד", transcription: "АНИ ОМЕД"},
          {translation: "Она стоит", hebrew: "היא עומדת", transcription: "ХИ ОМЕДЕТ"},
          {translation: "Мы сидим", hebrew: "אנחנו יושבים", transcription: "АНАХНУ ЙОШВИМ"},
          {translation: "Вы стоите", hebrew: "אתם עומדים", transcription: "АТЕМ ОМДИМ"},
          {translation: "Они сидят", hebrew: "הם יושבים", transcription: "ХЕМ ЙОШВИМ"},
          {translation: "Ты работаешь здесь?", hebrew: "אתה עובד כאן?", transcription: "АТА ОВЕД КАН?"},
          {
            translation: "Я работаю в этом офисе",
            hebrew: "אני עובד במשרד הזה",
            transcription: "АНИ ОВЕД БЕМИСРАД ХАЗЕ"
          },
          {translation: "Он работает здесь", hebrew: "הוא עובד כאן", transcription: "ХУ ОВЕД КАН"},
          {
            translation: "Мы работаем в офисе",
            hebrew: "אנחנו עובדים במשרד",
            transcription: "АНАХНУ ОВДИМ БЕМИСРАД"
          }
        ]
      },
      {
        lesson: "29",
        words: [
          {translation: "Ты говоришь по-русски?", hebrew: "אתה מדבר רוסית?", transcription: "АТА МЕДАБЕР РУСИТ?"},
          {translation: "Я говорю немного", hebrew: "אני מדבר קצת", transcription: "АНИ МЕДАБЕР КЦАТ"},
          {translation: "Он говорит по-английски", hebrew: "הוא מדבר אנגלית", transcription: "ХУ МЕДАБЕР АНГЛИТ"},
          {
            translation: "Она говорит по-еврейски",
            hebrew: "היא מדברת עברית",
            transcription: "ХИ МЕДАБЕРЕТ ИВРИТ"
          },
          {
            translation: "Мы говорим по-английски",
            hebrew: "אנחנו מדברים אנגלית",
            transcription: "АНАХНУ МЕДАБРИМ АНГЛИТ"
          },
          {
            translation: "Они говорят по-немецки",
            hebrew: "הם מדברים גרמנית",
            transcription: "ХЕМ МЕДАБРИМ ГЕРМАНИТ"
          },
          {translation: "Ты понимаешь?", hebrew: "אתה מבין?", transcription: "АТА МЕВИН?"},
          {translation: "Я понимаю", hebrew: "אני מבין", transcription: "АНИ МЕВИН"},
          {translation: "Он понимает", hebrew: "הוא מבין", transcription: "ХУ МЕВИН"},
          {translation: "Мы понимаем", hebrew: "אנחנו מבינים", transcription: "АНАХНУ МЕВИНИМ"}
        ]
      },
      {
        lesson: "30",
        words: [
          {translation: "Ты хочешь помочь?", hebrew: "אתה רוצה לעזור?", transcription: "АТА РОЦЕ ЛААЗОР?"},
          {translation: "Я хочу помочь", hebrew: "אני רוצה לעזור", transcription: "АНИ РОЦЕ ЛААЗОР"},
          {translation: "Он хочет помочь", hebrew: "הוא רוצה לעזור", transcription: "ХУ РОЦЕ ЛААЗОР"},
          {translation: "Мы хотим помочь", hebrew: "אנחנו רוצים לעזור", transcription: "АНАХНУ РОЦИМ ЛААЗОР"},
          {translation: "Вы хотите помочь?", hebrew: "אתם רוצים לעזור?", transcription: "АТЕМ РОЦИМ ЛААЗОР?"},
          {translation: "Они хотят помочь", hebrew: "הם רוצים לעזור", transcription: "ХЕМ РОЦИМ ЛААЗОР"},
          {translation: "Я могу помочь", hebrew: "אני יכול לעזור", transcription: "АНИ ЯХОЛ ЛААЗОР"},
          {translation: "Ты можешь помочь?", hebrew: "אתה יכול לעזור?", transcription: "АТА ЯХОЛ ЛААЗОР?"},
          {translation: "Она может помочь", hebrew: "היא יכולה לעזור", transcription: "ХИ ЕХОЛА ЛААЗОР"},
          {translation: "Мы можем помочь", hebrew: "אנחנו יכולים לעזור", transcription: "АНАХНУ ЕХОЛИМ ЛААЗОР"}
        ]
      }
    ]
  };
  private thirdLessonData = {
    lessons: [
      {
        lesson: "1",
        words: [
          {translation: "Часто", hebrew: "לעתים קרובות", transcription: "ЛЕИТИМ КРОВОТ"},
          {
            translation: "Есть самолёт в четыре тридцать.",
            hebrew: "יש מוטס בארבע וחצי",
            transcription: "ЕШ МОТОС БЭ АРБА ВЭ ХЕЦИ"
          },
          {translation: "Посмотри! (м. р.)", hebrew: "תראה", transcription: "ТИРЪЕ"},
          {
            translation: "Ты знаешь, где почта? (ж. р.)",
            hebrew: "הדואר איפה יודעת את",
            transcription: "АТ ЁДАТ, ЭЙФО АДОАР ?"
          },
          {
            translation: "Ты можешь показать мне на карте?",
            hebrew: "את יכולה להראות לי במפה?",
            transcription: "АТ ЯХОЛЯ ЛЕИРЪОТ ЛИ БЭ МАПА?"
          },
          {
            translation: "У меня самолет в Италию через несколько минут",
            hebrew: "יש לי מוטוס לאיטליה בעוד כמה רגעים",
            transcription: "ЕШ ЛИ МОТОС ЛЕ ИТАЛИЯ БЭ ОТ КАМА РЭГАИМ"
          },
          {
            translation: "Это сегодняшняя газета?",
            hebrew: "היום של העיון זה",
            transcription: "ЗЭ АИТОН ШЕЛЬ АЁМ ?"
          },
          {translation: "На прошлой неделе", hebrew: "בשבוע שעבר", transcription: "БЭ ШАВУА ШЭ АВАР"},
          {
            translation: "Это первый поворот на право",
            hebrew: "הפניה הראשונה ימינה",
            transcription: "ЗОТ АПНИЯ РИШОНА ЯМИНА"
          },
          {
            translation: "Что ты делаешь на этих выходных?",
            hebrew: "מה עושה את בסוף השבוע?",
            transcription: "МА АТ ОСА БЭ СОФ АШЕВУА?"
          },
          {translation: "Пойдем (давай, пойдем)", hebrew: "בואי נלך", transcription: "БОЙ НЕЛЕХ"},
          {translation: "Приходи", hebrew: "בוי", transcription: "БОЙ"},
          {
            translation: "Тогда до выходных!",
            hebrew: "אז לפני סוף השבוע",
            transcription: "АЗ ЛИФНЕЙ БЭ СОФ АШЭВУА"
          },
          {
            translation: "Как до вас добираться?",
            hebrew: "איך מגיעים אליכם?",
            transcription: "ЭЙХ МАГИИМ ЭЛЕЙХЭМ ?"
          },
          {translation: "Я опоздал", hebrew: "אחרתי", transcription: "ЭХАРТИ"},
          {translation: "Он приехал", hebrew: "הוא בא", transcription: "ХУ БА"},
          {translation: "Ты приехал!", hebrew: "את באתה", transcription: "БАТА"},
          {translation: "Я приехал", hebrew: "באתי", transcription: "БАТИ"},
          {translation: "С радостью", hebrew: "ברצון", transcription: "БЭ РАЦОН"},
          {translation: "Входи, пожалуйста (м. р.)", hebrew: "תיכנס בבקשה", transcription: "ТИХАНЭС, БЭВАКАША"}
        ]
      },
      {
        lesson: "2",
        words: [
          {translation: "Знакомься", hebrew: "תכיר", transcription: "ТАКИР"},
          {translation: "Не страшно", hebrew: "לא נורא", transcription: "ЛО НОРА"},
          {translation: "За жизнь", hebrew: "לחיים", transcription: "ЛЕ ХАЙМ"},
          {translation: "Если", hebrew: "אם", transcription: "ИМ"},
          {translation: "Красный", hebrew: "אדום", transcription: "АДОМ"},
          {translation: "Белый", hebrew: "לבן", transcription: "ЛАВАН"},
          {translation: "Очень приятно", hebrew: "מאוד נעים", transcription: "НАИМ МЭОД"},
          {translation: "Дождь", hebrew: "גשם", transcription: "ГЕШЕМ"},
          {translation: "Фотографии (картинки)", hebrew: "תמונות", transcription: "ТМУНОТ"},
          {translation: "Идёт дождь?", hebrew: "יורד גשם?", transcription: "ГЕШЕМ ЁРЭД?"},
          {translation: "Летом", hebrew: "בקיץ", transcription: "БЭ КАИЦ"},
          {
            translation: "Он берет несколько курсов иврита",
            hebrew: "הוא לוקח כמה קורסים לעברית",
            transcription: "ХУ ЛОКЕАХ КАМА КУРСИМ ЛЕ ИВРИТ"
          }
        ]
      },
      {
        lesson: "3",
        words: [
          {translation: "Моя госпожа", hebrew: "גברתי", transcription: "ГВЭРТИ"},
          {
            translation: "Если ты можешь, езжай в Бостон летом",
            hebrew: "אם אתה יכול, בוא לבוסטון בקיץ",
            transcription: "ИМ АТА ЯХОЛЬ, БО ЛЕ БОСТОН БА КАИЦ"
          },
          {translation: "Я бы хотела показать", hebrew: "רוצה הייתי להראות", transcription: "ХАИТИ РОЦА ЛЕАРЪОТ"},
          {translation: "Показать вам", hebrew: "להראות לכם", transcription: "ЛЭАРЪОТ ЛА ХЭМ"},
          {translation: "В следующем месяце", hebrew: "בחודש הבא", transcription: "БЭ ХОДЭШ АБА"},
          {
            translation: "Я могу показать тебе",
            hebrew: "אני יכולה להראות לך",
            transcription: "АНИ ЯХОЛЯ ЛЕАРЪОТ ЛЕХА"
          },
          {translation: "Она берёт", hebrew: "היא לוקחת", transcription: "ХИ ЛОКАХАТ"},
          {
            translation: "Ты выросла в Сан Франциско",
            hebrew: "גדלת בסן פרנסיסקו",
            transcription: "ГАДАЛЬТ БЭ САН ФРАНЦИСКО"
          },
          {
            translation: "Я выросла в Нью Йорке",
            hebrew: "גדלתי בניו יורק",
            transcription: "ГАДАЛЬТИ БЭ НЬЮ ЙОРК"
          },
          {translation: "Где вырос ты?", hebrew: "איפה גדלת?", transcription: "ЭЙФО ГАДАЛЬТА?"}
        ]
      },
      {
        lesson: "4",
        words: [
          {
            translation: "Ты можешь называть меня Тамар",
            hebrew: "אתה יכול לקרוא לי תמר",
            transcription: "АТА ЯХОЛЬ ЛИКРО ЛИ ТАМАР"
          },
          {translation: "Для меня", hebrew: "בשבילי", transcription: "БИШВИЛИ"},
          {translation: "Откуда ты?", hebrew: "מאיפה אתה?", transcription: "МЭ ЭЙФО АТА?"},
          {translation: "Зима, зимой", hebrew: "חורף, בחורף", transcription: "ХОРЭФ, БА ХОРЭФ"},
          {translation: "Снег", hebrew: "שלג", transcription: "ШЕЛЕГ"},
          {translation: "Что она преподаёт?", hebrew: "מה היא מלמדת?", transcription: "МА ХИ МЕЛАМЕДЭТ?"},
          {translation: "Брат", hebrew: "אח", transcription: "АХ"},
          {
            translation: "Он женат на израильтянке",
            hebrew: "הוא נשוי לישראלית",
            transcription: "ХУ НАСУЙ ЛЕ ИЗРАИЛИТ"
          },
          {translation: "Сестра. Моя сестра", hebrew: "אחות שלי", transcription: "АХОТ, ААХОТ ШЕЛИ"},
          {translation: "Замужем", hebrew: "נשואה", transcription: "НЭСУА"},
          {translation: "Её муж", hebrew: "בעלה", transcription: "БААЛА"}
        ]
      },
      {
        lesson: "5",
        words: [
          {translation: "Это прекрасный город", hebrew: "זו עיר מדהימה", transcription: "ЗУ ИР МАДХИМА"},
          {translation: "Уютный", hebrew: "נעים", transcription: "НАИМ"},
          {translation: "Прохладный", hebrew: "קריר", transcription: "КАРИР"},
          {translation: "Зимой здесь холодно", hebrew: "בחורף כאן קר", transcription: "БЭ ХОРЭФ КАН КАР"},
          {
            translation: "Какая погода будет завтра?",
            hebrew: "איזה מזג אוויר יהיה מחר?",
            transcription: "ЭЙЗЭ МЭЗЕГ ОВИР ИЙЕ МАХАР?"
          },
          {translation: "Быстро", hebrew: "מהר", transcription: "МЭХЕР"},
          {translation: "Понять", hebrew: "להבין", transcription: "ЛЕХАВИН"},
          {translation: "Я хочу жить здесь", hebrew: "אני רוצה לחיות פה", transcription: "АНИ РОЦЕ ЛИХЙОТ ПО"},
          {translation: "По-русски", hebrew: "ברוסית", transcription: "БЕ РУСИТ"}
        ]
      },
      {
        lesson: "6",
        words: [
          {translation: "Мой лучший друг", hebrew: "החבר הכי טוב שלי", transcription: "ХАХАВЕР ХАХИ ТОВ ШЕЛИ"},
          {translation: "Я надеюсь", hebrew: "אני מקווה", transcription: "АНИ МАКАВЕ"},
          {translation: "Я ещё не уверен", hebrew: "אני עדיין לא בטוח", transcription: "АНИ АДАИН ЛО БАТУАХ"},
          {translation: "Ты уже привык?", hebrew: "התרגלת כבר?", transcription: "ХИТРАГАЛТА КВАР?"},
          {translation: "Ребёнок", hebrew: "ילד", transcription: "ЙЕЛЕД"},
          {translation: "Быть в этом городе", hebrew: "להיות בעיר הזאת", transcription: "ЛИГИОТ БЭ ИР АЗОТ"},
          {translation: "Ты говорил мне", hebrew: "אמרת לי", transcription: "АМАРТА ЛИ"},
          {translation: "Краткий", hebrew: "קצר", transcription: "КАТЦАР"},
          {translation: "Я переживаю", hebrew: "אני דואג", transcription: "АНИ ДОЭГ"},
          {translation: "Как это зовется?", hebrew: "איך זה נקרא?", transcription: "ЭЙХ ЗЭ НИКРА?"}
        ]
      },
      {
        lesson: "7",
        words: [
          {translation: "Мы приехали", hebrew: "הגענו", transcription: "ИГАНУ"},
          {translation: "Ты живёшь здесь?", hebrew: "אתה גר כאן?", transcription: "АТА ГАР КАН?"},
          {translation: "Где ты живёшь?", hebrew: "איפה אתה גר?", transcription: "ЭЙФО АТА ГАР?"}
        ]
      },
      {
        lesson: "8",
        words: [
          {translation: "Как тебя зовут?", hebrew: "מה שמך?", transcription: "МА ШМЭХ?"},
          {translation: "Это я", hebrew: "אני", transcription: "АНИ"},
          {translation: "Ты, вы", hebrew: "אתה, אתם", transcription: "АТА, АТЭМ"}
        ]
      },
      {
        lesson: "9",
        words: [
          {translation: "Доброе утро", hebrew: "בוקר טוב", transcription: "БОКЕР ТОВ"},
          {translation: "Добрый вечер", hebrew: "ערב טוב", transcription: "ЭРЭВ ТОВ"},
          {translation: "Спокойной ночи", hebrew: "לילה טוב", transcription: "ЛАЙЛА ТОВ"},
          {translation: "Как ты себя чувствуешь?", hebrew: "איך אתה מרגיש?", transcription: "ЭЙХ АТА МАРГИШ?"},
          {
            translation: "Как я могу помочь?",
            hebrew: "איך אני יכול לעזור?",
            transcription: "ЭЙХ АНИ ЯХОЛ ЛААЗОР?"
          },
          {translation: "Где здесь туалет?", hebrew: "איפה השירותים?", transcription: "ЭЙФО АШЕРУТИН?"}
        ]
      },
      {
        lesson: "10",
        words: [
          {translation: "Я потерялся", hebrew: "אני אבוד", transcription: "АНИ АВУД"},
          {translation: "Помогите!", hebrew: "תעזור לי!", transcription: "ТААЗОР ЛИ!"},
          {translation: "Выход", hebrew: "יציאה", transcription: "ЙЦИЯ"},
          {translation: "Это опасно", hebrew: "זה מסוכן", transcription: "ЗЭ МЕСУКАН"},
          {
            translation: "Где ближайший магазин?",
            hebrew: "איפה החנות הקרובה?",
            transcription: "ЭЙФО ХАХАНУТ ХАКАРОВА?"
          }
        ]
      },
      {
        lesson: "11",
        words: [
          {translation: "Я голоден", hebrew: "אני רעב", transcription: "АНИ РАЭВ"},
          {translation: "Я хочу пить", hebrew: "אני צמא", transcription: "АНИ ЦАМА"},
          {
            translation: "Мне нужно в магазин",
            hebrew: "אני צריך ללכת לחנות",
            transcription: "АНИ ЦАРИХ ЛАЛЕХЕТ ЛАХАНУТ"
          },
          {translation: "У меня есть вопросы", hebrew: "יש לי שאלות", transcription: "ЙЕШ ЛИ ШЕЭЛОТ"},
          {translation: "Сколько это стоит?", hebrew: "כמה זה עולה?", transcription: "КАМА ЗЭ ОЛЕ?"}
        ]
      },
      {
        lesson: "12",
        words: [
          {translation: "Я опоздал", hebrew: "אני מאחר", transcription: "АНИ МЕАХЕР"},
          {translation: "Мне нужно идти", hebrew: "אני צריך ללכת", transcription: "АНИ ЦАРИХ ЛАЛЕХЕТ"},
          {translation: "Скоро", hebrew: "בקרוב", transcription: "БЕКАРОВ"},
          {translation: "Завтра", hebrew: "מחר", transcription: "МАХАР"},
          {translation: "Сегодня", hebrew: "היום", transcription: "ХАЙОМ"}
        ]
      },
      {
        lesson: "13",
        words: [
          {translation: "Как долго?", hebrew: "כמה זמן?", transcription: "КАМА ЗМАН?"},
          {translation: "Через сколько?", hebrew: "אחרי כמה?", transcription: "АХАРЕЙ КАМА?"},
          {translation: "Когда?", hebrew: "מתי?", transcription: "МАТАЙ?"},
          {translation: "Я не знаю", hebrew: "אני לא יודע", transcription: "АНИ ЛО ЙОДЕА"},
          {translation: "Я понял", hebrew: "הבנתי", transcription: "ХЕВАНТИ"}
        ]
      },
      {
        lesson: "14",
        words: [
          {translation: "Я счастлив", hebrew: "אני שמח", transcription: "АНИ САМЕАХ"},
          {translation: "Я устал", hebrew: "אני עייף", transcription: "АНИ АЙЕФ"},
          {translation: "Мне не нравится", hebrew: "אני לא אוהב", transcription: "АНИ ЛО ОЭВ"},
          {translation: "Мне очень нравится", hebrew: "אני מאוד אוהב", transcription: "АНИ МЕОД ОЭВ"},
          {translation: "Я не могу", hebrew: "אני לא יכול", transcription: "АНИ ЛО ЯХОЛ"}
        ]
      },
      {
        lesson: "15",
        words: [
          {translation: "Я работаю", hebrew: "אני עובד", transcription: "АНИ ОВЕД"},
          {translation: "Ты работаешь", hebrew: "אתה עובד", transcription: "АТА ОВЕД"},
          {translation: "Он работает", hebrew: "הוא עובד", transcription: "ХУ ОВЕД"},
          {translation: "Я учусь", hebrew: "אני לומד", transcription: "АНИ ЛОМЕД"},
          {translation: "Ты учишься", hebrew: "אתה לומד", transcription: "АТА ЛОМЕД"}
        ]
      },
      {
        lesson: "16",
        words: [
          {translation: "Я живу в Израиле", hebrew: "אני גר בישראל", transcription: "АНИ ГАР БИ-ИЗРАЭЛ"},
          {
            translation: "Ты живёшь в Тель-Авиве",
            hebrew: "אתה גר בתל אביב",
            transcription: "АТА ГАР БЕ-ТЕЛЬ АВИВ"
          },
          {translation: "Он живёт в Иерусалиме", hebrew: "הוא גר בירושלים", transcription: "ХУ ГАР БИ-ИРУШАЛАИМ"},
          {translation: "Я из России", hebrew: "אני מרוסיה", transcription: "АНИ МИ-РУСИЯ"},
          {translation: "Ты из Украины", hebrew: "אתה מאוקראינה", transcription: "АТА МИ-УКРАИНА"}
        ]
      },
      {
        lesson: "17",
        words: [
          {translation: "Как тебя зовут?", hebrew: "איך קוראים לך?", transcription: "ЭЙХ КОРИМ ЛЕХА?"},
          {translation: "Меня зовут", hebrew: "קוראים לי", transcription: "КОРИМ ЛИ"},
          {translation: "Сколько тебе лет?", hebrew: "כמה אתה בן?", transcription: "КАМА АТА БЕН?"},
          {translation: "Мне двадцать лет", hebrew: "אני בן עשרים", transcription: "АНИ БЕН ЭСРИМ"},
          {translation: "Я младше тебя", hebrew: "אני יותר צעיר ממך", transcription: "АНИ ЙОТЕР ЦАИР МИ-МХА"}
        ]
      },
      {
        lesson: "18",
        words: [
          {translation: "Ты любишь путешествовать?", hebrew: "אתה אוהב לטוס?", transcription: "АТА ОЭВ ЛАТУС?"},
          {translation: "Да, я люблю", hebrew: "כן, אני אוהב", transcription: "КЕН, АНИ ОЭВ"},
          {translation: "Я не люблю", hebrew: "אני לא אוהב", transcription: "АНИ ЛО ОЭВ"},
          {
            translation: "Какие страны ты посетил?",
            hebrew: "איזה מדינות ביקרת?",
            transcription: "ЭЙЗЕ МЕДИНОТ БИКАРТА?"
          },
          {translation: "Я был в Германии", hebrew: "הייתי בגרמניה", transcription: "ХАИТИ БЕ-ГЕРМАНИЯ"}
        ]
      },
      {
        lesson: "19",
        words: [
          {translation: "Это моя семья", hebrew: "זאת המשפחה שלי", transcription: "ЗОТ ХАМИШПАХА ШЕЛИ"},
          {translation: "Мой отец", hebrew: "אבי", transcription: "АВИ"},
          {translation: "Моя мама", hebrew: "אמא שלי", transcription: "ИМА ШЕЛИ"},
          {translation: "Мой брат", hebrew: "האח שלי", transcription: "ХААХ ШЕЛИ"},
          {translation: "Моя сестра", hebrew: "האחות שלי", transcription: "ХААХОТ ШЕЛИ"}
        ]
      },
      {
        lesson: "20",
        words: [
          {translation: "Как ты себя чувствуешь?", hebrew: "איך אתה מרגיש?", transcription: "ЭЙХ АТА МАРГИШ?"},
          {translation: "Мне плохо", hebrew: "אני מרגיש רע", transcription: "АНИ МАРГИШ РАА"},
          {translation: "Мне лучше", hebrew: "אני מרגיש יותר טוב", transcription: "АНИ МАРГИШ ЙОТЕР ТОВ"},
          {translation: "У меня болит голова", hebrew: "כואב לי הראש", transcription: "КОЭВ ЛИ ХА-РОШ"},
          {
            translation: "Я чувствую себя нормально",
            hebrew: "אני מרגיש בסדר",
            transcription: "АНИ МАРГИШ БЕСЕДЕР"
          }
        ]
      },
      {
        lesson: "21",
        words: [
          {translation: "Как дела?", hebrew: "מה שלומך?", transcription: "МА ШЛОМХА?"},
          {translation: "Хорошо, спасибо", hebrew: "טוב, תודה", transcription: "ТОВ, ТОДА"},
          {translation: "Очень хорошо", hebrew: "מאוד טוב", transcription: "МЕОД ТОВ"},
          {translation: "Не очень", hebrew: "לא כל כך", transcription: "ЛО КОЛЬ КАХ"},
          {translation: "Так себе", hebrew: "ככה ככה", transcription: "КАХА КАХА"}
        ]
      },
      {
        lesson: "22",
        words: [
          {translation: "Где ты живёшь?", hebrew: "איפה אתה גר?", transcription: "ЭЙФО АТА ГАР?"},
          {translation: "Я живу в Тель-Авиве", hebrew: "אני גר בתל אביב", transcription: "АНИ ГАР БЕ-ТЕЛЬ АВИВ"},
          {
            translation: "Ты когда-нибудь был в Израиле?",
            hebrew: "היית פעם בישראל?",
            transcription: "ХАИТА ПААМ БИ-ИЗРАЭЛ?"
          },
          {translation: "Да, я был", hebrew: "כן, הייתי", transcription: "КЕН, ХАИТИ"},
          {translation: "Нет, я не был", hebrew: "לא, לא הייתי", transcription: "ЛО, ЛО ХАИТИ"}
        ]
      },
      {
        lesson: "23",
        words: [
          {translation: "Как ты себя чувствуешь?", hebrew: "איך אתה מרגיש?", transcription: "ЭЙХ АТА МАРГИШ?"},
          {translation: "Я чувствую себя хорошо", hebrew: "אני מרגיש טוב", transcription: "АНИ МАРГИШ ТОВ"},
          {translation: "У меня болит живот", hebrew: "כואב לי הבטן", transcription: "КОЭВ ЛИ ХА-БЕТЕН"},
          {translation: "Я устал", hebrew: "אני עייף", transcription: "АНИ АЙЕФ"},
          {
            translation: "Я не чувствую себя хорошо",
            hebrew: "אני לא מרגיש טוב",
            transcription: "АНИ ЛО МАРГИШ ТОВ"
          }
        ]
      },
      {
        lesson: "24",
        words: [
          {
            translation: "Что ты любишь делать в свободное время?",
            hebrew: "מה אתה אוהב לעשות בזמנך הפנוי?",
            transcription: "МА АТА ОЭВ ЛААСОТ БЕЗМАНХА ХА-ПНУИ?"
          },
          {translation: "Я люблю читать", hebrew: "אני אוהב לקרוא", transcription: "АНИ ОЭВ ЛИКРОА"},
          {
            translation: "Я люблю заниматься спортом",
            hebrew: "אני אוהב לעסוק בספורט",
            transcription: "АНИ ОЭВ ЛААСОК БЕСПОРТ"
          },
          {translation: "Я люблю гулять", hebrew: "אני אוהב לטייל", transcription: "АНИ ОЭВ ЛАТАЙЕЛ"},
          {
            translation: "Я люблю слушать музыку",
            hebrew: "אני אוהב לשמוע מוזיקה",
            transcription: "АНИ ОЭВ ЛИШМОА МУЗИКА"
          }
        ]
      },
      {
        lesson: "25",
        words: [
          {translation: "Какие твои хобби?", hebrew: "מה התחביבים שלך?", transcription: "МА ХАТХВИВИМ ШЕЛХА?"},
          {
            translation: "Моё хобби — рисование",
            hebrew: "התחביב שלי הוא ציור",
            transcription: "ХАТХВИВ ШЕЛИ ХУ ЦИУР"
          },
          {
            translation: "Моё хобби — плавание",
            hebrew: "התחביב שלי הוא שחייה",
            transcription: "ХАТХВИВ ШЕЛИ ХУ СХИЯА"
          },
          {
            translation: "Моё хобби — путешествия",
            hebrew: "התחביב שלי הוא טיולים",
            transcription: "ХАТХВИВ ШЕЛИ ХУ ТИУЛИМ"
          },
          {
            translation: "Моё хобби — коллекционирование",
            hebrew: "התחביב שלי הוא איסוף",
            transcription: "ХАТХВИВ ШЕЛИ ХУ ИСОФ"
          }
        ]
      },
      {
        lesson: "26",
        words: [
          {
            translation: "Когда твой день рождения?",
            hebrew: "מתי יום ההולדת שלך?",
            transcription: "МАТАЙ ЙОМ ХА-ХУЛЕДЕТ ШЕЛХА?"
          },
          {
            translation: "Моё день рождения 15 апреля",
            hebrew: "יום ההולדת שלי ב-15 אפריל",
            transcription: "ЙОМ ХА-ХУЛЕДЕТ ШЕЛИ БЕ-15 АПРИЛЬ"
          },
          {
            translation: "Как ты празднуешь свой день рождения?",
            hebrew: "איך אתה חוגג את יום ההולדת שלך?",
            transcription: "ЭЙХ АТА ХОГЕГ ЭТ ЙОМ ХА-ХУЛЕДЕТ ШЕЛХА?"
          },
          {
            translation: "Я праздную с друзьями",
            hebrew: "אני חוגג עם חברים",
            transcription: "АНИ ХОГЕГ ИМ ХАВЕРИМ"
          },
          {
            translation: "Я устраиваю вечеринку",
            hebrew: "אני עושה מסיבת יום הולדת",
            transcription: "АНИ ОСЕ МЕСИБАТ ЙОМ ХУЛЕДЕТ"
          }
        ]
      },
      {
        lesson: "27",
        words: [
          {translation: "Какой сегодня день?", hebrew: "איזה יום היום?", transcription: "ЭЙЗЕ ЙОМ А-ХАЙОМ?"},
          {translation: "Сегодня понедельник", hebrew: "היום יום שני", transcription: "ХАЙОМ ЙОМ ШЕНИ"},
          {translation: "Завтра вторник", hebrew: "מחר יום שלישי", transcription: "МАХАР ЙОМ ШЛИШИ"},
          {translation: "Сегодня пятница", hebrew: "היום יום שישי", transcription: "ХАЙОМ ЙОМ ШИШИ"},
          {translation: "Завтра выходные", hebrew: "מחר סוף שבוע", transcription: "МАХАР СОФ ШАВУА"}
        ]
      },
      {
        lesson: "28",
        words: [
          {
            translation: "Как ты планируешь провести выходные?",
            hebrew: "איך אתה מתכנן לבלות את סוף השבוע?",
            transcription: "ЭЙХ АТА МИТАХНЕН ЛАБОЛЬ ЭТ СОФ ШАВУА?"
          },
          {translation: "Я планирую отдыхать", hebrew: "אני מתכנן לנוח", transcription: "АНИ МИТАХНЕН ЛАНУАХ"},
          {translation: "Я планирую гулять", hebrew: "אני מתכנן לטייל", transcription: "АНИ МИТАХНЕН ЛАТАЙЕЛ"},
          {
            translation: "Я планирую поехать на природу",
            hebrew: "אני מתכנן לנסוע לטבע",
            transcription: "АНИ МИТАХНЕН ЛИНСОА ЛЕ-ТЕВА"
          },
          {translation: "Я планирую работать", hebrew: "אני מתכנן לעבוד", transcription: "АНИ МИТАХНЕН ЛААВОД"}
        ]
      },
      {
        lesson: "29",
        words: [
          {
            translation: "Какой твой любимый фильм?",
            hebrew: "מה הסרט האהוב עליך?",
            transcription: "МА ХА-СЕРЕТ ХА-АХУВ АЛЕХА?"
          },
          {
            translation: "Мой любимый фильм — комедия",
            hebrew: "הסרט האהוב עליי הוא קומדיה",
            transcription: "ХА-СЕРЕТ ХА-АХУВ АЛАЙ ХУ КОМЕДИЯ"
          },
          {
            translation: "Я люблю смотреть драмы",
            hebrew: "אני אוהב לראות דרמות",
            transcription: "АНИ ОЭВ ЛИРОТ ДРАМОТ"
          },
          {
            translation: "Я предпочитаю документальные фильмы",
            hebrew: "אני מעדיף סרטים דוקומנטריים",
            transcription: "АНИ МААДИФ СЕРАТИМ ДОКУМЕНТАРИМ"
          },
          {
            translation: "Я не люблю ужастики",
            hebrew: "אני לא אוהב סרטי אימה",
            transcription: "АНИ ЛО ОЭВ СЕРАТИ ИМА"
          }
        ]
      },
      {
        lesson: "30",
        words: [
          {
            translation: "Как ты относишься к спорту?",
            hebrew: "מה הדעה שלך על ספורט?",
            transcription: "МА ХА-ДЕА ШЕЛХА АЛ СПОРТ?"
          },
          {translation: "Я люблю спорт", hebrew: "אני אוהב ספורט", transcription: "АНИ ОЭВ СПОРТ"},
          {translation: "Я не люблю спорт", hebrew: "אני לא אוהב ספורט", transcription: "АНИ ЛО ОЭВ СПОРТ"},
          {
            translation: "Я занимаюсь спортом каждый день",
            hebrew: "אני עוסק בספורט כל יום",
            transcription: "АНИ ОСЕК БЕСПОРТ КОЛЬ ЙОМ"
          },
          {translation: "Я бегаю", hebrew: "אני רץ", transcription: "АНИ РАЦ"}
        ]
      }
    ]
  };

  constructor() {
  }

  public getLessonData(part: number, lesson: string): any {
    switch (part) {
      case 1:
        return this.firstLessonData.lessons.find(l => l.lesson === lesson)?.words;
      case 2:
        return this.secondLessonData.lessons.find(l => l.lesson === lesson)?.words;
      case 3:
        return this.thirdLessonData.lessons.find(l => l.lesson === lesson)?.words;
      default:
        return [];
    }
  }
}
