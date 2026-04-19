// ═══════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════
const CHARS = [
  {
    id: 'simoun',
    imgSrc: './Images/simoun.webp',
    name: 'Simoun',
    alias: 'Crisostomo Ibarra',
    role: 'Pangunahing Tauhan',
    traitClass: 'trait-p',
    bg: 'linear-gradient(160deg,#1f0e02,#0d0600)',
    shortDesc: 'Isang mayamang alahero na sa katotohanan ay si Crisostomo Ibarra, nagbalik para maghasik ng himagsikan.',
    attrs: [{label:'Tunay na Pangalan',value:'Crisostomo Ibarra'},{label:'Katayuan',value:'Alahero / Rebolusyonaryo'},{label:'Simbolo',value:'Ganti at Ginto'},{label:'Wakas',value:'Namatay sa bahay ni Padre Florentino'}],
    desc: 'Nagbalik si Simoun sa Pilipinas bilang isang maimpluwensyang alahero. Sa likod ng yaman, nagtatago ang galit at paghahangad ng higanti para sa bayan.',
    quote: '"Ang mga luha ng dukha ay nagiging dugo ng mga makapangyarihan."',
    clues: {
      easy: ['Alahero na laging may suot na itim na salamin.','Nagtatago ng plano ng paghihiganti sa likod ng yaman.','Ginamit ang mga hiyas para pondohan ang himagsikan.'],
      medium: ['Dating estudyante na ipinatapon ng mga Kastila.','Nagplano ng pagpapasabog sa isang kasalan.','Ang tunay na pangalan ay Crisostomo Ibarra.'],
      hard: ['Uminom ng lason kaysa mahuli ng mga awtoridad.','Ipinagtapat ang lahat kay Padre Florentino bago mamatay.','Itinapon ang kanyang kayamanan sa dagat pagkatapos niyang pumanaw.']
    }
  },
  {
    id: 'basilio',
    imgSrc: './Images/basilio.webp',
    name: 'Basilio',
    alias: 'Anak ni Sisa',
    role: 'Pangunahing Tauhan',
    traitClass: 'trait-p',
    bg: 'linear-gradient(160deg,#060c1a,#030609)',
    shortDesc: 'Anak ni Sisa at isang mahusay na estudyante ng medisina na dumanas ng matinding hirap.',
    attrs: [{label:'Propesyon',value:'Estudyante ng Medisina'},{label:'Ina',value:'Sisa (Noli Me Tangere)'},{label:'Tagapayo',value:'Kapitan Tiago'},{label:'Wakas',value:'Nakulong at sumapi sa himagsikan'}],
    desc: 'Lumaking mahirap si Basilio at naulila nang mamatay si Sisa. Sa tulong ni Kapitan Tiago, naging estudyante siya ng medisina at naging saksi sa mga lihim ni Simoun.',
    quote: '"Ang aming mga pangarap ay hindi paunti-unti kundi sabay-sabay na nasisira."',
    clues: {
      easy: ['Masipag na estudyante ng medisina.','Anak ng isang tanyag na baliw sa Noli Me Tangere.','Kasintahan ni Juli.'],
      medium: ['Nakita niya si Simoun sa kagubatan habang naghuhukay.','Nadakip siya dahil sa pagbibintang na may kinalaman sa paskin.','Nakaligtas sa kamatayan sa San Diego noong bata pa.'],
      hard: ['Naglingkod kay Kapitan Tiago kapalit ng pag-aaral.','Nais sanang maging doktor para makatulong sa kapwa ngunit naging biktima ng kawalan ng katarungan.','Sa huli, sumama siya sa plano ni Simoun matapos mamatay si Juli.']
    }
  },
  {
    id: 'isagani',
    imgSrc: './Images/isagani.webp',
    name: 'Isagani',
    alias: 'Ang Makatang Kabataan',
    role: 'Kaibigan ni Basilio',
    traitClass: 'trait-p',
    traitLabel: 'Idealista',
    bg: 'linear-gradient(160deg,#1f0d03,#100500)',
    shortDesc: 'Isang makata at matalik na kaibigan ni Basilio — ang idealistang pamangkin ni Padre Florentino.',
    attrs: [{label:'Talento',value:'Makata at Orador'},{label:'Kasintahan',value:'Paulita Gomez'},{label:'Tito',value:'Padre Florentino'},{label:'Kabayanihan',value:'Iniligtas ang mga tao sa pagsabog'}],
    desc: 'Isang makabayang binata na puno ng pangarap. Itinapon niya ang lamparang may bomba sa ilog upang iligtas si Paulita Gomez, kahit pa ito ang naging hadlang sa himagsikan.',
    quote: '"Ang Pilipinas ay hindi maliit na bansa para sa maliit na pangarap."',
    clues: {
      easy: ['Batang makata na mahal na mahal ang bayan.','Kasintahan ni Paulita Gomez.','Matalik na kaibigan ni Basilio.'],
      medium: ['Itinapon ang lampara sa ilog para pigilan ang pagsabog.','Pamangkin ni Padre Florentino.','Nakipagtalo kay Padre Fernandez tungkol sa karapatan ng mga Pilipino.'],
      hard: ['Siya ang nagligtas sa mga prayle at opisyal sa piging ni Don Timoteo.','Iniwan siya ng kanyang kasintahan para sa isang mayamang lalaki.','Kumakatawan sa kabataang may matayog na pangarap para sa edukasyon.']
    }
  },
  {
    id: 'juli',
    imgSrc: './Images/juli.webp',
    name: 'Juli',
    alias: 'Juliana de Dios',
    role: 'Biktima ng Lipunan',
    traitClass: 'trait-l',
    traitLabel: 'Trahedya',
    bg: 'linear-gradient(160deg,#0d1420,#060810)',
    filter: 'biktima',
    shortDesc: 'Anak ni Kabesang Tales at kasintahan ni Basilio na nagpaalila para iligtas ang ama.',
    attrs: [{label:'Ama',value:'Kabesang Tales'},{label:'Kasintahan',value:'Basilio'},{label:'Simbolo',value:'Dalisay na Pilipina'},{label:'Wakas',value:'Tumalon mula sa bintana'}],
    desc: 'Isang maganda at madasaling dalaga na naging alila para matubos ang ama. Pinili niyang mamatay kaysa madungisan ang kanyang puri ng isang prayle.',
    quote: '"Lalong malaya ang namatay kaysa nabuhay nang walang karangalan."',
    clues: {
      easy: ['Madasalin at mahinhin na dalaga.','Anak ni Kabesang Tales.','Namatay sa loob ng kumbento.'],
      medium: ['Naging katulong ni Hermana Penchang para mapalaya ang ama.','Tumalon sa bintana para takasan si Padre Camorra.','Nawala ang kanyang lakas ng loob nang makulong si Basilio.'],
      hard: ['Isinanla ang kanyang mga hiyas maliban sa isang agnos na galing kay Basilio.','Nagbuwis ng buhay para sa kanyang karangalan at pamilya.','Simbolo ng kawalang-sala na nadudungisan ng kolonyalismo.']
    }
  },
  {
    id: 'tales',
    imgSrc: './Images/kabesangTales.webp',
    name: 'Kabesang Tales',
    alias: 'Matanglawin',
    role: 'Magsasaka',
    traitClass: 'trait-p',
    traitLabel: 'Biktima',
    bg: 'linear-gradient(160deg,#04180a,#020c05)',
    filter: 'biktima',
    shortDesc: 'Isang dating Cabeza de Barangay na naging tulisan matapos agawin ng mga prayle ang lupa.',
    attrs: [{label:'Anak',value:'Juli (Juliana)'},{label:'Alias',value:'Matanglawin'},{label:'Simbolo',value:'Inaping Magsasaka'},{label:'Wakas',value:'Naging pinuno ng mga tulisan'}],
    desc: 'Masipag na magsasaka na pinaghirapang linisin ang lupain, ngunit inagaw ng mga prayle. Dahil sa kawalan ng katarungan, naging kinatatakutang tulisan sa bundok.',
    quote: '"Ang lupang aking inani ng pawis ay hindi ipagkakaloob ko kahit kanino."',
    clues: {
      easy: ['Magsasaka na ninakawan ng lupa.','Ama ni Juli.','Naging kilabot na tulisan sa bundok.'],
      medium: ['May alyas na "Matanglawin".','Pinatay ang prayle at ang bagong may-ari ng kanyang lupa.','Dating Cabeza de Barangay na naging rebelde.'],
      hard: ['Ipinaglaban ang kanyang lupa sa korte hanggang sa maubos ang kanyang pera.','Binitbit ang baril, palakol, at kalaunan ay gulok sa pagbabantay ng bukid.','Kumakatawan sa galit ng mga magsasakang biktima ng sistemang encomienda.']
    }
  },
  {
    id: 'florentino',
    imgSrc: './Images/padreFlorentino.webp',
    name: 'Padre Florentino',
    alias: 'Ang Paring Pilipino',
    role: 'Marunong na Matanda',
    traitClass: 'trait-r',
    traitLabel: 'Relihiyoso',
    bg: 'linear-gradient(160deg,#100e00,#080600)',
    filter: 'relihiyoso',
    shortDesc: 'Isang marangal na paring Pilipino na nagpatuloy kay Simoun sa huling sandali nito.',
    attrs: [{label:'Propesyon',value:'Sekular na Pari'},{label:'Pamangkin',value:'Isagani'},{label:'Wakas',value:'Itinapon ang kayamanan ni Simoun'},{label:'Papel',value:'Nakikinig sa kumpisal ni Simoun'}],
    desc: 'Kinakatawan ang ideal na paring Pilipino. Kinupkop niya ang sugatang si Simoun at itinapon ang kayamanan nito sa dagat upang hindi na ito magamit sa kasamaan.',
    quote: '"Nasaan ang kabataang mag-aalay ng kanilang ginintuang sandali para sa bayan?"',
    clues: {
      easy: ['Mabait na paring Pilipino.','Nakita niya ang pagkamatay ni Simoun.','Tito ni Isagani.'],
      medium: ['Itinapon ang kaban ng kayamanan sa dagat.','Naniniwala na ang kalayaan ay dapat paghirapan at hindi idaan sa dahas.','Pinilit lamang magpari ng kanyang ina.'],
      hard: ['Piniling manirahan sa malapit sa dagat para sa katahimikan.','Nagbigay ng huling kumpisal sa naghihingalong si Simoun.','Simbolo ng moralidad at tunay na pananampalataya sa nobela.']
    }
  },
  {
    id: 'custodio',
    imgSrc: './Images/donCustodio.webp',
    name: 'Don Custodio',
    alias: 'Ang Palaging May Plano',
    role: 'Opisyal',
    traitClass: 'trait-s',
    traitLabel: 'Satiriko',
    bg: 'linear-gradient(160deg,#0d0800,#060400)',
    filter: 'satiriko',
    shortDesc: 'Isang mataas na opisyal na kilala sa dami ng plano ngunit wala namang naisasagawa.',
    attrs: [{label:'Katungkulan',value:'Opisyal ng Gobyerno'},{label:'Simbolo',value:'Mabagal na Burukrasya'},{label:'Alyas',value:'Buena Tinta'},{label:'Papel',value:'Humawak sa petisyon ng mga estudyante'}],
    desc: 'Simbolo ng mga opisyal na maraming sinasabi pero walang ginagawa. Ang petisyon ng mga estudyante para sa akademya ay nabaon sa kanyang mga walang katapusang plano.',
    quote: '"May plano ako para diyan... bukas na lang nating pag-usapan."',
    clues: {
      easy: ['Opisyal na mahilig gumawa ng planong hindi natutuloy.','Tinatawag na "Buena Tinta".','Mabagal magdesisyon.'],
      medium: ['Sa kanya napunta ang desisyon para sa Akademya ng Wikang Kastila.','Isang Kastilang nagmamarunong kahit walang sapat na kaalaman.','Pinakasalan ang isang mayamang babae para sa status.'],
      hard: ['Naniniwala siya na ang mga Pilipino ay hindi dapat matuto ng Kastila.','Ginamit ni Rizal para punahin ang palpak na gobyerno ng Espanya.','Isang satiriko na karakter na kumakatawan sa kolonyal na burukrasya.']
    }
  },
  {
    id: 'paulita',
    imgSrc: './Images/paulitaGomez.webp',
    name: 'Paulita Gomez',
    alias: 'Pamangkin ni Doña Victorina',
    role: 'Pag-ibig ni Isagani',
    traitClass: 'trait-l',
    traitLabel: 'Trahedya',
    bg: 'linear-gradient(160deg,#1a0516,#0d000a)',
    filter: 'biktima',
    shortDesc: 'Ang magandang pamangkin ni Doña Victorina na piniling pakasalan si Juanito Pelaez.',
    attrs: [{label:'Tiyahin',value:'Doña Victorina'},{label:'Unang Pag-ibig',value:'Isagani'},{label:'Asawa',value:'Juanito Pelaez'},{label:'Simbolo',value:'Praktikalidad kaysa Pag-ibig'}],
    desc: 'Pinili ang yaman at seguridad ni Juanito Pelaez kaysa sa pag-ibig ni Isagani. Kinakatawan niya ang mga Pilipinong nabulag ng materyal na bagay at katayuan sa lipunan.',
    quote: '"Ang puso ay sumusunod sa isip, at ang isip ay sumusunod sa kalagayan."',
    clues: {
      easy: ['Magandang dalaga na hinahangaan ng marami.','Pamangkin ni Doña Victorina.','Iniwan ang kasintahan para sa mayamang lalaki.'],
      medium: ['Ikinasal kay Juanito Pelaez sa huling bahagi ng kwento.','Naging dahilan kung bakit iniligtas ni Isagani ang mga tao sa pagsabog.','Isang sosyal na dalaga sa Maynila.'],
      hard: ['Iniwan si Isagani dahil ito ay naging rebelde at walang pera.','Simbolo ng tradisyonal na babaeng Pilipina na sunod-sunuran sa dikta ng lipunan.','Ang kanyang kasal ang naging tagpuan ng planong pagpapasabog ni Simoun.']
    }
  },
  {
    id: 'pecson',
    imgSrc: './Images/pecson.png',
    name: 'Pecson',
    alias: 'Ang Pesimista',
    role: 'Estudyante',
    traitClass: 'trait-s',
    traitLabel: 'Satiriko',
    bg: 'linear-gradient(160deg,#101010,#080808)',
    filter: 'satiriko',
    shortDesc: 'Isang estudyante na laging duda sa tagumpay ng kanilang mga petisyon.',
    attrs: [{label:'Papel',value:'Estudyanteng mapagduda'},{label:'Katangian',value:'Pesimista'},{label:'Simbolo',value:'Kawalan ng pag-asa'},{label:'Pananaw',value:'Walang mangyayaring reporma'}],
    desc: 'Siya ang nagbibigay ng negatibong pananaw sa grupo. Para sa kanya, hindi kailanman papakinggan ng gobyerno ang mga hiling ng mga Pilipino.',
    quote: '"Subukan man natin, walang mangyayari. Iyan ang katotohanan."',
    clues: {
      easy: ['Estudyante na laging negatibo.','Duda sa lahat ng plano ng mga kaklase.','Laging malungkot ang pananaw.'],
      medium: ['Nagprotesta sa pamamagitan ng paghahain ng "piging sa pansiterya".','Kabaligtaran ng optimistang si Sandoval.','Isa sa mga nag-organisa ng huling hapunan ng mga estudyante.'],
      hard: ['Siya ang unang nakapuna na haharangin ng mga prayle ang akademya.','Ang kanyang karakter ay sumasalamin sa kawalan ng tiwala ng kabataan sa gobyerno.','Isang boses ng reyalidad na madalas hindi gustong pakinggan ng iba.']
    }
  }  ,{
    id:'camorra', imgSrc:'./Images/padreCamorra.webp',
    name:'Padre Camorra', alias:'Ang Mahalay na Pari', role:'Antagonista',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#200000,#0d0000)', filter:'antagonista',
    shortDesc:'Isang mahalay at malupit na prayle na nagdulot ng malaking pagdurusa sa marami, kabilang si Juli.',
    attrs:[{label:'Orden',value:'Augustinianong Prayle'},{label:'Bisyo',value:'Kahalayan at kalupitan'},{label:'Simbolo',value:'Pang-aabuso ng Simbahan'},{label:'Biktima',value:'Si Juli at marami pa'}],
    desc:'Si Padre Camorra ay katawan ng bulok na prayle. Siya ang isa sa pangunahing dahilan ng malagim na kamatayan ni Juli, dahil siya ang humabol sa kanya habang nagsisilbi ito sa kanyang bahay.',
    quote:'"Ang batas ay para sa mahihirap lamang."',
    clues:{
      easy:['Malupit at makapangyarihang prayle.','Inabuso niya ang kanyang posisyon para saktan ang mga inosente.','Isang batang babae ang nagdusa dahil sa kanya.'],
      medium:['Hinabol niya si Juli habang nagsisilbi ito sa kanyang tirahan.','Ang kanyang kalupitan ang nagdulot sa pinaka-masakit na kamatayan sa nobela.','Kumakatawan sa pinakamasama sa mga prayle.'],
      hard:['Ang kanyang pagtugis kay Juli sa loob ng bahay ay nagpilit sa kanya na tumalon sa bintana.','Siya ay Augustinianong prayle sa isang probinsyal na bayan.','Ang kanyang karakter ay direktang paratang sa pang-aabuso ng mga prayle.']
    }
  },{
    id:'irene', imgSrc:'./Images/padreIrene.webp',
    name:'Padre Irene', alias:'Ang Mapagkunwaring Pari', role:'Panig ng Mga Prayle',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#12100a,#080704)', filter:'antagonista',
    shortDesc:'Isang pari na may malapit na relasyon kay Kapitan Tiago at nagsilbing tagapagpatupad ng kanyang habilin.',
    attrs:[{label:'Papel',value:'Kumpidensyal ni Kapitan Tiago'},{label:'Gawa',value:'Tagapagpatupad ng habilin'},{label:'Simbolo',value:'Mapagpakunwaring Klero'},{label:'Katangian',value:'Maamo sa labas, tuso sa loob'}],
    desc:'Mukhang magiliw at matulungin si Padre Irene ngunit nagsisilbi sa interes ng mga prayle. Pinalapit niya ang sarili kay Kapitan Tiago at naging tagapagpatupad ng kanyang habilin.',
    quote:'"Ang mabuting ugali ay sapat na maskara para sa lahat."',
    clues:{
      easy:['Pari na malapit sa isang mayamang patron.','Mukhang mabait sa ibabaw.','Pinangalagaan ang mga usapin ng isang naghihingalong mayaman.'],
      medium:['Naging tagapagpatupad ng habilin ni Kapitan Tiago.','Nagpakita ng simpatya sa mga estudyante ngunit naglingkod sa mga prayle.','Madaldal at mahusay sa pulitika.'],
      hard:['Ginamit ang pagiging malapit kay Kapitan Tiago para sa agenda ng Simbahan.','Kumakatawan sa klero na gumagamit ng tiwala bilang sandata.','Nagpakita ng pagkakaisa sa estudyante ngunit walang tunay na ginawa.']
    }
  },{
    id:'salvi', imgSrc:'./Images/padreSalvi.webp',
    name:'Padre Salvi', alias:'Ang Mapanlinlang na Pari', role:'Antagonista',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#1f0000,#0d0000)', filter:'antagonista',
    shortDesc:'Dating kura paroko ng San Diego, ngayon makapangyarihang tao sa Maynila na may madilim na nakaraan kay Maria Clara.',
    attrs:[{label:'Orden',value:'Pransiskanong Prayle'},{label:'Nakilala Sa',value:'Noli Me Tangere'},{label:'Simbolo',value:'Bulok na Kapangyarihan'},{label:'Lihim',value:'Obsesyon kay Maria Clara'}],
    desc:'Bumalik si Padre Salvi sa ikalawang nobela bilang mas makapangyarihang tao. Patuloy niyang ginagamit ang relihiyon para kontrolin ang mga tao at pangalagaan ang sariling interes.',
    quote:'"Ang Diyos ay nasa aming panig — ang batas ay nasa aming mga kamay."',
    clues:{
      easy:['Makapangyarihang prayle na may malaking impluwensya.','Mapanlinlang at gumagamit ng relihiyon para sa sarili.','Kontrabida mula sa unang nobela.'],
      medium:['Inabuso ang katungkulan bilang pari para manipulahin.','Isa sa mga dahilan ng galit ni Ibarra sa Noli.','Lumago ang kapangyarihan sa ikalawang nobela.'],
      hard:['Sa Noli, nagtaglay ng maruming obsesyon kay Maria Clara.','Simbolo ng kabulukan ng mga prayle sa ilalim ng Espanya.','Pransiskanong prayle na inuna ang sariling kapakanan.']
    }
  },{
    id:'sibyla', imgSrc:'./Images/padreSibyla.webp',
    name:'Padre Sibyla', alias:'Bise-Rektor ng Unibersidad', role:'Antagonista',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#0a0a18,#050510)', filter:'antagonista',
    shortDesc:'Dominikanong prayle at bise-rektor ng unibersidad na kumakatawan sa interes ng mga prayle laban sa mga estudyante.',
    attrs:[{label:'Orden',value:'Dominikanong Prayle'},{label:'Posisyon',value:'Bise-Rektor'},{label:'Simbolo',value:'Pang-aapi ng Institusyon'},{label:'Papel',value:'Tinulan ang Akademya'}],
    desc:'Tuso at maingat na Dominikanong prayle na gumagamit ng posisyon bilang bise-rektor para hadangan ang petisyon ng mga estudyante para sa Akademya ng Wikang Kastila.',
    quote:'"Ang bago ay kaaway ng naitatag."',
    clues:{
      easy:['Mataas na rangong prayle sa unibersidad.','Tinulan ang mga kahilingan ng mga estudyante.','Maingat at malamig.'],
      medium:['Dominikanong bise-rektor na nagharang sa petisyon para sa akademya.','Nagdebate laban sa adhikain ng mga estudyante.','Kumakatawan sa hawak ng Simbahan sa edukasyon.'],
      hard:['Siya at si Padre Fernandez ay dalawang magkasalungat na mukha ng Dominikano.','Ginamit ang pagpapaliban para patayin ang pag-asa ng mga estudyante.','Pumupuna sa kontrol ng Simbahan sa edukasyong Pilipino.']
    }
  },{
    id:'fernandez', imgSrc:'./Images/padreFernandez.webp',
    name:'Padre Fernandez', alias:'Ang Bukas-Isipang Pari', role:'Katamtamang Tauhan',
    traitClass:'trait-r', traitLabel:'Relihiyoso',
    bg:'linear-gradient(160deg,#0e1408,#070a04)', filter:'relihiyoso',
    shortDesc:'Dominikanong prayle na kilala sa pagiging bukas-isip at handang makipag-usap nang tapat sa mga estudyante.',
    attrs:[{label:'Orden',value:'Dominikanong Prayle'},{label:'Katangian',value:'Bukas-isip'},{label:'Simbolo',value:'Pag-asa sa Sistema'},{label:'Papel',value:'Nakipagtalo kay Isagani'}],
    desc:'Namumukod-tangi si Padre Fernandez kumpara sa karamihan ng mga prayle. Nakikipag-ugnayan siya sa mga estudyante nang may katapatan at inaamin ang mga pagkukulang ng sistema.',
    quote:'"Ang katotohanan ay hindi natatakot sa tanong."',
    clues:{
      easy:['Pari na talagang nakikinig sa mga estudyante.','Mas bukas-isip kaysa karamihan ng mga prayle.','Nakipag-ugnayan nang tapat.'],
      medium:['Nakipagtalo nang makabuluhan sa isang batang makata.','Inaamin na ang kolonyal na sistema ay may kapintasan.','Dominikanong prayle, kakaiba sa kanyang orden.'],
      hard:['Ang debate niya kay Isagani ay pinakapilosopikal na bahagi ng nobela.','Kumakatawan sa posibilidad ng reporma mula sa loob.','Nagkakasalungat sa tigas ng pag-iisip ni Padre Sibyla.']
    }
  },{
    id:'victorina', imgSrc:'./Images/donaVictorina.webp',
    name:'Doña Victorina', alias:'Ang Nagpapanggap na Espanyola', role:'Tauhang Pang-aliw',
    traitClass:'trait-s', traitLabel:'Satiriko',
    bg:'linear-gradient(160deg,#180010,#0d0008)', filter:'satiriko',
    shortDesc:'Pilipinang babae na nagpapanggap na Espanyola at labis na nahihibang sa panlipunang katayuan.',
    attrs:[{label:'Nasyonalidad',value:'Pilipina (nagpapanggap)'},{label:'Asawa',value:'Don Tiburcio'},{label:'Simbolo',value:'Mentalidad ng Kolonyal'},{label:'Obsesyon',value:'Prestihiyo ng Espanya'}],
    desc:'Ang komedya ngunit matalim na satirika ni Rizal sa mga Pilipinong nagdadamban at gumagaya sa kulturang Espanyol.',
    quote:'"Ako ay Espanyola — huwag akong ituring na katulad ninyong mga Indio."',
    clues:{
      easy:['Nagpapanggap na Espanyola kahit Pilipino.','Nahihibang sa pagmumukhang mayaman.','May-asawa sa isang nagpapanggap na doktor.'],
      medium:['Tiyahin ni Paulita Gomez.','Nagsasalita sa pekeng diin ng Kastila.','Una siyang lumabas sa Noli Me Tangere.'],
      hard:['Pinakamatulis na satirika ni Rizal sa mentalidad ng kolonyal.','Ang asawa ay walang tunay na medikal na titulo.','Kumakatawan sa mga nagnanais umangat sa pamamagitan ng paghamak sa sariling lahi.']
    }
  },{
    id:'tiburcio', imgSrc:'./Images/donTiburcio.webp',
    name:'Don Tiburcio', alias:'Ang Pekeng Doktor', role:'Asawa ni Doña Victorina',
    traitClass:'trait-s', traitLabel:'Satiriko',
    bg:'linear-gradient(160deg,#100800,#060400)', filter:'satiriko',
    shortDesc:'Ang pinahihirapang pekeng doktor na asawa ni Doña Victorina.',
    attrs:[{label:'Asawa',value:'Doña Victorina'},{label:'Titulo',value:'"Doktor" (peke)'},{label:'Simbolo',value:'Asawang pinahihirapan'},{label:'Katangian',value:'Kawawa at sunud-sunuran'}],
    desc:'Ang matagal na nagtitiis na asawa ni Doña Victorina. Wala siyang tunay na kredensyal sa medisina — tinatawag lamang siya ng kanyang asawang Doktor.',
    quote:'"Oo, mahal ko... kung ano ang gusto mo."',
    clues:{
      easy:['Asawang pinagbibigyan ng maasikasong asawa.','Tinatawag na doktor ngunit hindi tunay.','Lumabas sa magkabilang nobela ni Rizal.'],
      medium:['Walang tunay na titulo ng medisina.','Asawa ni Doña Victorina.','Tahimik na nagdurusa at pang-aliw.'],
      hard:['Kumakatawan sa lalaking pinababa ng kulturang kolonyal.','Ang pekeng doktorado ay tampak ni Rizal sa maling kredensyal.','Nagpapatuloy ng masamang kasal sa El Fili.']
    }
  },{
    id:'juanito', imgSrc:'./Images/juanitoPelaez.png',
    name:'Juanito Pelaez', alias:'Ang Ambisyosong Estudyante', role:'Karibal ni Isagani',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#100d00,#070500)', filter:'antagonista',
    shortDesc:'Mayaman at tusong estudyante na sa huli ay pinakasalan si Paulita Gomez.',
    attrs:[{label:'Ama',value:'Don Timoteo Pelaez'},{label:'Tagumpay',value:'Pinakasalan si Paulita'},{label:'Simbolo',value:'Kayamanan kaysa Pag-ibig'},{label:'Katangian',value:'Tuso at oportunista'}],
    desc:'Si Juanito Pelaez ay anak ng mayamang Don Timoteo at karibal ni Isagani para sa puso ni Paulita. Nanalo siya hindi sa pamamagitan ng pagmamahal kundi sa pamamagitan ng pera.',
    quote:'"Sa mundong ito, ang matalino ay iyong marunong pumili."',
    clues:{
      easy:['Mayamang estudyante na nakuha ang babae.','Anak ng nagbigay ng malaking handaan.','Tinalo ang isang makata para sa babae.'],
      medium:['Pinakasalan si Paulita Gomez.','Ang ama ang nagbigay ng handaan kung saan nagplano si Simoun ng pagsabog.','Nanalo sa pamamagitan ng kayamanan.'],
      hard:['Ang kasal kay Paulita ay simbolo ng pragmatismo na nanaig sa idealismo.','Ang ama ay gumastos para sa mga Espanyol na opisyal.','Kumakatawan sa mataas na uri na nakikiisa sa pananakop.']
    }
  },{
    id:'macaraig', imgSrc:'./Images/macaraig.png',
    name:'Macaraig', alias:'Lider ng mga Estudyante', role:'Estudyante',
    traitClass:'trait-p',
    shortDesc:'Mayamang estudyante na nanguna sa kilusan para maitatag ang Akademya ng Wikang Kastila.',
    attrs:[{label:'Papel',value:'Lider ng mga estudyante'},{label:'Kampanya',value:'Akademya ng Wika'},{label:'Simbolo',value:'Kabataang Ilustrado'},{label:'Katangian',value:'Mayaman at organisado'}],
    desc:'Si Macaraig ay ang pinakamayaman at pinaka-makapangyarihan sa grupo ng mga estudyante. Nanguna siya sa pagtulak para sa Akademya ng Wikang Kastila.',
    quote:'"Ang kaalaman sa wika ng mananakop ay sandata rin natin."',
    clues:{
      easy:['Mayamang estudyante na lider sa kapwa.','Nag-organisa ng petisyon.','Mapangarap at may koneksyon.'],
      medium:['Nanguna sa kampanya para sa akademya ng Kastila.','Ang kayamanan ay nagbigay ng access sa mga opisyal.','Nakipagtulungan sa ibang ilustrado.'],
      hard:['Ang petisyon ay nakarating kay Don Custodio na pinabayaan.','Kumakatawan sa ilustrado na naniniwala sa reporma sa loob ng sistema.','Nagpapakita ng kabiguan ng pribilehiyadong kabataan sa kolonyal.']
    }
  },{
    id:'quiroga', imgSrc:'./Images/quiroga.webp',
    name:'Quiroga', alias:'Ang Tsino na Negosyante', role:'Negosyante',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#120000,#080000)', filter:'antagonista',
    shortDesc:'Tsino na negosyante na nagnanais maging konsul at tumulong kay Simoun sa pagtatago ng mga sandata.',
    attrs:[{label:'Nasyonalidad',value:'Tsino'},{label:'Pangarap',value:'Konsul ng Tsina'},{label:'Krimen',value:'Pagtatago ng sandata'},{label:'Simbolo',value:'Pakikiisa para sa sarili'}],
    desc:'Si Quiroga ay Tsino na mangangalakal sa Maynila na nangangarap maging konsul. Nakipagkasundo kay Simoun na itago ang mga sandata sa loob ng kasangkapan.',
    quote:'"Ang negosyo ay negosyo — walang politika."',
    clues:{
      easy:['Tsino na negosyante sa Maynila.','Nangangarap ng opisyal na titulo.','Nagtrabaho kasama ang misteriyosong mangangalakal.'],
      medium:['Tumulong sa pagtatago ng sandata sa kasangkapan.','Nais maging konsul ng Tsina.','Ang kasunduan ay pinapalakad ng sariling interes.'],
      hard:['Itinago ang sandata ni Simoun sa kasangkapan na inihatid sa iba-ibang lugar.','Pumupuna sa mangangalakal na nakikiisa sa kolonyal na kapangyarihan.','Kumakatawan kung paano ginagawa ng ambisyon ang tao na kasabwat.']
    }
  },{
    id:'placido', imgSrc:'./Images/placidoPenitente.webp',
    name:'Placido Penitente', alias:'Ang Nagsawang Estudyante', role:'Estudyante',
    traitClass:'trait-p',
    bg:'linear-gradient(160deg,#0a0016,#050008)',
    shortDesc:'Estudyante mula Batangas na nabigo sa masamang trato sa unibersidad at umalis sa pag-aaral.',
    attrs:[{label:'Pinagmulan',value:'Batangas'},{label:'Katayuan',value:'Umalis sa unibersidad'},{label:'Simbolo',value:'Nabigong Kabataan'},{label:'Karanasan',value:'Pinahiya ng prayle-propesor'}],
    desc:'Nagsimula si Placido Penitente bilang estudyanteng may pangarap ngunit ang kahihiyan sa kamay ng prayle-propesor sa silid-aralan ay nagpalayo sa kanya sa edukasyon.',
    quote:'"Para saan pa ang pag-aaral kung ginagamit laban sa amin?"',
    clues:{
      easy:['Estudyanteng napagod sa masamang trato.','Nagmula sa lalawigan sa timog ng Maynila.','Tumigil na sa pagpasok.'],
      medium:['Pinahiya ng prayle-propesor sa harap ng klase.','Umalis matapos mabigo sa unibersidad.','Mula sa Batangas.'],
      hard:['Ang eksena sa silid-aralan ay sentro ng kanyang kahihiyan.','Ang pag-aalis ay kumakatawan sa pagkawasak ng loob ng kabataan.','Ang "Penitente" ay ironiko — siya ang gumagawa ng pagsisisi para sa nagkakasalang sistema.']
    }
  },{
    id:'sandoval', imgSrc:'./Images/sandoval.png',
    name:'Sandoval', alias:'Ang Espanyol na Kaibigan', role:'Estudyante',
    shortDesc:'Espanyol na estudyante na nakiisa sa adhikain ng mga Pilipinong estudyante.',
    attrs:[{label:'Nasyonalidad',value:'Espanyol'},{label:'Papel',value:'Kaalyado ng mga estudyante'},{label:'Simbolo',value:'Bukas-isipang Mananakop'},{label:'Katangian',value:'Makatarungan'}],
    desc:'Si Sandoval ay bihirang Espanyol na estudyante na bukas na nakikiisa sa mga Pilipino. Nagtatalo siya para sa kanila at hinahamon ang kalikuan ng kolonyal na sistema.',
    quote:'"Hindi lahat ng Espanyol ay bulag sa katotohanan."',
    clues:{
      easy:['Espanyol na estudyanteng naging kaibigan ng mga Pilipino.','Ipinagtanggol ang mga Pilipinong kaklase.','Naniniwala sa katarungan anuman ang lahi.'],
      medium:['Kumampi sa Pilipino sa mga debate tungkol sa akademya.','Isa sa iilang Espanyol na ipinapakita nang positibo.','Ang pagkakaibigan sa ilustrado ay tunay.'],
      hard:['Nagpapahiwatig na hindi lahat ng Espanyol ay tagaapi — ang sistema ang problema.','Kaalyado sa petisyon kahit bahagi ng naghahari.','Nagbigay ng dimensyong pang-lahi sa adhikain.']
    }
  },{
    id:'tadeo', imgSrc:'./Images/tadeo.png',
    name:'Tadeo', alias:'Ang Tamad na Estudyante', role:'Estudyante',
    traitClass:'trait-s', traitLabel:'Satiriko',
    bg:'linear-gradient(160deg,#0a080a,#050305)', filter:'satiriko',
    shortDesc:'Estudyante na madalas lumiban at palaging nananalanging may suspensyon ng pasukan.',
    attrs:[{label:'Katangian',value:'Tamad, lumaliban'},{label:'Pangarap',value:'Walang pasukan'},{label:'Simbolo',value:'Kabataang inabuso ng sistema'},{label:'Papel',value:'Pang-aliw'}],
    desc:'Si Tadeo ay nakakatawang walang-ambisyon sa grupo. Palagi siyang umaasang masuspinde ang paaralan — isang komentaryo sa sistema ng paaralan na napaka-aapi.',
    quote:'"Sana walang pasok bukas... at makalawa... at sa Biyernes..."',
    clues:{
      easy:['Estudyanteng mahilig lumiban.','Palaging umaasang walang pasok.','Nakakatawa at walang alalahanin.'],
      medium:['Regular na lumaliban at iniiwasan ang pag-aaral.','Kumakatawan sa sumusukong kabataan.','Nagbibigay ng aliwan sa grupo.'],
      hard:['Ang katamaran ay madilim na biro — mas gusto ng estudyante ang kawalan kaysa kolonyalistang paaralan.','Bahagi ng grupong nagtalakay sa petisyon kahit walang interes.','Tumutuligsa sa pagkawalang-ambisyon na pinalaki ng pananakop.']
    }
  },{
    id:'pasta', imgSrc:'./Images/gPasta.png',
    name:'G. Pasta', alias:'Ang Abogadong Duwag', role:'Abogado',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#0d0a00,#070500)', filter:'antagonista',
    shortDesc:'Abogado na tumanggi tumulong sa mga estudyante para hindi mapanganib ang katayuan sa mga prayle.',
    attrs:[{label:'Propesyon',value:'Abogado'},{label:'Pagtanggi',value:'Hindi tumulong sa akademya'},{label:'Simbolo',value:'Kasabwat na Ilustrado'},{label:'Katangian',value:'Duwag na nagpapanatili ng sarili'}],
    desc:'Matagumpay na Pilipinong abogado na tumanggi tumulong sa mga estudyante. Labis na komportable sa katayuan at natatakot mawala ang pabor ng mga prayle.',
    quote:'"Hindi ko maaaring ipanganib ang kinabukasan para sa imposible."',
    clues:{
      easy:['Abogado na pinuntahan ng mga estudyante.','Tumanggi siyang makisali.','Natatakot mawala ang komportableng buhay.'],
      medium:['Tinanggihan para maprotektahan ang relasyon sa mga prayle.','Nagpapakita kung paano pinili ng matagumpay na Pilipino ang kaligtasan.','Propesyonal na inuna ang sariling interes.'],
      hard:['Isa sa mga kritisismo sa ilustradong uri — edukadong Pilipinong tinalikuran ang bayan.','Mayroon ng kakayahan ngunit pinili ang katahimikan.','Ang pakikiisa sa pang-aapi ay isang uri rin ng pang-aapi.']
    }
  },{
    id:'tandangselo', imgSrc:'./Images/tandangSelo.png',
    name:'Tandang Selo', alias:'Ama ni Kabesang Tales', role:'Matandang Tauhan',
    traitClass:'trait-l', traitLabel:'Trahedya',
    bg:'linear-gradient(160deg,#0f0a00,#070500)', filter:'biktima',
    shortDesc:'Ama ni Kabesang Tales na nagpalaki kay Basilio at nasaksi sa pagkawasak ng pamilya.',
    attrs:[{label:'Anak',value:'Kabesang Tales'},{label:'Ginawa',value:'Nagpalaki kay Basilio'},{label:'Simbolo',value:'Tahimik na Pagdurusa'},{label:'Katapusan',value:'Namatay sa kalungkutan'}],
    desc:'Ang tahimik na lolo na nagpalaki kay Basilio nang wala na itong ibang matakbuhan. Pinanood niyang gumuho ang kanyang pamilya at sa huli ay tumigil na siya sa pagsasalita.',
    quote:'"Walang salitang sapat para sa luha na ito."',
    clues:{
      easy:['Matandang lalaki na nag-aruga ng batang ulila.','Ama ng magsasakang nawalan ng lupa.','Mapagmahal at tahimik.'],
      medium:['Pinalaki si Basilio nang wala na itong iba.','Pinanood ang buong pamilya na gumuho.','Sa huli ay tumigil sa pagsasalita.'],
      hard:['Matapos ang kamatayan ni Juli at pagkawala ni Tales ay nawalan ng kagustuhang mabuhay.','Kumakatawan sa mga tahimik na matatanda sa kolonyal na pamamahala.','Isa sa pinaka-malungkot na tauhan sa nobela.']
    }
  },{
    id:'benzayb', imgSrc:'./Images/benZayb.webp',
    name:'Ben Zayb', alias:'Ang Mamamahayag ng Kolonyal', role:'Mamamahayag',
    traitClass:'trait-a', traitLabel:'Antagonista',
    bg:'linear-gradient(160deg,#0a0a00,#050500)', filter:'antagonista',
    shortDesc:'Espanyol na mamamahayag na nagsulat ng mapanig na balita para sa kolonyal na pamahalaan.',
    attrs:[{label:'Propesyon',value:'Mamamahayag'},{label:'Kinikilingan',value:'Pro-kolonyal'},{label:'Simbolo',value:'Propaganda ng Midya'},{label:'Pangalan',value:'Anagram ng "Isabelo"'}],
    desc:'Ang boses ng kolonyal na midya. Ang mga artikulo ay puno ng propaganda na pumupuri sa Espanya. Ginamit ni Rizal para punahin ang paggamit ng pamamahayag laban sa mga Pilipino.',
    quote:'"Ang pagpindot ng pluma ay gawa ng mga bayani."',
    clues:{
      easy:['Nagsusulat ng artikulo para sa pahayagan sa Maynila.','Palagi sa panig ng kolonyal na pamahalaan.','Mapanig laban sa mga Pilipino.'],
      medium:['Nagsulat ng mapagpaburing kwento para sa mga Espanyol.','Ang sagisag-panulat ay anagram ng isang tunay na tao.','Kumakatawan sa bulok na pamamahayag.'],
      hard:['Batay sa tunay na Espanyol na mamamahayag na karibal ni Isabelo de los Reyes.','Niluwalhati ang kolonyal na sistema at itinuturing na mababa ang kultura.','Ginagamit ng midya bilang kasangkapan ng pang-aapi.']
    }
  }
];
