# Jev Encounter Director for Foundry VTT

A preview-first Foundry VTT module that selects one encounter beat from exact Actor/Token UUIDs already present in the scene. It does not write narration, create actors, roll dice or modify documents.

```bash
npm test
```

Install `module.json` plus `scripts/` and `styles/` as `Data/modules/jev-encounter-director`, activate the module, select at least two tokens as candidate beats, and press the compass tool. Version 0.1.0 runs an explicit offline fixture so the complete selection and preview boundary can be tested without a provider key.

Live inference should be provided by a GM-controlled authenticated gateway. Re-check the scene revision before applying any future action. Player-visible data and hidden GM data must never be mixed without explicit policy.

Independent community module. Not affiliated with Foundry Virtual Tabletop or TypeSafe. MIT licensed.


## 2026-11-05 — FR / EN / ES

FR : `previewReceipt(snapshot,response,current)` compare aussi le contenu du snapshot, pour détecter une situation modifiée sans changement de révision. Les beats retournés sont copiés. API de reçu facultative ; le bouton Foundry historique reste en fixture et ne change aucun document. Host Foundry non testé ici.

EN: `previewReceipt(snapshot,response,current)` also compares snapshot content to detect a changed situation without a revision bump. Returned beats are detached copies. Optional receipt API; existing Foundry button remains fixture-only and changes no document. Foundry host not tested here.

ES: `previewReceipt(snapshot,response,current)` compara contenido para detectar situación cambiada sin nueva revisión. Beats devueltos son copias. API de recibo opcional; botón Foundry existente sigue en fixture sin modificar documentos. Host Foundry no probado aquí.


## 2026-11-12 — FR / EN / ES

FR : Valider les identités, révisions sûres et niveaux de pression avant toute prévisualisation. Essais Node sur données synthétiques ; Foundry VTT non exécuté.

EN: Validate declared identities, safe revisions and pressure levels before preview. Synthetic Node tests; Foundry VTT was not executed.

ES: Validar identidades, revisiones seguras y niveles de presión antes de previsualizar. Pruebas Node sintéticas; Foundry VTT no ejecutado.
