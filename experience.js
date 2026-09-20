const experienceData = [
  {
    role: "Waiter",
    company: "Nasi kuning Bang Ro",
    duration: "27 Agustus 2026 - Sekarang",
    description: [
      "Melayani pelanggan",
      "Menjaga kebersihan area outlet",
      "Memastikan produk aman & hygienis",
    ]
  },
  {
    role: "Casual Worker",
    company: "Genio Syariah Hotel",
    duration: "Agustus 2026",
    description: [
      "Waiter"
    ]
  },
  {
    role: "On Job Orientation",
    company: "Genio Syariah Hotel",
    duration: "Agustus 2026",
    description: [
      "Waiter",
      "Barista"
    ]
  },
  {
    role: "Staff & Driver Operasional",
    company: "Cv Kebumen Prima Sarana",
    duration: "Okt 2022 - Jun 2026",
    description: [
      "Melayani pelanggan",
      "Merapikan & menjaga penataan barang toko",
      "Menjaga kebersihan area toko",
      "Melakukan transaksi pembayaran pelanggan",
      "Mengatur jadwal pengiriman barang",
      "Mengirim dan memastikan barang aman dan lengkap sampai tujuan"
    ]
  },
  {
    role: "Frontline & Admin",
    company: "Zona Cell & Fotocopy",
    duration: "Agust 2019 - Sept 2021",
    description: [
      "Mengelola toko online & offline",
      "Mengelola stok barang toko",
      "Mengelola akun toko online & media sosial toko",
      "Melayani & menangani komplain pelanggan secara offline maupun online"
    ]
  }
];

function createExperience() {
  const section = createElement('section');
  section.id = "experience";

  const title = createElement('h2', 'section-title', 'Pengalaman Kerja');
  section.appendChild(title);

  const listDiv = createElement('div', 'timeline');

  experienceData.forEach(exp => {
    const itemDiv = createElement('div', 'timeline-item');

    const indicator = createElement("div", "timeline-indicator");
    const dot = createElement("div", "timeline-dot");
    const line = createElement("div", "timeline-line");
    indicator.appendChild(dot);
    indicator.appendChild(line);

    const content = createElement("div", "timeline-content");
    
    const roleTitle = createElement('h4', '', exp.role); 
    
    const metaDiv = createElement('div', 'experience-meta');
    const companyText = createElement('span', 'company-name', exp.company);
    const bullet = createElement('span', 'bullet', ' • ');
    const durationText = createElement('span', 'duration', exp.duration);
    
    metaDiv.appendChild(companyText);
    metaDiv.appendChild(bullet);
    metaDiv.appendChild(durationText);

    // --- BAGIAN YANG BERUBAH ---
    // Membuat elemen unordered list (ul)
    const expDesc = createElement('ul', 'experience-desc-list');
    
    // Looping array deskripsi untuk membuat list item (li)
    exp.description.forEach(point => {
        const li = createElement('li', '', point);
        expDesc.appendChild(li);
    });
    // ---------------------------

    content.appendChild(roleTitle); 
    content.appendChild(metaDiv);
    content.appendChild(expDesc);

    itemDiv.appendChild(indicator);
    itemDiv.appendChild(content);
    
    listDiv.appendChild(itemDiv);
  });
  
  section.appendChild(listDiv);
  return section;
}