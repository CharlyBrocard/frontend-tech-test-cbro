import { Character, Reaction } from "../types";

export const LIMIT_DISPLAYED = 3;

export interface CharactersResponse {
  results: Character[];
  total: number;
  page: number;
  limit: number;
  next: string | null;
  previous: string | null;
}

export interface ReactionsResponse {
  reactions: Reaction[];
}

export async function getCharacters(
  name: string,
  page: number,
  limit = LIMIT_DISPLAYED
): Promise<CharactersResponse> {
  const params = new URLSearchParams({ name, page: String(page), limit: String(limit) });
  const response = await fetch(`/api/characters?${params}`);
  if (!response.ok) throw new Error(`Failed to fetch characters: ${response.status}`);
  return response.json();
}

export async function getReactions(): Promise<ReactionsResponse> {
  const response = await fetch("/api/reactions");
  if (!response.ok) throw new Error(`Failed to fetch reactions: ${response.status}`);
  return response.json();
}
