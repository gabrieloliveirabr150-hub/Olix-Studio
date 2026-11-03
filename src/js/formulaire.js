export function initFormulaire() {
  const $ = id => document.getElementById(id);
  const form = $('form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = $('fName').value.trim() && $('fShop').value.trim();
    $('formErr').hidden = !!ok;
    if (!ok) return;

    const params = new URLSearchParams(new FormData(form)).toString();
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params })
      .then(() => { form.hidden = true; $('sent').hidden = false; })
      .catch(() => { form.hidden = true; $('sent').hidden = false; });
  });
  ['fName', 'fShop'].forEach(id => $(id).addEventListener('input', () => { $('formErr').hidden = true; }));
}
