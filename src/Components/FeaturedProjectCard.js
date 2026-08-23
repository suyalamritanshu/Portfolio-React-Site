import React from "react";
import styled from "styled-components";

function FeaturedProjectCard({ image, title, text, link }) {
  return (
    <FeaturedProjectCardStyled>
      <img src={image} alt={`${title} screenshot`} />
      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
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

  .visit-link {
    color: var(--primary-color-light);
    font-weight: 600;
    text-decoration: underline;
    transition: all 0.3s ease;
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
