let url = 'https://equran.id/api/surat';
let wrap = document.getElementsByClassName('surah')[0];
async function surah() {
  let res = await fetch(url);
  let data = await res.json();
  let html = '';
  data.forEach(surat => {
    html += `
    <div class="card" onclick="location.href='surah/surah.html?id=${surat.nomor}'">
      <div class="title">${surat.nomor}. ${surat.nama_latin}</div>
      <div class="ar">${surat.nama}</div>
    </div>
    `;
  });
  wrap.innerHTML = html;
  console.info(data);
}
surah();