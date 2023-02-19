const langArr = {
    'address' : { 
        'ua' : "Київ, вул. Мечникова, 14/1", 
        'ru' : "Киев, ул. Мечникова, 14/1", 
        'en' : "Kyiv, Mechnikova str., 14/1", 
    }, 
    'about-us' : { 
        'ua' : "про нас", 
        'ru' : "о нас", 
        'en' : "about us", 
    },
    'services' : { 
        'ua' : "послуги", 
        'ru' : "услуги", 
        'en' : "services", 
    },
    'team' : { 
        'ua' : "команда", 
        'ru' : "команда", 
        'en' : "team", 
    },
    'publications' : { 
        'ua' : "статті", 
        'ru' : "статьи", 
        'en' : "publications", 
    },
    'contact' : { 
        'ua' : "контакти", 
        'ru' : "контакты", 
        'en' : "contact", 
    },
    'team-main-title' : { 
        'ua' : "Ми звикли брати на себе відповідальність та завжди гарантуємо чесну, вчасну допомогу, навіть у ситуаціях, коли більшість безсилі.", 
        'ru' : "Мы привыкли брать ответственность и всегда гарантируем честность, своевременную помощь, даже в ситуациях, когда большинство безсильны.", 
        'en' : "We are used to taking responsibility and always guarantee honest, timely assistance, even in situations where most are powerless.", 
    },
    'on-map' : { 
        'ua' : "НА КАРТІ", 
        'ru' : "НА КАРТЕ", 
        'en' : "ON MAP", 
    },
    'alexandrovsky-name' : { 
        'ua' : "Олександр Олександровський", 
        'ru' : "Александр Александровский", 
        'en' : "Alexander Alexandrovsky", 
    },
    'alexandrovsky-position' : { 
        'ua' : "Керуючий партнер", 
        'ru' : "Управляющий партнер", 
        'en' : "Managing partner", 
    },
    'patrikov-name' : { 
        'ua' : "Євгеній Патріков", 
        'ru' : "Евгений Патриков", 
        'en' : "Evgeny Patrikov", 
    },
    'patrikov-position' : { 
        'ua' : "Дольовий партнер, Адвокат", 
        'ru' : "Долевой партнер, Адвокат", 
        'en' : "Equity partner, Attorney-at-law", 
    },
    'melnik-name' : { 
        'ua' : "Владислав Мельник", 
        'ru' : "Владислав Мельник", 
        'en' : "Vladislav Melnik", 
    },
    'melnik-position' : { 
        'ua' : "Юрист", 
        'ru' : "Юрист", 
        'en' : "Associate", 
    },
    'binn-name' : { 
        'ua' : "Сергій Бінн", 
        'ru' : "Сергей Бинн", 
        'en' : "Sergey Binn", 
    },
    'binn-position' : { 
        'ua' : "Юрист", 
        'ru' : "Юрист", 
        'en' : "Associate", 
    },
    'kobzar-name' : { 
        'ua' : "Оксана Кобзар", 
        'ru' : "Оксана Кобзар", 
        'en' : "Oksana Kobzar", 
    },
    'kobzar-position' : { 
        'ua' : "Дольовий партнер, Адвокат", 
        'ru' : "Долевой партнер, Адвокат", 
        'en' : "Equity partner, Attorney-at-law", 
    },
    'wolk-name' : { 
        'ua' : "Юлія Волк", 
        'ru' : "Юлия Волк", 
        'en' : "Julia Wolk", 
    },
    'wolk-position' : { 
        'ua' : "Юрист, Адвокат", 
        'ru' : "Юрист, Адвокат", 
        'en' : "Associate, Attorney-at-law", 
    },
    'kyiv' : { 
        'ua' : "Київ,", 
        'ru' : "Киев,", 
        'en' : "Kyiv,", 
    },
    'mechnikova-str' : { 
        'ua' : "вул. Мечникова, 14/1", 
        'ru' : "ул. Мечникова, 14/1", 
        'en' : "Mechnikova str, 14/1", 
    },
    'our-page' : { 
        'ua' : "НАША СТОРІНКА", 
        'ru' : "НАША СТРАНИЦА", 
        'en' : "OUR PAGE", 
    },
    'on-facebook' : { 
        'ua' : "В FACEBOOK", 
        'ru' : "В FACEBOOK", 
        'en' : "ON FACEBOOK", 
    },
    'form-caption' : { 
        'ua' : "Ми будемо раді Вам допомогти", 
        'ru' : "Мы будем рады Вам помочь", 
        'en' : "We would like to help you", 
    },
    'contact-question' : { 
        'ua' : "ЯК ВАМ ВІДПОВІСТИ?", 
        'ru' : "КАК ВАМ ОТВЕТИТЬ?", 
        'en' : "HOW TO ANSWER YOU?", 
    },
    'send-message' : { 
        'ua' : "Відправити повідомлення", 
        'ru' : "Отправить сообщение", 
        'en' : "Send message", 
    },
    'sent' : { 
        'ua' : "Відправлено", 
        'ru' : "Отправлено", 
        'en' : "Sent", 
    },
    'input-name' : { 
        'ua' : "Ім'я", 
        'ru' : "Имя", 
        'en' : "Name", 
    },
    'textarea-message' : { 
        'ua' : "Повідомлення", 
        'ru' : "Сообщение", 
        'en' : "Message", 
    },
    'input-phone' : { 
        'ua' : "Телефон", 
        'ru' : "Телефон", 
        'en' : "Phone number", 
    },
    'education' : { 
        'ua' : "ОСВІТА", 
        'ru' : "ОБРАЗОВАНИЕ", 
        'en' : "EDUCATION", 
    },
    'experience' : { 
        'ua' : "ДОСВІД", 
        'ru' : "ОПЫТ", 
        'en' : "EXPERIENCE",
    },
    'kobzar-description-1' : { 
        'ua' : "Оксана очолює практику міжнародної торгівлі та судноплавства. Вона спеціалізується на вирішенні спорів, пов'язаних з купівлею-продажем сировини та морськими вантажоперевезеннями.", 
        'ru' : "Оксана возглавляет практику международной торговли и судоходства. Она специализируется на разрешении споров, связанных с куплей-продажей сырья и морскими грузоперевозками.", 
        'en' : "Oksana heads the practice of international trade and shipping. She specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.", 
    },
    'kobzar-description-2' : { 
        'ua' : "Крім цього, представляє інтереси власникыв суден, експедиторів, власників вантажів, судових агентів, транспортних компаній, а також міжнародних банків і P&I клубів.", 
        'ru' : "Кроме этого, представляет интересы судовладельцев, экспедиторов, грузовладельцев, судовых агентов, транспортных компаний, а также международных банков и P&I клубов.", 
        'en' : "Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.", 
    },
    'kobzar-education' : { 
        'ua' : 'Національний університет «Одеська юридична академія», Магістр права.', 
        'ru' : 'Национальный университет «Одесская юридическая академия», Магистр права.', 
        'en' : 'National University "Odessa Law Academy", Master of Law.', 
    },
    'kobzar-experience' : { 
        'ua' : "Її професійний досвід включає вирішення спорів за англійським правом та представництво інтересів в іноземних комерційних арбітражах, таких як GAFTA, FOSFA та LMAA. Оксана також представляє інтереси клієнтів в державних судах України з аналогічних спорів, а також в МКАС та МАС при ТПП України.", 
        'ru' : "Ее профессиональный опыт включает разрешение споров по английскому праву и представительство интересов в иностранных коммерческих арбитражах, таких как GAFTA, FOSFA и LMAA. Оксана также представляет интересы клиентов в государственных судах Украины по аналогичным спорам, а также в МКАС и МАС при ТПП Украины.", 
        'en' : "Her professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Oksana also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine", 
    },
    'alexandrovsky-description-1' : { 
        'ua' : "Олександр очолює практику міжнародної торгівлі та судноплавства. Він спеціалізується на вирішенні спорів, пов'язаних з купівлею-продажем сировини та морськими вантажоперевезеннями.", 
        'ru' : "Александр возглавляет практику международной торговли и судоходства. Он специализируется на разрешении споров, связанных с куплей-продажей сырья и морскими грузоперевозками.", 
        'en' : "Alexander heads the practice of international trade and shipping. He specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.", 
    },
    'alexandrovsky-description-2' : { 
        'ua' : "Крім цього, представляє інтереси власникыв суден, експедиторів, власників вантажів, судових агентів, транспортних компаній, а також міжнародних банків і P&I клубів.", 
        'ru' : "Кроме этого, представляет интересы судовладельцев, экспедиторов, грузовладельцев, судовых агентов, транспортных компаний, а также международных банков и P&I клубов.", 
        'en' : "Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.", 
    },
    'alexandrovsky-education' : { 
        'ua' : 'Національний університет «Одеська юридична академія», Магістр права.', 
        'ru' : 'Национальный университет «Одесская юридическая академия», Магистр права.', 
        'en' : 'National University "Odessa Law Academy", Master of Law.', 
    },
    'alexandrovsky-experience' : { 
        'ua' : "Його професійний досвід включає вирішення спорів за англійським правом та представництво інтересів в іноземних комерційних арбітражах, таких як GAFTA, FOSFA та LMAA. Олександр також представляє інтереси клієнтів в державних судах України з аналогічних спорів, а також в МКАС та МАС при ТПП України.", 
        'ru' : "Его профессиональный опыт включает разрешение споров по английскому праву и представительство интересов в иностранных коммерческих арбитражах, таких как GAFTA, FOSFA и LMAA. Александр также представляет интересы клиентов в государственных судах Украины по аналогичным спорам, а также в МКАС и МАС при ТПП Украины.", 
        'en' : "His professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Alexander also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine", 
    },
    'patrikov-description-1' : { 
        'ua' : "Євгеній очолює практику міжнародної торгівлі та судноплавства. Він спеціалізується на вирішенні спорів, пов'язаних з купівлею-продажем сировини та морськими вантажоперевезеннями.", 
        'ru' : "Евгений возглавляет практику международной торговли и судоходства. Он специализируется на разрешении споров, связанных с куплей-продажей сырья и морскими грузоперевозками.", 
        'en' : "Evgeny heads the practice of international trade and shipping. He specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.", 
    },
    'patrikov-description-2' : { 
        'ua' : "Крім цього, представляє інтереси власникыв суден, експедиторів, власників вантажів, судових агентів, транспортних компаній, а також міжнародних банків і P&I клубів.", 
        'ru' : "Кроме этого, представляет интересы судовладельцев, экспедиторов, грузовладельцев, судовых агентов, транспортных компаний, а также международных банков и P&I клубов.", 
        'en' : "Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.", 
    },
    'patrikov-education' : { 
        'ua' : 'Національний університет «Одеська юридична академія», Магістр права.', 
        'ru' : 'Национальный университет «Одесская юридическая академия», Магистр права.', 
        'en' : 'National University "Odessa Law Academy", Master of Law.', 
    },
    'patrikov-experience' : { 
        'ua' : "Його професійний досвід включає вирішення спорів за англійським правом та представництво інтересів в іноземних комерційних арбітражах, таких як GAFTA, FOSFA та LMAA. Євгеній також представляє інтереси клієнтів в державних судах України з аналогічних спорів, а також в МКАС та МАС при ТПП України.", 
        'ru' : "Его профессиональный опыт включает разрешение споров по английскому праву и представительство интересов в иностранных коммерческих арбитражах, таких как GAFTA, FOSFA и LMAA. Евгений также представляет интересы клиентов в государственных судах Украины по аналогичным спорам, а также в МКАС и МАС при ТПП Украины.", 
        'en' : "His professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Evgeny also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine", 
    },
    'melnik-description-1' : { 
        'ua' : "Владислав очолює практику міжнародної торгівлі та судноплавства. Він спеціалізується на вирішенні спорів, пов'язаних з купівлею-продажем сировини та морськими вантажоперевезеннями.", 
        'ru' : "Владислав возглавляет практику международной торговли и судоходства. Он специализируется на разрешении споров, связанных с куплей-продажей сырья и морскими грузоперевозками.", 
        'en' : "Vladislav heads the practice of international trade and shipping. He specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.", 
    },
    'melnik-description-2' : { 
        'ua' : "Крім цього, представляє інтереси власникыв суден, експедиторів, власників вантажів, судових агентів, транспортних компаній, а також міжнародних банків і P&I клубів.", 
        'ru' : "Кроме этого, представляет интересы судовладельцев, экспедиторов, грузовладельцев, судовых агентов, транспортных компаний, а также международных банков и P&I клубов.", 
        'en' : "Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.", 
    },
    'melnik-education' : { 
        'ua' : 'Національний університет «Одеська юридична академія», Магістр права.', 
        'ru' : 'Национальный университет «Одесская юридическая академия», Магистр права.', 
        'en' : 'National University "Odessa Law Academy", Master of Law.', 
    },
    'melnik-experience' : { 
        'ua' : "Його професійний досвід включає вирішення спорів за англійським правом та представництво інтересів в іноземних комерційних арбітражах, таких як GAFTA, FOSFA та LMAA. Владислав також представляє інтереси клієнтів в державних судах України з аналогічних спорів, а також в МКАС та МАС при ТПП України.", 
        'ru' : "Его профессиональный опыт включает разрешение споров по английскому праву и представительство интересов в иностранных коммерческих арбитражах, таких как GAFTA, FOSFA и LMAA. Владислав также представляет интересы клиентов в государственных судах Украины по аналогичным спорам, а также в МКАС и МАС при ТПП Украины.", 
        'en' : "His professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Vladislav also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine", 
    },
    'binn-description-1' : { 
        'ua' : "Сергій очолює практику міжнародної торгівлі та судноплавства. Він спеціалізується на вирішенні спорів, пов'язаних з купівлею-продажем сировини та морськими вантажоперевезеннями.", 
        'ru' : "Сергей возглавляет практику международной торговли и судоходства. Он специализируется на разрешении споров, связанных с куплей-продажей сырья и морскими грузоперевозками.", 
        'en' : "Sergey heads the practice of international trade and shipping. He specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.", 
    },
    'binn-description-2' : { 
        'ua' : "Крім цього, представляє інтереси власникыв суден, експедиторів, власників вантажів, судових агентів, транспортних компаній, а також міжнародних банків і P&I клубів.", 
        'ru' : "Кроме этого, представляет интересы судовладельцев, экспедиторов, грузовладельцев, судовых агентов, транспортных компаний, а также международных банков и P&I клубов.", 
        'en' : "Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.", 
    },
    'binn-education' : { 
        'ua' : 'Національний університет «Одеська юридична академія», Магістр права.', 
        'ru' : 'Национальный университет «Одесская юридическая академия», Магистр права.', 
        'en' : 'National University "Odessa Law Academy", Master of Law.', 
    },
    'binn-experience' : { 
        'ua' : "Його професійний досвід включає вирішення спорів за англійським правом та представництво інтересів в іноземних комерційних арбітражах, таких як GAFTA, FOSFA та LMAA. Сергій також представляє інтереси клієнтів в державних судах України з аналогічних спорів, а також в МКАС та МАС при ТПП України.", 
        'ru' : "Его профессиональный опыт включает разрешение споров по английскому праву и представительство интересов в иностранных коммерческих арбитражах, таких как GAFTA, FOSFA и LMAA. Сергей также представляет интересы клиентов в государственных судах Украины по аналогичным спорам, а также в МКАС и МАС при ТПП Украины.", 
        'en' : "His professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Sergey also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine", 
    },
    'wolk-description-1' : { 
        'ua' : "Юлія очолює практику міжнародної торгівлі та судноплавства. Вона спеціалізується на вирішенні спорів, пов'язаних з купівлею-продажем сировини та морськими вантажоперевезеннями.", 
        'ru' : "Юлия возглавляет практику международной торговли и судоходства. Она специализируется на разрешении споров, связанных с куплей-продажей сырья и морскими грузоперевозками.", 
        'en' : "Julia heads the practice of international trade and shipping. She specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.", 
    },
    'wolk-description-2' : { 
        'ua' : "Крім цього, представляє інтереси власникыв суден, експедиторів, власників вантажів, судових агентів, транспортних компаній, а також міжнародних банків і P&I клубів.", 
        'ru' : "Кроме этого, представляет интересы судовладельцев, экспедиторов, грузовладельцев, судовых агентов, транспортных компаний, а также международных банков и P&I клубов.", 
        'en' : "Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.", 
    },
    'wolk-education' : { 
        'ua' : 'Національний університет «Одеська юридична академія», Магістр права.', 
        'ru' : 'Национальный университет «Одесская юридическая академия», Магистр права.', 
        'en' : 'National University "Odessa Law Academy", Master of Law.', 
    },
    'wolk-experience' : { 
        'ua' : "Її професійний досвід включає вирішення спорів за англійським правом та представництво інтересів в іноземних комерційних арбітражах, таких як GAFTA, FOSFA та LMAA. Юлія також представляє інтереси клієнтів в державних судах України з аналогічних спорів, а також в МКАС та МАС при ТПП України.", 
        'ru' : "Ее профессиональный опыт включает разрешение споров по английскому праву и представительство интересов в иностранных коммерческих арбитражах, таких как GAFTA, FOSFA и LMAA. Юлия также представляет интересы клиентов в государственных судах Украины по аналогичным спорам, а также в МКАС и МАС при ТПП Украины.", 
        'en' : "Her professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Julia also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine", 
    },
}
