const DATAS = {
    ru: {
        title: "Классификация программного обеспечения",
        grade: "8 Класс",
        typeder: "Тренажер",
        prologue: {
            author: 'T. Hoare',
            phrase: 'Есть два метода создания программного обеспечения. Один из них — сделать программу настолько простой, что, очевидно, в ней нет недостатков. И другой, сделать приложение настолько сложным, что в нем невидно явных недостатков.',
        },
        parts:
            [
                {
                    title: 'Думай',
                    image: 'part3.png',
                    info: 'Ответь на вопросы и проверь, хорошо ли ты знаешь классификацию программного обеспечения.',
                    interactive: {
                        name: 'test',
                        items: {
                            count: 10,
                            data: [
                                {
                                    question: 'Драйвер – это ...',
                                    variants: [['программа, обеспечивающая работу  внешних устройства компьютера'], ['устройство компьютера', 'антивирусная программа']]
                                }, {
                                    question: 'Операционные системы: ',
                                    variants: [['DOS, Windows, Unix'], ['Word, Excel, Power Point', '(состав отделения больницы): зав. отделением, 2 хирурга, 4 мед. Сестры']]
                                }, {
                                    question: 'Системное программное обеспечение:',
                                    variants: [['программы для организации совместной работы устройств компьютера как единой системы'], ['программы для организации удобной системы размещения программ на диске', 'набор программ для работы устройств системного блока компьютера']]
                                }, {
                                    question: 'Сервисные (обслуживающие) программы:',
                                    variants: [['системные оболочки, утилиты, драйвера устройств, антивирусные и сетевые программы'], ['программы сервисных организаций по бухгалтерскому учету', 'программы обслуживающих организаций по ведению делопроизводства']]
                                }, {
                                    question: 'Текстовый редактор представляет собой программный продукт, входящий в состав:',
                                    variants: [['прикладного программного обеспечения'], ['системного программного обеспечения', 'систем программирования']]
                                }, {
                                    question: 'Операционные системы представляют собой программные продукты, входящие в состав:',
                                    variants: [['системного программного обеспечения'], ['прикладного программного обеспечения', 'уникального программного обеспечения']]
                                }, {
                                    question: 'Операционная система — это:',
                                    variants: [['набор программ, обеспечивающий работу всех аппаратных устройств компьютера и доступ пользователя к ним'], ['система программирования на языке низкого уровня', 'совокупность основных устройств компьютера']]
                                }, {
                                    question: 'Программой архиватором называют:',
                                    variants: [['программу для уменьшения информационного объема (сжатия) файлов'], ['программу резервного копирования файлов', 'систему управления базами данными']]
                                }, {
                                    question: 'Интерфейс – это…',
                                    variants: [['совокупность средств и правил взаимодействия устройств ПК, программ и пользователя'], ['комплекс аппаратных средств', 'элемент программного продукта']]
                                }, {
                                    question: 'Для чего нужны прикладные программы',
                                    variants: [['решать какие-либо задачи в пределах данной проблемной области'], ['решать математические задачи для определенного класса', 'для поиска и удаления компьютерных вирусов']]
                                }
                            ]
                        }
                    }
                }, {
                title: 'Анализируй',
                image: 'a2.jpg',
                info: 'Знания прояви и лишние ответы исключи',
                interactive: {
                    name: 'pair',
                    items: {
                        title: 'Найди пару',
                        winWord: 'МОЛОДЕЦ',
                        excesses: {
                            title: "Найди лишнее",
                            data: [
                                ["Windows XP", "текстовый редактор", "MS Access", "графический редактор", "переводчик"],
                                ["табличный процессор", "операционная система", "архиваторы", "антивирусная программа"]
                            ]
                        },
                        pairs: [
                            ['Касперский', 'Антивирус'],
                            ['MS Word', 'Текстовый редактор'],
                            ['MS Excel', 'Табличный процессор'],
                            ['Paint', 'Графический редактор'],
                            ['WinRar', 'Архиватор'],
                            ['Linux', 'Операционная система'],
                            ['Windows Media Player', 'Проигрыватель музыки'],
                        ],
                    }
                }
            }, {
                title: 'Собирай',
                image: 'a3.jpg',
                info: 'используй свои знания для заполнения структуры программного обеспечения компьютера',
                interactive: {
                    name: 'selectable',
                    items: {
                        title: 'Структура программного обеспечения персонального компьютера',
                        parts: [
                            {
                                title: 'Системное ПО',
                                tiles: [
                                    {
                                        title: 'Операционные системы',
                                        programs: ['public/3/windows.png', 'public/3/linux.png']
                                    }, {
                                        title: 'Архиваторы',
                                        programs: ['public/3/winrar.png', 'public/3/winzip.png']
                                    }, {
                                        title: 'Антивирусы',
                                        programs: ['public/3/kasper.png', 'public/3/eset.png']
                                    }
                                ],
                            }, {
                                title: 'Прикладное ПО',
                                tiles: [
                                    {
                                        title: 'Программы общего назначения',
                                        programs: ['public/3/word.png', 'public/3/excel.png', 'public/3/photoshop.png']
                                    }, {
                                        title: 'Программы специального назначения',
                                        programs: ['public/3/2gis.png', 'public/3/x1.png']
                                    }, {
                                        title: 'Компьютерные игры',
                                        programs: ['public/3/warcraft.png', 'public/3/simcity.png']
                                    }
                                ]
                            }, {
                                title: 'Системы программирования',
                                tiles: [
                                    {
                                        title: 'Языки программирования',
                                        programs: ['public/3/cplus.png', 'public/3/pascal.png', 'public/3/html.png']
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
            ]
    },
    kz: {
        title: "Программалық жасақтаманы жіктеу",
        grade: "8-сынып",
        typeder: "Жаттығу құралы",
        prologue: {
            author: 'T. Hoare',
            phrase: 'Программалық қамтамасыз етудің екі әдісі бар. Біріншісі еш кедергісіз программаны соншалықты қарапайым етіп жасау. Екіншісі қосымшаны барынша күрделендіру арқылы онда айқын кемшіліктерінің болмауы.',
        },
        parts:
            [
                {
                    title: 'Ойла',
                    image: 'part3.png',
                    info: 'Сұрақтарға жауап бер және программалық жасақтаманың жіктелуін жақсы білетіндігіңді тексер.',
                    interactive: {
                        name: 'test',
                        items: {
                            count: 10,
                            data: [
                                {
                                    question: 'Драйвер – бұл ...',
                                    variants: [['компьютер құрылғысы'], ['компьютердің сыртқы құрылғыларының жұмысын қамтамасыз ететін программа', 'вирусқа қарсы программа']]
                                }, {
                                    question: 'Операциялық жүйелер: ',
                                    variants: [['DOS, Windows, Unix'], ['Word, Excel, Power Point', '(аурухана бөлімдерінің құрамы): бөлім меңгерушісі, 2 хирург, 4 мейір  бике']]
                                }, {
                                    question: 'Жүйелік программалық жасақтама:',
                                    variants: [['компьютер құрылғыларының бірыңғай жүйе ретінде бірлесіп жұмыс жасауын ұйымдастыруға арналған программалар'], ['программаның дискте орналасуының ыңғайлы жүйесін ұйымдастыруға арналған программалар', 'компьютердің жүйелік блогы құрылғыларының жұмыс жасауына арналған программалар жинағы']]
                                }, {
                                    question: 'Сервистік (қызмет көрсететін) программалар:',
                                    variants: [['бухгалтерлік есеп бойынша сервистік ұйымдардың программалары'], ['іс жүргізу бойынша қызмет көрсететін ұйымдардың программалары', 'жүйелік қабықша, утилиттер, құрылғы драйверлері, вирусқа қарсы және желілік программалар']]
                                }, {
                                    question: 'Мәтіндік редактор келесілер құрамына кіретін программалық өнімді ұсынады:',
                                    variants: [['жүйелік программалық жасақтама;'], ['программалау жүйелері;', 'қолданбалы программалық жасақтама']]
                                }, {
                                    question: 'Операциялық жүйелер келесілер құрамына кіретін келесілер құрамына кіретін программалық өнімдерді ұсынады:',
                                    variants: [['қолданбалы программалық жасақтама;'], ['жүйелік программалық жасақтама;', 'ерекше программалық жасақтама']]
                                }, {
                                    question: 'Операциялық жүйе — бұл:',
                                    variants: [['компьютердің негізгі құрылғыларының жиынтығы;'], ['төмен деңгейлі тілде программалау жүйесі;', 'компьютердің барлық аппараттық құрылғыларының жұмысын және пайдаланушының оларға қатынауын қамтамасыз ететін программалар ағы']]
                                }, {
                                    question: 'Архиватор программалар деп:',
                                    variants: [['файлдардың ақпараттық көлемін азайтуға (қысуға) арналған программаны;'], ['файлдарды резервтік көшіру программасын;', 'деректер базасын басқару жүйесін атайды.']]
                                }, {
                                    question: 'Интерфейс – бұл ...',
                                    variants: [['ДК құрылғыларының, программалар мен пайдаланушылардың құралдары мен ережелерінің жиынтығы'], ['аппараттық құралдар кешені', 'программалық өнім элементі']]
                                }, {
                                    question: 'Қолданбалы программалар не үшін керек',
                                    variants: [['осы проблемалы облыс аясында қандай да бір тапсырмаларды шешу'], ['белгілі бір класс үшін математикалық тапсырмаларды шешу', 'компьютерлік вирустарды іздеу және жою үшін']]
                                },
                            ]
                        }
                    }
                }, {
                title: 'Талдау жаса',
                image: 'a2.jpg',
                info: 'Біліміңді тексер және артық жауаптарды алып таста',
                interactive: {
                    name: 'pair',
                    items: {
                        title: 'Артығын тап',
                        winWord: 'МОЛОДЕЦ',
                        excesses: {
                            title: "Артығын тап",
                            data: [
                                ['Windows XP', 'мәтіндік редактор', 'MS Access', 'графикалық редактор', 'аудармашы'],
                                ['кестелі процессор', 'операциялық жүйе', 'архиваторлар', 'вирусқа қарсы программа'],
                            ]
                        },
                        pairs: [
                            ['Касперский', 'Антивирус'],
                            ['MS Word', 'Мәтіндік редактор'],
                            ['MS Excel', 'Кестелі процессор'],
                            ['Paint', 'Графикалық редактор'],
                            ['WinRar', 'Архиватор'],
                            ['Linux', 'Операциялық жүйе'],
                            ['Windows Media Player', 'Музыка ойнатқыш'],
                        ],
                    }
                }
            }, {
                title: 'Құрастыр',
                image: 'a3.jpg',
                info: 'Программалық жасақтама құрылымын толтыру',
                interactive: {
                    name: 'selectable',
                    items: {
                        title: 'Дербес компьютердің программалық жасақтамасының құрылымы',
                        parts: [
                            {
                                title: 'Жүйелік БЖ',
                                tiles: [
                                    {
                                        title: 'Операциялық жүйелер',
                                        programs: ['public/3/windows.png', 'public/3/linux.png']
                                    }, {
                                        title: 'Архиваторлар',
                                        programs: ['public/3/winrar.png', 'public/3/winzip.png']
                                    }, {
                                        title: 'Антивирустар',
                                        programs: ['public/3/kasper.png', 'public/3/eset.png']
                                    }
                                ],
                            }, {
                                title: 'Қолданбалы БЖ',
                                tiles: [
                                    {
                                        title: 'Жалпы мақсаттағы программалар',
                                        programs: ['public/3/word.png', 'public/3/excel.png', 'public/3/photoshop.png']
                                    }, {
                                        title: 'Арнайы мақсаттағы программалар',
                                        programs: ['public/3/2gis.png', 'public/3/x1.png']
                                    }, {
                                        title: 'Компьютерлік ойындар',
                                        programs: ['public/3/warcraft.png', 'public/3/simcity.png']
                                    }
                                ]
                            }, {
                                title: 'программалау жүйелері',
                                tiles: [
                                    {
                                        title: 'Программалау тілдері',
                                        programs: ['public/3/cplus.png', 'public/3/pascal.png', 'public/3/html.png']
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
            ]
    },
    en: {
        title: "Classification of software",
        grade: "Grade 8",
        typeder: "Simulator",
        prologue: {
            author: 'T. Hoare',
            phrase: 'There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.',
        },
        parts: [{
            title: 'Think',
            image: 'part3.png',
            info: 'Answer the questions and check do you know classification of software well.',
            interactive: {
                name: 'test',
                items: {
                    count: 10,
                    data: [
                        {
                            question: 'Driver is …',
                            variants: [['computer organization'], ['program providing work of external computer organizations', 'antivirus program']]
                        }, {
                            question: 'Operating systems:',
                            variants: [['DOS, Windows, Unix'], ['Word, Excel, Power Point', '(content of hospital department): chief of department, 2 surgeons, 4 nurses']]
                        }, {
                            question: 'Hard software:',
                            variants: [['programs for collaboration of computer organization as single system'], ['programs for organization of convenient allocation system of program on the disk', 'set of programs for work of CPU computer']]
                        }, {
                            question: 'Service programs: ',
                            variants: [['Programs of service organizations for accounting'], ['Programs of service organizations for records management', 'System shells, utilities, device drivers, antivirus and network programs.']]
                        }, {
                            question: 'Word processing program is software product composes:',
                            variants: [['hard software;'], ['programming system;', 'applications software']]
                        }, {
                            question: 'Operating systems are software products are part of:',
                            variants: [['application software;'], ['hard software;', 'bespoke software.']]
                        }, {
                            question: 'Operating system is:',
                            variants: [['a complex of main computer organization;'], ['programming system in language of low level language', 'set of programs providing work of all hardware appliances of computer and access of user to them']]
                        }, {
                            question: 'Archiving program is:',
                            variants: [['a program for decreasing of information volume (compression) of files;'], ['files backup system;', 'database management system']]
                        }, {
                            question: 'Interface is …',
                            variants: [['a complex of resources and rules of PC devices interaction, programs and users'], ['hardware package', 'element of software program']]
                        }, {
                            question: 'Aims of applications programs',
                            variants: [['problem solving within this problem area'], ['mathematics problem solving for determined class', 'for research and delete of computer viruses ']]
                        },
                    ]
                }
            }
        }, {
            title: 'Analyze',
            image: 'a2.jpg',
            info: 'Show the knowledge and exclude superfluous answers',
            interactive: {
                name: 'pair',
                items: {
                    title: 'Find surplus',
                    winWord: 'Well done',
                    excesses: {
                        title: "Find surplus",
                        data: [
                            ['Windows XP', 'word editor', 'MS Access', 'graphic editor', 'translator'],
                            ['spreadsheet', 'operating system', 'archivers', 'antivirus program']
                        ]
                    },
                    pairs: [
                        ['Kasperski', 'Antivirus'],
                        ['MS Word', 'Word editor'],
                        ['MS Excel', 'Spreadsheet'],
                        ['Paint', 'Graphic editor'],
                        ['WinRar', 'Archiver'],
                        ['Linux', 'Operating system'],
                        ['Windows Media Player', 'Music player'],
                    ],
                }
            }
        }, {
            title: 'Collect',
            image: 'a3.jpg',
            info: 'Fill software structure',
            interactive: {
                name: 'selectable',
                items: {
                    title: 'PC Software structure',
                    parts: [
                        {
                            title: 'System software',
                            tiles: [
                                {
                                    title: 'Operating systems',
                                    programs: ['public/3/windows.png', 'public/3/linux.png']
                                }, {
                                    title: 'Archivers',
                                    programs: ['public/3/winrar.png', 'public/3/winzip.png']
                                }, {
                                    title: 'Antiviruses',
                                    programs: ['public/3/kasper.png', 'public/3/eset.png']
                                }
                            ],
                        }, {
                            title: 'Application software',
                            tiles: [
                                {
                                    title: 'Common program',
                                    programs: ['public/3/word.png', 'public/3/excel.png', 'public/3/photoshop.png']
                                }, {
                                    title: 'Special purpose program',
                                    programs: ['public/3/2gis.png', 'public/3/x1.png']
                                }, {
                                    title: 'Computer games',
                                    programs: ['public/3/warcraft.png', 'public/3/simcity.png']
                                }
                            ]
                        }, {
                            title: 'Programming systems',
                            tiles: [
                                {
                                    title: 'Programming languages',
                                    programs: ['public/3/cplus.png', 'public/3/pascal.png', 'public/3/html.png']
                                }
                            ]
                        }
                    ]
                }
            }
        }
        ]
    }
}