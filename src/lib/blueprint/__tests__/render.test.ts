import { describe, it, expect } from 'vitest';
import { renderBlueprintHtml, renderBlueprintText } from '../render';

describe('renderBlueprintHtml', () => {
  it('maps markdown headings down one level so h1 stays the document title', () => {
    const html = renderBlueprintHtml('## Overall Vibe\n\n### Silhouettes');
    expect(html).toContain('<h3>Overall Vibe</h3>');
    expect(html).toContain('<h4>Silhouettes</h4>');
  });

  it('joins wrapped lines into one paragraph', () => {
    const html = renderBlueprintHtml('She favors clean lines\nand quiet contrast.');
    expect(html).toBe('<p>She favors clean lines and quiet contrast.</p>');
  });

  it('separates paragraphs on a blank line', () => {
    const html = renderBlueprintHtml('First thought.\n\nSecond thought.');
    expect(html).toBe('<p>First thought.</p>\n<p>Second thought.</p>');
  });

  it('renders bullets as a list and closes it', () => {
    const html = renderBlueprintHtml('- One\n- Two\n\nAfter.');
    expect(html).toContain('<ul>');
    expect(html).toContain('<li>One</li>');
    expect(html).toContain('<li>Two</li>');
    expect(html).toContain('</ul>');
    expect(html.indexOf('</ul>')).toBeLessThan(html.indexOf('<p>After.</p>'));
  });

  it('applies bold and italic emphasis', () => {
    expect(renderBlueprintHtml('**bold** and *soft*')).toBe(
      '<p><strong>bold</strong> and <em>soft</em></p>',
    );
  });

  it('escapes HTML in generated text', () => {
    const html = renderBlueprintHtml('Wear <script>alert(1)</script> boldly');
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });

  it('escapes HTML in the client name', () => {
    const html = renderBlueprintHtml('Body.', {
      clientName: '<img src=x onerror=alert(1)>',
      standalone: true,
    });
    expect(html).not.toContain('<img src=x');
    expect(html).toContain('&lt;img src=x');
  });

  it('escapes ampersands without double-escaping emphasis', () => {
    expect(renderBlueprintHtml('Tom **&** Jerry')).toBe(
      '<p>Tom <strong>&amp;</strong> Jerry</p>',
    );
  });

  it('returns a fragment by default and a document when standalone', () => {
    expect(renderBlueprintHtml('Hi.')).not.toContain('<!doctype html>');
    expect(renderBlueprintHtml('Hi.', { standalone: true })).toContain(
      '<!doctype html>',
    );
  });

  it('renders a horizontal rule', () => {
    expect(renderBlueprintHtml('One.\n\n---\n\nTwo.')).toContain('<hr />');
  });

  it('handles an empty document', () => {
    expect(renderBlueprintHtml('')).toBe('');
  });
});

describe('renderBlueprintText', () => {
  it('strips heading markers, emphasis, and bullet syntax', () => {
    const text = renderBlueprintText(
      '## Vibe\n\n**Bold** and *soft*.\n\n- First\n- Second',
    );
    expect(text).toContain('Vibe');
    expect(text).not.toContain('##');
    expect(text).not.toContain('**');
    expect(text).toContain('Bold and soft.');
    expect(text).toContain('• First');
  });
});

describe('numbered lists and links', () => {
  const topTen = '## 10. TOP 10 ITEMS\n\n1. A silk blouse\n2. Dark-wash jeans\n10. A luxury handbag';

  it('renders the Top 10 as a numbered list, one item per entry', () => {
    const html = renderBlueprintHtml(topTen);
    expect(html).toContain('<ol>\n<li>A silk blouse</li>\n<li>Dark-wash jeans</li>');
    expect(html).toContain('<li>A luxury handbag</li>\n</ol>');
    expect(html).not.toContain('<p>1.');
  });

  it('closes a bulleted list before a numbered one starts', () => {
    const html = renderBlueprintHtml('- Bullet\n1. Number');
    expect(html).toBe('<ul>\n<li>Bullet</li>\n</ul>\n<ol>\n<li>Number</li>\n</ol>');
  });

  it('renders http(s) links', () => {
    expect(renderBlueprintHtml('[Podcast](https://podcasts.apple.com/x)')).toBe(
      '<p><a href="https://podcasts.apple.com/x">Podcast</a></p>',
    );
  });

  it('does not link other URL schemes', () => {
    const html = renderBlueprintHtml('[click](javascript:alert(1))');
    expect(html).not.toContain('<a');
  });

  it('spells out links in the plain-text version', () => {
    expect(renderBlueprintText('[Podcast](https://podcasts.apple.com/x)')).toBe(
      'Podcast: https://podcasts.apple.com/x',
    );
  });
});
