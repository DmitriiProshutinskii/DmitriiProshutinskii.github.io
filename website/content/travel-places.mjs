// User-supplied visited places. Empty city lists retain the existing travel entries.
const rows=`
ARM|armenia|Armenia|Армения|Armenia|Yerevan|Ереван|Ereván
GEO|georgia|Georgia|Грузия|Georgia|Tbilisi, Kutaisi, Batumi|Тбилиси, Кутаиси, Батуми|Tiflis, Kutaisi, Batumi
AZE|azerbaijan|Azerbaijan|Азербайджан|Azerbaiyán|Baku|Баку|Bakú
TUR|turkey|Turkey|Турция|Turquía|Dalaman, Istanbul|Даламан, Стамбул|Dalaman, Estambul
PRT|portugal|Portugal|Португалия|Portugal|Lisbon, Porto|Лиссабон, Порту|Lisboa, Oporto
GBR|united-kingdom|United Kingdom|Великобритания|Reino Unido|London, Manchester, Edinburgh|Лондон, Манчестер, Эдинбург|Londres, Mánchester, Edimburgo
ESP|spain|Spain|Испания|España|Barcelona, Madrid, Jaén, Málaga, San Sebastián, Bilbao, A Coruña|Барселона, Мадрид, Хаэн, Малага, Сан-Себастьян, Бильбао, Ла-Корунья|Barcelona, Madrid, Jaén, Málaga, San Sebastián, Bilbao, La Coruña
FRA|france|France|Франция|Francia|Paris|Париж|París
ITA|italy|Italy|Италия|Italia|Rome, Naples, Milan, Venice, Florence, Montecatini Terme, Siena|Рим, Неаполь, Милан, Венеция, Флоренция, Монтекатини-Терме, Сиена|Roma, Nápoles, Milán, Venecia, Florencia, Montecatini Terme, Siena
DEU|germany|Germany|Германия|Alemania|Berlin, Munich|Берлин, Мюнхен|Berlín, Múnich
POL|poland|Poland|Польша|Polonia|Warsaw|Варшава|Varsovia
AUT|austria|Austria|Австрия|Austria|Vienna, Salzburg|Вена, Зальцбург|Viena, Salzburgo
SRB|serbia|Serbia|Сербия|Serbia|Belgrade|Белград|Belgrado
CZE|czechia|Czechia|Чехия|Chequia|Karlovy Vary, Prague|Карловы Вары, Прага|Karlovy Vary, Praga
MNE|montenegro|Montenegro|Черногория|Montenegro|Budva, Kotor, Tivat|Будва, Котор, Тиват|Budva, Kotor, Tivat
FIN|finland|Finland|Финляндия|Finlandia|Helsinki|Хельсинки|Helsinki
SWE|sweden|Sweden|Швеция|Suecia|Stockholm|Стокгольм|Estocolmo
IDN|indonesia|Indonesia|Индонезия|Indonesia|Bali|Бали|Bali
JPN|japan|Japan|Япония|Japón|Tokyo|Токио|Tokio
KAZ|kazakhstan|Kazakhstan|Казахстан|Kazajistán|Almaty|Алматы|Almaty
UZB|uzbekistan|Uzbekistan|Узбекистан|Uzbekistán|Tashkent, Bukhara, Samarkand|Ташкент, Бухара, Самарканд|Taskent, Bujará, Samarcanda
BLR|belarus|Belarus|Беларусь|Bielorrusia|Minsk, Salihorsk, Gomel|Минск, Солигорск, Гомель|Minsk, Soligorsk, Gómel
RUS|kamchatka|Russia|Россия|Rusia|Moscow, Saint Petersburg, Kazan, Nizhny Novgorod, Kislovodsk, Vladikavkaz, Tver, Tula, Yaroslavl, Pereslavl, Plyos, Ivanovo, Kostroma, Vladimir, Vologda, Krasnoyarsk, Ulan-Ude, Yakutsk|Москва, Санкт-Петербург, Казань, Нижний Новгород, Кисловодск, Владикавказ, Тверь, Тула, Ярославль, Переславль, Плёс, Иваново, Кострома, Владимир, Вологда, Красноярск, Улан-Удэ, Якутск|Moscú, San Petersburgo, Kazán, Nizhni Nóvgorod, Kislovodsk, Vladikavkaz, Tver, Tula, Yaroslavl, Pereslavl, Plios, Ivánovo, Kostromá, Vladímir, Vólogda, Krasnoyarsk, Ulán-Udé, Yakutsk
CHN|china|China|Китай|China|Shanghai, Hong Kong|Шанхай, Гонконг|Shanghái, Hong Kong
VNM|vietnam|Vietnam|Вьетнам|Vietnam|Da Nang, Hanoi, Hoi An|Дананг, Ханой, Хойан|Da Nang, Hanói, Hoi An
THA|thailand|Thailand|Таиланд|Tailandia|Phuket|Пхукет|Phuket
SGP|singapore|Singapore|Сингапур|Singapur|||
`.trim().split('\n').map(row=>row.split('|'));
export const visitedPlaces=rows.map(([code,id,en,ru,es,citiesEn,citiesRu,citiesEs])=>({code,id,label:en,ru,es,cities:{en:citiesEn,ru:citiesRu,es:citiesEs}}));
export const placeTranslations=rows.flatMap(([, ,en,ru,es,citiesEn,citiesRu,citiesEs])=>[[en,ru,es],...(citiesEn?[[citiesEn,citiesRu,citiesEs]]:[])]);
