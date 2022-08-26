let myLabels = document.querySelectorAll('.lbl-toggle');
Array.from(myLabels).forEach(label => { label.addEventListener('keydown', e => { if (e.which === 32 || e.which === 13) { e.preventDefault();
      label.click(); }; }); });