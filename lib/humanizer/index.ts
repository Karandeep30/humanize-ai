import { MockHumanizerProvider } from "./mock-provider";
import type { HumanizerProvider } from "./types";

export function getHumanizerProvider(): HumanizerProvider {
  return new MockHumanizerProvider();
}
