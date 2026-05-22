/** Rendered as an HTML comment in page source only — not visible on the page. */

const WIDTH = 78;

function rule(char = "=") {
  return char.repeat(WIDTH);
}

function center(text: string) {
  const trimmed = text.slice(0, WIDTH);
  const pad = Math.max(0, WIDTH - trimmed.length);
  const left = Math.floor(pad / 2);
  return " ".repeat(left) + trimmed;
}

function star(text: string) {
  const inner = WIDTH - 4;
  const trimmed = text.slice(0, inner);
  const pad = Math.max(0, inner - trimmed.length);
  const left = Math.floor(pad / 2);
  const right = pad - left;
  return `* ${" ".repeat(left)}${trimmed}${" ".repeat(right)} *`;
}

const lines = [
  "",
  rule(),
  star(""),
  star("WHAT ARE YOU POKING AROUND FOR???"),
  star(""),
  star("Nothing to see here."),
  star("Go lock in and get ready for the beach bruh."),
  star(""),
  rule(),
  "",
  center(""),
  center("        ***   BEACH MODE: ACTIVATED   ***"),
  center(""),
  center("   (\\_(\\   (\\_(\\   (\\_(\\   (\\_(\\   (\\_(\\"),
  center("   /     \\ /     \\ /     \\ /     \\ /     \\"),
  center("  | () () | () () | () () | () () | () () |"),
  center("   \\_____/ \\_____/ \\_____/ \\_____/ \\_____/"),
  center(""),
  center("  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~"),
  center("     PUT THE LAPTOP DOWN  |  TOUCH SAND  |  LOCK IN"),
  center("  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~  ~~"),
  center(""),
  center("  [ sun ] [ palm ] [ palm ] [ palm ] [ drink ] [ shades ]"),
  center(""),
  rule("-"),
  star(""),
  star("MIT Sloan Pre-F(x) 2026  |  Aug 23 — Aug 29"),
  star(""),
  star("You found the secret. Respect. Close DevTools. Go pack:"),
  star("[x] sunscreen  [x] swimsuit  [x] stamina  [x] sunglasses"),
  star(""),
  rule("-"),
  star(""),
  star("deep house loading...  |  sunset sets only  |  vibes"),
  star(""),
  star("seriously tho. nothing hidden here."),
  star("go lock in. beach soon. bruh."),
  star(""),
  rule("-"),
  "",
  center("                         ##"),
  center("                        ####"),
  center("                       ######"),
  center("                      ########"),
  center("                     ##########"),
  center("                    ############"),
  center("                   ##############"),
  center("                  ################"),
  center("                 ##################"),
  center("                ####################"),
  center("               ######################"),
  center("              ########################"),
  center("             ##########################"),
  center("            ##########################"),
  center(""),
  center("  ~ ~ ~  see you in the sun  |  Pre-F(x) 2026  ~ ~ ~"),
  center(""),
  rule(),
  "",
];

export const SOURCE_EASTER_EGG_HTML = `<!--\n${lines.join("\n")}\n-->`;
