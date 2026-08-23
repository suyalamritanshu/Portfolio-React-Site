import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://amritanshusuyal.netlify.app";

function SEO({ title, description, path }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}${path}`} />
    </Helmet>
  );
}

export default SEO;
