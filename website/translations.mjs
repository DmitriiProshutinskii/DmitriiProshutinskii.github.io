import {placeTranslations} from './content/travel-places.mjs';
// Exact source-text keys keep translations tied to the verified English CV.
// Build fails on an unknown text so new English content cannot silently remain untranslated.
const rows = `
PLACES VISITED¦МЕСТА, ГДЕ Я БЫЛ¦LUGARES VISITADOS
27 COUNTRIES / 5 JOURNAL ENTRIES¦27 СТРАН / 5 ПУТЕВЫХ ЗАМЕТОК¦27 PAÍSES / 5 ENTRADAS DE VIAJE
Places for future entries.¦Места для будущих заметок.¦Lugares para futuras entradas.
I’ve visited these places. Dates, stories and photographs will follow.¦Я побывал в этих местах. Даты поездок, истории и фотографии добавлю позже.¦He visitado estos lugares. Más adelante añadiré fechas, historias y fotografías.
NOTES & PHOTOS TO FOLLOW¦ЗАМЕТКИ И ФОТОГРАФИИ ДОБАВЛЮ ПОЗЖЕ¦NOTAS Y FOTOS PRÓXIMAMENTE
OTHER PLACES VISITED¦ДРУГИЕ МЕСТА, ГДЕ Я БЫЛ¦OTROS LUGARES VISITADOS
Choose a highlighted country to see its places and notes.¦Выбери закрашенную страну, чтобы увидеть места и заметки.¦Elige un país resaltado para ver sus lugares y notas.
Highlighted countries are places I have visited.¦Закрашены страны, в которых я побывал.¦Los países resaltados son lugares que he visitado.
9+¦9+¦9+
PROJECTS CONTRIBUTED TO¦ПРОЕКТОВ С МОИМ УЧАСТИЕМ¦PROYECTOS EN LOS QUE PARTICIPÉ
Mobile, mixed reality and research¦Мобильная разработка, смешанная реальность и исследования¦Desarrollo móvil, realidad mixta e investigación
INDEPENDENT APPS¦СОБСТВЕННЫХ ПРИЛОЖЕНИЯ¦APLICACIONES PROPIAS
I build mobile apps¦Разрабатываю приложения¦Desarrollo aplicaciones móviles
for iOS and Android.¦для iOS и Android.¦para iOS y Android.
MOBILE ENGINEERING / FLUTTER & DART¦МОБИЛЬНАЯ РАЗРАБОТКА / FLUTTER И DART¦DESARROLLO MÓVIL / FLUTTER Y DART
INDEPENDENT PRODUCTS¦СОБСТВЕННЫХ ПРОДУКТА¦PRODUCTOS PROPIOS
KBT Note · Life Tracker · RusCaps¦KBT Note · Life Tracker · RusCaps¦KBT Note · Life Tracker · RusCaps
3¦3¦3
Three independent products.¦Три собственных продукта.¦Tres productos propios.
Architecture, delivery¦Архитектура, выпуск¦Arquitectura, desarrollo
and technical leadership.¦и техническое руководство.¦y liderazgo técnico.
BACK TO MAP ↑¦К КАРТЕ ↑¦VOLVER AL MAPA ↑
Initialization changes¦Оптимизация инициализации¦Los cambios de inicialización
made Balady start faster.¦ускорила запуск Balady.¦aceleraron el arranque de Balady.
Epic Charging launched on iOS and Android.¦Epic Charging выпущен для iOS и Android.¦Epic Charging se lanzó en iOS y Android.
I owned mobile delivery.¦Я отвечал за мобильную разработку и выпуск.¦Me encargué del desarrollo y lanzamiento móvil.
As the sole mobile engineer, I handled architecture, implementation, testing and submission to both stores.¦Как единственный мобильный инженер, я отвечал за архитектуру, реализацию, тестирование и публикацию в обоих сторах.¦Como único ingeniero móvil, me encargué de la arquitectura, la implementación, las pruebas y la publicación en ambas tiendas.
Travel display mode¦Режим просмотра путешествий¦Modo de vista de viajes
LIST¦СПИСОК¦LISTA
MAP¦КАРТА¦MAPA
VISITED COUNTRIES¦ПОСЕЩЁННЫЕ СТРАНЫ¦PAÍSES VISITADOS
Choose a highlighted country to see the trip.¦Выбери закрашенную страну, чтобы открыть заметки.¦Elige un país resaltado para ver el viaje.
Visited countries map¦Карта посещённых стран¦Mapa de países visitados
Russia / Kamchatka¦Россия / Камчатка¦Rusia / Kamchatka
Highlighted countries have a travel entry.¦Закрашены страны, о которых есть путевые заметки.¦Los países resaltados tienen una entrada de viaje.
Map data: Natural Earth ↗¦Данные карты: Natural Earth ↗¦Datos del mapa: Natural Earth ↗
Georgia¦Грузия¦Georgia
01 / GEORGIA¦01 / ГРУЗИЯ¦01 / GEORGIA
02 / KAMCHATKA¦02 / КАМЧАТКА¦02 / KAMCHATKA
03 / VIETNAM¦03 / ВЬЕТНАМ¦03 / VIETNAM
04 / CHINA¦04 / КИТАЙ¦04 / CHINA
05 / SINGAPORE¦05 / СИНГАПУР¦05 / SINGAPUR
01 / OCTOBER 2026¦01 / ОКТЯБРЬ 2026¦01 / OCTUBRE 2026
02 / AUGUST¦02 / АВГУСТ¦02 / AGOSTO
05 / MAY–JUNE¦05 / МАЙ–ИЮНЬ¦05 / MAYO–JUNIO
GEORGIA / OCTOBER 2026¦ГРУЗИЯ / ОКТЯБРЬ 2026¦GEORGIA / OCTUBRE 2026
OCTOBER 2026 / AUGUST / MAY–JUNE¦ОКТЯБРЬ 2026 / АВГУСТ / МАЙ–ИЮНЬ¦OCTUBRE 2026 / AGOSTO / MAYO–JUNIO
5 PLACES / 15 FRAMES¦5 НАПРАВЛЕНИЙ / 15 КАДРОВ¦5 DESTINOS / 15 IMÁGENES
Vardzia & Akhaltsikhe.¦Вардзия и Ахалцихе.¦Vardzia y Akhaltsikhe.
A mini-trip through Georgia in October 2026: Vardzia, Akhaltsikhe and the road between.¦Мини-трип по Грузии в октябре 2026: Вардзия, Ахалцихе и дорога между ними.¦Un pequeño viaje por Georgia en octubre de 2026: Vardzia, Akhaltsikhe y el camino entre ambas.
[01] VARDZIA¦[01] ВАРДЗИЯ¦[01] VARDZIA
[02] A VIEW FROM THE CAVE¦[02] ВИД ИЗ ПЕЩЕРЫ¦[02] VISTA DESDE LA CUEVA
[03] ON THE ROAD¦[03] В ДОРОГЕ¦[03] EN EL CAMINO
[02] ON THE TRAIL¦[02] НА ТРОПЕ¦[02] EN EL SENDERO
[03] A BEAR BY THE WATER¦[03] МЕДВЕДЬ У ВОДЫ¦[03] UN OSO JUNTO AL AGUA
PERSONAL PHOTOGRAPHS¦МОИ ФОТОГРАФИИ¦MIS FOTOGRAFÍAS
Vardzia’s cave monastery and valley¦Пещерный монастырь Вардзии и долина¦El monasterio rupestre de Vardzia y el valle
View of the valley from a cave in Vardzia¦Вид на долину из пещеры в Вардзии¦Vista del valle desde una cueva en Vardzia
A winding road through Georgia¦Извилистая дорога по Грузии¦Una carretera sinuosa por Georgia
A volcano rising above clouds in Kamchatka¦Вулкан над облаками на Камчатке¦Un volcán sobre las nubes en Kamchatka
Dmitrii hiking among rocks and steam in Kamchatka¦Дмитрий в походе среди скал и пара на Камчатке¦Dmitrii de excursión entre rocas y vapor en Kamchatka
A brown bear beside the water in Kamchatka¦Бурый медведь у воды на Камчатке¦Un oso pardo junto al agua en Kamchatka
Georgia and Kamchatka feature my own photographs. The images for Vietnam, China and Singapore are AI-generated illustrations from the original design concept.¦В разделах о Грузии и Камчатке — мои фотографии. Изображения Вьетнама, Китая и Сингапура созданы с помощью ИИ для первоначальной концепции сайта.¦Georgia y Kamchatka muestran mis propias fotografías. Las imágenes de Vietnam, China y Singapur son ilustraciones generadas con IA para el concepto original del sitio.
Personal travel notes from Georgia, Kamchatka, Vietnam, China and Singapore.¦Личные заметки из путешествий по Грузии, Камчатке, Вьетнаму, Китаю и Сингапуру.¦Notas personales de viajes por Georgia, Kamchatka, Vietnam, China y Singapur.
01 / DMITRII PROSHUTINSKII¦01 / ДМИТРИЙ ПРОШУТИНСКИЙ¦01 / DMITRII PROSHUTINSKII
02 / EXPERIENCE¦02 / ОПЫТ¦02 / EXPERIENCIA
03 / TRAVELS¦03 / ПУТЕШЕСТВИЯ¦03 / VIAJES
LET’S TALK ↗¦НАПИСАТЬ ↗¦HABLEMOS ↗
Skip to content¦Перейти к содержимому¦Ir al contenido
Main navigation¦Основная навигация¦Navegación principal
Dmitrii Proshutinskii home¦Дмитрий Прошутинский — главная¦Dmitrii Proshutinskii — inicio
Dmitrii Proshutinskii¦Дмитрий Прошутинский¦Dmitrii Proshutinskii
Senior Mobile Engineer | Flutter / Dart¦Старший мобильный инженер | Flutter / Dart¦Ingeniero sénior de desarrollo móvil | Flutter / Dart
Dmitrii Proshutinskii — Senior Mobile Engineer¦Дмитрий Прошутинский — мобильный инженер¦Dmitrii Proshutinskii — ingeniero sénior de desarrollo móvil
INDEPENDENT MIND. PRODUCT ENGINEER.¦НЕЗАВИСИМЫЙ ВЗГЛЯД. ПРОДУКТОВЫЙ ИНЖЕНЕР.¦CRITERIO PROPIO. INGENIERO DE PRODUCTO.
TBILISI, GEORGIA / UTC +04¦ТБИЛИСИ, ГРУЗИЯ / UTC +04¦TIFLIS, GEORGIA / UTC +04
Thoughtful apps.¦Продуманные приложения.¦Apps bien pensadas.
Solid engineering.¦Надёжная инженерия.¦Ingeniería sólida.
I turn complex ideas into mobile experiences that feel simple. From the first architectural decision to the details you touch.¦Превращаю сложные идеи в мобильные приложения, которыми просто пользоваться. От первого архитектурного решения до деталей интерфейса.¦Convierto ideas complejas en experiencias móviles fáciles de usar. Desde la primera decisión de arquitectura hasta cada detalle de la interfaz.
START A CONVERSATION ↗¦ДАВАЙТЕ ОБСУДИМ ↗¦INICIAR UNA CONVERSACIÓN ↗
Dmitrii in a mountain landscape¦Дмитрий на фоне гор¦Dmitrii en un paisaje de montaña
YEARS IN MOBILE¦ЛЕТ В МОБИЛЬНОЙ РАЗРАБОТКЕ¦AÑOS EN DESARROLLO MÓVIL
3.5 → 2s¦3,5 → 2 с¦3,5 → 2 s
6 months¦6 месяцев¦6 meses
STARTUP TO USABLE HOME SCREEN¦ЗАПУСК ДО ГОТОВОГО ГЛАВНОГО ЭКРАНА¦INICIO HASTA LA PANTALLA PRINCIPAL OPERATIVA
Manual measurements · Balady¦Ручные замеры · Balady¦Mediciones manuales · Balady
FIRST iOS + ANDROID RELEASES¦ПЕРВЫЕ РЕЛИЗЫ iOS + ANDROID¦PRIMERAS VERSIONES iOS + ANDROID
Sole mobile engineer · Epic Charging¦Единственный мобильный инженер · Epic Charging¦Único ingeniero móvil · Epic Charging
Selected experience¦Избранный опыт¦Experiencia destacada
02 / SELECTED EXPERIENCE¦02 / ИЗБРАННЫЙ ОПЫТ¦02 / EXPERIENCIA DESTACADA
FULL EXPERIENCE ↗¦ВЕСЬ ОПЫТ ↗¦VER TODA LA EXPERIENCIA ↗
01 / URBI · USETECH / MAR 2024 — PRESENT¦01 / URBI · USETECH / МАР 2024 — СЕЙЧАС¦01 / URBI · USETECH / MAR 2024 — ACTUALIDAD
Faster starts.¦Быстрее запуск.¦Inicio más rápido.
Smarter search.¦Умнее поиск.¦Búsqueda más inteligente.
Balady — navigation and maps for Saudi Arabia. Reached 500,000 MAU in 2025 (internal analytics). I build native integrations and lead hands-on mobile engineering.¦Balady — навигация и карты для Саудовской Аравии. В 2025 году — 500 000 активных пользователей в месяц по внутренней аналитике. Разрабатываю нативные интеграции и руковожу мобильной разработкой, продолжая писать код.¦Balady: navegación y mapas para Arabia Saudí. Alcanzó 500.000 usuarios activos mensuales en 2025 según la analítica interna. Desarrollo integraciones nativas y lidero la ingeniería móvil, participando directamente en el código.
EXPLORE BALADY ↗¦О BALADY ↗¦CONOCER BALADY ↗
SEARCH / INPUT-TO-RESULTS LATENCY¦ПОИСК / ЗАДЕРЖКА ДО РЕЗУЛЬТАТА¦BÚSQUEDA / LATENCIA HASTA LOS RESULTADOS
Approximate latency reduction over six months. Manual measurements.¦Примерное снижение задержки за шесть месяцев. Ручные замеры.¦Reducción aproximada de la latencia en seis meses. Mediciones manuales.
BEFORE / RELATIVE LATENCY¦ДО / ОТНОСИТЕЛЬНАЯ ЗАДЕРЖКА¦ANTES / LATENCIA RELATIVA
AFTER / QUERY-AWARE CACHING¦ПОСЛЕ / КЭШИРОВАНИЕ С УЧЁТОМ ЗАПРОСА¦DESPUÉS / CACHÉ SEGÚN LA CONSULTA
Eliminated unnecessary requests and implemented query-aware caching.¦Убрал лишние запросы и реализовал кэширование с учётом поискового запроса.¦Eliminé solicitudes innecesarias e implementé una caché que tiene en cuenta la consulta.
02 / EPIC CHARGING / 2023 — 2024¦02 / EPIC CHARGING / 2023 — 2024¦02 / EPIC CHARGING / 2023 — 2024
From architecture to the App Store.¦От архитектуры до App Store.¦De la arquitectura al App Store.
Sole mobile engineer for the first releases: architecture, features, testing and store submission. Reworked an existing Flutter codebase while continuing delivery.¦Единственный мобильный инженер первых релизов: архитектура, функции, тестирование и публикация в магазинах. Переработал существующий код на Flutter, продолжая выпускать новые функции.¦Único ingeniero móvil de las primeras versiones: arquitectura, funciones, pruebas y publicación en las tiendas. Reestructuré el código Flutter existente sin detener la entrega de funcionalidades.
Shipped in 6 months¦Релизы за 6 месяцев¦Publicado en 6 meses
First iOS and Android releases to the App Store and Google Play.¦Первые версии для iOS и Android опубликованы в App Store и Google Play.¦Primeras versiones de iOS y Android publicadas en el App Store y Google Play.
EXPLORE EPIC CHARGING ↗¦О EPIC CHARGING ↗¦CONOCER EPIC CHARGING ↗
Small tools. Real life.¦Небольшие инструменты. Реальная жизнь.¦Pequeñas herramientas. Vida real.
Products I build around everyday problems.¦Продукты, которые я создаю для повседневных задач.¦Productos que creo para resolver problemas cotidianos.
[01] / REFLECTION¦[01] / РЕФЛЕКСИЯ¦[01] / REFLEXIÓN
A quiet space to capture automatic thoughts before they slip away.¦Спокойное место, чтобы записать автоматические мысли, пока они не ускользнули.¦Un espacio tranquilo para registrar pensamientos automáticos antes de que se desvanezcan.
[02] / OFFLINE FIRST¦[02] / РАБОТА БЕЗ ИНТЕРНЕТА¦[02] / SIN CONEXIÓN
Journal, expenses, tasks and habits. One local timeline. No account, no server.¦Дневник, расходы, задачи и привычки. Одна локальная лента. Без аккаунта и сервера.¦Diario, gastos, tareas y hábitos. Una sola cronología local. Sin cuenta ni servidor.
[03] / EARLY ADOPTERS¦[03] / РАННИЙ ДОСТУП¦[03] / ACCESO TEMPRANO
Russian subtitles for short-form video, with careful line breaks and timing.¦Русские субтитры для коротких видео с аккуратными переносами строк и таймингом.¦Subtítulos en ruso para vídeos cortos, con saltos de línea y tiempos cuidados.
WEB SERVICE ↗¦ВЕБ-СЕРВИС ↗¦SERVICIO WEB ↗
Care for the details.¦Внимание к деталям.¦Cuidar los detalles.
Own the whole picture.¦Ответственность за результат.¦Asumir el resultado completo.
I’ve worked across large engineering teams and early-stage startups — building architecture, shipping features and mentoring developers.¦Работал в крупных инженерных командах и молодых стартапах: проектировал архитектуру, выпускал функции и помогал разработчикам расти.¦He trabajado en grandes equipos de ingeniería y en startups en sus primeras etapas: diseñando arquitectura, entregando funcionalidades y acompañando a otros desarrolladores.
Applied Mathematics & Physics, MIPT¦Прикладная математика и физика, МФТИ¦Matemáticas y Física Aplicadas, MIPT
Bachelor’s and Master’s · 2014–2020¦Бакалавриат и магистратура · 2014–2020¦Grado y máster · 2014–2020
FLUTTER / DART / MOBILE ARCHITECTURE / TESTING¦FLUTTER / DART / МОБИЛЬНАЯ АРХИТЕКТУРА / ТЕСТИРОВАНИЕ¦FLUTTER / DART / ARQUITECTURA MÓVIL / PRUEBAS
FIELD NOTES / SELECTED WRITING¦ИНЖЕНЕРНЫЕ ЗАМЕТКИ / СТАТЬИ¦NOTAS DE INGENIERÍA / ARTÍCULOS
Recreating Telegram’s profile effect¦Воссоздаём эффект профиля Telegram¦Recrear el efecto de perfil de Telegram
with metaballs and Flutter ↗¦с помощью метаболов и Flutter ↗¦con metaballs y Flutter ↗
Moving the camera with a¦Перемещение камеры при¦Mover la cámara con un
rotated viewport in 2GIS MSDK ↗¦повёрнутом viewport в 2GIS MSDK ↗¦viewport girado en 2GIS MSDK ↗
Soft Text Outline Algorithm ↗¦Алгоритм мягкой обводки текста ↗¦Algoritmo de contorno suave del texto ↗
HAVE SOMETHING IN MIND?¦ЕСТЬ ИДЕЯ?¦¿TIENES ALGO EN MENTE?
Let’s build it well.¦Сделаем как следует.¦Hagámoslo bien.
Let’s talk.¦Давайте поговорим.¦Hablemos.
DMITRII PROSHUTINSKII / 2026¦ДМИТРИЙ ПРОШУТИНСКИЙ / 2026¦DMITRII PROSHUTINSKII / 2026
Experience — Dmitrii Proshutinskii¦Опыт — Дмитрий Прошутинский¦Experiencia — Dmitrii Proshutinskii
Experience.¦Опыт.¦Experiencia.
CURRICULUM VITAE / PROFILE¦РЕЗЮМЕ / ПРОФИЛЬ¦CURRÍCULUM / PERFIL
Senior mobile engineer with 5+ years of experience delivering iOS and Android applications using Flutter, Dart, Kotlin, and Swift. Hands-on technical leadership across mobile architecture, performance optimization, shared UI frameworks, and native integrations for Android Auto and Apple CarPlay.¦Мобильный инженер с опытом более пяти лет: разработка и выпуск приложений для iOS и Android на Flutter, Dart, Kotlin и Swift. Техническое руководство с непосредственным участием в разработке: мобильная архитектура, оптимизация производительности, общие UI-фреймворки и нативные интеграции Android Auto и Apple CarPlay.¦Ingeniero móvil con más de cinco años de experiencia desarrollando y publicando aplicaciones para iOS y Android con Flutter, Dart, Kotlin y Swift. Liderazgo técnico con participación directa en arquitectura móvil, optimización del rendimiento, frameworks de interfaz compartidos e integraciones nativas con Android Auto y Apple CarPlay.
PRINT / SAVE PDF ↗¦ПЕЧАТЬ / СОХРАНИТЬ PDF ↗¦IMPRIMIR / GUARDAR PDF ↗
PROFILE / LOCATION¦ПРОФИЛЬ / МЕСТОПОЛОЖЕНИЕ¦PERFIL / UBICACIÓN
Tbilisi, Georgia¦Тбилиси, Грузия¦Tiflis, Georgia
Open to remote work and relocation to the EU / UAE.¦Открыт к удалённой работе и переезду в ЕС / ОАЭ.¦Disponible para trabajo remoto y traslado a la UE / EAU.
TECHNICAL SKILLS¦ТЕХНИЧЕСКИЕ НАВЫКИ¦COMPETENCIAS TÉCNICAS
Languages and platforms:¦Языки и платформы:¦Lenguajes y plataformas:
Dart, Flutter, Swift, Kotlin, iOS, Android, platform channels, MethodChannel, EventChannel.¦Dart, Flutter, Swift, Kotlin, iOS, Android, платформенные каналы, MethodChannel, EventChannel.¦Dart, Flutter, Swift, Kotlin, iOS, Android, canales de plataforma, MethodChannel, EventChannel.
Architecture and UI:¦Архитектура и UI:¦Arquitectura e interfaz:
Mobile architecture, layered architecture, dependency injection, BLoC, Riverpod, Provider, GetX, MVVM, design systems, Storybook.¦Мобильная и слоистая архитектура, внедрение зависимостей, BLoC, Riverpod, Provider, GetX, MVVM, дизайн-системы, Storybook.¦Arquitectura móvil y por capas, inyección de dependencias, BLoC, Riverpod, Provider, GetX, MVVM, sistemas de diseño, Storybook.
Testing and delivery:¦Тестирование и выпуск:¦Pruebas y entrega:
Unit testing, widget testing, Mockito, CI/CD, Codemagic, GitHub Actions, App Store, Google Play.¦Модульные и виджет-тесты, Mockito, CI/CD, Codemagic, GitHub Actions, App Store, Google Play.¦Pruebas unitarias y de widgets, Mockito, CI/CD, Codemagic, GitHub Actions, App Store, Google Play.
Integrations and monitoring:¦Интеграции и мониторинг:¦Integraciones y monitorización:
Additional frameworks:¦Другие фреймворки:¦Otros frameworks:
EDUCATION¦ОБРАЗОВАНИЕ¦FORMACIÓN
Moscow Institute of Physics and Technology¦Московский физико-технический институт¦Instituto de Física y Tecnología de Moscú
Bachelor of Science and Master of Science¦Бакалавриат и магистратура¦Grado y máster
Applied Mathematics and Physics¦Прикладная математика и физика¦Matemáticas y Física Aplicadas
LANGUAGES¦ЯЗЫКИ¦IDIOMAS
Russian — native¦Русский — родной¦Ruso — nativo
English — professional working proficiency¦Английский — рабочий профессиональный уровень¦Inglés — competencia profesional
Spanish — A2, DELE certificate¦Испанский — A2, сертификат DELE¦Español — A2, certificado DELE
TECHNICAL WRITING¦ТЕХНИЧЕСКИЕ СТАТЬИ¦ARTÍCULOS TÉCNICOS
Recreating Telegram’s profile effect with metaballs and Flutter ↗¦Воссоздаём эффект профиля Telegram с помощью метаболов и Flutter ↗¦Recrear el efecto de perfil de Telegram con metaballs y Flutter ↗
Moving the camera with a rotated viewport in 2GIS MSDK ↗¦Перемещение камеры при повёрнутом viewport в 2GIS MSDK ↗¦Mover la cámara con un viewport girado en 2GIS MSDK ↗
PROFESSIONAL EXPERIENCE / 2017 — PRESENT¦ПРОФЕССИОНАЛЬНЫЙ ОПЫТ / 2017 — СЕЙЧАС¦EXPERIENCIA PROFESIONAL / 2017 — ACTUALIDAD
Mar 2024 – Present | Remote¦Март 2024 — сейчас | Удалённо¦Mar 2024 — actualidad | Remoto
Jan 2023 – Aug 2024 | Remote¦Январь 2023 — август 2024 | Удалённо¦Ene 2023 — ago 2024 | Remoto
Jan 2022 – Jan 2023 | Remote¦Январь 2022 — январь 2023 | Удалённо¦Ene 2022 — ene 2023 | Remoto
Aug 2021 – Apr 2022¦Август 2021 — апрель 2022¦Ago 2021 — abr 2022
Apr 2021 – Jan 2022¦Апрель 2021 — январь 2022¦Abr 2021 — ene 2022
Aug 2018 – Mar 2021¦Август 2018 — март 2021¦Ago 2018 — mar 2021
Aug 2017 – Sep 2018¦Август 2017 — сентябрь 2018¦Ago 2017 — sep 2018
Senior Flutter Developer¦Старший Flutter-разработчик¦Desarrollador sénior de Flutter
Lead Mobile Developer¦Ведущий мобильный разработчик¦Desarrollador principal de aplicaciones móviles
Flutter Developer¦Flutter-разработчик¦Desarrollador de Flutter
Junior iOS Developer¦Младший iOS-разработчик¦Desarrollador júnior de iOS
Mixed Reality Developer¦Разработчик смешанной реальности¦Desarrollador de realidad mixta
Junior Python Developer¦Младший Python-разработчик¦Desarrollador júnior de Python
Computational Materials Discovery Laboratory¦Лаборатория вычислительного поиска материалов¦Laboratorio de Descubrimiento Computacional de Materiales
Balady project with Urbi / 2GIS: navigation and maps application for Saudi Arabia that reached 500,000 monthly active users in 2025, according to internal analytics.¦Проект Balady совместно с Urbi / 2GIS: приложение навигации и карт для Саудовской Аравии. В 2025 году достигло 500 000 активных пользователей в месяц по данным внутренней аналитики.¦Proyecto Balady con Urbi / 2GIS: aplicación de navegación y mapas para Arabia Saudí que alcanzó 500.000 usuarios activos mensuales en 2025, según la analítica interna.
Built and shipped Android Auto and Apple CarPlay integrations spanning Flutter-to-native bridges, engine startup and lifecycle handling, map rendering, search interfaces, route guidance, and phone–car state synchronization using Kotlin, Swift, MethodChannel, and EventChannel.¦Разработал и выпустил интеграции Android Auto и Apple CarPlay: мосты между Flutter и нативным кодом, запуск движка и управление жизненным циклом, отображение карт, интерфейсы поиска, ведение по маршруту и синхронизация состояния телефона и автомобиля. Использовал Kotlin, Swift, MethodChannel и EventChannel.¦Desarrollé y publiqué integraciones con Android Auto y Apple CarPlay: puentes entre Flutter y código nativo, inicio y ciclo de vida del motor, renderizado de mapas, interfaces de búsqueda, navegación y sincronización de estado entre teléfono y coche, usando Kotlin, Swift, MethodChannel y EventChannel.
Reduced startup time to a usable home screen from 3.5 to 2 seconds in manual measurements by reprioritizing initialization and adapting loading behavior for older, lower-powered devices; optimized rendering for smoother interactions.¦Сократил время запуска до готового главного экрана с 3,5 до 2 секунд по ручным замерам: изменил приоритеты инициализации и адаптировал загрузку для старых маломощных устройств. Оптимизировал рендеринг для более плавного взаимодействия.¦Reduje el tiempo de inicio hasta una pantalla principal operativa de 3,5 a 2 segundos en mediciones manuales, ajustando las prioridades de inicialización y la carga para dispositivos antiguos y menos potentes; optimicé el renderizado para una interacción más fluida.
Took ownership of search and reduced input-to-results latency by approximately 10–15% in manual measurements over six months by tracing core search behavior, eliminating unnecessary requests, and implementing query-aware caching.¦Взял на себя ответственность за поиск и примерно на 10–15% сократил задержку от ввода до результатов по ручным замерам за шесть месяцев: исследовал основную логику поиска, убрал лишние запросы и реализовал кэширование с учётом запроса.¦Asumí la responsabilidad de la búsqueda y reduje la latencia entre la entrada y los resultados aproximadamente un 10–15% en mediciones manuales a lo largo de seis meses, analizando la lógica de búsqueda, eliminando solicitudes innecesarias e implementando una caché según la consulta.
Initiated and co-architected a standalone Flutter UI kit with independent testing, consolidating scattered components; partnered with designers to establish a design system, improving UI consistency and reducing recurring UI defects.¦Инициировал и совместно спроектировал отдельный Flutter UI kit с независимым тестированием, объединив разрозненные компоненты. Вместе с дизайнерами создал дизайн-систему, повысив согласованность интерфейса и сократив повторяющиеся UI-дефекты.¦Impulsé y codiseñé un kit de interfaz Flutter independiente con pruebas propias, unificando componentes dispersos; colaboré con diseño para establecer un sistema de diseño, mejorar la coherencia de la interfaz y reducir defectos recurrentes.
Built development utilities to speed up project builds through caching and by skipping unnecessary build_runner execution.¦Создал инструменты разработки для ускорения сборок за счёт кэширования и пропуска ненужных запусков build_runner.¦Creé utilidades de desarrollo para acelerar las compilaciones mediante caché y evitando ejecuciones innecesarias de build_runner.
Serve as technical lead within a three-person mobile engineering team since Jul 2026, guiding architecture and feature delivery, reviewing code, and mentoring junior developers in collaboration with product and design teams.¦С июля 2026 года — технический лидер мобильной команды из трёх человек: направляю архитектурные решения и выпуск функций, провожу ревью кода и помогаю младшим разработчикам в сотрудничестве с продуктовой командой и дизайнерами.¦Desde julio de 2026 ejerzo como líder técnico de un equipo móvil de tres personas: guío la arquitectura y la entrega de funcionalidades, reviso código y acompaño a desarrolladores júnior en colaboración con producto y diseño.
EV charging software for the US market.¦ПО для зарядки электромобилей на рынке США.¦Software de recarga de vehículos eléctricos para el mercado estadounidense.
Delivered the first iOS and Android releases to the App Store and Google Play in six months as the sole mobile engineer, owning architecture, feature implementation, testing, and store submission.¦За шесть месяцев выпустил первые версии для iOS и Android в App Store и Google Play как единственный мобильный инженер, отвечая за архитектуру, реализацию функций, тестирование и публикацию.¦Publiqué las primeras versiones de iOS y Android en el App Store y Google Play en seis meses como único ingeniero móvil, asumiendo la arquitectura, las funcionalidades, las pruebas y la publicación.
Reworked the existing codebase toward a layered architecture with BLoC, dependency injection, and tests while continuing feature delivery.¦Переработал существующий код в сторону слоистой архитектуры с BLoC, внедрением зависимостей и тестами, продолжая выпускать функции.¦Reestructuré el código existente hacia una arquitectura por capas con BLoC, inyección de dependencias y pruebas, sin detener la entrega de funcionalidades.
Implemented Google Maps features with custom rendering, native Apple Wallet Pass integration, Firebase authentication and notifications, and deep links.¦Реализовал функции Google Maps с кастомным рендерингом, нативную интеграцию Apple Wallet Pass, авторизацию и уведомления Firebase, а также глубокие ссылки.¦Implementé funciones de Google Maps con renderizado personalizado, integración nativa con Apple Wallet Pass, autenticación y notificaciones de Firebase, y enlaces profundos.
Established internal testing and release workflows for multiple application environments.¦Наладил процессы внутреннего тестирования и выпуска для нескольких окружений приложения.¦Establecí procesos internos de pruebas y publicación para varios entornos de la aplicación.
Construction process management software.¦ПО для управления строительными процессами.¦Software de gestión de procesos de construcción.
Built a reusable Flutter UI kit as a separate package, developing components from Figma designs using Storybook.¦Создал переиспользуемый Flutter UI kit в виде отдельного пакета: разрабатывал компоненты по макетам Figma с использованием Storybook.¦Creé un kit de interfaz Flutter reutilizable como paquete independiente, desarrollando componentes a partir de diseños de Figma con Storybook.
Set up continuous integration and delivery (CI/CD) with Codemagic and GitHub for environment-specific builds and store deployment.¦Настроил CI/CD с Codemagic и GitHub для сборок под разные окружения и публикации в магазинах.¦Configuré CI/CD con Codemagic y GitHub para generar compilaciones específicas por entorno y publicarlas en las tiendas.
Implemented Firebase authentication, error handling, and deep links; added Sentry error monitoring and Amplitude analytics.¦Реализовал авторизацию Firebase, обработку ошибок и глубокие ссылки; добавил мониторинг ошибок Sentry и аналитику Amplitude.¦Implementé autenticación con Firebase, gestión de errores y enlaces profundos; añadí monitorización de errores con Sentry y analítica con Amplitude.
Developed animated Flutter interfaces and product features for Pawen, including analytics, push notifications, and a RevenueCat paywall.¦Разрабатывал анимированные Flutter-интерфейсы и функции Pawen, включая аналитику, push-уведомления и paywall на RevenueCat.¦Desarrollé interfaces animadas en Flutter y funciones de Pawen, incluyendo analítica, notificaciones push y una pantalla de suscripción con RevenueCat.
Contributed to the Aeroflot iOS application using Swift, RxSwift, and MVVM.¦Участвовал в разработке iOS-приложения «Аэрофлот» на Swift, RxSwift и MVVM.¦Contribuí a la aplicación iOS de Aeroflot con Swift, RxSwift y MVVM.
Built HoloLens 2 applications using Unity and C#; supervised an intern.¦Разрабатывал приложения для HoloLens 2 на Unity и C#; руководил работой стажёра.¦Desarrollé aplicaciones para HoloLens 2 con Unity y C#; supervisé a un becario.
Developed scientific software for materials research using Python.¦Разрабатывал научное ПО для исследования материалов на Python.¦Desarrollé software científico para investigación de materiales con Python.
SELECTED PROJECTS¦ИЗБРАННЫЕ ПРОЕКТЫ¦PROYECTOS DESTACADOS
Contributed NFT support and helped deliver a shared Flutter codebase across iOS, Android, web, Windows, macOS, and Linux.¦Участвовал в реализации поддержки NFT и выпуске общей кодовой базы Flutter для iOS, Android, веба, Windows, macOS и Linux.¦Contribuí al soporte de NFT y a la entrega de una base de código Flutter compartida para iOS, Android, web, Windows, macOS y Linux.
Built iOS and Android applications with React Native / Expo and a web application with Next.js; implemented messaging, push notifications, media handling, and authentication.¦Разработал приложения для iOS и Android на React Native / Expo и веб-приложение на Next.js; реализовал сообщения, push-уведомления, работу с медиа и авторизацию.¦Desarrollé aplicaciones iOS y Android con React Native / Expo y una aplicación web con Next.js; implementé mensajería, notificaciones push, gestión de contenido multimedia y autenticación.
Travels — Dmitrii Proshutinskii¦Путешествия — Дмитрий Прошутинский¦Viajes — Dmitrii Proshutinskii
03 / TRAVELS · PERSONAL FIELD NOTES¦03 / ПУТЕШЕСТВИЯ · ЛИЧНЫЕ ЗАМЕТКИ¦03 / VIAJES · NOTAS PERSONALES
Away from¦Вдали от¦Lejos de
 the screen.¦экрана.¦la pantalla.
Places I’ve been. A few frames to keep.¦Места, где я побывал. Несколько кадров на память.¦Lugares que he visitado. Algunas imágenes para recordar.
KAMCHATKA / AUGUST¦КАМЧАТКА / АВГУСТ¦KAMCHATKA / AGOSTO
SCROLL TO THE JOURNAL ↓¦К ПУТЕВЫМ ЗАМЕТКАМ ↓¦VER EL DIARIO ↓
A few places.¦Несколько мест.¦Algunos lugares.
A different pace.¦Другой ритм.¦Otro ritmo.
AUGUST / MAY–JUNE¦АВГУСТ / МАЙ–ИЮНЬ¦AGOSTO / MAYO–JUNIO
A personal travel journal, in short entries: where I went, a little context and a few images.¦Личный дневник путешествий: коротко о том, где я был, немного контекста и несколько изображений.¦Un diario personal de viajes en entradas breves: dónde estuve, un poco de contexto y algunas imágenes.
4 PLACES / 12 FRAMES¦4 НАПРАВЛЕНИЯ / 12 КАДРОВ¦4 DESTINOS / 12 IMÁGENES
Travel destinations¦Направления путешествий¦Destinos de viaje
01 / KAMCHATKA¦01 / КАМЧАТКА¦01 / KAMCHATKA
02 / VIETNAM¦02 / ВЬЕТНАМ¦02 / VIETNAM
03 / CHINA¦03 / КИТАЙ¦03 / CHINA
04 / SINGAPORE¦04 / СИНГАПУР¦04 / SINGAPUR
01 / AUGUST¦01 / АВГУСТ¦01 / AGOSTO
02 / MAY–JUNE¦02 / МАЙ–ИЮНЬ¦02 / MAYO–JUNIO
03 / MAY–JUNE¦03 / МАЙ–ИЮНЬ¦03 / MAYO–JUNIO
04 / MAY–JUNE¦04 / МАЙ–ИЮНЬ¦04 / MAYO–JUNIO
Kamchatka¦Камчатка¦Kamchatka
Vietnam¦Вьетнам¦Vietnam
China¦Китай¦China
Singapore¦Сингапур¦Singapur
Volcanoes, ocean, open space.¦Вулканы, океан, простор.¦Volcanes, océano, espacio abierto.
An August trip to Kamchatka. A short visual chapter devoted to its volcanic landscape and Pacific coastline.¦Августовская поездка на Камчатку. Короткая визуальная глава о вулканических ландшафтах и побережье Тихого океана.¦Un viaje a Kamchatka en agosto. Un breve capítulo visual dedicado a sus paisajes volcánicos y a la costa del Pacífico.
A different rhythm.¦Другой ритм.¦Otro ritmo.
Vietnam was part of my May–June travels. A few frames to hold the contrast between streets, water and tropical scenery.¦Вьетнам был частью моих путешествий в мае–июне. Несколько кадров о контрасте улиц, воды и тропических пейзажей.¦Vietnam formó parte de mis viajes de mayo y junio. Algunas imágenes del contraste entre calles, agua y paisajes tropicales.
Between scales.¦Разные масштабы.¦Entre escalas.
Another chapter from May–June: China. An image study moving between landscapes, architectural details and the scale of a city.¦Ещё одна глава мая–июня — Китай. Визуальные заметки о пейзажах, архитектурных деталях и масштабе города.¦Otro capítulo de mayo y junio: China. Un recorrido visual entre paisajes, detalles arquitectónicos y la escala de una ciudad.
City meets green.¦Город и зелень.¦Ciudad y naturaleza.
Singapore, during the same May–June stretch. A compact visual note on the city, its greenery and its layers of architecture.¦Сингапур в том же путешествии в мае–июне. Короткая визуальная заметка о городе, зелени и разных слоях архитектуры.¦Singapur, en ese mismo viaje de mayo y junio. Una breve nota visual sobre la ciudad, su vegetación y sus distintas capas de arquitectura.
[01] VOLCANIC LANDSCAPE¦[01] ВУЛКАНИЧЕСКИЙ ПЕЙЗАЖ¦[01] PAISAJE VOLCÁNICO
[02] PACIFIC COASTLINE¦[02] ПОБЕРЕЖЬЕ ТИХОГО ОКЕАНА¦[02] COSTA DEL PACÍFICO
[03] SMALL DETAILS¦[03] МАЛЕНЬКИЕ ДЕТАЛИ¦[03] PEQUEÑOS DETALLES
[01] LIMESTONE & WATER¦[01] ИЗВЕСТНЯК И ВОДА¦[01] CALIZA Y AGUA
[02] STREET TEXTURES¦[02] ФАКТУРЫ УЛИЦ¦[02] TEXTURAS DE LAS CALLES
[03] ALONG THE COAST¦[03] ВДОЛЬ ПОБЕРЕЖЬЯ¦[03] A LO LARGO DE LA COSTA
[01] LANDSCAPE¦[01] ПЕЙЗАЖ¦[01] PAISAJE
[02] ARCHITECTURAL DETAILS¦[02] АРХИТЕКТУРНЫЕ ДЕТАЛИ¦[02] DETALLES ARQUITECTÓNICOS
[03] CITY SCALE¦[03] МАСШТАБ ГОРОДА¦[03] ESCALA URBANA
[01] WATERFRONT¦[01] НАБЕРЕЖНАЯ¦[01] FRENTE MARÍTIMO
[02] URBAN GREENERY¦[02] ГОРОДСКАЯ ЗЕЛЕНЬ¦[02] VEGETACIÓN URBANA
[03] HERITAGE FACADES¦[03] ИСТОРИЧЕСКИЕ ФАСАДЫ¦[03] FACHADAS HISTÓRICAS
DESTINATION STUDY / AI-GENERATED IMAGES¦ОБРАЗЫ НАПРАВЛЕНИЙ / ИЗОБРАЖЕНИЯ СОЗДАНЫ ИИ¦ESTUDIO DEL DESTINO / IMÁGENES GENERADAS CON IA
More to see.¦Ещё столько увидеть.¦Más por descubrir.
More to keep.¦Ещё столько сохранить.¦Más para recordar.
ABOUT THE IMAGES¦ОБ ИЗОБРАЖЕНИЯХ¦SOBRE LAS IMÁGENES
These destination images were generated for this design concept. They can be replaced with photographs from the actual trips.¦Эти изображения созданы с помощью ИИ для концепции сайта. Их можно заменить фотографиями из реальных поездок.¦Estas imágenes de los destinos se generaron con IA para el concepto del sitio. Pueden sustituirse por fotografías de los viajes reales.
AI-generated illustration of Kamchatka’s volcanic landscape¦Созданный ИИ вулканический пейзаж Камчатки¦Ilustración generada con IA del paisaje volcánico de Kamchatka
404 / PAGE NOT FOUND¦404 / СТРАНИЦА НЕ НАЙДЕНА¦404 / PÁGINA NO ENCONTRADA
Page not found — Dmitrii Proshutinskii¦Страница не найдена — Дмитрий Прошутинский¦Página no encontrada — Dmitrii Proshutinskii
A different path.¦Другой маршрут.¦Otro camino.
The page you’re looking for isn’t here.¦Здесь нет страницы, которую вы ищете.¦La página que buscas no está aquí.
BACK TO HOME ↗¦НА ГЛАВНУЮ ↗¦VOLVER AL INICIO ↗
Flutter / Dart engineer building thoughtful mobile apps. Architecture, performance, native integrations and independent products.¦Flutter / Dart инженер. Продуманные мобильные приложения, архитектура, производительность, нативные интеграции и собственные продукты.¦Ingeniero Flutter / Dart. Aplicaciones móviles bien pensadas, arquitectura, rendimiento, integraciones nativas y productos propios.
Professional experience, engineering outcomes, technical skills and education. Senior Mobile Engineer | Flutter / Dart.¦Профессиональный опыт, инженерные результаты, технические навыки и образование. Старший мобильный инженер | Flutter / Dart.¦Experiencia profesional, resultados de ingeniería, competencias técnicas y formación. Ingeniero sénior de desarrollo móvil | Flutter / Dart.
Personal travel notes from Kamchatka, Vietnam, China and Singapore.¦Личные заметки из путешествий по Камчатке, Вьетнаму, Китаю и Сингапуру.¦Notas personales de viajes por Kamchatka, Vietnam, China y Singapur.
Page not found.¦Страница не найдена.¦Página no encontrada.
LIGHT¦СВЕТЛАЯ¦CLARO
DARK¦ТЁМНАЯ¦OSCURO
Switch color theme¦Переключить цветовую тему¦Cambiar el tema de color
Site preferences¦Настройки сайта¦Preferencias del sitio
Language¦Язык¦Idioma
`.trim().split('\n').map(line => line.split('¦').map(s => s.trim()));
export const translations = new Map([...rows,...placeTranslations].map(([key,ru,es])=>[key,{ru,es}]));
const unchanged = new Set(['DP /','2014–2020','5+',':','↗','−10–15%','GITHUB ↗','LINKEDIN ↗','TELEGRAM ↗','iOS ↗','RuStore ↗','KBT Note','Life Tracker','RusCaps','UseTech','Epic Charging','Konstructly Ltd.','No Finish Line Ltd.','RAMAX Group','Strata Solutions','Komodo Wallet ↗','Football+ ↗','KOPTEHE+JOB@GMAIL.COM ↗','koptehe@gmail.com','koptehe@gmail.com ↗','FLUTTER / ANDROID AUTO / APPLE CARPLAY','Firebase, Google Maps, 2GIS SDK, Android Auto, Apple CarPlay, Apple Wallet Pass, Sentry, Amplitude, Mixpanel, PostHog.','React Native, Expo, Next.js.']);
const escape = s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const decode = s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>');
export function translate(text,lang){if(lang==='en'||unchanged.has(text))return text;const result=translations.get(text)?.[lang];if(!result)throw new Error(`Missing ${lang} translation: ${text}`);return result;}
export function localizedPath(route,lang){return (lang==='en'?'':'/'+lang)+'/'+(route==='home'?'':route+'/');}
export function localize(html,lang,route){
 html=html.replace(/>([^<>]+)</g,(all,text)=>{if(!text.trim())return all;const trimmed=decode(text.trim());return '>'+text.slice(0,text.length-text.trimStart().length)+escape(translate(trimmed,lang))+text.slice(text.trimEnd().length)+'<';});
 html=html.replace(/(alt|aria-label|content)="([^"]*)"/g,(all,attribute,value)=>{
  const original=decode(value);if(translations.has(original))return `${attribute}="${escape(translate(original,lang))}"`;
  if(attribute==='alt'&&original.startsWith('AI-generated destination illustration: ')){
   const [country,caption]=original.slice('AI-generated destination illustration: '.length).split(', ');
   const key=[...translations.keys()].find(k=>k.replace(/^\[\d+\] /,'').toLowerCase()===caption);
   if(!key)throw new Error('Missing image caption: '+original);
   return `alt="${escape((lang==='ru'?'Изображение, созданное ИИ: ':lang==='es'?'Ilustración generada con IA: ':'AI-generated destination illustration: ')+translate(country,lang)+', '+translate(key,lang).replace(/^\[\d+\] /,''))}"`;
  }return all;
 });
 if(lang!=='en')html=html.replace(/href="\/(experience\/|travels\/)?"/g,(_,r)=>`href="/${lang}/${r||''}"`);
 const canonical='https://proshutinskii.com'+localizedPath(route,lang);
 html=html.replace('<html lang="en">',`<html lang="${lang}">`).replace(/<link rel="canonical" href="[^"]+">/,`<link rel="canonical" href="${canonical}">`);
 const languageLinks=['en','ru','es'].map(l=>`<a href="${localizedPath(route,l)}" lang="${l}" hreflang="${l}" data-language="${l}" ${l===lang?'aria-current="true"':''} aria-label="${{en:'English',ru:'Русский',es:'Español'}[l]}">${l.toUpperCase()}</a>`).join('');
 const controls=`<div class="preferences mono" role="group" aria-label="${translate('Site preferences',lang)}"><button type="button" class="theme-toggle" aria-label="${translate('Switch color theme',lang)}" aria-pressed="false" data-light-label="${translate('LIGHT',lang)}" data-dark-label="${translate('DARK',lang)}"><span data-theme-label>${translate('LIGHT',lang)}</span><span aria-hidden="true" data-theme-icon>◐</span></button><div class="language-links" role="group" aria-label="${translate('Language',lang)}">${languageLinks}</div></div>`;
 html=html.replace('</nav></header>',`</nav>${controls}</header>`);
 const alternates=['en','ru','es'].map(l=>`<link rel="alternate" hreflang="${l}" href="https://proshutinskii.com${localizedPath(route,l)}">`).join('')+`<link rel="alternate" hreflang="x-default" href="https://proshutinskii.com${localizedPath(route,'en')}">`;
 return html.replace('<link rel="stylesheet"',`${alternates}<script src="/preferences.js"></script><link rel="stylesheet"`);
}
