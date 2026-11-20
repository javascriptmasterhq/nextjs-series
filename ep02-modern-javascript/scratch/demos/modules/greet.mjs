export const greeting = "Hello";

export function shout(text) {
  return text.toUpperCase() + "!";
}

export default function greet(name) {
  return `${greeting}, ${name}`;
}
