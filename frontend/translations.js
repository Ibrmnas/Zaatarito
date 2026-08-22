const translations = {
  en: {
    addBtn: '+ Add',
    items: 'items',
    viewOrder: 'View Order',
    yourOrder: 'Your Order',
    total: 'Total:',
    sendKitchen: 'Send Order to Kitchen 🚀',
    remove: 'Remove',
    emptyCart: 'Your cart is empty',
    orderSent: 'Order sent to the kitchen!',
    intro: {
      mainTitle: 'ALL OUR SPECIALTIES ARE AVAILABLE IN THESE FORMATS:',
      formats: [
        {
          id: 'format-kaak',
          title: '1-Bite Bag',
          desc: 'The famous Lebanese "kaak" flatbread made our way, with its handle to dip into the side sauce, stuffed with your choice of specialty.',
          icon: 'assets/img/icon-kaak.svg'
        },
        {
          id: 'format-saj',
          title: '2-Saj Roll',
          desc: '350g sliced wrap made with artisanal Lebanese "saj" bread, served with its side sauce, stuffed with your choice of specialty.',
          icon: 'assets/img/icon-wrap.svg'
        },
        {
          id: 'format-tagliere',
          title: '3-Loaded Tagliere',
          desc: 'Platter made of a specialty of your choice, potato wedges, flatbread, fresh veggies and pickles, fresh salads, and paired sauces.',
          icon: 'assets/img/icon-plate.svg'
        },
        {
          id: 'format-bowle',
          title: '4-Bowlè',
          desc: 'Dish based on white basmati rice, veggies and pickles, side salads, and house sauces paired with your choice of specialty.',
          icon: 'assets/img/icon-bowl.svg'
        }
      ],
      specials: {
        taglieri: {
          title: '5-EXTRA LOADED TAGLIERI',
          items: [
            {
              id: 'mix-loaded-tagliere',
              name: 'MIX LOADED TAGLIERE',
              price: 19.90,
              desc: '2 specialties of your choice, a platter of potato wedges, 2 paired sauces, half portion of Tabbouleh salad and half portion of Coleslaw salad, mix of fresh veggies and pickles, sesame flatbread.'
            },
            {
              id: 'gran-mix-loaded-tagliere',
              name: 'GRAN MIX LOADED TAGLIERE',
              price: 39.90,
              desc: '3 specialties of your choice, a platter of potato wedges and 3 paired sauces, a platter of 3 cold sides (Tabbouleh salad, Coleslaw salad, mix of fresh veggies and pickles), a portion of creamy hummus, and sesame flatbread.',
              advice: '(Recommended for 2 people)'
            },
            {
              id: 'super-gran-mix-loaded-tagliere',
              name: 'SUPER GRAN MIX LOADED TAGLIERE',
              price: 69.90,
              desc: '6 specialties of your choice, a large platter of potato wedges, a platter with 6 sauces, 4 large cold sides (Tabbouleh salad, Coleslaw salad, Fattoush salad, mix of fresh veggies and pickles), a portion of creamy hummus, and sesame flatbread.',
              advice: '(Recommended for 3/4 people)'
            }
          ]
        },
        bowle: {
          title: '6-MIXED BOWLÈ:',
          items: [
            {
              id: 'bowle-mista-2-specialita',
              name: '2 SPECIALTIES OF YOUR CHOICE',
              price: 19.90,
              desc: 'With double sauce dressing and paired veggies.'
            },
            {
              id: 'bowle-mista-3-specialita',
              name: '3 SPECIALTIES OF YOUR CHOICE',
              price: 29.90,
              desc: 'Double rice, triple sauce dressing and paired veggies.'
            }
          ]
        },
        combo: {
          id: 'combo-tris',
          badge: 'Special Formats',
          title: '7-Combo Tris',
          desc: '3 medium Bite Bags stuffed with 3 specialties of your choice, served with their sauces.',
          price: 18.00
        }
      }
    },
    banners: {
      comboTitle: 'VALID ON THE ENTIRE MENU',
      comboDesc: 'Add <strong>€4.00</strong> to your order and get the <strong>potato wedges + soft drink</strong> combo',
      dessertText: 'ASK THE STAFF WHAT THE <span class="banner-highlight">HOUSE DESSERT</span> IS TODAY'
    },
    sidebar: {
      notes: [
        'Light artisanal Lebanese flatbread freshly made and baked to order',
        'Also available in traditional flat bite bag format',
        'And our selected pairing for you of ingredients, vegetables, and sauces for each specialty',
        'DELICACIES AND APPETIZERS'
      ],
      legendTitle: 'Price based on size',
      legendItems: [
        { label: 'Bite Bag', icon: 'assets/img/icon-kaak.svg' },
        { label: 'Saj Roll', icon: 'assets/img/icon-wrap.svg' },
        { label: 'Loaded Tagliere', icon: 'assets/img/icon-plate.svg' },
        { label: 'Bowlè', icon: 'assets/img/icon-bowl.svg' }
      ]
    }
  },
  it: {
    addBtn: '+ Aggiungi',
    items: 'elementi',
    viewOrder: 'Vedi Ordine',
    yourOrder: 'Il Tuo Ordine',
    total: 'Totale:',
    sendKitchen: 'Invia Ordine in Cucina 🚀',
    remove: 'Rimuovi',
    emptyCart: 'Il tuo carrello è vuoto',
    orderSent: 'Ordine inviato in cucina!',
    intro: {
      mainTitle: 'TUTTE LE NOSTRE SPECIALITÀ SONO DISPONIBILI NEI FORMATI :',
      formats: [
        {
          id: 'format-kaak',
          title: '1-Bite Bag',
          desc: 'La famosa focaccia libanese “kaak”, fatta a modo nostro, con il suo manico da pucciare nella salsa d’accompagnamento, farcita con una nostra specialità a tua scelta',
          icon: 'assets/img/icon-kaak.svg'
        },
        {
          id: 'format-saj',
          title: '2-Saj Roll',
          desc: 'Sliced arrotolato da 350gr, fatto con piadina libanese artigianale “saj”, servito con la sua salsa d’accompagnamento, farcito con una nostra specialità a tua scelta',
          icon: 'assets/img/icon-wrap.svg'
        },
        {
          id: 'format-tagliere',
          title: '3-Loaded Tagliere',
          desc: 'Tagliere composto da, una specialità a tua scelta, patate wedges, pane focaccia, verdure e sott’aceti, insalatine e salse abbinate',
          icon: 'assets/img/icon-plate.svg'
        },
        {
          id: 'format-bowle',
          title: '4-Bowlè',
          desc: 'Piatto a base di riso basmati bianco, verdure e sott’aceti, insalatine e salse abbinate alla tua scelta di specialità',
          icon: 'assets/img/icon-bowl.svg'
        }
      ],
      specials: {
        taglieri: {
          title: '5-EXTRA LOADED TAGLIERI',
          items: [
            {
              id: 'mix-loaded-tagliere',
              name: 'MIX LOADED TAGLIERE',
              price: 19.90,
              desc: '2 portate a scelta tra nostre specialità, un tagliere composto di patata wedges, 2 salse abbinate, mezza portata di insalatina Tabbouleh e mezza di insalatina coleslaw, mix di verdure fresche e sott’aceti, pane focaccia al sesamo.'
            },
            {
              id: 'gran-mix-loaded-tagliere',
              name: 'GRAN MIX LOADED TAGLIERE',
              price: 39.90,
              desc: '3 portate a scelta tra le nostre specialità, un tagliere composto di patate wedges e 3 salse abbinate, un tagliere composto di 3 portate fredde, una di insalatina Tabbouleh, una di insalatina coleslaw, e una di mix di verdure fresche e sott’aceti, una portata di hummus creamy, e pane focaccia al sesamo.',
              advice: '(Consigliato per 2 persone)'
            },
            {
              id: 'super-gran-mix-loaded-tagliere',
              name: 'SUPER GRAN MIX LOADED TAGLIERE',
              price: 69.90,
              desc: '6 portate a scelta tra le nostre specialità, un tagliere grande composto di patate wedges, un tagliere con 6 salse, 4 portate grandi fredde, una di insalatina Tabbouleh, una di insalatina Coleslaw, una di insalatina Fattoush, e una di mix di verdure fresche e sottaceti, una portata di hummus creamy, e pane focaccia al sesamo.',
              advice: '(Consigliato per 3/4 persone)'
            }
          ]
        },
        bowle: {
          title: '6-BOWLÈ MISTA:',
          items: [
            {
              id: 'bowle-mista-2-specialita',
              name: '2 SPECIALITÀ A SCELTA',
              price: 19.90,
              desc: 'CON DOPPIO CONDIMENTO DI SALSE E VERDURE ABBINATE.'
            },
            {
              id: 'bowle-mista-3-specialita',
              name: '3 SPECIALITÀ A SCELTA',
              price: 29.90,
              desc: 'DOPPIO RISO,TRIPLO CONDIMENTO DI SALSE E VERDURE ABBINATE'
            }
          ]
        },
        combo: {
          id: 'combo-tris',
          badge: 'Formati speciali',
          title: '7-Combo Tris',
          desc: '3 medium Bite Bags farcite con 3 specialità a tua scelta, servite con le loro salse',
          price: 18.00
        }
      }
    },
    banners: {
      comboTitle: 'VALIDO SU TUTTO IL MENU’',
      comboDesc: 'Aggiungi <strong>4,00 €</strong> al tuo ordine e hai la combo <strong>patate wedges e softdrink</strong>',
      dessertText: 'CHIEDI ALLO STAFF QUAL’E’ <span class="banner-highlight">IL DOLCE</span> DELLA CASA OGGI'
    },
    sidebar: {
      notes: [
        'Focaccia artigianale libanese leggera preparata e cotta al momento',
        'Disponibili anche in formato bite bag tradizionale piatta',
        'E il nostro abbinamento prescelto per voi tra ingredienti, verdure e salse per ogni specialità',
        'FIZIOSITA’ E ANTIPASTI'
      ],
      legendTitle: 'Prezzo in base al formato',
      legendItems: [
        { label: 'Bite Bag', icon: 'assets/img/icon-kaak.svg' },
        { label: 'Saj Roll', icon: 'assets/img/icon-wrap.svg' },
        { label: 'Loaded Tagliere', icon: 'assets/img/icon-plate.svg' },
        { label: 'Bowlè', icon: 'assets/img/icon-bowl.svg' }
      ]
    }
  }
};

const menuSections = [
  {
    id: 'platters',
    enTitle: 'FLAT MAN’OUSHE',
    itTitle: 'FLAT MAN’OUSHE',
    items: [
      {
        id: 'zaatar-classic',
        price: 7.00,
        isVegan: true,
        en: {
          name: 'Zaatar (the classic)',
          desc: 'Thyme, sesame and herb pesto, fresh tomato, pickled cucumbers, fresh mint.'
        },
        it: {
          name: 'Zaatar (il grande classico)',
          desc: 'Pesto di timo sesamo e erbe, pomodoro fresco, cetriolini sott’aceto, menta fresca.'
        }
      },
      {
        id: 'labneh-makdous-flat',
        price: 7.50,
        isVegetarian: true,
        en: {
          name: 'Labneh & Makdous',
          desc: 'Homemade herb spreadable cheese, pickled eggplants stuffed with walnuts and peppers.'
        },
        it: {
          name: 'Labneh e Makdous',
          desc: 'Formaggio spalmabile alle erbe fatto in casa, melanzane sott’aceto ripiene di noci e peperoni.'
        }
      },
      {
        id: 'easy-cheese',
        price: 7.50,
        isVegetarian: true,
        en: {
          name: 'Easy Cheese',
          desc: 'Mozzarella, Akkawi cheese.'
        },
        it: {
          name: 'Easy Cheese',
          desc: 'Mozzarella, Formaggio Ikawy.'
        }
      },
      {
        id: 'zaatar-cheese-flat',
        price: 7.50,
        isVegetarian: true,
        en: {
          name: 'Zaatar and Cheese',
          desc: 'Half zaatar and half Akkawi cheese with mozzarella.'
        },
        it: {
          name: 'Zaatar e formaggio',
          desc: 'Metà zaatar e metà formaggio Ikawy e mozzarella.'
        }
      },
      {
        id: 'lebanese-pizza-flat',
        price: 8.00,
        isVegetarian: true,
        en: {
          name: 'Lebanese Pizza',
          desc: 'Tomato, mozzarella, sweet peppers, mushrooms, corn, oregano and basil.'
        },
        it: {
          name: 'Lebanese Pizza',
          desc: 'Pomodoro, mozzarella, friggitelli, funghi, mais, origano e basilico.'
        }
      },
      {
        id: 'sujuk-cheese-flat',
        price: 8.00,
        en: {
          name: 'Sujuk and Cheese',
          desc: 'Spicy sausage, Akkawi cheese, mozzarella and homemade paprika cocktail sauce.'
        },
        it: {
          name: 'Sujuk e Formaggio',
          desc: 'Salsiccia piccante, formaggio ikawy, mozzarella e salsa cocktail alla paprika fatta in casa.'
        }
      },
      {
        id: 'kafta-flat',
        price: 8.50,
        en: {
          name: 'Kafta',
          desc: 'Spiced minced beef, parsley, onion, pickled cucumbers, homemade paprika cocktail sauce.'
        },
        it: {
          name: 'Kafta',
          desc: 'Carne di manzo macinata, prezzemolo, cipolla, cetriolini sott’aceto, salsa cocktail alla paprika fatta in casa.'
        }
      }
    ]
  },
  {
    id: 'nostre-specialita',
    enTitle: '2. Our Specialties',
    itTitle: '2. Le Nostre Specialità',
    items: [
      {
        id: 'shawarma-vitello',
        en: {
          name: 'Veal Shawarma',
          desc: 'Veal Shawarma meat, fresh tomato, parsley, onion and sumac salad, pickled Armenian cucumbers (tortarelli), creamy hummus, and tarator sauce.'
        },
        it: {
          name: 'Shawarma di Vitello',
          desc: 'Carne Shawarma di vitello, pomodoro fresco, insalatina di prezzemolo, cipolla e polvere di summaco, Tortarelli sott’aceto, Hummus creamy, e salsa tarator.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 10.00 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 9.50 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 14.50 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 15.00 }
        ]
      },
      {
        id: 'Shawarma-Pol',
        en: {
          name: 'Chicken Shawarma',
          desc: 'Chicken Shawarma meat, potatoes, pickled cucumbers, garlic cream, pomegranate glaze.'
        },
        it: {
          name: 'Shawarma di Pollo',
          desc: 'Carne Shawarma di pollo, patate, cetriolini sott’aceto, crema all’aglio, glassa di melograno.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 9.00 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 8.50 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 12.50 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 13.00 }
        ]
      },
      {
        id: 'Tawook-Pol',
        en: {
          name: 'Chicken Tawook',
          desc: 'Marinated chicken bites, potatoes, coleslaw salad, pickled cucumbers, garlic cream, homemade paprika cocktail sauce.'
        },
        it: {
          name: 'Tawook di Pollo',
          desc: 'Spezzatino di pollo marinato, patate, insalatina coleslaw, cetriolini sott’aceto, crema all’aglio, salsa cocktail alla paprika fatta in casa.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 9.50 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 9.00 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 13.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 13.50 }
        ]
      },
      {
        id: 'Fahitas-Pol',
        en: {
          name: 'Chicken Fajitas',
          desc: 'Grilled marinated chicken strips, sweet peppers, bell peppers, onion, mushrooms, corn and grilled mozzarella, avocado mayonnaise, Worcestershire and soy sauce.'
        },
        it: {
          name: 'Fahitas di Pollo',
          desc: 'Striscette di pollo marinato, friggitelli, peperoni, cipolla, funghi, mais e mozzarella cotti alla piastra, una maionase all’avocado, Worcestershire e Soia sauce.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 10.00 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 9.50 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 15.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 15.50 }
        ]
      },
      {
        id: 'Kafta-Manzo',
        en: {
          name: 'Beef Kafta',
          desc: 'Spiced minced beef with parsley and onion, fresh tomato, pickled Armenian cucumbers (tortarelli), parsley, onion and sumac salad, creamy hummus, tarator sauce.'
        },
        it: {
          name: 'Kafta di Manzo',
          desc: 'Carne di manzo macinata, Pomodoro fresco, tortarelli sott’aceto, insalatina di prezzemolo cipolla e polvere di summaco, hummus creamy, salsa tarator.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 9.50 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 9.00 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 14.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 14.50 }
        ]
      },
      {
        id: 'Lebanese-Burger',
        en: {
          name: 'Lebanese Burger',
          desc: '130g Lebanese-spiced beef burger patty, coleslaw salad, French fries, pickled Armenian cucumbers (tortarelli), paprika cocktail sauce, powdered ketchup.'
        },
        it: {
          name: 'Lebanese Burger',
          desc: 'Hamburger di manzo da 130 gr speziato alla libanese, insalatina coleslaw, patate fritte, tortarelli sott’aceto, salsa cocktail alla paprika, ketchup in polvere.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 10.00 }
        ]
      },
      {
        id: 'Makanek',
        en: {
          name: 'Makanek',
          desc: 'Spiced Lebanese sausage, fresh tomato, green salad, pickled Armenian cucumbers (tortarelli), garlic cream, lemon juice, pomegranate glaze.'
        },
        it: {
          name: 'Makanek',
          desc: 'Salsiccia libanese speziata, pomodoro fresco, insalata verde, tortarelli sott’aceto, crema all’aglio, succo di limone, glassa di melograno.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 10.00 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 9.50 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 14.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 14.50 }
        ]
      },
      {
        id: 'Grilled-Halloumi',
        isVegetarian: true,
        en: {
          name: 'Grilled Halloumi',
          desc: 'Grilled Halloumi cheese, seasoned avocado, green salad, arugula, yellow cherry tomatoes, sweet peppers, baba ghanoush, basil pesto, pomegranate glaze.'
        },
        it: {
          name: 'Grilled-Halloumi',
          desc: 'Formaggio Halloumi grigliato, avocado condito, insalata verde, rucola, pomodorini gialli, friggitelli, baba ghanoush, pesto genovese, glassa al melograno.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 9.50 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 9.00 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 12.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 12.50 }
        ]
      },
      {
        id: 'Falafel',
        isVegan: true,
        en: {
          name: 'Falafel',
          desc: 'Chickpea and vegetable falafel, pickled Armenian cucumbers (tortarelli), parsley, onion and sumac salad, green salad, fresh tomato, red and white cabbage, fresh mint, creamy hummus and tarator sauce.'
        },
        it: {
          name: 'Falafel',
          desc: 'Falafel di ceci e verdure, tortarelli sott’aceto, prezzemolo, cipolla e polvere di summaco, insalata verde, pomodoro fresco, cavolo rosso e bianco, menta fresca, Hummus creamy e salsa tarator.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 8.50 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 8.00 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 12.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 12.50 }
        ]
      },
      {
        id: 'Ribs',
        en: {
          name: 'Lamb Ribs',
          desc: '2 Lamb chops, parsley, onion and sumac salad, creamy hummus, pickled cucumbers, fresh tomato, toasted cashews.'
        },
        it: {
          name: 'Ribs di Agnello',
          desc: '2 Costolette di agnello, insalatina di prezzemolo cipolla e polvere di summaco, Hummus creamy, cetriolini sott’aceto, pomodoro fresco, anacardi tostati.'
        },
        options: [
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 14.50 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 15.00 }
        ]
      },
      {
        id: 'Pastrami',
        en: {
          name: 'Beef Pastrami',
          desc: 'Slow-cooked spiced beef brisket, red cabbage dressed with vinegar and BBQ sauce, arugula, caramelized onion, pickled cucumbers, Kashkaval cheese, mustard.'
        },
        it: {
          name: 'Pastrami di Manzo',
          desc: 'Petto di manzo speziato cotto a bassa temperatura, cavolo rosso condito con aceto e salsa BBQ, rucola, cipolla caramellata, citriolini sott’aceto, formaggio Kashcaval, senape.'
        },
        options: [
          { type: 'kaak', icon: 'assets/img/icon-kaak.svg', price: 12.00 },
          { type: 'wrap', icon: 'assets/img/icon-wrap.svg', price: 11.50 },
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 16.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 16.50 }
        ]
      },
      {
        id: 'Wings-Pol',
        en: {
          name: 'Chicken Wings',
          desc: 'BBQ marinated chicken wings, potatoes, coleslaw salad, pickled cucumbers, garlic cream, homemade paprika cocktail sauce.'
        },
        it: {
          name: 'Wings di Pollo',
          desc: 'Alette di pollo marinate al BBQ, patate, insalatina Coleslaw, cetriolini sott’aceto, crema all’aglio, salsa cocktail alla paprika fatta in casa.'
        },
        options: [
          { type: 'plate', icon: 'assets/img/icon-plate.svg', price: 12.00 },
          { type: 'bowl', icon: 'assets/img/icon-bowl.svg', price: 12.50 }
        ]
      }
    ]
  },
  {
    id: 'proposte-casa',
    enTitle: 'OTHER HOUSE SPECIALTIES',
    itTitle: 'ALTRE PROPOSTE DELLA CASA',
    items: [
      {
        id: 'falafel-bites-4',
        price: 7.00,
        isVegan: true,
        en: {
          name: '4 Mini Falafel Bites',
          desc: 'Chickpea and vegetable falafel served our way.'
        },
        it: {
          name: '4 Mini Falafel Bites',
          desc: 'Falafel di ceci e verdure servite a modo nostro.'
        }
      },
      {
        id: 'fatteh-ceci',
        price: 7.50,
        en: {
          name: 'Chickpea Fatteh',
          desc: 'Fried bread, chickpeas, minced beef, yogurt and tahini sauce, butter, cashews.'
        },
        it: {
          name: 'Fatteh di ceci',
          desc: 'Pane fritto, ceci, carne macinata di manzo, salsina a base di yogurt e tahina, burro, anacardi.'
        }
      },
      {
        id: 'msabbaha-ceci',
        price: 7.00,
        isVegan: true,
        en: {
          name: 'Chickpea Msabbaha',
          desc: 'Creamed chickpeas with hummus and tahini.'
        },
        it: {
          name: 'Msabbaha di ceci',
          desc: 'Ceci mantecati con hummus e tahina.'
        }
      },
      {
        id: 'hummus-creamy-side',
        price: 6.50,
        isVegan: true,
        en: {
          name: 'Creamy Hummus',
          desc: 'Traditional smooth chickpea dip with tahini and lemon.'
        },
        it: {
          name: 'Hummus Creamy',
          desc: 'Tradizionale crema liscia di ceci con tahina e limone.'
        }
      },
      {
        id: 'hummus-beef',
        price: 8.00,
        en: {
          name: 'Creamy Hummus with Beef',
          desc: 'Hummus topped with sauteed minced beef, butter, and cashews.'
        },
        it: {
          name: 'Hummus Creamy con Carne di Manzo',
          desc: 'Hummus, carne macinata, burro e anacardi.'
        }
      },
      {
        id: 'baba-ghanoush-side',
        price: 7.50,
        isVegan: true,
        en: {
          name: 'Baba Ghanoush',
          desc: 'Smoked eggplant cream.'
        },
        it: {
          name: 'Baba Ghanoush',
          desc: 'Crema di melanzane affumicate.'
        }
      },
      {
        id: 'labne-makdous-side',
        price: 6.50,
        isVegetarian: true,
        en: {
          name: 'Labneh & Makdous',
          desc: 'Herb spreadable cheese served with pickled eggplant stuffed with walnuts and peppers.'
        },
        it: {
          name: 'Labne e Makdous',
          desc: 'Formaggio spalmabile alle erbe con una melanzana sott’aceto ripiena di noci e peperoni.'
        }
      },
      {
        id: 'makdous-2pc',
        price: 6.50,
        isVegan: true,
        en: {
          name: 'Makdous Platter (2 pcs)',
          desc: '2 pickled eggplants stuffed with walnuts and sweet peppers.'
        },
        it: {
          name: 'Piatto Makdous 2pz',
          desc: '2 melanzane sott’aceto ripiene di noci e peperoni.'
        }
      },
      {
        id: 'tabbouleh-salad',
        price: 7.00,
        isVegan: true,
        en: {
          name: 'Tabbouleh Salad',
          desc: 'Parsley, tomato, onion, bulgur, lemon, salt, olive oil.'
        },
        it: {
          name: 'Insalatina Tabbouleh',
          desc: 'Prezzemolo, pomodoro, cipolla, bulgur, limone, sale, olio di oliva.'
        }
      },
      {
        id: 'fattoush-salad',
        price: 7.50,
        isVegan: true,
        en: {
          name: 'Fattoush Salad',
          desc: 'Fried bread, tomato, lettuce, cucumber, mint, cilantro, parsley, carrots, radishes, spring onion, sumac, olive oil, pomegranate molasses.'
        },
        it: {
          name: 'Insalatina Fattoush',
          desc: 'Pane fritto, pomodoro, insalata, cetriolo, menta, coriandolo, prezzemolo, carote, ravanelli, cipollotto, polvere di summaco, olio di oliva, glassa di melograno.'
        }
      },
      {
        id: 'coleslaw-salad',
        price: 6.50,
        isVegetarian: true,
        en: {
          name: 'Coleslaw Salad',
          desc: 'White cabbage, corn, mayonnaise.'
        },
        it: {
          name: 'Insalatina Coleslaw',
          desc: 'Cavolo bianco, mais, maionese.'
        }
      },
      {
        id: 'kibbeh-2pc',
        price: 7.50,
        en: {
          name: 'Kibbeh (2 pcs)',
          desc: 'Deep-fried bulgur and minced meat croquette stuffed with spiced beef, onion, and walnuts.'
        },
        it: {
          name: 'Kibbeh 2 pz',
          desc: 'Polpettona di carne macinata e bulgur, fritta e ripiena di macinato di manzo, cipolla e noci.'
        }
      },
      {
        id: 'wrak-inab-4pc',
        price: 6.50,
        isVegan: true,
        en: {
          name: 'Wrak Inab (4 pcs)',
          desc: '4 stuffed grape leaves with rice and pomegranate glaze.'
        },
        it: {
          name: 'Wrak Inab',
          desc: '4pz foglie di vite ripiene di riso, e salsa al melograno.'
        }
      },
      {
        id: 'Rkakat-formaggio',
        price: 6.00,
        isVegetarian: true,
        en: {
          name: 'Cheese Rkakat',
          desc: '2 fried filo pastry rolls stuffed with feta, kashkaval, mozzarella cheese and parsley.'
        },
        it: {
          name: 'Rkakat con formaggio',
          desc: '2 involtini di pasta filo fritti, ripieni di formaggio feta, kashkaval, mozzarella e prezzemolo.'
        }
      },
      {
        id: 'Halloumi-grigliato',
        price: 5.50,
        isVegetarian: true,
        en: {
          name: 'Grilled Halloumi',
          desc: '2 mini skewers of grilled halloumi cheese and pomegranate glaze.'
        },
        it: {
          name: 'Halloumi grigliato',
          desc: '2 mini spiedini di formaggio halloumi grigliato e salsa al melograno.'
        }
      },
      {
        id: 'Kafta-Balls',
        price: 6.00,
        en: {
          name: 'Kafta Balls',
          desc: '2 mini skewers of beef meatballs with parsley and onion.'
        },
        it: {
          name: 'Kafta Balls',
          desc: '2 mini spiedini di polpette di manzo, prezzemolo e cipolla.'
        }
      },
      {
        id: 'Patate-Wedges',
        price: 3.50,
        isVegan: true,
        en: {
          name: 'Potato Wedges',
          desc: 'Herb rustic potatoes with ketchup powder and cheese powder.'
        },
        it: {
          name: 'Patate Wedges',
          desc: 'Patate rustiche alle erbe con polvere di ketchup e polvere di formaggio.'
        }
      },
      {
        id: 'Batata-Harra',
        price: 7.00,
        isVegan: true,
        en: {
          name: 'Batata Harra',
          desc: 'Double-cooked spicy cilantro potatoes with garlic, chili pepper, and paprika.'
        },
        it: {
          name: 'Batata Harra',
          desc: 'Patate piccanti al coriandolo in doppia cottura, aglio, peperoncino e paprika.'
        }
      },
      {
        id: 'Makanek-Salsiccia',
        price: 8.00,
        en: {
          name: 'Makanek - Lebanese Sausage (4 pcs)',
          desc: ''
        },
        it: {
          name: 'Makanek - salsiccia libanese 4 pz',
          desc: ''
        }
      },
      {
        id: 'Ribs-agnello',
        price: 9.00,
        en: {
          name: 'Large Lamb Ribs (2 pcs)',
          desc: ''
        },
        it: {
          name: 'Ribs di agnello grandi 2 pz',
          desc: ''
        }
      },
      {
        id: 'Wings-Pollo',
        price: 7.00,
        en: {
          name: 'Chicken Wings (4 pcs)',
          desc: '4 spiced chicken wings marinated in BBQ sauce.'
        },
        it: {
          name: 'Wings di pollo 4 pz',
          desc: '4 alette di pollo speziate, marinate al BBQ.'
        }
      },
      {
        id: 'tagliere-antipasti-misto',
        price: 15.00,
        isVegan: true,
        en: {
          name: 'MIXED APPETIZER PLATTER',
          desc: 'Hummus sample, Baba Ghanoush sample, 2pcs Wrak Inab, 1pc Makdous, Tabbouleh salad, Batata Harra.'
        },
        it: {
          name: 'TAGLIERE ANTIPASTI MISTO',
          desc: 'Assaggio di Hummus, Assaggio di Baba Ghanoush, 2pz warak Inab, 1pz Makdous, Insalatina Tabbouleh, Batata Harra.'
        }
      }
    ]
  }
];