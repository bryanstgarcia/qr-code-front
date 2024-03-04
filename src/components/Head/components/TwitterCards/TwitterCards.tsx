import React from 'react';
import { Meta } from 'react-head';
/* 
    Más sobre las Twitter Cards en la documentación oficial:
    https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image

*/
export type TwitterCardType = {
    summary?: string,
    site?: string
    creator?: string
    url?: string
    title?: string
    description?: string
    image?: string
    imageAlt?: string
}
interface TwitterProps {
    twitter: TwitterCardType
}
export const TwitterCards: React.FC<TwitterProps> = ({ twitter }) => {
    return (
        <React.Fragment>
            {/* Twitter Cards */}
            {
                /* Must be set to a value of “summary” */
                twitter.summary 
                    ? (<Meta property="twitter:card" content={twitter.summary} />)
                    : null
                    /* : (<Meta property="twitter:card" content="summary" />) */
            }
            {
                /* The Twitter @username the card should be attributed to. */
                twitter.site
                    ? (<Meta name="twitter:site" content={twitter.site} />)
                    : null
            }
            {
                /* @username of content creator */
                twitter.creator
                    ? (<Meta name="twitter:creator" content={twitter.creator} />)
                    : null
            }
            {
                /* A concise url for the related content. */
                twitter.url
                    ? (<Meta name="twitter:url" content={twitter.url} />)
                    : null
            }
            {
                /* A concise title for the related content. */
                twitter.title
                    ? (<Meta name="twitter:title" content={twitter.title} />)
                    : null
            }
            {
                /* A description that concisely summarizes the content as appropriate for presentation within a Tweet. */
                twitter.description
                    ? (<Meta property="twitter:description"    content={twitter.description} />)
                    : null
            }
            {
                /* A URL to a unique image representing the content of the page. 5MB max size, SVG not supported */
                twitter.image
                    ? (<Meta property="twitter:image" content={twitter.image} />)
                    : null
            }
            {
                /* Descripción de la imagen */
                twitter.imageAlt
                    ? (<Meta name="twitter:image:alt" content={twitter.imageAlt}></Meta>)   
                    : null
            }
        </React.Fragment>
    )
}