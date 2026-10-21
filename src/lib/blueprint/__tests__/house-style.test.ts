import { describe, it, expect } from 'vitest';
import { applyHouseStyle } from '../house-style';

describe('applyHouseStyle', () => {
  it('says "native language," never "mother tongue"', () => {
    expect(applyHouseStyle('Romantic is your mother tongue.')).toBe(
      'Romantic is your native language.',
    );
    expect(applyHouseStyle('Mother tongue: Romantic.')).toBe('Native language: Romantic.');
  });

  it('describes the Romantic palette as rich hues and metallics', () => {
    expect(applyHouseStyle('**A Palette of Dusk and Metal.** Plum and gold.')).toBe(
      '**A Palette of Rich Hues and Metallics.** Plum and gold.',
    );
    expect(applyHouseStyle('a palette of dusk and metal')).toBe(
      'a palette of rich hues and metallics',
    );
  });

  it('leaves other text alone', () => {
    const text = 'A metallic sandal at dusk.';
    expect(applyHouseStyle(text)).toBe(text);
  });
});
