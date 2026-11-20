const LANGS = ['en','pl','ua','tr','ru'];
const DEFAULT_LANG = 'en';

const T = {
  en: {
    'nav.home': 'Home',
    'nav.business': 'Business Services',
    'nav.trade': 'International Trade',
    'nav.products': 'Industrial Products',
    'nav.innovation': 'Innovation',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.rfq': 'Request a Quote',

    'hero.badge': 'Business Consulting & International Partnerships',
    'hero.h1': 'Connecting Business.<br>Creating Opportunities.',
    'hero.sub': 'We support companies entering the Polish market, facilitate international B2B partnerships, and represent leading industrial manufacturers across Europe.',
    'hero.cta1': 'Our Services',
    'hero.cta2': 'Request a Quote',

    'services.title': 'What We Do',
    'services.sub': 'Three core areas — one trusted partner',
    's1.title': 'Business Services',
    's1.desc': 'Company formation in Poland (Sp. z o.o., JDG), KRS registrations, administrative support, and market entry consulting for foreign investors.',
    's1.link': 'Learn more',
    's2.title': 'International Trade',
    's2.desc': 'We connect manufacturers with distributors, contractors and B2B buyers across Europe. Industrial products, construction materials and infrastructure equipment.',
    's2.link': 'Learn more',
    's3.title': 'Innovation & Partnerships',
    's3.desc': 'Strategic international projects focused on sustainable technologies, circular economy, construction waste recycling and cross-border business development.',
    's3.link': 'Learn more',

    'products.title': 'Industrial Products',
    'products.sub': 'We represent selected manufacturers in European markets',
    'p1.name': 'HAWKLINE',
    'p1.cat': 'Flooring & Interior Solutions',
    'p1.desc': 'SPC & LVT flooring, decorative wall panels and skirting boards. B2B supply for distributors, construction companies and interior designers.',
    'p2.name': 'IŞIN DAYLIGHT',
    'p2.cat': 'Lighting Poles & Infrastructure',
    'p2.desc': 'Street, decorative, solar and high-mast lighting poles. Galvanized steel poles, traffic and camera mast systems.',
    'p3.name': 'ERSAN GROUP',
    'p3.cat': 'Steel Structures & Energy Infrastructure',
    'p3.desc': 'Power transmission towers, telecom towers, substation steel structures and industrial steel constructions.',
    'p4.name': 'SAYAL VİNÇ',
    'p4.cat': 'Crane Components',
    'p4.desc': 'Electric hoists, monorail systems, end-carriages and crane components for manufacturers and service companies.',
    'products.rfq': 'Request a Quote',
    'products.more': 'View details',

    'stats.clients': 'Satisfied Clients',
    'stats.countries': 'Countries',
    'stats.years': 'Years of Experience',
    'stats.partners': 'Industry Partners',

    'why.title': 'Why Status Pro Legalis',
    'why.1.title': 'Deep Local Knowledge',
    'why.1.desc': 'Based in Warsaw with hands-on expertise in Polish business law, company registration and regulatory compliance.',
    'why.2.title': 'International Network',
    'why.2.desc': 'Direct connections with manufacturers, distributors and investors across Europe, Turkey and Ukraine.',
    'why.3.title': 'End-to-End Support',
    'why.3.desc': 'From market entry and company setup to finding buyers and long-term partnership management.',
    'why.4.title': 'Multilingual Team',
    'why.4.desc': 'We communicate in English, Polish, Ukrainian, Turkish and Russian — no language barriers.',

    'cta.title': 'Ready to expand your business?',
    'cta.sub': 'Tell us about your project and we will find the right solution.',
    'cta.btn': 'Get in Touch',
    'cta.btn2': 'Request a Quote',

    'footer.company': 'Business Consulting & International Partnerships',
    'footer.links': 'Quick Links',
    'footer.products_title': 'Products',
    'footer.contact_title': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Status Pro Legalis is a business consulting and trade representation firm. We do not provide legal or attorney services.',
  },

  pl: {
    'nav.home': 'Strona główna',
    'nav.business': 'Usługi biznesowe',
    'nav.trade': 'Handel międzynarodowy',
    'nav.products': 'Produkty przemysłowe',
    'nav.innovation': 'Innowacje',
    'nav.about': 'O nas',
    'nav.contact': 'Kontakt',
    'nav.rfq': 'Zapytanie ofertowe',

    'hero.badge': 'Doradztwo biznesowe i partnerstwa międzynarodowe',
    'hero.h1': 'Łączymy biznes.<br>Tworzymy możliwości.',
    'hero.sub': 'Wspieramy firmy wchodzące na rynek polski, ułatwiamy międzynarodowe partnerstwa B2B i reprezentujemy wiodących producentów przemysłowych w Europie.',
    'hero.cta1': 'Nasze usługi',
    'hero.cta2': 'Zapytanie ofertowe',

    'services.title': 'Co robimy',
    'services.sub': 'Trzy główne obszary — jeden zaufany partner',
    's1.title': 'Usługi biznesowe',
    's1.desc': 'Zakładanie spółek w Polsce (Sp. z o.o., JDG), rejestracje KRS, wsparcie administracyjne i doradztwo dotyczące wejścia na rynek.',
    's1.link': 'Dowiedz się więcej',
    's2.title': 'Handel międzynarodowy',
    's2.desc': 'Łączymy producentów z dystrybutorami, wykonawcami i nabywcami B2B w całej Europie. Produkty przemysłowe, materiały budowlane i sprzęt infrastrukturalny.',
    's2.link': 'Dowiedz się więcej',
    's3.title': 'Innowacje i partnerstwa',
    's3.desc': 'Strategiczne projekty międzynarodowe skupione na zrównoważonych technologiach, gospodarce cyrkularnej i recyklingu odpadów budowlanych.',
    's3.link': 'Dowiedz się więcej',

    'products.title': 'Produkty przemysłowe',
    'products.sub': 'Reprezentujemy wybranych producentów na rynkach europejskich',
    'p1.name': 'HAWKLINE',
    'p1.cat': 'Podłogi i wykończenia wnętrz',
    'p1.desc': 'Podłogi SPC i LVT, dekoracyjne panele ścienne i listwy przypodłogowe. Dostawa B2B dla dystrybutorów, firm budowlanych i architektów wnętrz.',
    'p2.name': 'IŞIN DAYLIGHT',
    'p2.cat': 'Słupy oświetleniowe i infrastruktura',
    'p2.desc': 'Słupy oświetlenia ulicznego, dekoracyjne, solarne i wysokie maszty oświetleniowe. Ocynkowane słupy stalowe, maszty do kamer i sygnalizacji.',
    'p3.name': 'ERSAN GROUP',
    'p3.cat': 'Konstrukcje stalowe i infrastruktura energetyczna',
    'p3.desc': 'Wieże linii energetycznych, wieże telekomunikacyjne, konstrukcje stalowe stacji transformatorowych i przemysłowe konstrukcje stalowe.',
    'p4.name': 'SAYAL VİNÇ',
    'p4.cat': 'Komponenty do suwnic',
    'p4.desc': 'Elektryczne wciągniki, systemy jednoszynowe, wózki jezdne i komponenty do suwnic dla producentów i firm serwisowych.',
    'products.rfq': 'Zapytanie ofertowe',
    'products.more': 'Szczegóły',

    'stats.clients': 'Zadowolonych klientów',
    'stats.countries': 'Krajów',
    'stats.years': 'Lat doświadczenia',
    'stats.partners': 'Partnerów branżowych',

    'why.title': 'Dlaczego Status Pro Legalis',
    'why.1.title': 'Dogłębna znajomość rynku',
    'why.1.desc': 'Z siedzibą w Warszawie, specjalizujemy się w polskim prawie gospodarczym, rejestracji spółek i zgodności regulacyjnej.',
    'why.2.title': 'Międzynarodowa sieć',
    'why.2.desc': 'Bezpośrednie kontakty z producentami, dystrybutorami i inwestorami w Europie, Turcji i na Ukrainie.',
    'why.3.title': 'Kompleksowe wsparcie',
    'why.3.desc': 'Od wejścia na rynek i założenia firmy po znajdowanie nabywców i zarządzanie długoterminowymi partnerstwami.',
    'why.4.title': 'Wielojęzyczny zespół',
    'why.4.desc': 'Komunikujemy się po angielsku, polsku, ukraińsku, turecku i rosyjsku — bez barier językowych.',

    'cta.title': 'Gotowy na ekspansję biznesu?',
    'cta.sub': 'Opowiedz nam o swoim projekcie, a my znajdziemy właściwe rozwiązanie.',
    'cta.btn': 'Skontaktuj się',
    'cta.btn2': 'Zapytanie ofertowe',

    'footer.company': 'Doradztwo biznesowe i partnerstwa międzynarodowe',
    'footer.links': 'Szybkie linki',
    'footer.products_title': 'Produkty',
    'footer.contact_title': 'Kontakt',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.legal': 'Status Pro Legalis to firma doradztwa biznesowego i reprezentacji handlowej. Nie świadczymy usług prawnych ani adwokackich.',
  },

  ua: {
    'nav.home': 'Головна',
    'nav.business': 'Бізнес-послуги',
    'nav.trade': 'Міжнародна торгівля',
    'nav.products': 'Промислові продукти',
    'nav.innovation': 'Інновації',
    'nav.about': 'Про нас',
    'nav.contact': 'Контакт',
    'nav.rfq': 'Запит пропозиції',

    'hero.badge': 'Бізнес-консалтинг та міжнародне партнерство',
    'hero.h1': 'Поєднуємо бізнес.<br>Створюємо можливості.',
    'hero.sub': 'Ми підтримуємо компанії при виході на польський ринок, сприяємо міжнародному B2B-партнерству та представляємо провідних промислових виробників у Європі.',
    'hero.cta1': 'Наші послуги',
    'hero.cta2': 'Запит пропозиції',

    'services.title': 'Що ми робимо',
    'services.sub': 'Три основні напрямки — один надійний партнер',
    's1.title': 'Бізнес-послуги',
    's1.desc': 'Реєстрація компаній у Польщі (Sp. z o.o., JDG), реєстрація в KRS, адміністративна підтримка та консультації щодо виходу на ринок.',
    's1.link': 'Детальніше',
    's2.title': 'Міжнародна торгівля',
    's2.desc': 'Ми пов\'язуємо виробників з дистриб\'юторами, підрядниками та B2B-покупцями по всій Європі. Промислові товари, будматеріали та інфраструктурне обладнання.',
    's2.link': 'Детальніше',
    's3.title': 'Інновації та партнерство',
    's3.desc': 'Стратегічні міжнародні проекти у сфері сталих технологій, циркулярної економіки та переробки будівельних відходів.',
    's3.link': 'Детальніше',

    'products.title': 'Промислові продукти',
    'products.sub': 'Ми представляємо відібраних виробників на ринках Європи',
    'p1.name': 'HAWKLINE',
    'p1.cat': 'Підлогові покриття та оздоблення інтер\'єрів',
    'p1.desc': 'Підлоги SPC і LVT, декоративні настінні панелі та плінтуси. B2B-постачання для дистриб\'юторів, будівельних компаній та дизайнерів інтер\'єрів.',
    'p2.name': 'IŞIN DAYLIGHT',
    'p2.cat': 'Опори освітлення та інфраструктура',
    'p2.desc': 'Вуличні, декоративні, сонячні та висотні опори освітлення. Оцинковані сталеві опори, щогли для камер і світлофорів.',
    'p3.name': 'ERSAN GROUP',
    'p3.cat': 'Сталеві конструкції та енергетична інфраструктура',
    'p3.desc': 'Опори ліній електропередач, телекомунікаційні вежі, сталеві конструкції підстанцій та промислові сталеві конструкції.',
    'p4.name': 'SAYAL VİNÇ',
    'p4.cat': 'Компоненти для кранів',
    'p4.desc': 'Електричні підйомники, монорейкові системи, ходові візки та компоненти для кранів для виробників і сервісних компаній.',
    'products.rfq': 'Запит пропозиції',
    'products.more': 'Детальніше',

    'stats.clients': 'Задоволених клієнтів',
    'stats.countries': 'Країн',
    'stats.years': 'Років досвіду',
    'stats.partners': 'Галузевих партнерів',

    'why.title': 'Чому Status Pro Legalis',
    'why.1.title': 'Глибоке знання ринку',
    'why.1.desc': 'Офіс у Варшаві, практичний досвід у польському підприємницькому праві, реєстрації компаній та відповідності вимогам.',
    'why.2.title': 'Міжнародна мережа',
    'why.2.desc': 'Прямі зв\'язки з виробниками, дистриб\'юторами та інвесторами у Європі, Туреччині та Україні.',
    'why.3.title': 'Комплексна підтримка',
    'why.3.desc': 'Від виходу на ринок і реєстрації компанії до пошуку покупців і довгострокового управління партнерством.',
    'why.4.title': 'Багатомовна команда',
    'why.4.desc': 'Ми спілкуємося англійською, польською, українською, турецькою та російською — без мовних бар\'єрів.',

    'cta.title': 'Готові розширити свій бізнес?',
    'cta.sub': 'Розкажіть нам про свій проект, і ми знайдемо правильне рішення.',
    'cta.btn': 'Зв\'яжіться з нами',
    'cta.btn2': 'Запит пропозиції',

    'footer.company': 'Бізнес-консалтинг та міжнародне партнерство',
    'footer.links': 'Швидкі посилання',
    'footer.products_title': 'Продукти',
    'footer.contact_title': 'Контакт',
    'footer.rights': 'Усі права захищені.',
    'footer.legal': 'Status Pro Legalis — компанія бізнес-консалтингу та торгового представництва. Ми не надаємо юридичних або адвокатських послуг.',
  },

  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.business': 'İş Hizmetleri',
    'nav.trade': 'Uluslararası Ticaret',
    'nav.products': 'Endüstriyel Ürünler',
    'nav.innovation': 'İnovasyon',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.rfq': 'Teklif Talebi',

    'hero.badge': 'İş Danışmanlığı ve Uluslararası Ortaklıklar',
    'hero.h1': 'İşi Birleştiriyoruz.<br>Fırsatlar Yaratıyoruz.',
    'hero.sub': 'Polonya pazarına giriş yapan şirketlere destek veriyor, uluslararası B2B ortaklıkları kolaylaştırıyor ve önde gelen endüstriyel üreticileri Avrupa\'da temsil ediyoruz.',
    'hero.cta1': 'Hizmetlerimiz',
    'hero.cta2': 'Teklif Talebi',

    'services.title': 'Ne Yapıyoruz',
    'services.sub': 'Üç temel alan — bir güvenilir ortak',
    's1.title': 'İş Hizmetleri',
    's1.desc': 'Polonya\'da şirket kuruluşu (Sp. z o.o., JDG), KRS tescilleri, idari destek ve yabancı yatırımcılar için pazar giriş danışmanlığı.',
    's1.link': 'Daha fazla',
    's2.title': 'Uluslararası Ticaret',
    's2.desc': 'Üreticileri Avrupa genelinde distribütörler, müteahhitler ve B2B alıcılarla buluşturuyoruz. Endüstriyel ürünler, yapı malzemeleri ve altyapı ekipmanları.',
    's2.link': 'Daha fazla',
    's3.title': 'İnovasyon ve Ortaklıklar',
    's3.desc': 'Sürdürülebilir teknolojiler, döngüsel ekonomi ve inşaat atıkları geri dönüşümüne odaklanan stratejik uluslararası projeler.',
    's3.link': 'Daha fazla',

    'products.title': 'Endüstriyel Ürünler',
    'products.sub': 'Seçili üreticileri Avrupa pazarlarında temsil ediyoruz',
    'p1.name': 'HAWKLINE',
    'p1.cat': 'Zemin Kaplamaları ve İç Mekan Çözümleri',
    'p1.desc': 'SPC ve LVT zemin kaplamaları, dekoratif duvar panelleri ve süpürgelikler. Distribütörler, inşaat şirketleri ve iç mimarlar için B2B tedarik.',
    'p2.name': 'IŞIN AYDINLATMA',
    'p2.cat': 'Aydınlatma Direkleri ve Altyapı',
    'p2.desc': 'Sokak, dekoratif, solar ve yüksek aydınlatma direkleri. Galvanizli çelik direkler, kamera ve trafik direği sistemleri.',
    'p3.name': 'ERSAN GROUP',
    'p3.cat': 'Çelik Konstrüksiyonlar ve Enerji Altyapısı',
    'p3.desc': 'Enerji iletim hattı kuleleri, telekomünikasyon kuleleri, trafo merkezi çelik konstrüksiyonları ve endüstriyel çelik yapılar.',
    'p4.name': 'SAYAL VİNÇ',
    'p4.cat': 'Vinç Komponentleri',
    'p4.desc': 'Elektrikli kaldırma grupları, monoray sistemleri, yürüyüş başlıkları ve vinç üreticileri ile servis şirketleri için vinç komponentleri.',
    'products.rfq': 'Teklif Talebi',
    'products.more': 'Detaylar',

    'stats.clients': 'Memnun Müşteri',
    'stats.countries': 'Ülke',
    'stats.years': 'Yıllık Deneyim',
    'stats.partners': 'Sektör Ortağı',

    'why.title': 'Neden Status Pro Legalis',
    'why.1.title': 'Derin Yerel Bilgi',
    'why.1.desc': 'Varşova merkezli, Polonya iş hukuku, şirket tescili ve mevzuat uyumu konusunda uygulamalı uzmanlık.',
    'why.2.title': 'Uluslararası Ağ',
    'why.2.desc': 'Avrupa, Türkiye ve Ukrayna\'daki üreticiler, distribütörler ve yatırımcılarla doğrudan bağlantılar.',
    'why.3.title': 'Uçtan Uca Destek',
    'why.3.desc': 'Pazar girişi ve şirket kurulumundan alıcı bulmaya ve uzun vadeli ortaklık yönetimine kadar.',
    'why.4.title': 'Çok Dilli Ekip',
    'why.4.desc': 'İngilizce, Lehçe, Ukraynaca, Türkçe ve Rusça iletişim kuruyoruz — dil engeli yok.',

    'cta.title': 'İşinizi genişletmeye hazır mısınız?',
    'cta.sub': 'Projenizi anlatın, doğru çözümü birlikte bulalım.',
    'cta.btn': 'İletişime Geçin',
    'cta.btn2': 'Teklif Talebi',

    'footer.company': 'İş Danışmanlığı ve Uluslararası Ortaklıklar',
    'footer.links': 'Hızlı Bağlantılar',
    'footer.products_title': 'Ürünler',
    'footer.contact_title': 'İletişim',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.legal': 'Status Pro Legalis bir iş danışmanlığı ve ticari temsil firmasıdır. Hukuki veya avukatlık hizmeti sunmamaktayız.',
  },

  ru: {
    'nav.home': 'Главная',
    'nav.business': 'Бизнес-услуги',
    'nav.trade': 'Международная торговля',
    'nav.products': 'Промышленные товары',
    'nav.innovation': 'Инновации',
    'nav.about': 'О нас',
    'nav.contact': 'Контакт',
    'nav.rfq': 'Запрос предложения',

    'hero.badge': 'Бизнес-консалтинг и международное партнёрство',
    'hero.h1': 'Объединяем бизнес.<br>Создаём возможности.',
    'hero.sub': 'Мы поддерживаем компании при выходе на польский рынок, содействуем международным B2B-партнёрствам и представляем ведущих промышленных производителей в Европе.',
    'hero.cta1': 'Наши услуги',
    'hero.cta2': 'Запрос предложения',

    'services.title': 'Что мы делаем',
    'services.sub': 'Три ключевых направления — один надёжный партнёр',
    's1.title': 'Бизнес-услуги',
    's1.desc': 'Регистрация компаний в Польше (Sp. z o.o., JDG), регистрация в KRS, административная поддержка и консультации по выходу на рынок.',
    's1.link': 'Подробнее',
    's2.title': 'Международная торговля',
    's2.desc': 'Соединяем производителей с дистрибьюторами, подрядчиками и B2B-покупателями по всей Европе. Промышленные товары, стройматериалы и инфраструктурное оборудование.',
    's2.link': 'Подробнее',
    's3.title': 'Инновации и партнёрства',
    's3.desc': 'Стратегические международные проекты в области устойчивых технологий, циркулярной экономики и переработки строительных отходов.',
    's3.link': 'Подробнее',

    'products.title': 'Промышленные товары',
    'products.sub': 'Представляем избранных производителей на рынках Европы',
    'p1.name': 'HAWKLINE',
    'p1.cat': 'Напольные покрытия и решения для интерьера',
    'p1.desc': 'Полы SPC и LVT, декоративные настенные панели и плинтусы. B2B-поставки для дистрибьюторов, строительных компаний и дизайнеров интерьеров.',
    'p2.name': 'IŞIN DAYLIGHT',
    'p2.cat': 'Осветительные опоры и инфраструктура',
    'p2.desc': 'Уличные, декоративные, солнечные и высокомачтовые опоры освещения. Оцинкованные стальные опоры, мачты для камер и светофоров.',
    'p3.name': 'ERSAN GROUP',
    'p3.cat': 'Стальные конструкции и энергетическая инфраструктура',
    'p3.desc': 'Опоры линий электропередачи, телекоммуникационные башни, стальные конструкции подстанций и промышленные стальные конструкции.',
    'p4.name': 'SAYAL VİNÇ',
    'p4.cat': 'Компоненты кранов',
    'p4.desc': 'Электрические тали, монорельсовые системы, ходовые тележки и компоненты кранов для производителей и сервисных компаний.',
    'products.rfq': 'Запрос предложения',
    'products.more': 'Подробнее',

    'stats.clients': 'Довольных клиентов',
    'stats.countries': 'Стран',
    'stats.years': 'Лет опыта',
    'stats.partners': 'Отраслевых партнёров',

    'why.title': 'Почему Status Pro Legalis',
    'why.1.title': 'Глубокое знание рынка',
    'why.1.desc': 'Офис в Варшаве, практический опыт в польском коммерческом праве, регистрации компаний и соответствии требованиям.',
    'why.2.title': 'Международная сеть',
    'why.2.desc': 'Прямые связи с производителями, дистрибьюторами и инвесторами в Европе, Турции и Украине.',
    'why.3.title': 'Комплексная поддержка',
    'why.3.desc': 'От выхода на рынок и регистрации компании до поиска покупателей и долгосрочного управления партнёрствами.',
    'why.4.title': 'Многоязычная команда',
    'why.4.desc': 'Мы общаемся на английском, польском, украинском, турецком и русском — никаких языковых барьеров.',

    'cta.title': 'Готовы расширить свой бизнес?',
    'cta.sub': 'Расскажите о своём проекте, и мы найдём правильное решение.',
    'cta.btn': 'Связаться с нами',
    'cta.btn2': 'Запрос предложения',

    'footer.company': 'Бизнес-консалтинг и международное партнёрство',
    'footer.links': 'Быстрые ссылки',
    'footer.products_title': 'Продукты',
    'footer.contact_title': 'Контакт',
    'footer.rights': 'Все права защищены.',
    'footer.legal': 'Status Pro Legalis — компания бизнес-консалтинга и торгового представительства. Мы не оказываем юридических или адвокатских услуг.',
  }
};

let currentLang = localStorage.getItem('spl_lang') || DEFAULT_LANG;

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem('spl_lang', lang);
  applyTranslations();
  updateLangUI();
}

function t(key) {
  return (T[currentLang] && T[currentLang][key]) || (T[DEFAULT_LANG][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  document.documentElement.lang = currentLang === 'ua' ? 'uk' : currentLang;
}

function updateLangUI() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangUI();
});
