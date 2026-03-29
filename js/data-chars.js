const CHARS = [
  {
    id: 'simoun',
    imgSrc: './panitikan/Images/Characters/simoun.webp',
    name: 'Simoun',
    alias: 'Crisostomo Ibarra',
    role: 'Pangunahing Tauhan',
    traitClass: 'trait-p',
    traitLabel: 'Protagonista',
    bg: 'linear-gradient(160deg,#1f0e02,#0d0600)',
    filter: 'protagonista',
    shortDesc: 'Isang mayamang alahero na sa katotohanan ay si Crisostomo Ibarra, nagbalik para maghasik ng himagsikan.',
    attrs: [
      {label: 'Tunay na Pangalan', value: 'Crisostomo Ibarra'},
      {label: 'Katayuan', value: 'Alahero / Rebolusyonaryo'},
      {label: 'Simbolo', value: 'Ganti at Ginto'},
      {label: 'Wakas', value: 'Namatay sa bahay ni Padre Florentino'}
    ],
    desc: 'Nagbalik si Simoun sa Pilipinas bilang isang maimpluwensyang alahero. Sa likod ng yaman, nagtatago ang galit at paghahangad ng higanti para sa bayan.',
    quote: '"Ang mga luha ng dukha ay nagiging dugo ng mga makapangyarihan."',
    clues: {
      easy: ['Alahero na laging may suot na itim na salamin.', 'Nagtatago ng plano ng paghihiganti sa likod ng yaman.', 'Ginamit ang mga hiyas para pondohan ang himagsikan.'],
      medium: ['Dating estudyante na ipinatapon ng mga Kastila.', 'Nagplano ng pagpapasabog sa isang kasalan.', 'Ang tunay na pangalan ay Crisostomo Ibarra.'],
      hard: ['Uminom ng lason kaysa mahuli ng mga awtoridad.', 'Ipinagtapat ang lahat kay Padre Florentino bago mamatay.', 'Itinapon ang kanyang kayamanan sa dagat pagkatapos niyang pumanaw.']
    }
  },
  {
    id: 'basilio',
    imgSrc: './panitikan/Images/Characters/basilio.webp',
    name: 'Basilio',
    alias: 'Anak ni Sisa',
    role: 'Pangunahing Tauhan',
    traitClass: 'trait-p',
    traitLabel: 'Protagonista',
    bg: 'linear-gradient(160deg,#060c1a,#030609)',
    filter: 'protagonista',
    shortDesc: 'Anak ni Sisa at isang mahusay na estudyante ng medisina na dumanas ng matinding hirap.',
    attrs: [
      {label: 'Propesyon', value: 'Estudyante ng Medisina'},
      {label: 'Ina', value: 'Sisa (Noli Me Tangere)'},
      {label: 'Tagapayo', value: 'Kapitan Tiago'},
      {label: 'Wakas', value: 'Nakulong at sumapi sa himagsikan'}
    ],
    desc: 'Lumaking mahirap si Basilio at naulila nang mamatay si Sisa. Sa tulong ni Kapitan Tiago, naging estudyante siya ng medisina at naging saksi sa mga lihim ni Simoun.',
    quote: '"Ang aming mga pangarap ay hindi paunti-unti kundi sabay-sabay na nasisira."',
    clues: {
      easy: ['Masipag na estudyante ng medisina.', 'Anak ng isang tanyag na baliw sa Noli Me Tangere.', 'Kasintahan ni Juli.'],
      medium: ['Nakita niya si Simoun sa kagubatan habang naghuhukay.', 'Nadakip siya dahil sa pagbibintang na may kinalaman sa paskin.', 'Nakaligtas sa kamatayan sa San Diego noong bata pa.'],
      hard: ['Naglingkod kay Kapitan Tiago kapalit ng pag-aaral.', 'Nais sanang maging doktor para makatulong sa kapwa ngunit naging biktima ng kawalan ng katarungan.', 'Sa huli, sumama siya sa plano ni Simoun matapos mamatay si Juli.']
    }
  },
  {
    id: 'isagani',
    imgSrc: './panitikan/Images/Characters/isagani.webp',
    name: 'Isagani',
    alias: 'Ang Makatang Kabataan',
    role: 'Kaibigan ni Basilio',
    traitClass: 'trait-p',
    traitLabel: 'Idealista',
    bg: 'linear-gradient(160deg,#1f0d03,#100500)',
    filter: 'protagonista',
    shortDesc: 'Isang makata at matalik na kaibigan ni Basilio — ang idealistang pamangkin ni Padre Florentino.',
    attrs: [
      {label: 'Talento', value: 'Makata at Orador'},
      {label: 'Kasintahan', value: 'Paulita Gomez'},
      {label: 'Tito', value: 'Padre Florentino'},
      {label: 'Kabayanihan', value: 'Iniligtas ang mga tao sa pagsabog'}
    ],
    desc: 'Isang makabayang binata na puno ng pangarap. Itinapon niya ang lamparang may bomba sa ilog upang iligtas si Paulita Gomez, kahit pa ito ang naging hadlang sa himagsikan.',
    quote: '"Ang Pilipinas ay hindi maliit na bansa para sa maliit na pangarap."',
    clues: {
      easy: ['Batang makata na mahal na mahal ang bayan.', 'Kasintahan ni Paulita Gomez.', 'Matalik na kaibigan ni Basilio.'],
      medium: ['Itinapon ang lampara sa ilog para pigilan ang pagsabog.', 'Pamangkin ni Padre Florentino.', 'Nakipagtalo kay Padre Fernandez tungkol sa karapatan ng mga Pilipino.'],
      hard: ['Siya ang nagligtas sa mga prayle at opisyal sa piging ni Don Timoteo.', 'Iniwan siya ng kanyang kasintahan para sa isang mayamang lalaki.', 'Kumakatawan sa kabataang may matayog na pangarap para sa edukasyon.']
    }
  },
  {
    id: 'juli',
    imgSrc: './panitikan/Images/Characters/juli.webp',
    name: 'Juli',
    alias: 'Juliana de Dios',
    role: 'Biktima ng Lipunan',
    traitClass: 'trait-l',
    traitLabel: 'Trahedya',
    bg: 'linear-gradient(160deg,#0d1420,#060810)',
    filter: 'biktima',
    shortDesc: 'Anak ni Kabesang Tales at kasintahan ni Basilio na nagpaalila para iligtas ang ama.',
    attrs: [
      {label: 'Ama', value: 'Kabesang Tales'},
      {label: 'Kasintahan', value: 'Basilio'},
      {label: 'Simbolo', value: 'Dalisay na Pilipina'},
      {label: 'Wakas', value: 'Tumalon mula sa bintana'}
    ],
    desc: 'Isang maganda at madasaling dalaga na naging alila para matubos ang ama. Pinili niyang mamatay kaysa madungisan ang kanyang puri ng isang prayle.',
    quote: '"Lalong malaya ang namatay kaysa nabuhay nang walang karangalan."',
    clues: {
      easy: ['Madasalin at mahinhin na dalaga.', 'Anak ni Kabesang Tales.', 'Namatay sa loob ng kumbento.'],
      medium: ['Naging katulong ni Hermana Penchang para mapalaya ang ama.', 'Tumalon sa bintana para takasan si Padre Camorra.', 'Nawala ang kanyang lakas ng loob nang makulong si Basilio.'],
      hard: ['Isinanla ang kanyang mga hiyas maliban sa isang agnos na galing kay Basilio.', 'Nagbuwis ng buhay para sa kanyang karangalan at pamilya.', 'Simbolo ng kawalang-sala na nadudungisan ng kolonyalismo.']
    }
  },
  {
    id: 'tales',
    imgSrc: './panitikan/Images/Characters/tales.webp',
    name: 'Kabesang Tales',
    alias: 'Matanglawin',
    role: 'Magsasaka',
    traitClass: 'trait-p',
    traitLabel: 'Biktima',
    bg: 'linear-gradient(160deg,#04180a,#020c05)',
    filter: 'biktima',
    shortDesc: 'Isang dating Cabeza de Barangay na naging tulisan matapos agawin ng mga prayle ang lupa.',
    attrs: [
      {label: 'Anak', value: 'Juli (Juliana)'},
      {label: 'Alias', value: 'Matanglawin'},
      {label: 'Simbolo', value: 'Inaping Magsasaka'},
      {label: 'Wakas', value: 'Naging pinuno ng mga tulisan'}
    ],
    desc: 'Masipag na magsasaka na pinaghirapang linisin ang lupain, ngunit inagaw ng mga prayle. Dahil sa kawalan ng katarungan, naging kinatatakutang tulisan sa bundok.',
    quote: '"Ang lupang aking inani ng pawis ay hindi ipagkakaloob ko kahit kanino."',
    clues: {
      easy: ['Magsasaka na ninakawan ng lupa.', 'Ama ni Juli.', 'Naging kilabot na tulisan sa bundok.'],
      medium: ['May alyas na "Matanglawin".', 'Pinatay ang prayle at ang bagong may-ari ng kanyang lupa.', 'Dating Cabeza de Barangay na naging rebelde.'],
      hard: ['Ipinaglaban ang kanyang lupa sa korte hanggang sa maubos ang kanyang pera.', 'Binitbit ang baril, palakol, at kalaunan ay gulok sa pagbabantay ng bukid.', 'Kumakatawan sa galit ng mga magsasakang biktima ng sistemang encomienda.']
    }
  },
  {
    id: 'florentino',
    imgSrc: './panitikan/Images/Characters/florentino.webp',
    name: 'Padre Florentino',
    alias: 'Ang Paring Pilipino',
    role: 'Marunong na Matanda',
    traitClass: 'trait-r',
    traitLabel: 'Relihiyoso',
    bg: 'linear-gradient(160deg,#100e00,#080600)',
    filter: 'relihiyoso',
    shortDesc: 'Isang marangal na paring Pilipino na nagpatuloy kay Simoun sa huling sandali nito.',
    attrs: [
      {label: 'Propesyon', value: 'Sekular na Pari'},
      {label: 'Pamangkin', value: 'Isagani'},
      {label: 'Wakas', value: 'Itinapon ang kayamanan ni Simoun'},
      {label: 'Papel', value: 'Nakikinig sa kumpisal ni Simoun'}
    ],
    desc: 'Kinakatawan ang ideal na paring Pilipino. Kinupkop niya ang sugatang si Simoun at itinapon ang kayamanan nito sa dagat upang hindi na ito magamit sa kasamaan.',
    quote: '"Nasaan ang kabataang mag-aalay ng kanilang ginintuang sandali para sa bayan?"',
    clues: {
      easy: ['Mabait na paring Pilipino.', 'Nakita niya ang pagkamatay ni Simoun.', 'Tito ni Isagani.'],
      medium: ['Itinapon ang kaban ng kayamanan sa dagat.', 'Naniniwala na ang kalayaan ay dapat paghirapan at hindi idaan sa dahas.', 'Pinilit lamang magpari ng kanyang ina.'],
      hard: ['Piniling manirahan sa malapit sa dagat para sa katahimikan.', 'Nagbigay ng huling kumpisal sa naghihingalong si Simoun.', 'Simbolo ng moralidad at tunay na pananampalataya sa nobela.']
    }
  },
  {
    id: 'custodio',
    imgSrc: './panitikan/Images/Characters/custodio.webp',
    name: 'Don Custodio',
    alias: 'Ang Palaging May Plano',
    role: 'Opisyal',
    traitClass: 'trait-s',
    traitLabel: 'Satiriko',
    bg: 'linear-gradient(160deg,#0d0800,#060400)',
    filter: 'satiriko',
    shortDesc: 'Isang mataas na opisyal na kilala sa dami ng plano ngunit wala namang naisasagawa.',
    attrs: [
      {label: 'Katungkulan', value: 'Opisyal ng Gobyerno'},
      {label: 'Simbolo', value: 'Mabagal na Burukrasya'},
      {label: 'Alyas', value: 'Buena Tinta'},
      {label: 'Papel', value: 'Humawak sa petisyon ng mga estudyante'}
    ],
    desc: 'Simbolo ng mga opisyal na maraming sinasabi pero walang ginagawa. Ang petisyon ng mga estudyante para sa akademya ay nabaon sa kanyang mga walang katapusang plano.',
    quote: '"May plano ako para diyan... bukas na lang nating pag-usapan."',
    clues: {
      easy: ['Opisyal na mahilig gumawa ng planong hindi natutuloy.', 'Tinatawag na "Buena Tinta".', 'Mabagal magdesisyon.'],
      medium: ['Sa kanya napunta ang desisyon para sa Akademya ng Wikang Kastila.', 'Isang Kastilang nagmamarunong kahit walang sapat na kaalaman.', 'Pinakasalan ang isang mayamang babae para sa status.'],
      hard: ['Naniniwala siya na ang mga Pilipino ay hindi dapat matuto ng Kastila.', 'Ginamit ni Rizal para punahin ang palpak na gobyerno ng Espanya.', 'Isang satiriko na karakter na kumakatawan sa kolonyal na burukrasya.']
    }
  },
  {
    id: 'paulita',
    imgSrc: './panitikan/Images/Characters/paulita.webp',
    name: 'Paulita Gomez',
    alias: 'Pamangkin ni Doña Victorina',
    role: 'Pag-ibig ni Isagani',
    traitClass: 'trait-l',
    traitLabel: 'Trahedya',
    bg: 'linear-gradient(160deg,#1a0516,#0d000a)',
    filter: 'biktima',
    shortDesc: 'Ang magandang pamangkin ni Doña Victorina na piniling pakasalan si Juanito Pelaez.',
    attrs: [
      {label: 'Tiyahin', value: 'Doña Victorina'},
      {label: 'Unang Pag-ibig', value: 'Isagani'},
      {label: 'Asawa', value: 'Juanito Pelaez'},
      {label: 'Simbolo', value: 'Praktikalidad kaysa Pag-ibig'}
    ],
    desc: 'Pinili ang yaman at seguridad ni Juanito Pelaez kaysa sa pag-ibig ni Isagani. Kinakatawan niya ang mga Pilipinong nabulag ng materyal na bagay at katayuan sa lipunan.',
    quote: '"Ang puso ay sumusunod sa isip, at ang isip ay sumusunod sa kalagayan."',
    clues: {
      easy: ['Magandang dalaga na hinahangaan ng marami.', 'Pamangkin ni Doña Victorina.', 'Iniwan ang kasintahan para sa mayamang lalaki.'],
      medium: ['Ikinasal kay Juanito Pelaez sa huling bahagi ng kwento.', 'Naging dahilan kung bakit iniligtas ni Isagani ang mga tao sa pagsabog.', 'Isang sosyal na dalaga sa Maynila.'],
      hard: ['Iniwan si Isagani dahil ito ay naging rebelde at walang pera.', 'Simbolo ng tradisyonal na babaeng Pilipina na sunod-sunuran sa dikta ng lipunan.', 'Ang kanyang kasal ang naging tagpuan ng planong pagpapasabog ni Simoun.']
    }
  },
  {
    id: 'pecson',
    imgSrc: './panitikan/Images/Characters/pecson.webp',
    name: 'Pecson',
    alias: 'Ang Pesimista',
    role: 'Estudyante',
    traitClass: 'trait-s',
    traitLabel: 'Satiriko',
    bg: 'linear-gradient(160deg,#101010,#080808)',
    filter: 'satiriko',
    shortDesc: 'Isang estudyante na laging duda sa tagumpay ng kanilang mga petisyon.',
    attrs: [
      {label: 'Papel', value: 'Estudyanteng mapagduda'},
      {label: 'Katangian', value: 'Pesimista'},
      {label: 'Simbolo', value: 'Kawalan ng pag-asa'},
      {label: 'Pananaw', value: 'Walang mangyayaring reporma'}
    ],
    desc: 'Siya ang nagbibigay ng negatibong pananaw sa grupo. Para sa kanya, hindi kailanman papakinggan ng gobyerno ang mga hiling ng mga Pilipino.',
    quote: '"Subukan man natin, walang mangyayari. Iyan ang katotohanan."',
    clues: {
      easy: ['Estudyante na laging negatibo.', 'Duda sa lahat ng plano ng mga kaklase.', 'Laging malungkot ang pananaw.'],
      medium: ['Nagprotesta sa pamamagitan ng paghahain ng "piging sa pansiterya".', 'Kabaligtaran ng optimistang si Sandoval.', 'Isa sa mga nag-organisa ng huling hapunan ng mga estudyante.'],
      hard: ['Siya ang unang nakapuna na haharangin ng mga prayle ang akademya.', 'Ang kanyang karakter ay sumasalamin sa kawalan ng tiwala ng kabataan sa gobyerno.', 'Isang boses ng reyalidad na madalas hindi gustong pakinggan ng iba.']
    }
  }
];