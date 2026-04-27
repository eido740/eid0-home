const STORAGE_KEY = "eid0.cards.goldfish";

const sampleDeck = `4 Lantern Scout
4 Ash-Key Courier
4 Quiet Foundry
3 Threadneedle Charm
3 Copper Veil
4 Map the Ruins
4 Orchard Familiar
2 Ember Ledger
3 Weathered Gate
4 Signal Kite
3 Soft Reset
2 Glasswork Engine
4 Lowland Market
4 Verdant Switchback
4 Archive Path`;

const state = {
  mirror: true,
  players: [
    createPlayerState("player one"),
    createPlayerState("player two")
  ]
};

const els = {
  handSize: document.querySelector("#handSize"),
  dealBothBtn: document.querySelector("#dealBothBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  drawBothBtn: document.querySelector("#drawBothBtn"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  sampleBtn: document.querySelector("#sampleBtn"),
  copyBtn: document.querySelector("#copyBtn"),
  saveBtn: document.querySelector("#saveBtn"),
  loadBtn: document.querySelector("#loadBtn"),
  mirrorDecks: document.querySelector("#mirrorDecks"),
  deckAInput: document.querySelector("#deckAInput"),
  deckBInput: document.querySelector("#deckBInput"),
  deckBEditor: document.querySelector("#deckBEditor"),
  deckSummary: document.querySelector("#deckSummary"),
  deckACount: document.querySelector("#deckACount"),
  deckBCount: document.querySelector("#deckBCount"),
  statusLine: document.querySelector("#statusLine")
};

function createPlayerState(name) {
  return {
    name,
    library: [],
    hand: [],
    play: [],
    discard: []
  };
}

function parseDeckList(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && !line.startsWith("//"))
    .flatMap(expandDeckLine);
}

function expandDeckLine(line) {
  const cleaned = line.replace(/\s+/g, " ");
  const leading = cleaned.match(/^(\d+)\s*x?\s+(.+)$/i);
  const trailing = cleaned.match(/^(.+?)\s+x\s*(\d+)$/i);
  let count = 1;
  let name = cleaned;

  if (leading) {
    count = Number(leading[1]);
    name = leading[2];
  } else if (trailing) {
    count = Number(trailing[2]);
    name = trailing[1];
  }

  count = Number.isFinite(count) ? Math.max(1, Math.min(count, 99)) : 1;
  return Array.from({ length: count }, (_, index) => ({
    id: `${name}-${crypto.randomUUID ? crypto.randomUUID() : Date.now()}-${index}`,
    name
  }));
}

function getDecks() {
  const deckA = parseDeckList(els.deckAInput.value);
  const deckB = state.mirror ? parseDeckList(els.deckAInput.value) : parseDeckList(els.deckBInput.value);
  return [deckA, deckB];
}

function shuffle(cards) {
  const next = [...cards];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function dealBoth() {
  const handSize = clampHandSize();
  const decks = getDecks();

  decks.forEach((deck, playerIndex) => {
    const library = shuffle(deck);
    state.players[playerIndex] = createPlayerState(playerIndex === 0 ? "player one" : "player two");
    state.players[playerIndex].library = library;
    drawCards(playerIndex, handSize, false);
  });

  setStatus(`dealt ${handSize} to each player`);
  render();
}

function clampHandSize() {
  const value = Number(els.handSize.value);
  const clamped = Math.max(1, Math.min(Number.isFinite(value) ? value : 7, 12));
  els.handSize.value = String(clamped);
  return clamped;
}

function drawCards(playerIndex, count = 1, shouldRender = true) {
  const player = state.players[playerIndex];
  for (let index = 0; index < count; index += 1) {
    const next = player.library.shift();
    if (!next) break;
    player.hand.push(next);
  }
  setStatus(`${player.name} drew ${count === 1 ? "a card" : `${count} cards`}`);
  if (shouldRender) render();
}

function drawBoth() {
  drawCards(0, 1, false);
  drawCards(1, 1, false);
  setStatus("both players drew a card");
  render();
}

function playCard(playerIndex, cardId) {
  const player = state.players[playerIndex];
  const card = removeById(player.hand, cardId);
  if (!card) return;
  player.play.push(card);
  setStatus(`${player.name} played ${card.name}`);
  render();
}

function discardPlayed(playerIndex, cardId) {
  const player = state.players[playerIndex];
  const card = removeById(player.play, cardId);
  if (!card) return;
  player.discard.push(card);
  setStatus(`${player.name} discarded ${card.name}`);
  render();
}

function restoreDiscard(playerIndex) {
  const player = state.players[playerIndex];
  if (!player.discard.length) return;
  player.library = shuffle([...player.discard, ...player.library]);
  player.discard = [];
  setStatus(`${player.name} shuffled discard into library`);
  render();
}

function removeById(cards, cardId) {
  const index = cards.findIndex((card) => card.id === cardId);
  if (index === -1) return null;
  const [card] = cards.splice(index, 1);
  return card;
}

function resetTable() {
  state.players = [
    createPlayerState("player one"),
    createPlayerState("player two")
  ];
  setStatus("table reset");
  render();
}

function shuffleLibraries() {
  state.players.forEach((player) => {
    player.library = shuffle(player.library);
  });
  setStatus("libraries shuffled");
  render();
}

function updateCounts() {
  const deckA = parseDeckList(els.deckAInput.value);
  const deckB = state.mirror ? deckA : parseDeckList(els.deckBInput.value);
  els.deckACount.textContent = `${deckA.length} cards`;
  els.deckBCount.textContent = state.mirror ? "mirrored" : `${deckB.length} cards`;
  els.deckSummary.textContent = `${deckA.length} / ${deckB.length} cards ready`;
  els.deckBEditor.classList.toggle("is-muted", state.mirror);
  els.deckBInput.disabled = state.mirror;
}

function render() {
  updateCounts();

  state.players.forEach((player, playerIndex) => {
    document.querySelector(`#p${playerIndex}LibraryCount`).textContent = `${player.library.length} library`;
    document.querySelector(`#p${playerIndex}DeckCount`).textContent = player.library.length;
    document.querySelector(`#p${playerIndex}DiscardCount`).textContent = player.discard.length;
    renderZone(`#p${playerIndex}Hand`, player.hand, playerIndex, "hand");
    renderZone(`#p${playerIndex}Play`, player.play, playerIndex, "play");
  });
}

function renderZone(selector, cards, playerIndex, zone) {
  const container = document.querySelector(selector);
  container.textContent = "";

  if (!cards.length) {
    const empty = document.createElement("span");
    empty.className = "zone-empty";
    empty.textContent = zone === "hand" ? "hand" : "play";
    container.append(empty);
    return;
  }

  cards.forEach((card) => {
    const button = document.createElement("button");
    button.className = `card-btn ${zone === "play" ? "in-play" : ""}`;
    button.type = "button";
    button.dataset.player = String(playerIndex);
    button.dataset.zone = zone;
    button.dataset.cardId = card.id;
    button.setAttribute("aria-label", `${zone === "hand" ? "Play" : "Discard"} ${card.name}`);

    const name = document.createElement("span");
    name.className = "card-name";
    name.textContent = card.name;

    const meta = document.createElement("span");
    meta.className = "card-meta";
    meta.textContent = zone === "hand" ? "hand" : "play";

    button.append(name, meta);
    container.append(button);
  });
}

function setStatus(message) {
  els.statusLine.textContent = message;
  els.statusLine.classList.remove("toast");
  requestAnimationFrame(() => {
    els.statusLine.classList.add("toast");
  });
}

function saveLists() {
  const payload = {
    deckA: els.deckAInput.value,
    deckB: els.deckBInput.value,
    mirror: state.mirror,
    handSize: els.handSize.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  setStatus("lists saved");
}

function loadLists() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    setStatus("no saved lists yet");
    return;
  }
  try {
    const payload = JSON.parse(raw);
    els.deckAInput.value = payload.deckA || "";
    els.deckBInput.value = payload.deckB || "";
    els.handSize.value = payload.handSize || "7";
    state.mirror = payload.mirror !== false;
    els.mirrorDecks.checked = state.mirror;
    setStatus("lists loaded");
    render();
  } catch {
    setStatus("saved lists could not load");
  }
}

function bindEvents() {
  els.dealBothBtn.addEventListener("click", dealBoth);
  els.resetBtn.addEventListener("click", resetTable);
  els.drawBothBtn.addEventListener("click", drawBoth);
  els.shuffleBtn.addEventListener("click", shuffleLibraries);
  els.sampleBtn.addEventListener("click", () => {
    els.deckAInput.value = sampleDeck;
    if (!state.mirror) els.deckBInput.value = sampleDeck;
    setStatus("sample list loaded");
    render();
  });
  els.copyBtn.addEventListener("click", () => {
    els.deckBInput.value = els.deckAInput.value;
    state.mirror = false;
    els.mirrorDecks.checked = false;
    setStatus("copied player one list");
    render();
  });
  els.saveBtn.addEventListener("click", saveLists);
  els.loadBtn.addEventListener("click", loadLists);
  els.mirrorDecks.addEventListener("change", () => {
    state.mirror = els.mirrorDecks.checked;
    setStatus(state.mirror ? "player two mirrors player one" : "player two uses a separate list");
    render();
  });
  els.deckAInput.addEventListener("input", updateCounts);
  els.deckBInput.addEventListener("input", updateCounts);

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action], .card-btn");
    if (!target) return;

    if (target.classList.contains("card-btn")) {
      const playerIndex = Number(target.dataset.player);
      if (target.dataset.zone === "hand") playCard(playerIndex, target.dataset.cardId);
      if (target.dataset.zone === "play") discardPlayed(playerIndex, target.dataset.cardId);
      return;
    }

    const playerIndex = Number(target.dataset.player);
    if (target.dataset.action === "draw") drawCards(playerIndex);
    if (target.dataset.action === "restore") restoreDiscard(playerIndex);
  });
}

function hydrateInitialState() {
  els.deckAInput.value = sampleDeck;
  els.deckBInput.value = "";
  render();
}

bindEvents();
hydrateInitialState();
