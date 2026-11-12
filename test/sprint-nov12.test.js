import test from 'node:test';import assert from 'node:assert/strict';
import {validateSnapshot,preview,fakeResponse} from '../scripts/core.js';
const base=()=>({sceneId:'s',revision:0,beats:[{uuid:'a',label:'A'},{uuid:'b',label:'B'}]});
test('reject unsafe revisions and incomplete declared identities',()=>{for(const value of [-1,Number.MAX_SAFE_INTEGER+1])assert.throws(()=>validateSnapshot({...base(),revision:value}));for(const uuid of [null,{},'']){const b=base();b.beats[0].uuid=uuid;assert.throws(()=>validateSnapshot(b));}const b=base();b.beats[0].label='';assert.throws(()=>preview(b,fakeResponse(b)));});
test('pressure is bounded and previews remain detached',()=>{const b=base(),r=fakeResponse(b);r.answers.pressure.score='invented';assert.throws(()=>preview(b,r));const out=preview(b,fakeResponse(b));out.beat.label='changed';assert.equal(b.beats[0].label,'A');assert.equal(out.apply,false);});
