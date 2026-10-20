import { describe, it, expect } from 'vitest';
import { AUTHORED_SAMPLES, BLUEPRINT_EXAMPLES } from '../samples';
import { getArchetype, asStyleType } from '../archetypes';

describe('authored samples', () => {
  it('carries all six Blueprints Mary Michele wrote', () => {
    expect(AUTHORED_SAMPLES.map((s) => s.archetype)).toEqual([
      'The Genuine',
      'The Elemental',
      'The Girl Next Door',
      'The Playful Muse',
      'The Easy Going',
      'The Trendsetter',
    ]);
  });

  it.each(AUTHORED_SAMPLES)(
    'labels $archetype with the archetype its StyleTypes produce',
    (sample) => {
      for (const type of [sample.primary, sample.secondary, sample.supporting]) {
        expect(asStyleType(type)).toBe(type);
      }
      expect(getArchetype(sample.primary, sample.secondary)).toBe(sample.archetype);
    },
  );

  it.each(AUTHORED_SAMPLES)('keeps the template text out of $archetype', (sample) => {
    // The letter, About page and closing page are added by boilerplate.ts.
    expect(sample.body).not.toMatch(/Bonjour|About Mary Michele|Yes, You Do Have a Style/);
    expect(sample.body).not.toContain('mirror and a map');
  });

  it.each(AUTHORED_SAMPLES)('keeps $archetype free of PDF line-wrap breaks', (sample) => {
    expect(sample.body).not.toMatch(/easy-tomix|buttondown|wideleg|highlevel|selfimage/);
  });

  it('sends every sample inside its own example tag', () => {
    expect(BLUEPRINT_EXAMPLES.match(/<example>/g)).toHaveLength(AUTHORED_SAMPLES.length);
    for (const sample of AUTHORED_SAMPLES) {
      expect(BLUEPRINT_EXAMPLES).toContain(sample.body);
    }
  });

  it('tells the model the samples are examples, not templates', () => {
    expect(BLUEPRINT_EXAMPLES).toContain('They are examples, not templates.');
    expect(BLUEPRINT_EXAMPLES).toContain("Never reuse an example's sentences.");
  });
});
