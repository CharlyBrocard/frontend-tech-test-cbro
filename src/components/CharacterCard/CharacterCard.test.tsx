import React from "react";
import { render, screen } from "@testing-library/react";

import { CharacterCard } from ".";
import { Character, Reaction } from "../../types";

const baseCharacter: Character = {
  id: 1,
  name: "Han Solo",
  species: "Human",
  birthYear: "29 BBY",
  description: "A charismatic smuggler.",
  imageUrl: "/images/han-solo.png",
  affiliations: ["Rebel Alliance", "Resistance"],
};

const reactions: Reaction[] = [
  { id: "1", content: "⭐", characterId: 1, deleted: false },
  { id: "2", content: "💙", characterId: 1, deleted: false },
  { id: "3", content: "❌", characterId: 1, deleted: true },
];

describe("CharacterCard", () => {
  it("renders the character name", () => {
    render(<CharacterCard character={baseCharacter} reactions={[]} />);
    expect(
      screen.getByRole("heading", { name: "Han Solo" })
    ).toBeInTheDocument();
  });

  it("renders species and birth year badges", () => {
    render(<CharacterCard character={baseCharacter} reactions={[]} />);
    expect(screen.getByText("HUMAN")).toBeInTheDocument();
    expect(screen.getByText("29 BBY")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<CharacterCard character={baseCharacter} reactions={[]} />);
    expect(screen.getByText("A charismatic smuggler.")).toBeInTheDocument();
  });

  it("renders affiliations as uppercase chips", () => {
    render(<CharacterCard character={baseCharacter} reactions={[]} />);
    expect(screen.getByText("REBEL ALLIANCE")).toBeInTheDocument();
    expect(screen.getByText("RESISTANCE")).toBeInTheDocument();
  });

  it("renders a placeholder when imageUrl is missing", () => {
    const noImage: Character = { ...baseCharacter, imageUrl: undefined };
    render(<CharacterCard character={noImage} reactions={[]} />);
    expect(
      screen.queryByRole("img", { name: "Han Solo" })
    ).not.toBeInTheDocument();
  });
});
