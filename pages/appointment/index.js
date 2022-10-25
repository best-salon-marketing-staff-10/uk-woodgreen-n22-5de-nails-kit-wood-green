import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import React, { useEffect } from "react";
import Router from 'next/router';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';
import { schemaData } from '/pages/core/info'

export default function Appointment(){
  if (process.browser){
    document.oncontextmenu = new Function("return false;");
  }
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/appointment' ){
        Router.push(thongTinTiem2.linkBookingTiem)
    }
  });

  return (
    <>
      <Head>
      <title>The best nail salon in {thongTinTiem1.cityTiem} - {thongTinTiem1.tenTiem}</title>
        <meta name="description" 
            content= {thongTinTiem2.metaDescriptionContent} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          
        <link rel="icon" href={thongTinTiem1.icon} />
        <meta name="geo.position" content={thongTinTiem2.geoPositionContent} />
        <meta name="geo.placename" content={thongTinTiem2.geoPlaceNameContent} />
        <meta name="geo.region" content={thongTinTiem1.geoRegionContent} />
        <link rel="canonical" href={thongTinTiem1.websiteTiem} />
        <link rel="alternate" hrefLang="en" href={thongTinTiem1.websiteTiem} />
        <link rel="alternate" href={thongTinTiem1.websiteTiem} hrefLang="x-default" />

        <meta property='og:title' content={thongTinTiem2.sloganTiem} />
        <meta property='og:image' content={thongTinTiem1.ogImage} />
        <meta property='og:description' 
            content={thongTinTiem2.metaDescriptionContent} />
        <meta property='og:url' content={thongTinTiem1.websiteTiem} />
        <meta property='og:image:width' content='1164' />
        <meta property='og:image:height' content='1032' />
        <meta property="og:type" content='website' />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
      </Head>

    </>
  )
}
