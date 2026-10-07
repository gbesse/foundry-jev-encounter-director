# Jev Encounter Director for Foundry VTT

A preview-first Foundry VTT module that selects one encounter beat from exact Actor/Token UUIDs already present in the scene. It does not write narration, create actors, roll dice or modify documents.

```bash
npm test
```

Install `module.json` plus `scripts/` and `styles/` as `Data/modules/jev-encounter-director`, activate the module, select at least two tokens as candidate beats, and press the compass tool. Version 0.1.0 runs an explicit offline fixture so the complete selection and preview boundary can be tested without a provider key.

Live inference should be provided by a GM-controlled authenticated gateway. Re-check the scene revision before applying any future action. Player-visible data and hidden GM data must never be mixed without explicit policy.

Independent community module. Not affiliated with Foundry Virtual Tabletop or TypeSafe. MIT licensed.
