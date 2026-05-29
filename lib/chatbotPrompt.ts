export const elecReidAssistantPrompt = `
You are Ed, the Elec Reid website concierge. You are not a novelty chatbot. You are the public, client-safe version of how Joe Reid thinks through electrical, smart home, automation, AV, network and security projects.

Your job is to make the visitor feel like they are speaking with a trained Elec Reid team member who understands how Joe would qualify, diagnose, recommend and move the project forward.

Identity and voice:
- You are Ed, the Elec Reid website assistant, not Joe and not a human staff member.
- Say we, us and our team. Never say they when referring to Elec Reid.
- Calm, confident, premium, practical. Short and high-signal.
- Answer the actual question first. Then interpret what it means for the project. Then ask one useful next question.
- Use Australian English.
- Never use the word quote. Use proposal or plan.
- Never use em dashes or en dashes in client-facing copy.
- Do not use markdown bold or sales hype.
- Keep most answers under 140 words unless the visitor asks for detail.

The Joe Reid decision model:
- Design before wiring. If the project is still planning, the best value is mapping the system before prewire.
- Infrastructure first, interface second. A beautiful app is useless if the cabling, rack, network, lighting control and documentation are poor.
- The best technology is unseen. If it is seen, it should work with the architecture.
- Reliability is the standard. Documentation is what makes the system maintainable.
- For premium homes, the likely direction is Apple Home as the everyday interface, KNX underneath for reliable lighting, HVAC and shading, UniFi for the network, and a planned rack/documentation layer.
- For design-led homes with minimal wall clutter, Basalte is often the keypad/control direction.
- For families, guests, clear labels or less technical users, Ekinex can be the better keypad direction.
- For AV-heavy homes with cinema, multi-room audio and one mature ecosystem, Control4 can be the right discussion.
- For technical clients or unusual integrations, Home Assistant can sit carefully as a flexible layer, but never as a messy DIY core.
- For commercial and industrial enquiries, lead with responsiveness, documentation, quality, safety, clean delivery, flexibility around site conditions and communication with stakeholders.

What Elec Reid does:
- Melbourne electrical contractor for residential, commercial and industrial projects.
- Premium smart homes and automation.
- Electrical, lighting, switchboards, power, data, AV, home theatre, whole-home audio, networking, security, CCTV, access control, intercoms, automation, commissioning and documentation.
- Registered Electrical Contractor REC 35750. Licensed and insured. Certificates of Electrical Safety on completion.
- Contact: 0450 342 075, joe@elecreid.com.
- Main project intake: elecreid.com/build.

Product and platform guide:
- Apple Home: the everyday interface. Familiar, clean and usable for clients.
- KNX: reliable infrastructure for lighting, HVAC and shading. Best used where long-term stability matters.
- Basalte: architectural control and luxury keypad/touch interface. Strong when finishes and wall clutter matter.
- Ekinex: premium labelled keypads. Strong when usability for family and guests matters.
- Control4: mature single ecosystem. Strong for AV-heavy homes, cinema, audio and centralised experience.
- Home Assistant: flexible custom layer. Use carefully for power users and unique integrations.
- UniFi: preferred networking layer. A serious smart home needs planned network, rack, Wi-Fi coverage and documentation.
- Inner Range/Inception, CCTV, intercom and access control: security should be planned as part of the system, not added randomly later.
- Dynalite, C-Bus and Lutron: existing or specified lighting-control systems can be supported or discussed where relevant.

Conversation state to track silently:
- visitor segment: homeowner, architect, builder, commercial, industrial, unsure.
- project type: new build, renovation, existing-home upgrade, commercial, industrial, maintenance, urgent safety.
- stage: planning, design, framing, prewire, fit-off, existing, urgent.
- scale: levels, bedrooms, rooms, zones, commercial area, industrial site type.
- priorities: lighting, audio, cinema, network, security, access, climate, shading, minimal wall clutter, labelled controls, reliability, documentation.
- existing systems: Apple Home, KNX, Control4, C-Bus, Dynalite, Lutron, Home Assistant, UniFi, alarm, CCTV, HVAC, solar, gates.
- location/timing and contact readiness.

Reply pattern:
1. Direct answer.
2. Joe-style interpretation: what this means for the system.
3. Recommendation direction if enough is known.
4. One next question only.

Do not ask for something already supplied. If the visitor says planning, do not ask stage again. If they give size and priorities in one message, move to suburb/timing or next step.

Safety boundaries:
- Do not give step-by-step electrical repair instructions.
- If the visitor mentions smoke, fire, sparks, electric shock, burning smell, exposed live wires, water in fittings, switchboard fire or immediate danger, tell them it may be unsafe, call emergency services if there is immediate danger, do not touch affected equipment, and call a licensed electrician. Give 0450 342 075.

Pricing guidance only when asked:
- Luxury automation projects generally start around $90,000+.
- Many full smart homes sit around $150,000 to $200,000.
- Premium homes regularly start from $300,000+.
- Existing-home Apple Home or older-system modernisation often starts around $8,000 to $9,000+.
- Present these as planning ranges, never fixed pricing.

Lead conversion:
- If they are early: guide them to design and plan.
- If they have plans: ask for floor plans and ceiling/lighting plans if available.
- If they are ready: suggest a plan review or site visit.
- If they want structured intake: send them to elecreid.com/build.
- Capture suburb, timeline, project type, stage, priorities and preferred contact when appropriate.

Privacy and facts:
- Never share client names, addresses, private project values, supplier terms, margins or private business details.
- Do not invent facts, prices, dates or capabilities.
- If unsure, say what we can confirm and suggest the team reviews it.
`;

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ConciergeState = {
  projectType: string | null;
  stage: string | null;
  segment: string | null;
  size: boolean;
  priorities: string[];
  systems: string[];
  locationOrTimeline: boolean;
  contact: boolean;
  askedStage: boolean;
  askedType: boolean;
  askedSize: boolean;
  askedPriorities: boolean;
  askedLocation: boolean;
};

const includesAny = (text: string, terms: string[]) => terms.some((term) => text.includes(term));
const normalise = (value: string) => value.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, ' ').trim();
const userMessages = (messages: ChatMessage[]) => messages.filter((message) => message.role === 'user').map((message) => normalise(message.content));
const assistantMessages = (messages: ChatMessage[]) => messages.filter((message) => message.role === 'assistant').map((message) => normalise(message.content));
const lastUserMessage = (messages: ChatMessage[]) => userMessages(messages).at(-1) || '';

const unique = (items: string[]) => [...new Set(items)];

const stageFromText = (text: string) => {
  if (/\b(planning|design|architect|plans|drawing|concept|prelim)\b/.test(text)) return 'planning';
  if (/\b(framing|frame stage|frame)\b/.test(text)) return 'framing';
  if (/\b(prewire|pre wire|pre-wire|rough in|rough-in|roughin)\b/.test(text)) return 'prewire';
  if (/\b(fit off|fit-off|fitoff|commissioning|handover)\b/.test(text)) return 'fit-off';
  if (/\b(existing|already built|lived in)\b/.test(text)) return 'existing';
  return null;
};

const typeFromText = (text: string) => {
  const starterPrompt = includesAny(text, ['building or renovating', 'new build or renovation', 'new build, renovation']);
  if (!starterPrompt && /\b(new build|new home|custom home|knockdown|knock down|architectural home)\b/.test(text)) return 'new build';
  if (!starterPrompt && /^new$/.test(text)) return 'new build';
  if (!starterPrompt && /\b(renovation|renovating|reno|extension|alteration)\b/.test(text)) return 'renovation';
  if (/\b(existing home|existing house|upgrade|retrofit|modernise|modernize|replace old|older system|already built|built|current home)\b/.test(text)) return 'existing-home upgrade';
  if (/\b(commercial|office|shop|retail|fitout|fit out|hospitality|warehouse)\b/.test(text)) return 'commercial';
  if (/\b(industrial|factory|plant|workshop|facility|manufacturing)\b/.test(text)) return 'industrial';
  if (/\b(maintenance|callout|repair|fault|tripping|no power)\b/.test(text)) return 'electrical service';
  return null;
};

const segmentFromText = (text: string) => {
  if (/\b(builder|site manager|construction manager)\b/.test(text)) return 'builder';
  if (/\b(architect|designer|interior designer|studio)\b/.test(text)) return 'architect or designer';
  if (/\b(facility|facilities|operations|property manager|business owner)\b/.test(text)) return 'commercial decision-maker';
  if (/\b(my home|our home|house|family|kids|wife|husband)\b/.test(text)) return 'homeowner';
  return null;
};

const extractKnownState = (messages: ChatMessage[]): ConciergeState => {
  const users = userMessages(messages);
  const text = users.join(' ');
  const assistants = assistantMessages(messages);
  const priorityMap: [string, string[]][] = [
    ['lighting', ['lighting', 'lights', 'scene', 'dali', 'dynalite', 'c-bus', 'cbus', 'lutron']],
    ['audio', ['audio', 'speakers', 'music', 'sonos', 'wiim', 'whole-home audio', 'whole home audio']],
    ['cinema', ['cinema', 'theatre', 'theater', 'projector', 'media room']],
    ['network', ['network', 'wifi', 'wi-fi', 'unifi', 'rack', 'data']],
    ['security', ['security', 'cctv', 'camera', 'alarm', 'intercom', 'access control', 'gate']],
    ['climate and shading', ['climate', 'hvac', 'air con', 'blinds', 'curtains', 'shading']],
    ['minimal design', ['minimal', 'wall clutter', 'architectural', 'invisible', 'clean walls', 'basalte']],
    ['labelled usability', ['labelled', 'labels', 'family', 'guests', 'ekinex', 'simple buttons']],
    ['reliability and documentation', ['reliable', 'reliability', 'documentation', 'handover', 'maintainable']],
  ];
  const systemMap: [string, string[]][] = [
    ['Apple Home', ['apple home', 'homekit']],
    ['KNX', ['knx']],
    ['Control4', ['control4', 'control 4']],
    ['Home Assistant', ['home assistant']],
    ['Basalte', ['basalte']],
    ['Ekinex', ['ekinex']],
    ['UniFi', ['unifi']],
    ['C-Bus', ['c-bus', 'cbus', 'clipsal']],
    ['Dynalite', ['dynalite']],
    ['Lutron', ['lutron']],
    ['Inception', ['inception', 'inner range']],
  ];

  return {
    projectType: users.map(typeFromText).find(Boolean) || null,
    stage: users.map(stageFromText).find(Boolean) || null,
    segment: users.map(segmentFromText).find(Boolean) || null,
    size: /\b(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s*(beds?|bedrooms?|levels?|storeys?|stories?|floors?|zones?|rooms?|sqm|m2|baths?|bathrooms?|cars?|garages?|offices?|warehouses?|tenancies?)\b/.test(text) || includesAny(text, ['single storey', 'double storey', 'three storey', 'four storey', 'whole home', 'townhouse', 'apartment', 'large home']),
    priorities: unique(priorityMap.filter(([, terms]) => includesAny(text, terms)).map(([priority]) => priority)),
    systems: unique(systemMap.filter(([, terms]) => includesAny(text, terms)).map(([system]) => system)),
    locationOrTimeline: includesAny(text, ['toorak', 'south yarra', 'brighton', 'malvern', 'glen iris', 'glen waverley', 'st kilda', 'torquay', 'melbourne', 'mornington', 'peninsula', 'next month', 'this month', 'this year', 'asap', 'soon', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', '2026', '2027']),
    contact: /\b[\w.-]+@[\w.-]+\.\w+\b/.test(text) || /\b0\d{3}\s?\d{3}\s?\d{3}\b/.test(text) || includesAny(text, ['call me', 'contact me', 'book', 'site visit', 'plan review']),
    askedStage: assistants.some((message) => includesAny(message, ['planning, framing', 'what stage', 'stage are you'])),
    askedType: assistants.some((message) => includesAny(message, ['new build, renovation', 'new build or renovation', 'existing-home upgrade', 'commercial project'])),
    askedSize: assistants.some((message) => includesAny(message, ['roughly how big', 'levels, bedrooms', 'rough size', 'key zones'])),
    askedPriorities: assistants.some((message) => includesAny(message, ['top two priorities', 'what matters most', 'hoping to improve first', 'main priorities'])),
    askedLocation: assistants.some((message) => includesAny(message, ['what suburb', 'roughly when', 'when do you want work'])),
  };
};

const hasSafetyRisk = (text: string) =>
  includesAny(text, ['smoke', 'fire', 'sparks', 'spark', 'shock', 'electric shock', 'burning smell', 'burning', 'exposed wire', 'live wire', 'water in light', 'water in fitting', 'switchboard fire', 'danger']);

const safetyReply = () =>
  'That may be unsafe. If there is smoke, fire, electric shock, exposed live wiring or immediate danger, call emergency services and do not touch the affected equipment.\n\nFor urgent electrical help, call Elec Reid on 0450 342 075. Is everyone safe right now?';

const offTopicReply = (latest: string) => {
  if (includesAny(latest, ['who are you', 'what are you', 'your name', 'what model are you', 'are you chatgpt', 'are you claude', 'what ai'])) {
    return 'I am Ed, the Elec Reid website assistant. I can explain our services, compare smart home systems, help shape an enquiry, and point you to the right next step.\n\nWhat are you trying to work out?';
  }
  if (includesAny(latest, ['date', 'attractive', 'nice person', 'owner'])) {
    return 'I cannot help with personal questions about Joe or the team. I can help with Elec Reid projects, smart home systems, electrical work, pricing ranges and next steps.\n\nWhat are you planning?';
  }
  return null;
};

const recommendationSentence = (state: ConciergeState) => {
  const priorities = state.priorities;
  if (state.projectType === 'commercial' || state.projectType === 'industrial') {
    return 'The right direction is a clear site scope, safe staging, documented works and fast communication around access, shutdowns and other trades.';
  }
  if (priorities.includes('cinema') || priorities.includes('audio')) {
    return 'The system direction should include rack planning, UniFi networking, audio zones, cinema control, lighting scenes and a simple client interface from the start.';
  }
  if (priorities.includes('minimal design')) {
    return 'The likely direction is Apple Home as the everyday interface, KNX underneath, UniFi networking and Basalte-style architectural controls where the walls need to stay quiet.';
  }
  if (priorities.includes('labelled usability')) {
    return 'The likely direction is Apple Home for daily use, KNX underneath and labelled Ekinex-style keypads so family and guests are not guessing.';
  }
  if (state.systems.includes('Control4')) {
    return 'Control4 is worth discussing where AV, cinema and one mature control ecosystem are central to the home.';
  }
  if (state.systems.includes('Home Assistant')) {
    return 'Home Assistant can be powerful, but we would keep the core infrastructure reliable and use it carefully for custom logic, dashboards or unusual integrations.';
  }
  if (state.projectType === 'new build' || state.projectType === 'renovation') {
    return 'The likely premium direction is Apple Home for everyday control, KNX for reliable lighting and services, UniFi for network, and a documented rack and commissioning plan.';
  }
  if (state.projectType === 'existing-home upgrade') {
    return 'For an existing home, we would first check what wiring and systems are already there, then decide what can be modernised cleanly without turning the home into a science project.';
  }
  return 'The useful move is to understand the project shape first, then recommend the control layer, wiring, network, security and documentation path around it.';
};

const costReply = (state: ConciergeState) => {
  const nextQuestion = state.projectType
    ? state.stage
      ? state.size
        ? 'What matters most: lighting, audio, security, network reliability, shading, minimal controls or clear labelled controls?'
        : 'Roughly how big is the project and which zones matter most?'
      : 'What stage is it at: planning, framing, prewire, fit-off, or already built?'
    : 'Is this a new build, renovation, existing-home upgrade, commercial site or industrial site?';

  return `As a planning guide, luxury automation projects generally start around $90,000+. Many full smart homes sit around $150,000 to $200,000, and premium homes regularly start from $300,000+. Existing-home Apple Home or older-system modernisation often starts around $8,000 to $9,000+.\n\nThose are ranges, not fixed pricing. ${nextQuestion}`;
};

const platformReply = (state: ConciergeState) => {
  const nextQuestion = state.projectType
    ? state.stage
      ? 'What are the main priorities for the project?'
      : 'What stage is the project at now?'
    : 'Is this for a new build, renovation, existing home, commercial site or industrial site?';

  return `Apple Home is the everyday interface clients actually use. KNX is the reliable infrastructure underneath for lighting, HVAC and shading. Control4 is strongest when AV, cinema and a single mature ecosystem are central.\n\nFor most premium homes, Apple Home over KNX is the cleanest long-term direction. ${nextQuestion}`;
};

const nextDiscoveryReply = (state: ConciergeState, latest: string) => {
  if (includesAny(latest, ['this makes no sense', 'doesnt make sense', "doesn't make sense", 'you already asked', 'already told you', 'not smart', 'stupid', 'dumb'])) {
    if (!state.projectType) {
      return 'Fair call. I lost the thread there. To give useful advice, I need the project type first.\n\nIs this a new build, renovation, existing-home upgrade, commercial site or industrial site?';
    }
    if (!state.stage && state.projectType !== 'existing-home upgrade' && state.projectType !== 'commercial' && state.projectType !== 'industrial') {
      return 'Fair call. I lost the thread there. Let us reset to the useful next question.\n\nWhat stage is the project at: planning, framing, prewire or fit-off?';
    }
    if (!state.size) {
      const sizeQuestion = state.projectType === 'existing-home upgrade'
        ? 'which areas you want upgraded first, and roughly how big the home is?'
        : 'roughly how big the project is, and which rooms or zones matter most?';
      return `Fair call. I jumped ahead. ${recommendationSentence(state)}\n\nCan you tell me ${sizeQuestion}`;
    }
    return `${recommendationSentence(state)}\n\nThe useful next step is a plan review or site visit. If you have plans, send them through elecreid.com/build, or leave your best contact details and our team can follow up.`;
  }

  if (/^(ok|okay|yep|yes|yeah|sure|cool)$/.test(latest)) {
    if (!state.projectType) {
      return 'Good. To make the advice useful, we need to anchor it to the type of project.\n\nIs this a new build, renovation, existing-home upgrade, commercial site or industrial site?';
    }
    if (!state.stage && state.projectType !== 'existing-home upgrade' && state.projectType !== 'commercial' && state.projectType !== 'industrial') {
      return 'Good. The next useful detail is timing, because it changes what can still be designed cleanly.\n\nWhat stage is the project at: planning, framing, prewire or fit-off?';
    }
  }

  if (includesAny(latest, ['thanks', 'thank you', 'perfect', 'great', 'that helps'])) {
    return 'Glad that helped. If you send through plans or contact details, our team can turn this into a clearer next step.';
  }

  if (!state.projectType && state.askedType) {
    return 'I need to anchor the advice to the project type before narrowing the system.\n\nIs this a new build, renovation, existing-home upgrade, commercial site or industrial site?';
  }

  if (!state.stage && state.askedStage && state.projectType !== 'existing-home upgrade' && state.projectType !== 'commercial' && state.projectType !== 'industrial') {
    return 'The stage matters because it changes what can still be designed cleanly.\n\nAre you at planning, framing, prewire or fit-off?';
  }

  if (!state.stage && !state.askedStage && !state.projectType?.includes('commercial') && state.projectType !== 'industrial' && state.projectType !== 'existing-home upgrade') {
    return `Start with design before wiring. ${recommendationSentence(state)}\n\nWhat stage are you at: planning, framing, prewire, or fit-off?`;
  }

  if (!state.projectType && !state.askedType) {
    const lead = state.stage === 'planning' ? 'Planning is the right time to make the system feel simple later.' : 'That timing still gives us room to make useful decisions.';
    return `${lead} ${recommendationSentence(state)}\n\nIs it a new build, renovation, existing-home upgrade, commercial site or industrial site?`;
  }

  if (!state.size && !state.askedSize) {
    const sizeQuestion = state.projectType === 'commercial' || state.projectType === 'industrial'
      ? 'Roughly how big is the site, and what areas or equipment are involved?'
      : state.projectType === 'existing-home upgrade'
        ? 'Roughly how big is the home, and which areas do you want upgraded first?'
        : 'Roughly how big is it: levels, bedrooms, rooms, zones or site areas?';
    return `Good. ${recommendationSentence(state)}\n\n${sizeQuestion}`;
  }

  if (state.priorities.length === 0 && !state.askedPriorities) {
    return 'That gives us the project shape. Now we narrow the system around what matters most.\n\nWhat are the top two priorities: lighting, audio, cinema, security, network reliability, shading, minimal wall clutter, or simple labelled controls?';
  }

  if (!state.locationOrTimeline && !state.askedLocation) {
    return `${recommendationSentence(state)}\n\nWhat suburb is the project in, and roughly when do you want work to begin?`;
  }

  if (!state.contact) {
    return `${recommendationSentence(state)}\n\nThe best next step is a plan review or site visit. If you have floor plans, send them through elecreid.com/build, or leave your best contact details and our team can follow up.`;
  }

  return `${recommendationSentence(state)}\n\nWe have enough to move this forward. Our team can review the plans or site conditions and turn it into a clear scope and next step.`;
};

export const fallbackAssistantReply = (messagesOrMessage: ChatMessage[] | string) => {
  const messages: ChatMessage[] = typeof messagesOrMessage === 'string' ? [{ role: 'user', content: messagesOrMessage }] : messagesOrMessage;
  const latest = lastUserMessage(messages);
  const state = extractKnownState(messages);

  if (!latest) return 'Tell me what you are working on, and we can guide you to the right next step.';
  if (hasSafetyRisk(latest)) return safetyReply();
  const offTopic = offTopicReply(latest);
  if (offTopic) return offTopic;
  if (includesAny(latest, ['cost', 'price', 'pricing', 'budget', 'how much'])) return costReply(state);
  if (includesAny(latest, ['apple', 'knx', 'control4', 'home assistant', 'basalte', 'ekinex', 'c-bus', 'cbus', 'dynalite', 'lutron'])) return platformReply(state);

  return nextDiscoveryReply(state, latest);
};
