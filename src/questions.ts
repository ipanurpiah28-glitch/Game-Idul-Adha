import { Question } from './types';

export const QUESTIONS: Question[] = [
  // ==================== LEVEL 1 (GRADES 1 SD) ====================
  {
    id: 'l1-q1',
    level: 1,
    type: 'choice',
    questionText: 'Hewan apa saja yang boleh dipakai untuk kurban di Indonesia?',
    options: ['Kambing / Domba dan Sapi', 'Kucing, Kelinci, dan Ayam', 'Burung, Bebek, dan Ikan'],
    correctAnswer: 0,
    illustration: 'cow',
    explanation: 'Hewan yang boleh dikurbankan adalah hewan ternak (An\'am) seperti sapi, kerbau, kambing, domba, dan unta. Ayam atau kelinci tidak boleh digunakan untuk kurban.'
  },
  {
    id: 'l1-q2',
    level: 1,
    type: 'boolean',
    questionText: 'Hewan kurban harus dalam keadaan sehat dan tidak cacat (seperti buta atau pincang). Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    illustration: 'sapi_sehat',
    explanation: 'Benar sekali! Hewan kurban harus sehat, lincah, gemuk, dan matanya sehat. Tidak boleh kurban dengan hewan yang sakit atau cacat.'
  },
  {
    id: 'l1-q3',
    level: 1,
    type: 'guess-image',
    questionText: 'Hewan berkaki empat yang suaranya "Mooo" dan biasa dikurbankan di masjid adalah...',
    options: ['Sapi', 'Ayam', 'Kucing'],
    correctAnswer: 0,
    illustration: 'cow',
    explanation: 'Sapi memiliki suara "Mooo" dan merupakan salah satu hewan kurban paling utama di Indonesia.'
  },
  {
    id: 'l1-q4',
    level: 1,
    type: 'choice',
    questionText: 'Berapakah jumlah kaki hewan kambing yang sehat untuk kurban?',
    options: ['2 Kaki', '3 Kaki', '4 Kaki'],
    correctAnswer: 2,
    illustration: 'goat',
    explanation: 'Kambing yang sehat memiliki 4 kaki yang kokoh untuk berdiri dan berjalan.'
  },
  {
    id: 'l1-q5',
    level: 1,
    type: 'choice',
    questionText: 'Siapakah nama anak Nabi Ibrahim yang terkenal sangat patuh dan taat kepada perintah Allah?',
    options: ['Nabi Ismail a.s.', 'Nabi Yusuf a.s.', 'Nabi Musa a.s.'],
    correctAnswer: 0,
    illustration: 'ibrahim_ismail',
    explanation: 'Nabi Ismail a.s. adalah putra Nabi Ibrahim a.s. yang sangat berbakti dan ikhlas mengikuti perintah Allah.'
  },
  {
    id: 'l1-q6',
    level: 1,
    type: 'boolean',
    questionText: 'Hari Raya Idul Adha disebut juga sebagai Hari Raya Kurban atau Lebaran Haji. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    illustration: 'masjid',
    explanation: 'Benar! Di hari raya ini, umat Muslim menyembelih kurban dan sebagian umat Muslim lainnya sedang menunaikan ibadah haji di Mekkah.'
  },
  {
    id: 'l1-q7',
    level: 1,
    type: 'voice',
    questionText: 'Dengarkan suara hewan ini. Hewan apakah ini? (Klik tombol "Putar Suara")',
    options: ['Kambing atau Domba', 'Sapi', 'Unta'],
    correctAnswer: 0,
    soundType: 'goat',
    illustration: 'goat',
    explanation: 'Suara mengembik "Baaa" adalah suara khas domba atau kambing.'
  },
  {
    id: 'l1-q8',
    level: 1,
    type: 'choice',
    questionText: 'Ketika mendapat pembagian daging kurban, adab ucapan yang baik adalah...',
    options: ['Mengucapkan "Alhamdulillah" dan berterima kasih', 'Mengeluh karena merasa kurang banyak', 'Diam saja tanpa peduli'],
    correctAnswer: 0,
    explanation: 'Kita harus bersyukur kepada Allah dengan mengucapkan "Alhamdulillah" dan berterima kasih kepada panitia yang mengantarkan daging.'
  },
  {
    id: 'l1-q9',
    level: 1,
    type: 'boolean',
    questionText: 'Ibadah kurban mengajarkan kita untuk kikir dan menyimpan makanan sendiri. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 1,
    explanation: 'Salah. Ibadah kurban mengajarkan kita sifat ikhlas, murah hati, dan senang berbagi makanan dengan saudara yang membutuhkan.'
  },
  {
    id: 'l1-q10',
    level: 1,
    type: 'choice',
    questionText: 'Sebelum menyembelih hewan kurban, kalimat thayyibah apa yang wajib dibaca?',
    options: ['Bismillah (Menyebut nama Allah)', 'Alhamdulillah (Segala puji bagi Allah)', 'Subhanallah (Maha Suci Allah)'],
    correctAnswer: 0,
    illustration: 'masjid',
    explanation: 'Menyebut nama Allah (membaca Bismillah) adalah syarat wajib penyembelihan agar daging hewan tersebut halal dimakan.'
  },

  // ==================== LEVEL 2 (GRADES 2 SD) ====================
  {
    id: 'l2-q1',
    level: 2,
    type: 'choice',
    questionText: 'Hari Raya Idul Adha diperingati setiap tanggal berapa di dalam bulan Zulhijah?',
    options: ['Tanggal 1 Syawal', 'Tanggal 10 Zulhijah', 'Tanggal 12 Rabiul Awal'],
    correctAnswer: 1,
    illustration: 'kakbah',
    explanation: 'Idul Adha jatuh pada tanggal 10 Zulhijah, sehari setelah para jamaah haji melaksanakan wukuf di Arafah.'
  },
  {
    id: 'l2-q2',
    level: 2,
    type: 'choice',
    questionText: 'Allah SWT memerintahkan Nabi Ibrahim untuk menyembelih putranya melalui apa?',
    options: ['Mimpi yang benar (Ru\'ya Sadiqah)', 'Surat tertulis', 'Suara dari langit tanpa perantara'],
    correctAnswer: 0,
    illustration: 'ibrahim_ismail',
    explanation: 'Allah memberikan wahyu kepada Nabi Ibrahim a.s. melalui mimpi yang terjadi berulang kali, yang merupakan tanda kebenaran wahyu.'
  },
  {
    id: 'l2-q3',
    level: 2,
    type: 'boolean',
    questionText: 'Nabi Ibrahim langsung marah dan tidak mau peduli saat bermimpi diperintah menyembelih Nabi Ismail. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 1,
    illustration: 'ibrahim_ismail',
    explanation: 'Salah. Nabi Ibrahim sangat sedih namun sabar, dan beliau mendiskusikannya dengan bermusyawarah secara lembut kepada putranya, Nabi Ismail.'
  },
  {
    id: 'l2-q4',
    level: 2,
    type: 'guess-image',
    questionText: 'Hewan berpunuk di punggung yang biasa digunakan kurban di tanah Arab adalah...',
    options: ['Unta', 'Kuda Gurun', 'Gajah Sumatra'],
    correctAnswer: 0,
    illustration: 'camel',
    explanation: 'Unta adalah hewan khas gurun pasir dan merupakan hewan kurban yang sangat mulia bagi masyarakat Arab.'
  },
  {
    id: 'l2-q5',
    level: 2,
    type: 'choice',
    questionText: 'Sikap yang benar dan santun saat melihat penyembelihan hewan kurban di sekitar kita adalah...',
    options: ['Berdoa, tertib, dan tidak mengganggu jalannya penyembelihan', 'Berteriak ketakutan dan menyoraki hewan kurban', 'Melempar batu ke arah hewan agar bergerak cepat'],
    correctAnswer: 0,
    explanation: 'Kita harus tertib, tenang, mendoakan keberkahan kurban, serta tidak membuat kegaduhan yang membuat hewan tersebut stres.'
  },
  {
    id: 'l2-q6',
    level: 2,
    type: 'boolean',
    questionText: 'Daging kurban boleh dimakan oleh orang yang berkurban (shohibul qurban) itu sendiri. Benar atau salah?',
    options: ['Benar (Maksimal sepertiga bagian)', 'Salah (Sama sekali dilarang makan)'],
    correctAnswer: 0,
    explanation: 'Benar! Orang yang berkurban (jika kurban sunnah) boleh mengonsumsi daging kurbannya sendiri, disunnahkan mengambil maksimal sepertiga bagian.'
  },
  {
    id: 'l2-q7',
    level: 2,
    type: 'voice',
    questionText: 'Dengarkan suara melenguh hewan berikut ini. Hewan apakah ini?',
    options: ['Hewan Sapi', 'Hewan Kambing', 'Hewan Unta'],
    correctAnswer: 0,
    soundType: 'cow',
    illustration: 'cow',
    explanation: 'Suara melenguh rendah dan berat "Mooo" adalah suara sapi kurban.'
  },
  {
    id: 'l2-q8',
    level: 2,
    type: 'choice',
    questionText: 'Nabi Ismail rela disembelih karena ia yakin bahwa hal tersebut merupakan...',
    options: ['Keinginan pribadinya', 'Perintah mulia dari Allah SWT', 'Iseng belaka dari ayahnya'],
    correctAnswer: 1,
    illustration: 'ibrahim_ismail',
    explanation: 'Nabi Ismail berkata: "Wahai ayahku, kerjakanlah apa yang diperintahkan kepadamu; insya Allah engkau akan mendapatiku termasuk orang-orang yang sabar."'
  },
  {
    id: 'l2-q9',
    level: 2,
    type: 'choice',
    questionText: 'Nilai utama kurban adalah "Ikhlas". Apakah arti dari sifat ikhlas?',
    options: ['Melakukan ibadah murni mengharap ridha Allah semata', 'Berharap agar mendapat pujian dari guru dan tetangga', 'Agar dipandang kaya raya karena membeli sapi besar'],
    correctAnswer: 0,
    explanation: 'Ikhlas artinya bersih hati dalam beribadah, hanya berharap ridha Allah SWT, bukan karena pujian manusia (riya\').'
  },
  {
    id: 'l2-q10',
    level: 2,
    type: 'order',
    questionText: 'Urutkan kisah kurban Nabi Ibrahim dan Nabi Ismail agar menjadi urutan cerita yang benar!',
    storyItems: [
      'Nabi Ibrahim bermimpi diperintah Allah menyembelih putranya.',
      'Nabi Ibrahim berdiskusi dengan Nabi Ismail tentang mimpi tersebut.',
      'Nabi Ismail menyetujui perintah Allah dengan penuh keikhlasan.',
      'Allah mengganti Nabi Ismail dengan seekor Kibas/Domba dari surga.'
    ],
    correctAnswer: [0, 1, 2, 3],
    illustration: 'ibrahim_ismail',
    explanation: 'Urutan kisah: Mimpi perintah -> Musyawarah ayah dan anak -> Kepatuhan anak -> Pertolongan Allah mengganti dengan domba.'
  },

  // ==================== LEVEL 3 (GRADES 3 SD) ====================
  {
    id: 'l3-q1',
    level: 3,
    type: 'choice',
    questionText: 'Kata "Kurban" secara bahasa berasal dari kata Arab "Qoroba" yang mendekati makna...',
    options: ['Dekat atau mendekatkan diri kepada Allah', 'Melarikan diri dari kesusahan', 'Membeli banyak makanan lezat'],
    correctAnswer: 0,
    illustration: 'masjid',
    explanation: 'Kurban (Qurban) berarti mendekatkan diri. Ibadah kurban bertujuan mendekatkan diri kita kepada Allah SWT melalui ketaatan.'
  },
  {
    id: 'l3-q2',
    level: 3,
    type: 'choice',
    questionText: 'Mana kondisi hewan di bawah ini yang menyebabkan hewan tersebut TIDAK SAH dijadikan hewan kurban?',
    options: ['Sangat kurus, pincang jelas, atau matanya buta', 'Bulu badannya berwarna cokelat mengkilap', 'Memiliki dua tanduk yang seimbang'],
    correctAnswer: 0,
    illustration: 'sapi_sakit',
    explanation: 'Hewan yang tidak sah dikurbankan adalah yang buta sebelah, sakit jelas, pincang parah, atau sangat kurus hingga tidak bersumsum.'
  },
  {
    id: 'l3-q3',
    level: 3,
    type: 'boolean',
    questionText: 'Satu ekor sapi atau kerbau boleh dikurbankan dengan cara patungan maksimal untuk 7 orang. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    illustration: 'cow',
    explanation: 'Benar! Syariat Islam memperbolehkan patungan sapi atau kerbau untuk maksimal 7 orang shohibul qurban.'
  },
  {
    id: 'l3-q4',
    level: 3,
    type: 'choice',
    questionText: 'Berbeda dengan sapi, satu ekor kambing atau domba hanya boleh dikurbankan atas nama...',
    options: ['1 Orang saja', '3 Orang bersaudara', '7 Orang tetangga'],
    correctAnswer: 0,
    illustration: 'goat',
    explanation: 'Satu ekor kambing/domba hanya sah mewakili kurban untuk 1 orang individu.'
  },
  {
    id: 'l3-q5',
    level: 3,
    type: 'choice',
    questionText: 'Kapan sajakah waktu penyembelihan hewan kurban boleh dilaksanakan?',
    options: ['Tanggal 10 Zulhijah dan hari-hari Tasyrik', 'Hanya di malam takbiran Idul Fitri', 'Bebas kapan saja sepanjang tahun'],
    correctAnswer: 0,
    illustration: 'masjid',
    explanation: 'Waktu kurban dimulai setelah shalat Idul Adha (10 Zulhijah) ditambah 3 hari Tasyrik (11, 12, 13 Zulhijah).'
  },
  {
    id: 'l3-q6',
    level: 3,
    type: 'boolean',
    questionText: 'Hari Tasyrik adalah hari-hari dilarang berpuasa bagi umat Islam. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    explanation: 'Benar! Pada hari Tasyrik, kita dilarang puasa karena merupakan hari makan, minum, dan berzikir kepada Allah.'
  },
  {
    id: 'l3-q7',
    level: 3,
    type: 'guess-image',
    questionText: 'Lihat gambar tempat beribadah umat Islam ini. Shalat berjamaah Idul Adha di pagi hari raya dikerjakan sebanyak...',
    options: ['2 Rakaat secara berjamaah', '4 Rakaat seperti shalat Dzuhur', '3 Rakaat dengan takbir keras'],
    correctAnswer: 0,
    illustration: 'masjid',
    explanation: 'Shalat Idul Adha berjamaah terdiri dari 2 rakaat, disunnahkan mendengarkan khutbah setelah shalat.'
  },
  {
    id: 'l3-q8',
    level: 3,
    type: 'choice',
    questionText: 'Sesuai sunnah Nabi, posisi hewan kurban saat akan disembelih diletakkan miring ke lambung kirinya menghadap ke arah...',
    options: ['Arah Kiblat (Kakbah)', 'Arah matahari terbit', 'Arah rumah pemilik hewan'],
    correctAnswer: 0,
    illustration: 'kakbah',
    explanation: 'Disunnahkan menghadapkan bagian leher menyembelih dan badannya ke arah Kiblat (barat/barat laut di Indonesia).'
  },
  {
    id: 'l3-q9',
    level: 3,
    type: 'choice',
    questionText: 'Siapa sajakah orang yang tidak diwajibkan / dibebaskan dari ibadah kurban?',
    options: ['Orang miskin yang tidak memiliki kelebihan harta', 'Orang dewasa yang sehat dan kaya', 'Setiap Muslim tanpa terkecuali'],
    correctAnswer: 0,
    explanation: 'Kurban adalah sunnah yang ditekankan bagi yang mampu secara finansial. Bagi yang miskin dan tak mampu, tidak dibebankan kewajiban.'
  },
  {
    id: 'l3-q10',
    level: 3,
    type: 'choice',
    questionText: 'Penerima utama yang berhak menikmati lezatnya daging kurban adalah...',
    options: ['Fakir, miskin, dan kaum dhuafa di lingkungan sekitar', 'Hanya pejabat dan tokoh penting di daerah', 'Penjual hewan kurban itu sendiri'],
    correctAnswer: 0,
    explanation: 'Fakir miskin yang jarang makan daging merupakan golongan paling utama menerima daging kurban agar ikut merasakan kegembiraan di hari raya.'
  },

  // ==================== LEVEL 4 (GRADES 4 SD) ====================
  {
    id: 'l4-q1',
    level: 4,
    type: 'choice',
    questionText: 'Dalam hukum fikih Islam, apakah hukum asal melaksanakan ibadah kurban bagi yang mampu?',
    options: ['Sunnah Muakkadah (Sangat dianjurkan)', 'Fardhu Ain (Wajib mutlak setiap jiwa)', 'Haram dilakukan anak-anak'],
    correctAnswer: 0,
    explanation: 'Hukum kurban adalah Sunnah Muakkadah (sunnah yang sangat ditekankan dan dianjurkan) bagi muslim dewasa, berakal, dan berkemampuan harta.'
  },
  {
    id: 'l4-q2',
    level: 4,
    type: 'choice',
    questionText: 'Berapakah umur minimal kambing kacang (kambing jawa) agar memenuhi syarat sah dikurbankan?',
    options: ['Minimal berumur 2 tahun atau lebih', 'Minimal berumur 6 bulan saja', 'Bebas umur berapa saja asal gemuk'],
    correctAnswer: 0,
    illustration: 'goat',
    explanation: 'Kambing jawa (kambing kacang) harus minimal berumur 2 tahun (memasuki tahun ke-3). Untuk domba, minimal 1 tahun atau sudah tanggal giginya (poel).'
  },
  {
    id: 'l4-q3',
    level: 4,
    type: 'boolean',
    questionText: 'Bolehkah panitia kurban menjual kulit atau tanduk hewan kurban untuk ditukar menjadi uang keuntungan pribadi atau pengurus?',
    options: ['Tidak boleh dijual', 'Boleh dijual bebas'],
    correctAnswer: 0,
    explanation: 'Tidak boleh. Bagian apa pun dari hewan kurban tidak boleh diperjualbelikan (baik daging, kulit, bulu, maupun tanduknya).'
  },
  {
    id: 'l4-q4',
    level: 4,
    type: 'choice',
    questionText: 'Kisah ketulusan pengorbanan Nabi Ibrahim dan keluarganya dicatat detail di dalam kitab suci Al-Quran surah...',
    options: ['QS. As-Saffat ayat 102', 'QS. Al-Baqarah ayat 183', 'QS. An-Nas ayat 1-4'],
    correctAnswer: 0,
    illustration: 'ibrahim_ismail',
    explanation: 'Surah As-Saffat ayat 102 menceritakan dengan indah dialog antara Nabi Ibrahim dan Nabi Ismail tentang wahyu penyembelihan.'
  },
  {
    id: 'l4-q5',
    level: 4,
    type: 'choice',
    questionText: 'Apa keajaiban (mukjizat) yang Allah tunjukkan saat pisau tajam menempel di leher Nabi Ismail?',
    options: ['Tubuh Nabi Ismail tak mempan pisau dan Allah ganti posisinya dengan domba sehat', 'Nabi Ismail melarikan diri ke padang pasir', 'Pisau tersebut patah menjadi tiga bagian'],
    correctAnswer: 0,
    illustration: 'ibrahim_ismail',
    explanation: 'Allah menguji ketaatan mereka. Begitu ayah dan anak itu siap melaksanakannya, Allah selamatkan Ismail dan menggantinya dengan domba besar.'
  },
  {
    id: 'l4-q6',
    level: 4,
    type: 'boolean',
    questionText: 'Hari Tasyrik jatuh pada tanggal 11, 12, dan 13 di bulan Zulhijah. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    explanation: 'Benar! Hari Tasyrik adalah tiga hari berturut-turut setelah hari raya Idul Adha (10 Zulhijah).'
  },
  {
    id: 'l4-q7',
    level: 4,
    type: 'guess-image',
    questionText: 'Bagaimanakah ciri fisik sapi sehat yang sah untuk disembelih dalam ibadah kurban?',
    options: ['Sapi gemuk, lincah, bermata jernih, dan tidak cacat', 'Sapi lemas, pincang, berkulit bopeng penyakit kurap', 'Sapi yang tanduknya patah dua-duanya berkulit kotor'],
    correctAnswer: 0,
    illustration: 'sapi_sehat',
    explanation: 'Sapi sehat bercirikan lincah, gemuk, nafsu makan baik, mata bersinar jernih, dan bulu bersih serta mengkilap.'
  },
  {
    id: 'l4-q8',
    level: 4,
    type: 'voice',
    questionText: 'Dengarkan suara gurun berikut ini. Hewan kurban khas padang pasir yang bersuara berat ini adalah...',
    options: ['Unta', 'Kambing Kacang', 'Kelinci Arab'],
    correctAnswer: 0,
    soundType: 'camel',
    illustration: 'camel',
    explanation: 'Suara berat bergemuruh serak adalah suara khas unta padang pasir.'
  },
  {
    id: 'l4-q9',
    level: 4,
    type: 'choice',
    questionText: 'Apakah hikmah sosial yang bisa langsung kita rasakan dari pembagian daging kurban?',
    options: ['Membantu asupan gizi kaum miskin dan mempererat rasa persaudaraan', 'Membuat orang kaya bertambah sombong karena kurbannya besar', 'Memicu persaingan antar masjid'],
    correctAnswer: 0,
    explanation: 'Secara sosial, ibadah kurban menyalurkan kebaikan pangan berkelanjutan, membantu kaum dhuafa, dan mempererat tali ukhuwah.'
  },
  {
    id: 'l4-q10',
    level: 4,
    type: 'order',
    questionText: 'Rangkai dengan benar urutan adab penyembelihan hewan kurban yang sesuai syariat Islam!',
    storyItems: [
      'Menghadapkan badan hewan kurban ke arah Kiblat.',
      'Membaca Basmalah (Bismillah) dilanjutkan Takbir dan Shalawat.',
      'Menyembelih dengan pisau tajam seketika memutuskan tenggorokan dan aliran darah.',
      'Biarkan hingga hewan tenang dan aliran darah serta nyawanya benar-benar habis.'
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: 'Tahap adab penyembelihan kurban: Menghadap kiblat -> Membaca doa & basmalah -> Menyembelih dengan pisau tajam -> Menunggu hewan mati sempurna.'
  },

  // ==================== LEVEL 5 (GRADES 5 SD) ====================
  {
    id: 'l5-q1',
    level: 5,
    type: 'choice',
    questionText: 'Ayat Al-Quran dalam Surah Al-Kautsar ayat 2 yang memerintahkan shalat dan berkurban berbunyi...',
    options: ['Fashalli lirabbika wanhar', 'Inna a\'thainakal kautsar', 'Inna syani\'aka huwal abtar'],
    correctAnswer: 0,
    illustration: 'masjid',
    explanation: '"Maka laksanakanlah shalat karena Tuhanmu, dan berkurbanlah (sebagai ibadah dan mendekatkan diri kepada Allah)." (QS. Al-Kautsar: 2)'
  },
  {
    id: 'l5-q2',
    level: 5,
    type: 'choice',
    questionText: 'Berapakah umur minimal bagi hewan Sapi (dan Kerbau) agar sah digunakan dalam beribadah kurban?',
    options: ['Telah genap berumur 2 tahun dan memasuki tahun ke-3', 'Cukup berumur 1 tahun saja', 'Minimal harus 5 tahun penuh'],
    correctAnswer: 0,
    illustration: 'cow',
    explanation: 'Sapi atau kerbau sah disembelih apabila sudah genap berumur 2 tahun (memasuki tahun ke-3).'
  },
  {
    id: 'l5-q3',
    level: 5,
    type: 'boolean',
    questionText: 'Jika seseorang berjanji sungguh-sungguh/nazar: "Jika saya juara kelas, saya akan berkurban kambing". Hukum kurban tersebut menjadi WAJIB bagi dirinya. Benar atau salah?',
    options: ['Benar (Kurban nazar wajib hukumnya)', 'Salah (Tetap sunnah biasa saja)'],
    correctAnswer: 0,
    explanation: 'Benar! Kurban nazar berubah hukumnya menjadi wajib, dan shohibul qurban berserta keluarganya tidak boleh memakan dagingnya sedikit pun.'
  },
  {
    id: 'l5-q4',
    level: 5,
    type: 'choice',
    questionText: 'Jenis zat atau bagian tubuh hewan kurban yang haram dikonsumsi menurut syariat Islam adalah...',
    options: ['Darah yang mengalir (mengucur) saat disembelih', 'Lemak kambing di bagian perut', 'Daging paha luar sapi'],
    correctAnswer: 0,
    explanation: 'Darah yang mengalir (damun masfuhah) hukumnya haram mutlak dikonsumsi sesuai QS. Al-Maidah ayat 3.'
  },
  {
    id: 'l5-q5',
    level: 5,
    type: 'choice',
    questionText: 'Bagaimanakah ketentuan memberikan upah atau jasa bagi tukang jagal (orang yang menyembelih dan menguliti)?',
    options: ['Diberikan upah uang khusus di luar bagian daging kurban', 'Diberikan kepala dan kulit kurban sebagai upah kerja wajib', 'Diberikan sisa tulang belulang saja tanpa bayaran'],
    correctAnswer: 0,
    explanation: 'Tukang jagal tidak boleh diberi upah yang bersumber dari kulit atau daging kurban. Upah jagal harus dibayar menggunakan dana khusus pembiayaan panitia.'
  },
  {
    id: 'l5-q6',
    level: 5,
    type: 'boolean',
    questionText: 'Demi memelihara rasa kasih sayang sesama makhluk hidup, kita dilarang menyembelih hewan di hadapan hewan kurban lainnya yang mengantre. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    explanation: 'Benar. Ini merupakan bagian dari ihsan (berbuat baik) kepada hewan ternak agar hewan tidak mengalami tekanan batin atau stres sebelum ajal.'
  },
  {
    id: 'l5-q7',
    level: 5,
    type: 'choice',
    questionText: 'Keteladanan luar biasa dari Nabi Ismail ketika merespons ajakan ayahnya mengajarkan generasi muda tentang...',
    options: ['Ketaatan mutlak kepada Allah, bakti kepada orang tua, dan kesabaran', 'Bagaimana cara meloloskan diri dari hukuman keluarga', 'Hukum berdagang hewan ternak di padang pasir'],
    correctAnswer: 0,
    illustration: 'ibrahim_ismail',
    explanation: 'Sikap Nabi Ismail menunjukkan akhlak mulia kepatuhan agung kepada Rabb, sopan santun bertutur kata kepada ayah, serta keperkasaan sabar.'
  },
  {
    id: 'l5-q8',
    level: 5,
    type: 'guess-image',
    questionText: 'Ketika merebahkan hewan kurban sapi, posisi tubuh hewan diatur rebah bertumpu pada lambung sebelah...',
    options: ['Rebah pada lambung bagian Kiri hewan', 'Rebah pada punggung menghadap langit', 'Rebah pada lambung Kanan hewan'],
    correctAnswer: 0,
    illustration: 'cow',
    explanation: 'Hewan diletakkan di atas lambung kirinya agar tangan kanan penyembelih bebas bergerak memegang pisau tajam ke arah kiblat.'
  },
  {
    id: 'l5-q9',
    level: 5,
    type: 'choice',
    questionText: 'Di bawah ini merupakan perilaku atau hal yang makruh (sebaiknya dihindari) waktu menyembelih hewan, KECUALI...',
    options: ['Menggunakan pisau yang sangat tajam dan mengasah di tempat aman', 'Menggunakan pisau yang tumpul sehingga menyiksa hewan', 'Memotong leher hewan hingga putus kepalanya sebelum mati'],
    correctAnswer: 0,
    explanation: 'Menggunakan pisau tajam hukumnya sunnah muakkad. Sedangkan menggunakan pisau tumpul atau memenggal kepala hewan kurban hingga putus adalah makruh.'
  },
  {
    id: 'l5-q10',
    level: 5,
    type: 'order',
    questionText: 'Urutkan persentase dan kelompok pembagian daging kurban sunnah (non-nazar) yang paling beradab!',
    storyItems: [
      '1/3 bagian disunnahkan untuk dikonsumsi Shohibul Qurban (yang berkurban).',
      '1/3 bagian diberikan kepada Sahabat, kerabat, dan tetangga sekitar.',
      '1/3 sisanya diserahkan mutlak untuk Fakir Miskin yang membutuhkan.'
    ],
    correctAnswer: [0, 1, 2],
    explanation: 'Fikih menganjurkan pembagian sepertiga untuk shohibul qurban, sepertiga tetangga luas (meski kaya), dan sepertiga dhuafa.'
  },

  // ==================== LEVEL 6 (GRADES 6 SD) ====================
  {
    id: 'l6-q1',
    level: 6,
    type: 'choice',
    questionText: 'Dalam QS. Al-Hajj ayat 37 dijelaskan bahwa yang akan sampai dan dinilai di hadapan Allah dalam berkurban adalah...',
    options: ['Ketakwaan dan keikhlasan hati kita', 'Tetesan darah hewan kurban ke bumi', 'Bobot beratnya timbangan daging kurban'],
    correctAnswer: 0,
    illustration: 'kakbah',
    explanation: '"Darah dan dagingnya sekali-kali tidak akan mencapai ridha Allah, tetapi yang mencapainya adalah ketakwaan dari dirimu..." (QS. Al-Hajj: 37)'
  },
  {
    id: 'l6-q2',
    level: 6,
    type: 'choice',
    questionText: 'Berapakah ketetapan batas umur minimal bagi seekor Unta agar dinilai sah menjadi hewan kurban?',
    options: ['Minimal telah genap berumur 5 tahun penuh', 'Minimal berumur 2 tahun saja', 'Minimal berumur 3 tahun penuh'],
    correctAnswer: 0,
    illustration: 'camel',
    explanation: 'Untuk unta, syarat umurnya adalah telah genap berumur 5 tahun dan sedang atau telah masuk ke tahun ke-6.'
  },
  {
    id: 'l6-q3',
    level: 6,
    type: 'boolean',
    questionText: 'Bolehkah memberikan bagian daging kurban kepada tetangga non-muslim sebagai hadiah kemanusiaan dan perdamaian?',
    options: ['Boleh (Diperkenankan sebagai kurban sunnah hadiah)', 'Sama sekali haram dilarang'],
    correctAnswer: 0,
    explanation: 'Boleh! Para ulama membolehkan pemberian daging kurban sunnah untuk non-muslim yang tidak memusuhi Islam, sebagai bentuk ihsan dan toleransi.'
  },
  {
    id: 'l6-q4',
    level: 6,
    type: 'choice',
    questionText: 'Apabila memasuki awal bulan Zulhijah (tanggal 1), orang yang berniat berkurban (shohibul qurban) disunnahkan agar tidak memotong...',
    options: ['Rambut di kepala dan kuku jemari tangannya', 'Rambut kumis dan mencukur bulu dada', 'Bulu kaki dan kuku bagian tumit saja'],
    correctAnswer: 0,
    explanation: 'Berdasarkan hadits shahih riwayat Muslim, bagi yang berkurban disunnahkan tidak memotong rambut dan kuku dari awal Zulhijah hingga hewan kurbannya disembelih.'
  },
  {
    id: 'l6-q5',
    level: 6,
    type: 'choice',
    questionText: 'Bila shohibul qurban berhalangan hadir atau takut menyembelih sendiri, ia boleh melimpahkan wewenang penyembelihan kepada wakil (panitia). Istilah pelimpahan hak ini di sebut...',
    options: ['Wakalah (Perwakilan akad)', 'Syirkah (Kerja sama modal)', 'Mudarabah (Bagi hasil bisnis)'],
    correctAnswer: 0,
    explanation: 'Wakalah adalah pelimpahan kekuasaan oleh seseorang kepada orang lain dalam hal-hal yang boleh diwakilkan seperti menyembelih kurban.'
  },
  {
    id: 'l6-q6',
    level: 6,
    type: 'boolean',
    questionText: 'Syariat berkurban pertama kali diperintahkan Allah di bumi adalah semenjak masa Nabi Adam a.s., yaitu perseteruan Qurban Habil dan Qabil. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    illustration: 'kakbah',
    explanation: 'Benar! Kisah ibadah kurban pertama kali direkam di surah Al-Maidah ayat 27 mengenai persembahan kurban putra Nabi Adam.'
  },
  {
    id: 'l6-q7',
    level: 6,
    type: 'choice',
    questionText: 'Kenapa kurban Habil diterima oleh Allah sedangkan kurban milik kakaknya, Qabil, ditolak?',
    options: ['Habil mempersembahkan domba terbaik dengan ikhlas, sedangkan Qabil mempersembahkan hasil tani busuk secara terpaksa', 'Habil adalah adik kesayangan ayah mereka', 'Habil bersembunyi di balik bukit'],
    correctAnswer: 0,
    explanation: 'Allah hanya menerima amal dari orang yang bertakwa. Habil tulus menyembelih hewan ternak terbaiknya, sedangkan Qabil kikir dan mempersembahkan buah/sayur yang rusak.'
  },
  {
    id: 'l6-q8',
    level: 6,
    type: 'choice',
    questionText: 'Selain memiliki fungsi ibadah spiritual, apa hikmah sosial terdalam dari pelaksanaan ibadah Idul Adha di era modern?',
    options: ['Membiasakan empati sosial mendalam, berbagi kesejahteraan protein, dan memupuk solidaritas warga', 'Meningkatkan gengsi keluarga di media sosial', 'Melatih otot tubuh karena membopong ternak sapi'],
    correctAnswer: 0,
    explanation: 'Kurban mengajarkan keadilan sosial—menyalurkan kenikmatan daging bagi dhuafa, menghapus kesenjangan kikir, dan mengencangkan persaudaraan antar-umat.'
  },
  {
    id: 'l6-q9',
    level: 6,
    type: 'boolean',
    questionText: 'Bagi jamaah haji yang sedang berwukuf di padang Arafah pada tanggal 9 Zulhijah, mereka sangat disunnahkan berpuasa Arafah. Benar atau salah?',
    options: ['Salah (Bagi jamaah haji dilarang puasa Arafah agar tetap sehat)', 'Benar (Wajib puasa semua)'],
    correctAnswer: 0,
    explanation: 'Salah. Jamaah haji yang sedang melakukan ibadah haji di Arafah justru disunnahkan untuk TIDAK berpuasa, agar memiliki stamina kuat beribadah. Puasa Arafah disunnahkan bagi umat Islam yang TIDAK sedang berhaji.'
  },
  {
    id: 'l6-q10',
    level: 6,
    type: 'order',
    questionText: 'Urutkan alur penanganan hewan kurban di masjid modern agar higienis dan berkah sesuai pedoman!',
    storyItems: [
      'Pemeriksaan medis oleh dokter hewan untuk memastikan kesehatan fisik.',
      'Penyembelihan syar\'i dengan membaringkan hewan menghadap kiblat.',
      'Pengulitan bersih dan memisahkan daging dari tulang di tempat bersih.',
      'Pengemasan daging menggunakan wadah ramah lingkungan lalu dibagikan ke rumah dhuafa.'
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: 'Alur penanganan profesional: Pemeriksaan kesehatan (Ante-mortem) -> Penyembelihan syar\'i -> Post-mortem pengulitan -> Pengemasan higienis bebas timbal plastik hitam.'
  }
];
