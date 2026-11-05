import test from 'node:test';import assert from 'node:assert/strict';import {preview,previewReceipt,fakeResponse}from '../scripts/core.js';const s={sceneId:'s',revision:1,situation:'round1',beats:[{uuid:'a',label:'A'},{uuid:'b',label:'B'}]};
test('same revision changed situation rejects preview receipt',()=>assert.equal(previewReceipt(s,fakeResponse(s),{...s,situation:'round2'}).status,'stale'));
test('preview cannot mutate snapshot',()=>{const x=preview(s,fakeResponse(s));x.beat.label='mutated';assert.equal(s.beats[0].label,'A');});
test('unchanged receipt stays advisory',()=>assert.equal(previewReceipt(s,fakeResponse(s),structuredClone(s)).apply,false));
