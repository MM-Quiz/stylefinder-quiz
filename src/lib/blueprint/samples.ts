/**
 * Authored Blueprint samples.
 *
 * Six Blueprints Mary Michele wrote by hand, sent to the model as worked
 * examples of her voice. Only the client-specific body of each is kept: the
 * cover letter, About page and "Yes, You Do Have a Style" are template text
 * (see `boilerplate.ts`), and the archetype sheet each one reproduces already
 * travels in the request as reference material.
 *
 * The text is transcribed from the PDFs with line-wrap hyphenation repaired
 * and nothing reworded. Playful Muse is the older Style & Brand format, so
 * only its style sections are kept; its brand-archetype and leadership pages
 * describe sections the Blueprint no longer has.
 *
 * `BLUEPRINT_EXAMPLES` is sent as a cached system block, so like
 * `BLUEPRINT_INSTRUCTIONS` it should change only when the samples do.
 */

import type { StyleType } from './archetypes';

export interface AuthoredSample {
  archetype: string;
  primary: StyleType;
  secondary: StyleType;
  supporting: StyleType;
  /** Her text, as Markdown. */
  body: string;
}

export const AUTHORED_SAMPLES: readonly AuthoredSample[] = [
  {
    archetype: 'The Genuine',
    primary: 'Classic',
    secondary: 'Natural',
    supporting: 'Sporty',
    body: `## Signature Style

Your Signature Style is a Beautiful Blend of Three Energies:

**Primary (80%) – Classic:** Polished, timeless, and refined. She values structure, simplicity, and quality. Her look is organized and intentional — every piece has purpose, and her wardrobe is built on versatile essentials that always look pulled together.

**Secondary (20%) – Natural:** Relaxed, comfortable, and authentic. She prefers clothing that feels easy and unfussy — soft fabrics, minimal effort, and practical styling that fits her lifestyle.

**Supporting (Influence) – Sporty:** Energetic, active, and modern. This influence brings in a touch of casual confidence and youthful energy — think sneakers with a blazer or a structured jacket paired with joggers or ponte knit pants.

**Overall Vibe:** Your vibe is Effortlessly Polished. You're that woman who looks composed yet approachable — refined without rigidity, relaxed without sloppiness. Your presence is calm, capable, and quietly confident.

## Core Style Elements

- **Structured Basics:** Blazers, crisp shirts, tailored pants, and clean denim that create a sharp foundation.
- **Neutral Palette:** Navy, camel, white, taupe, olive, and cinnamon — easy-to-mix tones that reflect quiet confidence.
- **Refined Comfort:** Fabrics that move and breathe — cotton, modal, ponte, lightweight cashmere.
- **Smart Layers:** Cardigans, softly structured jackets, and minimalist outerwear that balance polish with ease.
- **Subtle Accessories:** Leather totes, simple watches, loafers, and sleek sneakers that blend style with function.

## Your Style Statement: Simple Elegance

Your style is timeless, feminine, and deeply connected to memory. You feel most at home in clothing that carries both beauty and meaning—pieces that are soft, elegant, and often tell a story. At the same time, your Natural influence brings in comfort, ease, and wearability, so your wardrobe feels graceful yet grounded.

## Your Style in Action

- Pair a chic button-down shirt with stretch with jeans, loafers, and gold hoops for a look that's both classic and effortless.
- Layer a softly structured blazer or cardigan over a tee and slim joggers for a smart-casual balance.
- Build a capsule wardrobe of neutrals — every piece mixes and matches seamlessly.
- Choose clean sneakers or ballet flats for everyday polish with comfort.
- Keep hair and makeup natural and well-groomed — less "done," more intentional ease.

## Visibility Blocks

- **Playing It Too Safe:** Sticking to basics so much that she hides her personality behind them.
- **Comfort Over Confidence:** Choosing what's easy over what elevates her natural beauty and power.
- **Understating Her Presence:** Mistaking simplicity for invisibility — when her quiet confidence is magnetic.

## Superpowers

You embody Refined Ease, Reliable Presence, and Subtle Strength. Your power lies in consistency and calm authority — you earn trust effortlessly through your grounded style and understated elegance. You're proof that simplicity done well is unforgettable.

*"Her strength is subtle, her style unwavering — timeless by choice."*`,
  },
  {
    archetype: 'The Elemental',
    primary: 'Sporty',
    secondary: 'Natural',
    supporting: 'Whimsical',
    body: `## Signature Style

Your Signature Style is a Beautiful Blend of Three Energies:

**Primary: Sporty (80%)** — Dynamic, confident, and practical. You crave movement, simplicity, and clothes that keep up with your pace. Function meets freedom — your style exudes vitality, ease, and an athletic edge. (yang)

**Secondary: Natural (20%)** — Relaxed and approachable. Comfort is key, and your vibe is grounded, genuine, and effortlessly authentic. You love soft textures, breathable fabrics, and a palette that mirrors the natural world. (yin)

**Supporting: Whimsical (Influence)** — This adds a spark of fun and creativity — a pop of color, a quirky print, or an unexpected detail that makes your outfit uniquely you. It's your reminder not to take style too seriously and to let your personality shine through every choice. (yin)

**Overall Vibe:** Casual, creative confidence. You blend comfort and playfulness, creating a look that's easy to wear yet full of life — relaxed, approachable, and delightfully original.

## Core Style Elements

- **Relaxed Foundations:** Soft tees, easy joggers, denim, and cotton dresses that let you move freely.
- **Playful Accents:** Add your Whimsical twist through bright colors, quirky accessories, or unexpected textures.
- **Easy Layers:** Lightweight jackets, cardigans, and vests that bring dimension without fuss.
- **Natural Fabrics:** Cotton, linen, bamboo, and jersey that feel as good as they look.
- **Comfortable Shoes:** Stylish sneakers, espadrilles, or fun flats — never fussy, always functional.

## Your Style Statement: Comfort Chic

Comfortable, yet put together is your m.o. whether you're dressed for the gym or for the board room.

## Your Style in Action

- Pair classic denim with a graphic tee and colorful sneakers for instant energy.
- Layer a utility jacket over a soft floral or patterned top for contrast and charm.
- Add a playful scarf or statement earrings to elevate your everyday neutrals.
- Keep your hair and makeup natural — a little undone, a lot of personality.
- Mix solid basics with one bold, fun piece each day — a bag, shoe, or print that makes you smile.

## Visibility Blocks

- **Hiding Behind Comfort:** Choosing function over expression and losing your playful spark.
- **Overcomplicating Fun:** Adding too many whimsical details and losing your clean, Sporty foundation.
- **Underestimating Your Presence:** Thinking "casual" means invisible — when your energy naturally draws people in.

## Superpowers

- **Effortless Joy:** You radiate lightness — making everyone around you feel more at ease.
- **Authentic Expression:** You show that style can be both comfortable and creative.
- **Playful Confidence:** You turn the simplest outfit into something memorable — just by being yourself.

*"She moves through life with ease and joy — grounded in comfort, yet sprinkled with magic."*`,
  },
  {
    archetype: 'The Girl Next Door',
    primary: 'Natural',
    secondary: 'Classic',
    supporting: 'Romantic',
    body: `## Your Signature Style

Your Signature Style is a Beautiful Blend of Three Energies:

Effortlessly bold, confidently grounded, and timelessly refined. You embody a presence that feels both real and powerful — never overdone, always intentional.

**Primary Word (80%) Natural** — Effortless. Unforced. Confident in comfort. You feel your best when your clothes allow freedom — movement, breath, ease — and when your style feels authentic, grounded, and true.

**Secondary Word (20%) Classic** — Timeless. Polished. Refined. You appreciate clean lines and quality. Tradition and structure guide your taste, bringing elegance and composure to your wardrobe.

**Supporting Word (Influence) Romantic** — Soft. Feminine. Subtle grace. You're drawn to touches of beauty — gentle curves, soft fabrics, delicate details — that add warmth and femininity without feeling fussy.

**Overall Vibe:** Grounded elegance with a hint of softness. Your style whispers confidence — effortless, graceful, quietly powerful — where comfort meets timeless sophistication and a touch of feminine charm.

## Core Style Elements

- **Soft Structure** — Tailored silhouettes with relaxed fits — structured blazers over fluid tops, refined trousers with stretch.
- **Natural Textures & Breathable Fabrics** — Cotton, linen blends, knitwear, silk, cashmere — fabrics that feel good on the skin and move with the body.
- **Neutral + Soft Color Palette** — Warm neutrals, soft earth tones, gentle blush, muted jewel tones — colors that feel soothing and refined.
- **Minimal Details with Feminine Ease** — Think subtle pleating, soft ruffles, curved necklines, delicate jewelry — beauty in simplicity.
- **Comfort Elevated** — Polished casual: classic denim, elevated basics, soft blouses, knit dresses, timeless layers.

## Your Style Statement

"Effortless Elegance" is a style philosophy rooted in ease and practicality. It celebrates clothing that feels as good as it looks—comfortable, breathable fabrics, relaxed yet polished silhouettes, and versatile pieces that move with you and simplify your day.

You value beauty without the burden, choosing low-maintenance, high-quality essentials that deliver quiet sophistication and everyday ease. Your wardrobe works for your life, not the other way around, allowing you to show up confident, comfortable, and naturally refined with minimal effort.

## Your Style in Action

- Pair relaxed trousers or jeans with a classic button-down in soft silk or cotton.
- Choose a structured blazer over a feminine blouse or simple tee.
- Opt for ballet flats, loafers, sleek boots — shoes that are comfortable, yet chic.
- Layer lightweight sweaters, wrap cardigans, or cashmere for softness and ease.
- Mix neutrals with a soft romantic accent color like blush, champagne, or dusty rose.

## Visibility Blocks

- **Hiding in "Comfort"** — Defaulting to overly casual or sporty looks that downplay your polish and feminine power.
- **Fear of Standing Out** — Playing safe with neutrals or minimal details instead of allowing subtle romantic touches to shine.
- **Perfection Pressure** — Classic energy may make you hesitate until "everything is right," slowing momentum and visibility.

## Style Superpowers

- **Effortless Approachability** — People instantly feel at ease and trust you.
- **Timeless Presence** — You radiate sophistication without trying.
- **Soft Confidence** — You lead with calm warmth and feminine strength.

*"My wardrobe feels as good as it looks — relaxed silhouettes, soft fabrics, and polished essentials that let me move freely and shine naturally."*`,
  },
  {
    archetype: 'The Playful Muse',
    primary: 'Sporty',
    secondary: 'Whimsical',
    supporting: 'Delicate',
    body: `## Signature Style

Your signature style is a beautiful blend of three energies:

**Sporty (Primary – 80%):** You feel most at home in comfort, function, and ease. You're drawn to unfussy silhouettes, fabrics that move with you, and looks that are practical yet still polished. (yang)

**Whimsical (Secondary – 20%):** You love sprinkling in playful touches—unexpected prints, quirky accessories, pops of color, or fun textures that keep your wardrobe feeling light and uniquely yours. (yin)

**Delicate (Influence):** You add a layer of refinement and softness through lightweight fabrics, subtle details like lace or embroidery, and dainty jewelry that bring a feminine, graceful touch. (yin)

**Overall Vibe:** Relaxed yet expressive. Your style communicates that you're approachable, fun, and subtly feminine—never overdone.

*"Your style is the perfect balance of ease and expression—grounded in comfort, lit up by playful touches, and softened with feminine grace. Effortless yet unmistakably you."*

## Superpower

Your superpower is authentic connection with levity. You disarm people with your warmth and playfulness, making even serious situations feel approachable. You bring lightness to the room without losing credibility and inspire others to see new possibilities through creativity and curiosity.

## Biggest Challenges

- **Sporty:** Risk of appearing too casual or not being taken seriously in high-level settings.
- **Whimsical:** Can feel scattered or less professional if not grounded.
- **Delicate:** May avoid conflict, over-accommodate, or be underestimated in authority roles.

You may also struggle with visibility—playing small or softening yourself too much to be "liked," which can dilute your presence.`,
  },
  {
    archetype: 'The Easy Going',
    primary: 'Natural',
    secondary: 'Sporty',
    supporting: 'Romantic',
    body: `## Your Signature Style

Your Signature Style is a Beautiful Blend of Three Energies:

### Primary Energy – Natural (80%)

Grounded, approachable, authentic, and ease-driven. Natural is about comfort, breathability, and being yourself without artifice. This energy craves freedom of movement and an unforced presence. (yin)

### Secondary Energy – Sporty (20%)

Energetic, functional, and quietly confident. Sporty brings structure, performance, and a sense of capability — pieces that do something, not just look good. (yang)

### Supporting Influence – Romantic (yin)

Your Romantic influence softens and elevates the entire expression. It brings warmth, sensuality, femininity, emotional depth, and beauty into your style identity. Without this influence, your Natural/Sporty combination could become overly utilitarian or understated. Romantic reminds you that softness is not weakness. Beauty matters. Emotion matters. Pleasure matters.

## Your Superpowers

- **Grounded Magnetism** — You make people feel safe, seen, and emotionally connected. Your presence has a calming influence that builds trust naturally.
- **Effortless Relatability** — You possess the rare ability to feel elevated without feeling intimidating. People are drawn to you because you feel authentic rather than performative.
- **Embodied Feminine Leadership** — When fully aligned, you lead through presence, warmth, steadiness, and emotional congruence rather than force. Your style becomes an extension of self-trust.

## Core Style Elements

### Silhouettes

Your best silhouettes create ease with intention. You are not meant for stiff tailoring or highly constricted clothing. Instead, your body thrives in pieces that gently skim the body, drape with ease, and breathe.

Look for: softly structured blazers, relaxed straight-leg or wide-leg trousers, fluid dresses with waist definition, easy layers, softly fitted knits, elevated athleisure-inspired shapes, wrap styles, softly tapered silhouettes.

Your clothing should feel like an extension of your nervous system — supportive, calming, and freeing.

### Details

Your details should feel intentional but never fussy.

Best details include: soft draping, subtle ruching, natural buttons, wrap elements, tonal layering, mixed textures, relaxed collars, feminine necklines, visible softness around the face.

Avoid overly sharp, rigid, hyper-ornate, or excessively trendy details that disconnect you from your grounded essence. The goal is effortless movement, grounded femininity, and polished ease. Think soft draping, flowing fabrics, relaxed structure, earthy elegance, and pieces that feel beautiful without feeling fussy.

### Accessories

Your accessories work best when they feel collected rather than overstyled.

Beautiful choices include: organic jewelry, layered delicate metals, textured leather bags, scarves with movement, refined sneakers, soft boots, meaningful pieces with story or sentiment, relaxed hats, natural stones.

Your accessories should whisper sophistication rather than demand attention.

## Style Icons

- **Jennifer Garner** — Borrow her approachable polish, grounded femininity, and relaxed confidence.
- **Gwyneth Paltrow** — Embody her refined ease, elevated neutrals, and understated sensuality.
- **Ali MacGraw** — Take inspiration from her earthy elegance, natural beauty, and relaxed sophistication.
- **Kate Hudson** — Borrow her radiant vitality, movement, and playful feminine energy.
- **Diane Lane** — Reflect her quiet sensuality, emotional depth, and timeless ease.

## What Happens When Your Wardrobe Is Aligned

When your StyleFinder ID is supported, you look approachable, capable, confident, quietly powerful. People naturally trust you and feel comfortable in your presence.

Your style says: "I'm grounded, capable, and ready for whatever the day brings."

*"I am allowed to take up space with softness, beauty, and ease."*

## 5 Ways to Wear Your Style

1. **The Elevated Everyday Look** — Soft wide-leg pants, a draped knit top, layered jewelry, and refined sneakers or sandals. Comfortable, polished, and effortlessly pulled together.
2. **The Soft Professional** — A fluid blazer layered over a monochromatic column of color with relaxed trousers or a knit dress. Professional without stiffness.
3. **The Feminine Casual** — A flowing midi dress with soft movement paired with a denim jacket, woven bag, and natural textures. Easy, approachable, and beautiful.
4. **The Romantic Natural** — Soft fabrics, gentle waist definition, earthy colors, and subtle feminine details like ruching, wrap styling, or delicate jewelry.
5. **The Modern Sporty Luxe** — Elevated athleisure-inspired pieces styled intentionally — structured leggings, longline layers, premium knits, sleek sneakers, and tonal dressing.

## Overall Style Description

Your style is grounded, feminine, effortless, and alive. You are not meant for overly structured, harsh, or trend-driven clothing that disconnects you from yourself. Instead, your beauty comes alive through movement, softness, texture, and ease.

The Natural foundation creates authenticity and relaxed sophistication. The Sporty influence adds freshness, confidence, and modern energy. The Romantic layer brings softness, sensuality, and emotional warmth.

The result is a style that feels approachable yet magnetic — polished without trying too hard, feminine without feeling performative, and comfortable without disappearing.

Think: elevated ease, soft movement, feminine athleticism, grounded sensuality, effortless polish, relaxed elegance.

## Top 10 Wardrobe Essentials

1. **Wide-Leg Trousers** — Fluid, elongating, and grounding. One of your most flattering core pieces.
2. **Soft Knit Tops** — Touchably soft pieces that drape rather than cling.
3. **Relaxed Blazer** — Unstructured or softly tailored for polish without rigidity.
4. **Flowing Midi or Maxi Dresses** — Movement is essential to your energy and presence.
5. **Elevated Sneakers** — Clean, modern sneakers that support your Sporty influence while maintaining sophistication.
6. **Soft Denim** — Relaxed straight-leg, bootcut, or wide-leg denim with softness and stretch.
7. **Lightweight Layers** — Cardigans, wraps, dusters, or utility-inspired jackets with movement.
8. **Romantic Blouses** — Soft necklines, draping, feminine sleeves, or wrap styling to bring warmth near the face.
9. **Organic Accessories** — Layered metals, natural stones, woven textures, soft leather bags, and meaningful jewelry.
10. **Tonal Neutrals & Rich Colors** — Camel, ivory, olive, soft navy, warm pink, eucalyptus, warm taupe, and sea-glass tones create your most aligned palette.

## Your Style in Action

- Create a wardrobe that supports your real life instead of an imaginary version of yourself. Your style should help you participate more fully in your life, business, relationships, and visibility.
- Lead from grounded embodiment rather than performance. People trust you most when your presence feels authentic, calm, and emotionally congruent.
- Prioritize clothing that allows movement, breath, and nervous system regulation — especially during speaking, leadership, travel, or visibility moments.
- Let softness become part of your authority. You do not need to harden yourself to be respected.
- Curate spaces, rituals, and environments that reflect your style identity — not just your closet. Your home, branding, communication, and energy all become extensions of your embodiment.

## Visibility Blocks

1. **Shrinking Through Over-Comfort** — Because comfort matters deeply to you, there can be a tendency to disappear into overly casual clothing, muted self-expression, or "safe" styling that minimizes your presence.
2. **Confusing Softness with Weakness** — Your Romantic influence makes you emotionally intelligent, warm, and receptive — but you may fear that being soft means you won't be taken seriously.
3. **Delaying Visibility Until You Feel "Ready"** — Natural energy often wants certainty before stepping forward. You may wait until your body changes, your wardrobe feels perfect, your confidence improves, or your life calms down. But your visibility expands through participation, not perfection.

## Top 10 Items

1. An ivory knit top
2. Camel wide-leg trousers
3. A relaxed blazer in soft navy or camel
4. A flowing floral midi dress with waist definition
5. Medium wash wide-leg jeans
6. A lightweight long cardigan or duster
7. A wrap-style blouse in a soft romantic color
8. Elevated white or cream leather sneakers
9. A buttery leather crossbody or tote bag in cognac or taupe
10. A delicate layered gold necklace with organic texture or natural stone details

Choose items that are easy wear, easy care, and can mix and match to create endless outfits.`,
  },
  {
    archetype: 'The Trendsetter',
    primary: 'Contemporary',
    secondary: 'Whimsical',
    supporting: 'Dramatic',
    body: `## Signature Style

Your Signature Style is a Beautiful Blend of Three Energies:

### Primary Energy – Contemporary (80%)

Modern, directional, and of-the-moment. Contemporary style is about now: clean lines, architectural shapes, bold simplicity, and an intuitive sense of what feels current without being overly trendy. (yang)

### Secondary Energy – Whimsical (20%)

Playful, imaginative, and unexpected. Whimsical energy brings delight, creativity, and surprise — a wink in the outfit that says 'I don't take myself too seriously.' (yin)

### Supporting Influence – Dramatic

Bold, commanding, and visually striking. Dramatic influence adds presence, scale, contrast, and confidence, ensuring the look never fades into the background. (yang)

**Overall Vibe:** Editorial meets playful. This style feels modern and confident with an artistic twist — polished but never predictable, bold yet joyful, always leaving people curious about what you'll wear next.

## Your Style in Action

1. Pair a sleek monochrome outfit with a playful, unexpected accessory.
2. Choose one dramatic piece per look — coat, shoe, or neckline — and keep the rest clean.
3. Wear modern tailoring with a whimsical detail (color, print, or shape).
4. Use contrast intentionally: masculine/feminine, sharp/soft, minimal/playful.
5. Let your outfit feel like a conversation starter, not an explanation.

## Visibility Blocks

1. **Fear of Being Too Much** — You may hesitate to fully express your boldness, worrying it draws too much attention. Reframe: Your style is meant to be seen — restraint dulls your sparkle.
2. **Over-Editing for Acceptance** — You may tone things down to appear more "appropriate" or palatable. Reframe: The right rooms expand when you show up fully expressed.
3. **Second-Guessing Your Instincts** — Your intuition is strong, but you may question your choices. Reframe: Your instincts are your style intelligence.

## Superpowers

- You turn modern style into art.
- You surprise people in the best way — visually and energetically.
- You naturally stand out without chasing attention.

## Your Style Statement: Stylish Surprise

Modern and polished at first glance, then unexpectedly playful and bold — a confident blend of clean lines, artistic twists, and dramatic moments that make you impossible to overlook.

## 5 Core Style Elements

### Silhouettes

- Strong shoulders, sculptural shapes, asymmetry
- Wide-leg trousers, modern suiting, statement coats
- Unexpected volume or proportion shifts

### Textures

- Matte + shine contrast (crepe with leather, wool with satin)
- Structured fabrics paired with fluid movement
- Occasional playful texture (feathers, pleats, quilting)

### Colors

- Black, white, charcoal, navy as anchors
- Unexpected pops: chartreuse, cobalt, magenta, vermillion
- Graphic color-blocking over soft blending

### Details

- Asymmetry, cut-outs, bold seams, architectural folds
- One unexpected element per outfit (not five)
- Clean base with a twist

### Accessories

- Statement earrings or cuffs
- Sculptural shoes
- Bold eyewear
- Artistic handbags (shape over logo)

## Style Icons

- **Zendaya** — Fearless with scale and silhouette, she blends high-fashion drama with youthful creativity.
- **Tilda Swinton** — Architectural, minimalist, and quietly powerful with an edge.
- **Iris Apfel** — Proof that style can be bold, playful, and entirely self-authored.
- **Jenna Lyons** — Modern, artistic, and eclectic with a strong visual point of view.

*"My comfort and presence can coexist."*`,
  },
];

/** How the samples are framed for the model. */
const PREAMBLE = `AUTHORED EXAMPLES

Below are six Blueprints Mary Michele Nidiffer, the creator of the StyleFinder ID®, wrote by hand for real clients. They are the standard your Blueprint is measured against. Study them for her voice: the rhythm of her sentences, how warmly and directly she speaks to the client, how specific she is about garments and colors, and how she lets the Secondary and Supporting energies change the Primary.

They are examples, not templates.

- Follow the section list and order in your instructions. The examples were written over time and their headings, order and length vary; do not copy their structure.
- Never reuse an example's sentences. If the client shares an example's archetype, her Blueprint must still be written fresh — her Supporting StyleType and her name make her a different woman.
- An example's style icons, colors and items belong to that client. Draw hers from her own reference material.
- Some examples write about the client in the third person ("She values structure"). Write in the second person throughout.`;

function formatSample(sample: AuthoredSample, index: number): string {
  return [
    `EXAMPLE ${index + 1} — ${sample.archetype}: ${sample.primary} (Primary), ${sample.secondary} (Secondary), ${sample.supporting} (Supporting)`,
    '',
    '<example>',
    sample.body,
    '</example>',
  ].join('\n');
}

/** The examples as one system block, sent after the instructions. */
export const BLUEPRINT_EXAMPLES = [
  PREAMBLE,
  ...AUTHORED_SAMPLES.map(formatSample),
].join('\n\n');
