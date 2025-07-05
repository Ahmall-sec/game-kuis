let questions = [
  {
    question: "Apa ibu kota Indonesia?",
    options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    answer: "Jakarta"
  },
  {
    question: "Berapakah hasil dari 5 x 6?",
    options: ["11", "30", "56", "25"],
    answer: "30"
  },
  {
    question: "Siapa penemu bola lampu?",
    options: ["Einstein", "Newton", "Edison", "Tesla"],
    answer: "Edison"
  },
  {
    question: "Suku bangsa asli Papua adalah?",
    options: ["Toraja", "Asmat", "Minangkabau", "Batak"],
    answer: "Asmat"
  },
  {
    question: "Planet terbesar di tata surya adalah?",
    options: ["Saturnus", "Mars", "Jupiter", "Bumi"],
    answer: "Jupiter"
  },
  {
    question: "Bahasa pemrograman yang populer untuk web?",
    options: ["Python", "C++", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Siapa presiden pertama Indonesia?",
    options: ["Soekarno", "Soeharto", "Habibie", "Jokowi"],
    answer: "Soekarno"
  },
  {
    question: "Lambang kimia untuk air adalah?",
    options: ["O2", "CO2", "H2O", "NaCl"],
    answer: "H2O"
  },
  {
    question: "Ibukota negara Jepang adalah?",
    options: ["Seoul", "Osaka", "Kyoto", "Tokyo"],
    answer: "Tokyo"
  },
  {
    question: "Hewan tercepat di darat adalah?",
    options: ["Cheetah", "Kuda", "Singa", "Harimau"],
    answer: "Cheetah"
  },
  {
    question: "Bendera Indonesia terdiri dari warna apa saja?",
    options: ["Merah & Putih", "Putih & Biru", "Merah & Kuning", "Merah & Hijau"],
    answer: "Merah & Putih"
  },
  {
    question: "Alat musik khas Jawa Barat adalah?",
    options: ["Sasando", "Angklung", "Gamelan", "Tifa"],
    answer: "Angklung"
  },
  {
    question: "Siapa penulis novel 'Laskar Pelangi'?",
    options: ["Tere Liye", "Andrea Hirata", "Habiburrahman", "Dee Lestari"],
    answer: "Andrea Hirata"
  },
  {
    question: "Gunung tertinggi di Indonesia adalah?",
    options: ["Rinjani", "Slamet", "Semeru", "Puncak Jaya"],
    answer: "Puncak Jaya"
  },
  {
    question: "Simbol matematika untuk 'lebih dari' adalah?",
    options: [">", "<", "=", "+"],
    answer: ">"
  },
  {
    question: "Ibukota provinsi Kalimantan Timur?",
    options: ["Samarinda", "Balikpapan", "Banjarmasin", "Pontianak"],
    answer: "Samarinda"
  },
  {
    question: "Nama mata uang Jepang adalah?",
    options: ["Won", "Ringgit", "Yuan", "Yen"],
    answer: "Yen"
  },
  {
    question: "Siapa ilmuwan teori gravitasi?",
    options: ["Einstein", "Galileo", "Newton", "Hawking"],
    answer: "Newton"
  },
  {
    question: "Bahasa resmi negara Thailand?",
    options: ["Vietnam", "Thai", "Burma", "Khmer"],
    answer: "Thai"
  },
  {
    question: "Hewan mamalia terbesar di dunia?",
    options: ["Gajah", "Paus Biru", "Ikan Hiu", "Singa"],
    answer: "Paus Biru"
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const timeElement = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const fileInput = document.getElementById("fileInput");

startBtn.addEventListener("click", startQuiz);

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const loadedQuestions = JSON.parse(e.target.result);
      if (
        Array.isArray(loadedQuestions) &&
        loadedQuestions.every(q => q.question && Array.isArray(q.options) && q.answer)
      ) {
        questions = loadedQuestions;
        alert("✅ Soal berhasil dimuat! Klik Mulai Kuis.");
      } else {
        alert("❌ Format file tidak sesuai.");
      }
    } catch (err) {
      alert("❌ Gagal membaca file. Pastikan format .json benar.");
    }
  };

  if (file) reader.readAsText(file);
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  score = 0;
  currentQuestion = 0;
  resultElement.classList.add("hidden");
  startBtn.style.display = "none";
  shuffle(questions);
  showQuestion();
}

function showQuestion() {
  resetTimer();
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";
  shuffle(q.options);

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsElement.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(selected) {
  stopTimer();
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  resultElement.classList.remove("hidden");
  resultElement.textContent = `Skor Kamu: ${score} dari ${questions.length}`;
  startBtn.textContent = "Main Lagi";
  startBtn.style.display = "block";
}

function startTimer() {
  timeLeft = 10;
  timeElement.textContent = timeLeft;
  updateProgressBar();

  timer = setInterval(() => {
    timeLeft--;
    timeElement.textContent = timeLeft;
    updateProgressBar();
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer("");
    }
  }, 1000);
}

function updateProgressBar() {
  const progress = document.getElementById("progress");
  progress.style.width = `${(timeLeft / 10) * 100}%`;
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  timeLeft = 10;
  timeElement.textContent = timeLeft;
}

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const reader = new FileReader();

  // Tampilkan nama file
  document.getElementById("fileName").textContent = file ? `📁 ${file.name}` : "";

  reader.onload = function (e) {
    try {
      const loadedQuestions = JSON.parse(e.target.result);
      if (
        Array.isArray(loadedQuestions) &&
        loadedQuestions.every(q => q.question && Array.isArray(q.options) && q.answer)
      ) {
        questions = loadedQuestions;
        alert("✅ Soal berhasil dimuat! Klik Mulai Kuis.");
      } else {
        alert("❌ Format file tidak sesuai.");
      }
    } catch (err) {
      alert("❌ Gagal membaca file. Pastikan format .json benar.");
    }
  };

  if (file) reader.readAsText(file);
});
