import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Character, Reaction } from "../../types";
import { getCharacters, getReactions, LIMIT_DISPLAYED } from "../../api";
import { CharacterCard } from "../CharacterCard";
import { Pagination } from "../Pagination";
import styles from "./Content.module.scss";

export const Content: React.FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));

  const [characters, setCharacters] = useState<Character[]>([]);
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getReactions()
      .then((data) => setReactions(data.reactions))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getCharacters(name, page, LIMIT_DISPLAYED)
      .then((data) => {
        setCharacters(data.results);
        setTotal(data.total);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Something went wrong"))
      .finally(() => setLoading(false));
  }, [name, page]);

  const totalPages = Math.ceil(total / LIMIT_DISPLAYED);

  return (
    <main className={styles.content}>
      {loading && <div className={styles.statusMessage}>Loading…</div>}

      {!loading && error && (
        <div className={styles.errorMessage} role="alert">{error}</div>
      )}

      {!loading && !error && characters.length === 0 && (
        <div className={styles.emptyState}>
          <p>No characters found{name ? ` for "${name}"` : ""}.</p>
        </div>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <div className={styles.paginationTop}>
            <Pagination currentPage={page} totalPages={totalPages} name={name} />
          </div>
          <ul className={styles.characterList}>
            {characters.map((character) => (
              <li key={character.id}>
                <CharacterCard
                  character={character}
                  reactions={reactions.filter((r) => r.characterId === character.id && !r.deleted)}
                />
              </li>
            ))}
          </ul>
          <Pagination currentPage={page} totalPages={totalPages} name={name} />
        </>
      )}
    </main>
  );
};
