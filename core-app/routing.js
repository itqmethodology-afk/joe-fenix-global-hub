/**
 * JOE FENIX METHOD - GLOBAL NODE ROUTER (routing.js)
 * SERVERLESS CORE FOR GITHUB-EMERGENT HYBRID APP
 * TRUST LEVEL: HIGH-NET-WORTH INTERNATIONAL PERFORMANCE
 */

const ROUNTING_TABLE = {
  // Reindirizzamento dal libro Never Better al Cofanetto HAZR
  "welcome-hazr": {
    target: "#hazr-protocol-section",
    campaign: "BOOK_NEVER_BETTER_INTERNAL",
    description: "Traffic originating from the final chapter blueprint code"
  },
  // Vettori di attacco dai video social / HeyGen
  "hazr": {
    target: "#hazr-protocol-section",
    campaign: "HEYGEN_VIDEO_HAZR_01",
    description: "Direct traffic from the 60s launch video"
  },
  "neverbetter": {
    target: "#never-better-book-section",
    campaign: "HEYGEN_VIDEO_ADULT_BIOLOGY",
    description: "Traffic from psychological transaction focus videos"
  }
};

function executeBiomechanicalRouting() {
  const urlParams = new URLSearchParams(window.location.search);
  const path = window.location.pathname.replace(/^\/|\/\$/g, '');
  const currentRoute = ROUNTING_TABLE[path];
  const trafficSource = urlParams.get('src') || 'DIRECT_TRAFFIC';

  if (currentRoute) {
    console.log(`[SYSTEM BOOT] Routing executed for campaign: ${currentRoute.campaign}`);
    
    // API Call asincrona per notificare la logica di Emergent e tracciare il lead
    if (typeof emergent !== 'undefined') {
      emergent.trackClick({
        campaign: currentRoute.campaign,
        source: trafficSource,
        timestamp: new Date().toISOString()
      });
    }

    // Scroll geometrico o redirect fluido alla sezione dedicata della landing
    const element = document.querySelector(currentRoute.target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Inizializzazione al caricamento
window.addEventListener('DOMContentLoaded', executeBiomechanicalRouting);
