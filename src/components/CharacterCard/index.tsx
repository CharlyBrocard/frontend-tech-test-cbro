import React from "react";

import { Character, Reaction } from "../../types";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  character: Character;
  reactions: Reaction[];
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, reactions }) => {
  const { name, species, birthYear, description, imageUrl, affiliations } = character;

  const uniqueReactions = [...new Map(reactions.map((r) => [r.content, r])).values()];

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className={styles.image} loading="lazy" />
        ) : (
          <div className={styles.imagePlaceholder} />
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.badges}>
            {species && <span className={styles.badge}>{species.toUpperCase()}</span>}
            {birthYear && <span className={styles.badge}>{birthYear}</span>}
          </div>
        </div>

        {description && <p className={styles.description}>{description}</p>}

        {affiliations.length > 0 && (
          <div className={styles.affiliations}>
            {affiliations.map((affiliation) => (
              <span key={affiliation} className={styles.chip}>
                {affiliation.toUpperCase()}
              </span>
            ))}
          </div>
        )}

        {uniqueReactions.length > 0 && (
          <div className={styles.reactions}>
            {uniqueReactions.map((reaction) => (
              <span key={reaction.content} className={styles.reaction}>
                {reaction.content}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
