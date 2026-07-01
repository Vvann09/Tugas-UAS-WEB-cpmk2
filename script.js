// ============================
// Sistem Input & Tabel Data Layanan
// Data disimpan di localStorage browser
// ============================

const STORAGE_KEY = "dataLayanan";

// Ambil data dari localStorage
function getData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Simpan data ke localStorage
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ============================
// LOGIKA HALAMAN FORM (index.html)
// ============================
const dataForm = document.getElementById("dataForm");

if (dataForm) {
  dataForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const jenisLayanan = document.getElementById("jenisLayanan").value;
    const keterangan = document.getElementById("keterangan").value.trim();

    const statusMsg = document.getElementById("statusMsg");

    if (!nama || !nim || !jenisLayanan) {
      statusMsg.textContent = "Nama, NIM, dan Jenis Layanan wajib diisi!";
      statusMsg.className = "status-msg error";
      return;
    }

    const newEntry = {
      id: Date.now(),
      nama,
      nim,
      jenisLayanan,
      keterangan: keterangan || "-",
    };

    const data = getData();
    data.push(newEntry);
    saveData(data);

    statusMsg.textContent = "Data berhasil disimpan! Cek di halaman Tabel Data.";
    statusMsg.className = "status-msg success";

    dataForm.reset();
  });
}

// ============================
// LOGIKA HALAMAN TABEL (tabel.html)
// ============================
const tableBody = document.getElementById("tableBody");

if (tableBody) {
  renderTable();

  const clearAllBtn = document.getElementById("clearAllBtn");
  clearAllBtn.addEventListener("click", function () {
    if (confirm("Yakin ingin menghapus semua data?")) {
      saveData([]);
      renderTable();
    }
  });
}

function renderTable() {
  const data = getData();
  const emptyMsg = document.getElementById("emptyMsg");
  tableBody.innerHTML = "";

  if (data.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${escapeHtml(item.nama)}</td>
      <td>${escapeHtml(item.nim)}</td>
      <td><span class="badge">${escapeHtml(item.jenisLayanan)}</span></td>
      <td>${escapeHtml(item.keterangan)}</td>
      <td><button class="btn-delete" data-id="${item.id}">Hapus</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Event listener untuk tombol hapus per baris
  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      const newData = getData().filter((item) => item.id !== id);
      saveData(newData);
      renderTable();
    });
  });
}

// Mencegah XSS sederhana saat menampilkan data ke tabel
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
