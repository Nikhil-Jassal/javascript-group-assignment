// Convert HEX to RGB object
export function hexToRgb(hex) {
  hex = hex.replace('#', '')
  if (hex.length === 3) {
    hex = hex.split('').map(h => h + h).join('')
  }
  const bigint = parseInt(hex, 16)
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  }
}

// Convert RGB object to HEX string
export function rgbToHex({ r, g, b }) {
  return (
    '#' +
    [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  )
}

// Convert RGB object to HSL string
export function rgbToHsl({ r, g, b }) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  h = Math.round(h * 360)
  s = Math.round(s * 100)
  l = Math.round(l * 100)
  return `hsl(${h}°, ${s}%, ${l}%)`
}

// Calculate relative luminance (WCAG)
function luminance({ r, g, b }) {
  const a = [r, g, b].map(v => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
}

// Calculate contrast ratio between two colors
export function contrastRatio(rgb1, rgb2 = { r: 255, g: 255, b: 255 }) {
  const lum1 = luminance(rgb1)
  const lum2 = luminance(rgb2)
  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)
  return (lighter + 0.05) / (darker + 0.05)
}

// Generate palette colors for tabs
export function generatePalettes(baseHex) {
  const baseRgb = hexToRgb(baseHex)

  const palettes = {
    Primary: createShades(baseRgb, 'primary'),
    Secondary: createShades(baseRgb, 'secondary'),
    Accent: createShades(baseRgb, 'accent'),
    Neutral: createNeutralColors(),
    Yellow: createYellowColors()
  }

  return palettes
}

// Create shades for primary, secondary, accent categories
function createShades(rgb, category) {
  const hslBase = rgbToHsl(rgb)
  const [h, s, l] = parseHsl(hslBase)

  const variations = []
  for (let i = 0; i < 6; i++) {
    let newH = h
    let newS = s
    let newL = l

    switch (category) {
      case 'primary':
        newL = clamp(l - i * 8, 20, 80)
        newS = clamp(s + i * 4, 30, 90)
        break
      case 'secondary':
        newH = (h + 30) % 360
        newL = clamp(l - i * 7, 25, 75)
        newS = clamp(s + i * 6, 40, 85)
        break
      case 'accent':
        newH = (h + 60) % 360
        newL = clamp(l - i * 5, 30, 70)
        newS = clamp(s + i * 8, 50, 90)
        break
    }

    const newRgb = hslToRgb(newH, newS, newL)
    const hex = rgbToHex(newRgb)
    variations.push({
      name: `${category} ${i + 1}`,
      hex,
      rgb: `RGB: ${newRgb.r}, ${newRgb.g}, ${newRgb.b}`,
      hsl: `HSL: ${newH}°, ${newS}%, ${newL}%`,
      contrast: contrastRatio(newRgb),
      gradient: `linear-gradient(135deg, ${hex} 0%, #000000cc 90%)`
    })
  }
  return variations
}

function createNeutralColors() {
  const neutrals = [
    '#f5f5f5',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626'
  ]
  return neutrals.map((hex, i) => {
    const rgb = hexToRgb(hex)
    return {
      name: `Neutral ${i + 1}`,
      hex,
      rgb: `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`,
      hsl: rgbToHsl(rgb),
      contrast: contrastRatio(rgb),
      gradient: `linear-gradient(135deg, ${hex} 0%, #000000cc 90%)`
    }
  })
}

function createYellowColors() {
  const yellows = [
    '#fffbe6',
    '#fff1b8',
    '#ffe58f',
    '#ffd666',
    '#ffc53d',
    '#faad14'
  ]
  return yellows.map((hex, i) => {
    const rgb = hexToRgb(hex)
    return {
      name: `Yellow ${i + 1}`,
      hex,
      rgb: `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`,
      hsl: rgbToHsl(rgb),
      contrast: contrastRatio(rgb),
      gradient: `linear-gradient(135deg, ${hex} 0%, #000000cc 90%)`
    }
  })
}

function parseHsl(hslStr) {
  const m = hslStr.match(/hsl\((\d+)[°]?,\s*(\d+)%?,\s*(\d+)%?\)/)
  if (!m) return [0, 0, 0]
  return [Number(m[1]), Number(m[2]), Number(m[3])]
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

function hslToRgb(h, s, l) {
  s /= 100
  l /= 100

  let c = (1 - Math.abs(2 * l - 1)) * s
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  let m = l - c / 2

  let r1, g1, b1
  if (h < 60) {
    r1 = c; g1 = x; b1 = 0
  } else if (h < 120) {
    r1 = x; g1 = c; b1 = 0
  } else if (h < 180) {
    r1 = 0; g1 = c; b1 = x
  } else if (h < 240) {
    r1 = 0; g1 = x; b1 = c
  } else if (h < 300) {
    r1 = x; g1 = 0; b1 = c
  } else {
    r1 = c; g1 = 0; b1 = x
  }

  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255)
  }
}

export function randomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')
  return `#${hex.toUpperCase()}`
}
