import React from 'react';
import { Meta } from 'react-head';

/* 
    Más información sobre Open Graph protocol, en la página / documentacion
    https://developers.facebook.com/docs/sharing/webmasters#markup
    https://ogp.me/
*/
export type OpenGraphType = {
    appId?: string
    url?: string
    type?: string
    title?: string
    image?: string
    imageAlt?: string
    description?: string
    siteName?: string
    locale?: string
}
interface OgProps {
    og : OpenGraphType
}
export const OpenGraph: React.FC<OgProps> = ({ og }) => {
    return (
        <React.Fragment>
            {
                /* ID de la página de facebook */
                og.appId 
                    ? (<Meta property="fb:app_id" content={og.appId} />)
                    : null                                       
            }
            {
                /* URL Canónica de la página */
                og.url
                    ? (<Meta property="og:url" content={og.url} />)
                    : null
            }
            {
                /* Tipo de elementos multimedia del contenido */
                og.type
                    ? (<Meta property="og:type" content={og.type} />)
                    : null
            }
            {
                /* Título del contenido */
                og.title
                    ? (<Meta property="og:title" content={og.title} />)
                    : null
            }
            {
                /* URL de la imagen que aparece cuando alguien comparte el contenido en Facebook */
                og.image
                    ? (<Meta property="og:image" content={og.image} />)
                    : null
            }
            {
                /* Descripción de la imagen */
                og.imageAlt
                    ? (<Meta property="og:image:alt"      content={og.imageAlt} />)   
                    : null
            }
            {
                /* Descripción de contenido */
                og.description
                    ? (<Meta property="og:description"    content={og.description} />)
                    : null
            }
            {
                /* If your object is part of a larger web site, the name which should be displayed for the overall site. e.g. */
                og.siteName
                    ? (<Meta property="og:site_name"      content={og.siteName} />)
                    : null       
                    /* : (<Meta property="og:site_name"      content="Educación Continua | Cámara de Comercio de Bogotá" />) */       
            }
            {
                /* The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US  */
                og.locale
                    ? (<Meta property="og:locale"         content={og.locale} />)
                    : null
                    /* : (<Meta property="og:locale"         content="es_CO" />) */
            }
            
        </React.Fragment>
    )
}