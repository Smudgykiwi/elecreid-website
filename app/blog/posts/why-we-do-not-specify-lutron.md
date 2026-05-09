---
title: "Why we do not specify Lutron or Dynalite on new builds."
slug: "why-we-do-not-specify-lutron"
type: "Notes"
excerpt: "Both are workable. Neither is premium. The honest reason we recommend KNX, Basalte, and Ekinex for serious residential lighting in Melbourne."
publishedAt: "2026-05-10"
updatedAt: "2026-05-10"
author: "Joe Reid"
readingMinutes: 5
tags: ["KNX", "Lighting Control", "Specification", "Lutron", "Dynalite"]
hero: "/images/haven-dsc05653.jpg"
heroAlt: "Premium residential lighting and switch detail, Melbourne smart home install"
---

Two questions come up in nearly every architect-led project we walk into.

*"Should we run Lutron?"* and *"What do you think of Dynalite?"*

The honest answer is the same both times. Both are workable. Neither is what we would specify on a new build.

## The short version.

Lutron HomeWorks and Philips Dynalite are competent residential lighting platforms. They have been in the market for decades. Plenty of homes run them well. We have walked into Lutron jobs that have aged gracefully, and we have walked into Dynalite jobs that still hold a tune ten years on.

But we are not building a home for ten years. We are building it for thirty.

When we specify a residential lighting platform, the decision has to survive three things. Manufacturer roadmap. Local installer ecosystem. Integration with the platforms the family will actually use. KNX wins on all three. Lutron and Dynalite do not.

## On the manufacturer roadmap.

KNX is an open standard. It is governed by the KNX Association, with more than five hundred member manufacturers. A KNX dimmer made in 2026 will talk to a KNX presence sensor made in 2040. The bus is not owned by anyone. It cannot be killed by a corporate pivot.

Lutron HomeWorks is proprietary. It is excellent in its own ecosystem and almost impossible to extend outside of it. If Lutron decides next year to deprecate a module, change their API, or exit the Australian market, the platform in your client's home is on borrowed time.

Dynalite was independent until Philips acquired it in 2009, and Signify spun out of Philips in 2016. The Australian residential focus has softened over that period. The product is still good. The strategic commitment to the segment we work in is harder to read.

## On the local installer ecosystem.

KNX in Australia has a deep bench. Trained programmers, gear in stock, parts available next-day from multiple distributors. If our client buys this house in fifteen years, the next owner can find a KNX integrator without making three phone calls.

The same is not true for Lutron HomeWorks at the high end. The pool of HomeWorks-certified installers in Melbourne is small. If something needs reprogramming, the family's options narrow to whoever installed it, or one of two or three other firms, or no one.

Dynalite has a wider installer base than Lutron, but most of it is commercial. Residential Dynalite specialists with the chops to programme circadian rhythm scenes, integrate with Apple Home through manufacturer gateways, and document the head end properly are rarer than you would expect.

## On integration with the platforms families actually use.

The interface a family interacts with every day is on their phone. Apple Home for ninety percent of our clients. Sometimes Google Home, sometimes Home Assistant. The platform underneath has to bridge to that interface cleanly.

KNX bridges to Apple Home through KNX IoT gateways and Home Assistant integrations that are now mature, well-documented, and stable. The latency is low. The mapping is direct.

Lutron HomeWorks integrates with Apple Home through a HomeKit-certified bridge, but the relationship is shallow. Scenes sit on the Lutron side, with limited round-tripping back to Apple Home. Same story with Google Home.

Dynalite is even further removed. Most of the time it is bridged through a custom integration written by an installer. Custom integrations are fragile.

## So what do we specify?

KNX as the wired bus, every time. Basalte, Ekinex, Lithoss, Hager Silhouette, or Core Smart Home on the wall, picked by the architect. DALI fixtures wired into the bus where the spec allows it. Where Apple Home cannot reach, [Home Assistant](/brands) bridges the gap. [Control4](/brands) or [Basalte Home](/brands) sit on top as the fallback control surface for anyone who prefers a dedicated app.

The infrastructure does not change. The surface does. That is the standard we hold.

## What if the architect insists on Lutron?

We do not refuse the job. We document the trade-offs in writing, the architect signs off, and we install it to the same standard we would install KNX. *Workable* is not a failure. It is just not the place we start.

If you are at the design stage and you want a clean answer on what to spec, call us before the walls go up. The best time to make this decision is before the dimmer locations are even drawn.
