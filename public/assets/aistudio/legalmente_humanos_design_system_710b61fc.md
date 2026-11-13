---
name: "Legalmente Humanos"
description: "Sistema de diseño para landing page de alta conversión de asesoría legal accesible, moderna, empática y de alto impacto para emprendedores y pymes."
---

## Overview

Legalmente Humanos rompe de raíz con la frialdad, distancia y lenguaje incomprensible de los bufetes jurídicos tradicionales. Combina autoridad institucional y rigor técnico con un trato humano, ágil y transparente. La identidad visual se fundamenta en un contraste contundente: negro profundo para cimientos de solidez y máxima autoridad, blanco y grises limpios para transparencia y claridad de lectura, y un verde manzana vibrante (`#A6FF00`) que energiza las acciones, denotando vitalidad, seguridad en el crecimiento y cercanía.

La estética responde al movimiento **High-Contrast Modern Direct Response**: tipografía masiva en encabezados con *Montserrat ExtraBold*, espaciado editorial generoso, jerarquía precisa orientada a la conversión y componentes interactivos táctiles y fluidos.

## Colors

La paleta cromática se estructura según la guía oficial de la marca:

- **Primary:** El verde manzana vibrante (`#A6FF00`) como acento de máxima energía para llamadas a la acción, viñetas de éxito y elementos de conversión clave.
- **Neutral:** Negro absoluto (`#000000`) y grises oscuros de fondo para conferir aplomo y sofisticación, combinados con blancos limpios y grises suaves (`#F5F5F5`) para tarjetas y máxima legibilidad.
- **Accents & Semantic:** Tonos de advertencia sutiles para delimitar a quién NO va dirigido el servicio, y verdes de confianza para sellos de garantía.

```yaml
colors:
  apple-green: "#A6FF00"
  apple-green-hover: "#92E600"
  dark-base: "#000000"
  dark-surface: "#0D0D0D"
  dark-surface-card: "#161616"
  dark-surface-border: "#262626"
  light-surface-card: "#F5F5F5"
  light-surface-subtle: "#EAEAEA"
  text-muted: "#A0A0A0"
  warning-bg: "#1F140E"
  warning-border: "#592814"
  warning-accent: "#FF6B35"
  light:
    primary: "#141414"
    on-primary: "#FFFFFF"
    secondary: "#A6FF00"
    on-secondary: "#000000"
    surface: "#FFFFFF"
    on-surface: "#000000"
    surface-card: "#F5F5F5"
    on-surface-card: "#111111"
    outline: "#DCDCDC"
  dark:
    primary: "#A6FF00"
    on-primary: "#000000"
    secondary: "#FFFFFF"
    on-secondary: "#000000"
    surface: "#000000"
    on-surface: "#FFFFFF"
    surface-card: "#141414"
    on-surface-card: "#F5F5F5"
    outline: "#2A2A2A"
```

## Typography

Se utiliza estrictamente la tipografía oficial corporativa: **Montserrat** con pesos ExtraBold para títulos y encabezados de impacto, y Regular/Medium para cuerpos de texto, datos y microcopys.

```yaml
typography:
  display-lg:
    fontFamily: "Montserrat"
    fontSize: 52px
    fontWeight: 800
    lineHeight: 60px
    letterSpacing: -1.2px
  display-lg-mobile:
    fontFamily: "Montserrat"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 38px
    letterSpacing: -0.6px
  display-md:
    fontFamily: "Montserrat"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 48px
    letterSpacing: -0.8px
  display-md-mobile:
    fontFamily: "Montserrat"
    fontSize: 28px
    fontWeight: 800
    lineHeight: 34px
    letterSpacing: -0.4px
  headline-lg:
    fontFamily: "Montserrat"
    fontSize: 34px
    fontWeight: 800
    lineHeight: 42px
    letterSpacing: -0.5px
  headline-lg-mobile:
    fontFamily: "Montserrat"
    fontSize: 24px
    fontWeight: 800
    lineHeight: 32px
    letterSpacing: -0.2px
  headline-md:
    fontFamily: "Montserrat"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.2px
  headline-sm:
    fontFamily: "Montserrat"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
  title-lg:
    fontFamily: "Montserrat"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 26px
  body-lg:
    fontFamily: "Montserrat"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "Montserrat"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "Montserrat"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-lg:
    fontFamily: "Montserrat"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.2px
  label-md:
    fontFamily: "Montserrat"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 18px
    letterSpacing: 0.5px
```

## Layout & Spacing

El contenedor principal se ciñe a una anchura máxima de 1200px centrado, con ritmo vertical expansivo para evitar la fatiga visual. En dispositivos móviles se adapta de forma fluida con padding horizontal seguro y botones de contacto adaptados a la zona del pulgar.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section-sm: 48px
  section-md: 72px
  section-lg: 96px
  container-max: 1200px
```

## Elevation & Depth

La jerarquía visual se establece mediante superficies oscuras estratificadas, sutiles bordes translúcidos (`border-outline` al 15-20% de opacidad) y acentos de luz periférica en verde manzana. En bloques claros se aplican sombras suaves difusas de gran radio y baja densidad para dar solidez táctil sin pesadez visual.

## Shapes

Esquinas redondeadas coherentes que transmiten cercanía pero mantienen disciplina corporativa: botones y tarjetas con radio mediano y píldoras completas para badges y etiquetas flotantes.

```yaml
rounded:
  sm: 6px
  DEFAULT: 12px
  md: 16px
  lg: 20px
  xl: 28px
  full: 9999px
```

## Motion & Micro-interaction

Interacciones instantáneas y decididas:
- Botones de CTA con micro-elevación y cambio de brillo en verde manzana.
- Acordeones FAQ con despliegue progresivo suave y rotación de icono de flecha.
- Tarjetas con ligera transición de borde e iluminación al hover.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 250ms
    delay: 0ms
    timingFunction: cubic-bezier(0.16, 1, 0.3, 1)
```

## Voice & Content Strategy

- **Tono:** Humano, transparente, empático, protector y contundente. Elimina tecnicismos ininteligibles y habla el idioma del emprendedor y del dueño de negocio.
- **Copywriting:** Direct Response emocional orientado a resolver dolores reales (miedo a demandas, contratos trampa, burocracia paralizante, desprotección patrimonial).
- **Llamadas a la acción:** Verbos de acción directa y alta certeza («Reservar Mi Diagnóstico Gratuito», «Blindar Mi Negocio Ahora», «Eliminar Riesgos Legales»).

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Accordion** → `@components/accordion.html`: `accordion-single`, `accordion-group`
- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
