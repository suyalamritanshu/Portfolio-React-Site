import React from "react";
import styled from "styled-components";

function FeaturedProjectCard({ image, title, text, link, stack }) {
  return (
    <FeaturedProjectCardStyled>
      <img src={image} alt={`${title} screenshot`} />
      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
        {stack && stack.length > 0 && (
          <ul className="stack">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {link ? (
          <a href={link} target="_blank" rel="noreferrer" className="visit-link">
            Visit {title} →
          </a>
        ) : (
          <span className="pending-link">Link coming soon</span>
        )}
      </div>
    </FeaturedProjectCardStyled>
  );
}

const FeaturedProjectCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border: 1px solid var(--border-color);
  overflow: hidden;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  .content {
    padding: 1.5rem;
  }

  h4 {
    color: var(--white-color);
    font-size: 1.6rem;
    padding-bottom: 0.6rem;
  }

  p {
    opacity: 0.85;
    padding-bottom: 1rem;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-bottom: 1.25rem;
    li {
      font-family: var(--font-mono);
      font-size: var(--font-size-small);
      color: var(--primary-color-light);
      border: 1px solid var(--border-color);
      border-radius: 3px;
      padding: 0.2rem 0.6rem;
    }
  }

  .visit-link {
    color: var(--primary-color-light);
    font-weight: 600;
    text-decoration: underline;
    transition: color 0.3s ease;
    &:hover {
      color: var(--white-color);
    }
  }

  .pending-link {
    color: var(--font-light-color);
    font-size: var(--font-size-small);
    font-style: italic;
  }
`;

export default FeaturedProjectCard;
