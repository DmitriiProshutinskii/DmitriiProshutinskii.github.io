import {placeTranslations} from './content/travel-places.mjs';
// Exact source-text keys keep translations tied to the verified English CV.
// Build fails on an unknown text so new English content cannot silently remain untranslated.
const rows = `
COUNTRIES VISITED ↗¦СТРАН, ГДЕ Я БЫЛ ↗¦PAÍSES VISITADOS ↗
Five journal entries so far¦Пока пять путевых заметок¦Por ahora, cinco entradas de viaje
VISITED / 27 COUNTRIES¦ГДЕ Я БЫЛ / 27 СТРАН¦VISITADOS / 27 PAÍSES
Spin the globe.¦Покрути глобус.¦Gira el globo.
Pink dots are countries I’ve been to. Lines fly from Tbilisi to the journal entries. Tap a marker to jump to its entry.¦Розовые точки — страны, где я побывал. Линии ведут из Тбилиси к местам из путевых заметок. Нажми на метку, чтобы перейти к записи.¦Los puntos rosas son países que he visitado. Las líneas van de Tiflis a los lugares del diario. Toca un marcador para ir a su entrada.
DRAG TO ROTATE¦ПОТЯНИ, ЧТОБЫ ПОВЕРНУТЬ¦ARRASTRA PARA GIRAR
Journal entries on the globe¦Путевые заметки на глобусе¦Entradas de viaje en el globo
Rotating globe with visited countries highlighted¦Вращающийся глобус, на котором отмечены страны, где я был¦Globo giratorio con los países visitados resaltados
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
AI PRODUCT ENGINEERING / AGENTIC SYSTEMS & LLM APPS¦AI-ИНЖЕНЕРИЯ ПРОДУКТОВ / АГЕНТНЫЕ СИСТЕМЫ И LLM¦INGENIERÍA DE PRODUCTOS DE IA / SISTEMAS AGÉNTICOS Y LLM
I build AI products¦Создаю AI-продукты¦Creo productos de IA
from idea to production.¦от идеи до продакшена.¦de la idea a producción.
AI Product Engineer | Agentic systems · RAG · LLM evals¦AI Product Engineer | Агентные системы · RAG · оценка LLM¦AI Product Engineer | Sistemas agénticos · RAG · evaluación de LLM
I build AI-native products end to end: agent harnesses, RAG pipelines and LLM features wired into production and held to measurable quality. From problem discovery to rollout, with an eye on reliability, latency and cost.¦Создаю AI-продукты целиком: агентные харнессы, RAG-пайплайны и LLM-функции, встроенные в продакшен и измеримые по качеству. От поиска проблемы до выкатки — с вниманием к надёжности, задержкам и стоимости.¦Construyo productos de IA de principio a fin: harnesses de agentes, pipelines RAG y funciones con LLM integradas en producción y con calidad medible. Del descubrimiento del problema al despliegue, cuidando fiabilidad, latencia y coste.
SCREENS IN 2.5 MONTHS¦ЭКРАНОВ ЗА 2,5 МЕСЯЦА¦PANTALLAS EN 2,5 MESES
Football+, shipped solo with an AI toolchain¦Football+ — в одиночку, с AI-инструментами¦Football+, en solitario con herramientas de IA
MAU GOVERNMENT SUPER-APP¦MAU У ГОСУДАРСТВЕННОГО СУПЕРАППА¦MAU EN UNA SUPERAPP GUBERNAMENTAL
Led mobile for Balady, Saudi Arabia¦Руководил мобильной разработкой Balady, Саудовская Аравия¦Lideré el equipo móvil de Balady, Arabia Saudí
YEARS IN SOFTWARE¦ЛЕТ В РАЗРАБОТКЕ¦AÑOS EN SOFTWARE
Mobile at scale, mixed reality, research — now AI¦Мобильная разработка, смешанная реальность, наука — теперь AI¦Móvil a gran escala, realidad mixta, investigación; ahora IA
01 / FOOTBALL+ · CO-FOUNDER & CTO / MAR 2026 — PRESENT¦01 / FOOTBALL+ · СООСНОВАТЕЛЬ И CTO / МАР 2026 — СЕЙЧАС¦01 / FOOTBALL+ · COFUNDADOR Y CTO / MAR 2026 — ACTUALIDAD
80 screens and 40 endpoints¦80 экранов и 40 эндпоинтов¦80 pantallas y 40 endpoints
in two and a half months.¦за два с половиной месяца.¦en dos meses y medio.
Football+ — a social network and job marketplace for the Russian football industry. I built it solo by orchestrating an AI toolchain: LLM vacancy intake, candidate matching, computer-vision identity checks.¦Football+ — соцсеть и биржа вакансий для российской футбольной индустрии. Сделал продукт в одиночку, оркестрируя AI-инструменты: LLM-разбор вакансий, подбор кандидатов, проверка личности по видео.¦Football+: red social y bolsa de empleo para la industria del fútbol ruso. Lo construí en solitario orquestando herramientas de IA: ingesta de vacantes con LLM, emparejamiento de candidatos y verificación de identidad por visión artificial.
EXPLORE FOOTBALL+ ↗¦О FOOTBALL+ ↗¦CONOCER FOOTBALL+ ↗
LAUNCH / PRODUCT RADAR¦ЗАПУСК / PRODUCT RADAR¦LANZAMIENTO / PRODUCT RADAR
Product of the Week · 200+ MAU after launch.¦Продукт недели · 200+ MAU после запуска.¦Producto de la semana · 200+ MAU tras el lanzamiento.
CODEBASE / TYPESCRIPT MONOREPO¦КОДОВАЯ БАЗА / TYPESCRIPT-МОНОРЕПО¦CÓDIGO / MONOREPO TYPESCRIPT
1,550 commits · 313 test files · CI/CD with rollback.¦1 550 коммитов · 313 файлов тестов · CI/CD с откатом.¦1.550 commits · 313 archivos de test · CI/CD con rollback.
02 / 2GIS · URBI / MAR 2024 — OCT 2026¦02 / 2GIS · URBI / МАР 2024 — ОКТ 2026¦02 / 2GIS · URBI / MAR 2024 — OCT 2026
LLM applications, from prototype to production.¦LLM-приложения: от прототипа до продакшена.¦Aplicaciones LLM, del prototipo a producción.
As AI Product Engineer: RAG pipelines, agent harnesses with tool calling and MCP, and an AI engineering toolchain the team adopted. Evals, guardrails and tracing made LLM quality a release standard.¦Как AI Product Engineer: RAG-пайплайны, агентные харнессы с вызовом инструментов и MCP, AI-инструменты разработки, которые приняла команда. Evals, guardrails и трейсинг сделали качество LLM частью стандарта релиза.¦Como AI Product Engineer: pipelines RAG, harnesses de agentes con tool calling y MCP, y una cadena de herramientas de IA que adoptó el equipo. Evals, guardrails y trazas hicieron de la calidad del LLM un estándar de lanzamiento.
Before that, Balady: 500K MAU.¦До этого — Balady: 500K MAU.¦Antes, Balady: 500K MAU.
Led mobile for a government super-app in Saudi Arabia: Android Auto and CarPlay, search latency down 10–15%, startup from 3.5 s to 2 s.¦Руководил мобильной разработкой государственного суперприложения в Саудовской Аравии: Android Auto и CarPlay, задержка поиска −10–15%, запуск с 3,5 до 2 с.¦Lideré el desarrollo móvil de una superapp gubernamental en Arabia Saudí: Android Auto y CarPlay, latencia de búsqueda −10–15%, arranque de 3,5 s a 2 s.
AI subtitles for Russian short-form video, with careful line breaks and timing. Web app in early access.¦AI-субтитры для коротких видео на русском с аккуратными переносами и таймингом. Веб-приложение в раннем доступе.¦Subtítulos con IA para vídeos cortos en ruso, con saltos de línea y tiempos cuidados. Aplicación web en acceso anticipado.
From mobile at scale¦От мобильной разработки¦Del móvil a gran escala
to AI-native products.¦к AI-продуктам.¦a productos nativos de IA.
Eight years across large engineering teams and early-stage startups: senior mobile engineering at scale, then AI-first product work — and mentoring developers along the way.¦Восемь лет в крупных инженерных командах и молодых стартапах: мобильная разработка на масштабе, затем продуктовая работа с AI — и менторство разработчиков по пути.¦Ocho años entre grandes equipos de ingeniería y startups en sus inicios: ingeniería móvil a gran escala, luego producto con IA, y mentoría de desarrolladores por el camino.
Dmitrii Proshutinskii — AI Product Engineer¦Дмитрий Прошутинский — AI Product Engineer¦Dmitrii Proshutinskii — AI Product Engineer
AI Product Engineer. Agent harnesses, RAG pipelines and LLM features shipped end to end, with a background in senior mobile engineering at scale.¦AI Product Engineer. Агентные харнессы, RAG-пайплайны и LLM-функции от идеи до продакшена; за плечами — мобильная разработка на масштабе.¦AI Product Engineer. Harnesses de agentes, pipelines RAG y funciones con LLM de principio a fin, con experiencia previa en ingeniería móvil a gran escala.
Professional experience, AI and mobile engineering outcomes, technical skills and education. AI Product Engineer.¦Профессиональный опыт, результаты в AI и мобильной разработке, технические навыки и образование. AI Product Engineer.¦Experiencia profesional, resultados en IA e ingeniería móvil, competencias técnicas y formación. AI Product Engineer.
AI Product Engineer with 8 years in software engineering. I build AI-native products end to end: agent harnesses, RAG pipelines and LLM features wired into production systems and held to measurable quality with evals, guardrails and observability. I own the full loop, from problem discovery with stakeholders and rapid prototyping to production rollout with attention to reliability, latency and cost. Background in senior mobile engineering at scale and Applied Mathematics & Physics at MIPT.¦AI Product Engineer с 8 годами в разработке ПО. Создаю AI-продукты целиком: агентные харнессы, RAG-пайплайны и LLM-функции, встроенные в продакшен-системы и измеримые по качеству через evals, guardrails и наблюдаемость. Веду весь цикл — от поиска проблемы вместе со стейкхолдерами и быстрого прототипирования до выкатки в продакшен с вниманием к надёжности, задержкам и стоимости. За плечами — старшая мобильная разработка на масштабе и прикладная математика и физика в МФТИ.¦AI Product Engineer con 8 años en ingeniería de software. Construyo productos nativos de IA de principio a fin: harnesses de agentes, pipelines RAG y funciones con LLM integradas en sistemas de producción y sometidas a una calidad medible con evals, guardrails y observabilidad. Me encargo de todo el ciclo, desde el descubrimiento del problema con los stakeholders y el prototipado rápido hasta el despliegue en producción, cuidando fiabilidad, latencia y coste. Experiencia previa en ingeniería móvil sénior a gran escala y formación en Matemáticas y Física Aplicadas en el MIPT.
Open to relocation to Dubai or Spain, and to remote work.¦Открыт к переезду в Дубай или Испанию и к удалённой работе.¦Disponible para trasladarme a Dubái o España y para trabajo remoto.
AI engineering:¦AI-инженерия:¦Ingeniería de IA:
LLM applications, AI agents, multi-agent orchestration, agent harnesses, tool calling, MCP, RAG (embeddings, vector search), prompt engineering, structured outputs.¦LLM-приложения, AI-агенты, мультиагентная оркестрация, агентные харнессы, вызов инструментов, MCP, RAG (эмбеддинги, векторный поиск), промпт-инжиниринг, структурированные ответы.¦Aplicaciones LLM, agentes de IA, orquestación multiagente, harnesses de agentes, tool calling, MCP, RAG (embeddings, búsqueda vectorial), prompt engineering, salidas estructuradas.
AI quality:¦Качество AI:¦Calidad de IA:
LLM evals, regression sets, guardrails, observability and tracing, latency and cost optimization.¦LLM evals, регрессионные наборы, guardrails, наблюдаемость и трейсинг, оптимизация задержек и стоимости.¦Evals de LLM, conjuntos de regresión, guardrails, observabilidad y trazas, optimización de latencia y coste.
Models and APIs:¦Модели и API:¦Modelos y API:
OpenAI API / SDK, Anthropic Claude API, open-weight models (Qwen) via OpenAI-compatible routers.¦OpenAI API / SDK, Anthropic Claude API, открытые модели (Qwen) через OpenAI-совместимые роутеры.¦OpenAI API / SDK, Anthropic Claude API, modelos de pesos abiertos (Qwen) a través de routers compatibles con OpenAI.
AI-native development:¦AI-native разработка:¦Desarrollo nativo de IA:
Claude Code, Cursor, spec-driven agentic workflows, AI code review.¦Claude Code, Cursor, агентные процессы по спецификациям, AI-ревью кода.¦Claude Code, Cursor, flujos agénticos guiados por especificaciones, revisión de código con IA.
Engineering:¦Инженерия:¦Ingeniería:
TypeScript, Node.js (Hono), Python, PostgreSQL, Redis, Docker, CI/CD, Azure, Git, REST APIs.¦TypeScript, Node.js (Hono), Python, PostgreSQL, Redis, Docker, CI/CD, Azure, Git, REST API.¦TypeScript, Node.js (Hono), Python, PostgreSQL, Redis, Docker, CI/CD, Azure, Git, API REST.
Mobile:¦Мобильная разработка:¦Móvil:
Flutter / Dart (expert), React Native / Expo, iOS and Android releases, Android Auto, Apple CarPlay.¦Flutter / Dart (эксперт), React Native / Expo, релизы iOS и Android, Android Auto, Apple CarPlay.¦Flutter / Dart (experto), React Native / Expo, publicación en iOS y Android, Android Auto, Apple CarPlay.
Computer vision:¦Компьютерное зрение:¦Visión artificial:
MediaPipe, on-device face detection, liveness checks.¦MediaPipe, детекция лиц на устройстве, проверка живости.¦MediaPipe, detección facial en el dispositivo, comprobaciones de vida.
Product:¦Продукт:¦Producto:
End-to-end ownership, 0→1 startups, hypothesis validation and MVPs, prototype to production, customer discovery, mentoring.¦Ответственность за продукт целиком, стартапы 0→1, проверка гипотез и MVP, от прототипа до продакшена, customer discovery, менторство.¦Responsabilidad de extremo a extremo, startups 0→1, validación de hipótesis y MVP, del prototipo a producción, customer discovery, mentoría.
Spanish — A2–B1, DELE A2¦Испанский — A2–B1, DELE A2¦Español — A2–B1, DELE A2
Mar 2026 – Present | Remote¦Март 2026 — сейчас | Удалённо¦Mar 2026 — actualidad | Remoto
Sep 2025 – Oct 2026 | Remote¦Сентябрь 2025 — октябрь 2026 | Удалённо¦Sep 2025 — oct 2026 | Remoto
Mar 2024 – Sep 2025 | Remote¦Март 2024 — сентябрь 2025 | Удалённо¦Mar 2024 — sep 2025 | Remoto
Co-founder & CTO¦Сооснователь и CTO¦Cofundador y CTO
Lead Mobile Engineer, Balady¦Ведущий мобильный инженер, Balady¦Ingeniero móvil principal, Balady
iOS Developer¦iOS-разработчик¦Desarrollador de iOS
Python Developer¦Python-разработчик¦Desarrollador de Python
RESPONSIBILITIES¦ОБЯЗАННОСТИ¦RESPONSABILIDADES
KEY ACCOMPLISHMENTS¦КЛЮЧЕВЫЕ РЕЗУЛЬТАТЫ¦LOGROS CLAVE
Social network and job marketplace for the Russian football industry.¦Соцсеть и биржа вакансий для российской футбольной индустрии.¦Red social y bolsa de empleo para la industria del fútbol ruso.
Government navigation and city-services super-app for Saudi Arabia.¦Государственное суперприложение навигации и городских сервисов для Саудовской Аравии.¦Superapp gubernamental de navegación y servicios urbanos para Arabia Saudí.
Construction management software.¦ПО для управления строительством.¦Software de gestión de la construcción.
Built and shipped the whole product solo by orchestrating an AI toolchain: 80 screens and 40 API endpoints in 2.5 months; 1,550 commits and 313 test files.¦Сделал и выпустил весь продукт в одиночку, оркестрируя AI-инструменты: 80 экранов и 40 API-эндпоинтов за 2,5 месяца; 1 550 коммитов и 313 файлов тестов.¦Construí y lancé todo el producto en solitario orquestando herramientas de IA: 80 pantallas y 40 endpoints de API en 2,5 meses; 1.550 commits y 313 archivos de test.
Launched to 200+ MAU; #1 Product of the Week on Product Radar.¦Запустил и вывел на 200+ MAU; продукт недели №1 на Product Radar.¦Lanzado y con 200+ MAU; producto de la semana n.º 1 en Product Radar.
Built an LLM vacancy-intake pipeline: a link or text (hh.ru, Telegram posts, any site) becomes structured job drafts via schema-validated extraction (OpenAI SDK, Zod, Qwen3-30B), with employer matching and duplicate detection; powers a Telegram bot and the admin panel.¦Создал LLM-пайплайн приёма вакансий: ссылка или текст (hh.ru, посты в Telegram, любой сайт) превращается в структурированные черновики вакансий через извлечение по схеме (OpenAI SDK, Zod, Qwen3-30B), с сопоставлением работодателей и поиском дубликатов; работает в Telegram-боте и админ-панели.¦Creé un pipeline de ingesta de vacantes con LLM: un enlace o texto (hh.ru, publicaciones de Telegram, cualquier sitio) se convierte en borradores estructurados de ofertas mediante extracción validada por esquema (OpenAI SDK, Zod, Qwen3-30B), con emparejamiento de empleadores y detección de duplicados; alimenta un bot de Telegram y el panel de administración.
Made LLM calls production-grade: typed failure handling (rate limits, refusals, truncation, invalid JSON), timeouts and retries, per-request token and cost tracking; an open-weight model through a pay-per-use router keeps LLM spend predictable.¦Довёл вызовы LLM до продакшен-уровня: типизированная обработка ошибок (лимиты, отказы, обрезание, невалидный JSON), таймауты и повторы, учёт токенов и стоимости на каждый запрос; открытая модель через роутер с оплатой по факту делает расходы на LLM предсказуемыми.¦Llevé las llamadas al LLM a nivel de producción: gestión tipada de fallos (límites de ritmo, rechazos, truncamiento, JSON inválido), timeouts y reintentos, seguimiento de tokens y coste por petición; un modelo de pesos abiertos a través de un router de pago por uso mantiene el gasto en LLM predecible.
Shipped LLM features for candidate–vacancy matching, profile generation and content moderation using embeddings and structured outputs.¦Выпустил LLM-функции: подбор кандидатов к вакансиям, генерация профилей и модерация контента на эмбеддингах и структурированных ответах.¦Lancé funciones con LLM para emparejar candidatos y vacantes, generar perfiles y moderar contenido usando embeddings y salidas estructuradas.
Built computer-vision identity verification: on-device face detection (MediaPipe on web, VisionCamera on mobile), liveness / anti-spoofing and avatar matching through a queued CV service, automatic decisions with human-in-the-loop override.¦Создал проверку личности на компьютерном зрении: детекция лица на устройстве (MediaPipe в вебе, VisionCamera на мобильных), проверка живости и защита от подделки, сверка с аватаром через CV-сервис с очередью; решения автоматические, с возможностью ручного вмешательства.¦Creé una verificación de identidad con visión artificial: detección facial en el dispositivo (MediaPipe en web, VisionCamera en móvil), prueba de vida y antifraude y comparación con el avatar mediante un servicio de visión en cola; decisiones automáticas con supervisión humana.
Stack: TypeScript monorepo — Hono API, Next.js, React Native / Expo, PostgreSQL, Redis / BullMQ, Socket.IO, Docker, CI/CD with rollback.¦Стек: TypeScript-монорепозиторий — Hono API, Next.js, React Native / Expo, PostgreSQL, Redis / BullMQ, Socket.IO, Docker, CI/CD с откатом.¦Stack: monorepo en TypeScript — API con Hono, Next.js, React Native / Expo, PostgreSQL, Redis / BullMQ, Socket.IO, Docker, CI/CD con rollback.
Designed and shipped LLM applications from rapid prototype to production for 2GIS / URBI products.¦Проектировал и выпускал LLM-приложения для продуктов 2GIS / URBI — от быстрого прототипа до продакшена.¦Diseñé y lancé aplicaciones LLM para productos de 2GIS / URBI, del prototipo rápido a producción.
Built RAG pipelines: chunking, embeddings, vector search and grounded answers with structured outputs.¦Строил RAG-пайплайны: разбиение на фрагменты, эмбеддинги, векторный поиск и ответы с опорой на источники в структурированном виде.¦Construí pipelines RAG: fragmentación, embeddings, búsqueda vectorial y respuestas fundamentadas con salidas estructuradas.
Built agent harnesses for LLM task solving: multi-agent orchestration, tool calling and MCP integrations with internal APIs and data sources, on OpenAI and Anthropic Claude APIs.¦Создавал агентные харнессы для решения задач с LLM: мультиагентная оркестрация, вызов инструментов и MCP-интеграции с внутренними API и источниками данных на OpenAI и Anthropic Claude API.¦Construí harnesses de agentes para resolver tareas con LLM: orquestación multiagente, tool calling e integraciones MCP con API y fuentes de datos internas, sobre las API de OpenAI y Anthropic Claude.
Orchestrated an AI engineering toolchain across the delivery cycle: Claude Code and Cursor agents, spec-driven workflows, custom harnesses, MCP tools and AI code review.¦Выстроил AI-инструменты на всём цикле разработки: агенты Claude Code и Cursor, процессы по спецификациям, собственные харнессы, MCP-инструменты и AI-ревью кода.¦Orquesté una cadena de herramientas de IA en todo el ciclo de entrega: agentes de Claude Code y Cursor, flujos guiados por especificaciones, harnesses propios, herramientas MCP y revisión de código con IA.
Made LLM evaluation a release standard: regression sets for prompts and agents, guardrails, observability and tracing, with quality, latency and cost tracked per task.¦Сделал оценку LLM стандартом релиза: регрессионные наборы для промптов и агентов, guardrails, наблюдаемость и трейсинг; качество, задержка и стоимость отслеживаются по каждой задаче.¦Convertí la evaluación de LLM en un estándar de lanzamiento: conjuntos de regresión para prompts y agentes, guardrails, observabilidad y trazas, con calidad, latencia y coste medidos por tarea.
Rolled AI-native development practices out to the team.¦Внедрил практики AI-native разработки в команде.¦Extendí las prácticas de desarrollo nativo de IA a todo el equipo.
Technical lead of a 3-person mobile team since Jul 2026: architecture, feature delivery, code review and mentoring of junior developers.¦С июля 2026 — технический лидер мобильной команды из трёх человек: архитектура, выпуск функций, ревью кода и менторство младших разработчиков.¦Líder técnico de un equipo móvil de tres personas desde julio de 2026: arquitectura, entrega de funcionalidades, revisión de código y mentoría de desarrolladores júnior.
Led mobile development of Balady, a government navigation and city-services super-app with 500K MAU (2025), built in Flutter.¦Руководил мобильной разработкой Balady — государственного суперприложения навигации и городских сервисов с 500K MAU (2025) на Flutter.¦Lideré el desarrollo móvil de Balady, una superapp gubernamental de navegación y servicios urbanos con 500K MAU (2025), construida en Flutter.
Cut search-to-result latency by ~10–15% with query-aware caching and fewer redundant requests; cut startup to a usable home screen from 3.5 s to 2 s.¦Сократил задержку поиска до результата примерно на 10–15% за счёт кэширования с учётом запроса и отказа от лишних запросов; ускорил запуск до готового главного экрана с 3,5 до 2 с.¦Reduje la latencia de búsqueda un ~10–15% con caché según la consulta y menos peticiones redundantes; recorté el arranque hasta una pantalla principal operativa de 3,5 s a 2 s.
Shipped native Android Auto and Apple CarPlay integrations (Kotlin, Swift, platform channels).¦Выпустил нативные интеграции Android Auto и Apple CarPlay (Kotlin, Swift, платформенные каналы).¦Lancé integraciones nativas con Android Auto y Apple CarPlay (Kotlin, Swift, canales de plataforma).
Initiated and co-architected a standalone Flutter UI kit with independent testing; partnered with designers on a design system, improving UI consistency and cutting recurring UI defects.¦Инициировал и совместно спроектировал отдельный Flutter UI kit с независимым тестированием; вместе с дизайнерами создал дизайн-систему, повысив согласованность интерфейса и сократив повторяющиеся UI-дефекты.¦Impulsé y codiseñé un kit de interfaz Flutter independiente con pruebas propias; colaboré con diseño en un sistema de diseño, mejorando la coherencia de la interfaz y reduciendo defectos recurrentes.
Sole mobile engineer: first iOS and Android releases in six months — architecture, features, testing, App Store and Google Play publishing; rebuilt the codebase in Flutter.¦Единственный мобильный инженер: первые релизы iOS и Android за шесть месяцев — архитектура, функции, тестирование, публикация в App Store и Google Play; переписал кодовую базу на Flutter.¦Único ingeniero móvil: primeras versiones de iOS y Android en seis meses — arquitectura, funcionalidades, pruebas y publicación en App Store y Google Play; reconstruí el código en Flutter.
UI components were scattered and every release was built by hand, so I took ownership of both: built a reusable Flutter UI kit as a separate package from Figma designs with Storybook, and set up CI/CD on Codemagic and GitHub for environment-specific builds and store deployment.¦UI-компоненты были разрознены, а каждый релиз собирался вручную, поэтому взял на себя и то и другое: создал переиспользуемый Flutter UI kit отдельным пакетом по макетам Figma со Storybook и настроил CI/CD на Codemagic и GitHub для сборок под окружения и публикации в сторах.¦Los componentes de interfaz estaban dispersos y cada versión se compilaba a mano, así que asumí ambas cosas: creé un kit de interfaz Flutter reutilizable como paquete independiente a partir de diseños de Figma con Storybook y configuré CI/CD en Codemagic y GitHub para compilaciones por entorno y publicación en las tiendas.
Added Sentry monitoring and Amplitude analytics, so the team could see errors and usage in production.¦Добавил мониторинг Sentry и аналитику Amplitude, чтобы команда видела ошибки и использование в продакшене.¦Añadí monitorización con Sentry y analítica con Amplitude para que el equipo viera errores y uso en producción.
Owned monetization and engagement features for the Pawen app end to end: a RevenueCat paywall, analytics, push notifications and animated product interfaces.¦Отвечал за монетизацию и вовлечение в приложении Pawen целиком: paywall на RevenueCat, аналитика, push-уведомления и анимированные интерфейсы.¦Me encargué de las funciones de monetización y engagement de la app Pawen de principio a fin: paywall con RevenueCat, analítica, notificaciones push e interfaces animadas.
Shipped features for the Aeroflot iOS app in a large production codebase (Swift, RxSwift, MVVM).¦Выпускал функции для iOS-приложения «Аэрофлот» в большой продакшен-кодовой базе (Swift, RxSwift, MVVM).¦Lancé funcionalidades para la app iOS de Aeroflot en una gran base de código en producción (Swift, RxSwift, MVVM).
Built Microsoft HoloLens 2 applications from concept to working product (Unity, C#, Azure) and supervised an intern — my first experience leading someone else’s work.¦Создавал приложения для Microsoft HoloLens 2 от концепции до рабочего продукта (Unity, C#, Azure) и руководил стажёром — первый опыт руководства чужой работой.¦Desarrollé aplicaciones para Microsoft HoloLens 2 desde el concepto hasta el producto funcional (Unity, C#, Azure) y supervisé a un becario: mi primera experiencia dirigiendo el trabajo de otra persona.
Developed scientific Python software for materials research.¦Разрабатывал научное ПО на Python для исследования материалов.¦Desarrollé software científico en Python para la investigación de materiales.
AI subtitle SaaS for Russian short-form video; web app in early access.¦AI-сервис субтитров для коротких видео на русском; веб-приложение в раннем доступе.¦SaaS de subtítulos con IA para vídeos cortos en ruso; aplicación web en acceso anticipado.
Granola-style AI app that turns conversations into text.¦AI-приложение в духе Granola, которое превращает разговоры в текст.¦App de IA al estilo Granola que convierte conversaciones en texto.
KBT Note & Life Tracker:¦KBT Note и Life Tracker:¦KBT Note y Life Tracker:
two indie apps shipped solo to the App Store and RuStore.¦два инди-приложения, выпущенные в одиночку в App Store и RuStore.¦dos apps indie publicadas en solitario en App Store y RuStore.
`.trim().split('\n').map(line => line.split('¦').map(s => s.trim()));
export const translations = new Map([...rows,...placeTranslations].map(([key,ru,es])=>[key,{ru,es}]));
const unchanged = new Set(['DP /','2014–2020','5+','27','80','8','500K','#1','Football+','2GIS / URBI (USETECH)','Konstructly','No Finish Line','AI Product Engineer','Soyka:','RusCaps ↗','TYPESCRIPT / LLM PIPELINES / REACT NATIVE · NEXT.JS','TYPESCRIPT / PYTHON / FLUTTER / LLM EVALS',':','↗','−10–15%','GITHUB ↗','LINKEDIN ↗','TELEGRAM ↗','iOS ↗','RuStore ↗','KBT Note','Life Tracker','RusCaps','UseTech','Epic Charging','Konstructly Ltd.','No Finish Line Ltd.','RAMAX Group','Strata Solutions','Komodo Wallet ↗','Football+ ↗','KOPTEHE+JOB@GMAIL.COM ↗','koptehe@gmail.com','koptehe@gmail.com ↗','FLUTTER / ANDROID AUTO / APPLE CARPLAY','Firebase, Google Maps, 2GIS SDK, Android Auto, Apple CarPlay, Apple Wallet Pass, Sentry, Amplitude, Mixpanel, PostHog.','React Native, Expo, Next.js.']);
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
