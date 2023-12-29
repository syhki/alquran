function getURL(e) {
  const pageURL = window.location.search.substring(1);
  const urlVariable = pageURL.split('&');
  for (let i = 0; i < urlVariable.length; i++) {
      const parameterName = urlVariable[i].split('=');
    if (parameterName[0] == e) {
      return parameterName[1];
    }
  }
}
let id = getURL('id');
let url = `https://equran.id/api/surat/${id}`;
let title = document.getElementsByClassName('title')[0];
let wrap = document.getElementsByClassName('ayat')[0];
async function ayat() {
  let res = await fetch(url);
  let data = await res.json();
  let konten = '';
  data.ayat.forEach(ayahs => {
    konten += `
    <div class="ar">
      ${ayahs.nomor}. ${ayahs.ar}
    </div>
    <div class="tr">
      ${ayahs.tr}
    </div>
    <div class="idn">
      ${ayahs.idn}
    </div>
    `;
  });
  document.title = data.nama_latin;
  title.innerHTML = judul;
  wrap.innerHTML = konten;
  console.info(data);
}
ayat();