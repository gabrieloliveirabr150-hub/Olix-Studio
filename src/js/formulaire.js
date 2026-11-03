export function initFormulaire() {
  const $ = id => document.getElementById(id);
  const form = $('form');
  if (!form) return;

  const formErr = $('formErr');
  const validationErrText = formErr.textContent;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = $('fName').value.trim() && $('fShop').value.trim();
    formErr.textContent = validationErrText;
    formErr.hidden = !!ok;
    if (!ok) return;

    const params = new URLSearchParams(new FormData(form)).toString();
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params })
      .then(res => {
        if (!res.ok) throw new Error('Submission failed: ' + res.status);
        form.hidden = true; $('sent').hidden = false;
      })
      .catch(() => {
        formErr.textContent = formErr.dataset.networkErr;
        formErr.hidden = false;
      });
  });
  ['fName', 'fShop'].forEach(id => $(id).addEventListener('input', () => { formErr.hidden = true; }));
}
