/**
 * JOE FENIX METHOD - GLOBAL TRANSACTIONAL CHECKOUT (checkout.js)
 * STRIPE INTEGRATION FOR HAZR HARDWARE & METADATA BINDING
 * TRUST LEVEL: HIGH-NET-WORTH INTERNATIONAL PERFORMANCE
 */

const STRIPE_CONFIG = {
  currency: { eur: 'EUR', usd: 'USD' },
  statementDescriptor: 'JOE FENIX*HAZR',
  checkoutUrl: 'https://stripe.com'
};

class HazrTransactionManager {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Genera la sessione di checkout Stripe legando i metadati del Calcolatore
   */
  async createHazrCheckoutSession(userEmail, calcResults, currencyCode = 'EUR') {
    const selectedCurrency = STRIPE_CONFIG.currency[currencyCode.toLowerCase()] || 'EUR';
    
    // Configurazione dei metadati per blindare il legame tra calcolo biologico e pagamento
    const transactionMetadata = {
      client_email: userEmail,
      hpa_overload_index: calcResults.hpaOverloadIndex || 'N/A',
      system_status: calcResults.status || 'UNKNOWN',
      voltage_baseline: '-70mV',
      product_type: 'PHYSICAL_GOODS_HAZR_BOX',
      timestamp: new Date().toISOString()
    };

    console.log(`[STRIPE INITIATION] Preparing session for ${userEmail}. Matrix bound to -70mV.`);

    // Struttura dei dati per l'API di Stripe Checkout
    const sessionData = {
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: selectedCurrency,
          product_data: {
            name: 'Cofanetto Hardware HAZR - Protocollo Rigenerativo',
            description: `Piano personalizzato basato sul report Epigenetic Matrix Calculator [ EM-CALC ] (${transactionMetadata.hpa_overload_index} Overload)`,
          },
          unit_amount: selectedCurrency === 'USD' ? 49900 : 49900, // Prezzo d'élite di riferimento (es. 499.00)
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://joe-fenix-method.com{CHECKOUT_SESSION_ID}&status=success',
      cancel_url: 'https://joe-fenix-method.com',
      metadata: transactionMetadata,
      shipping_address_collection: {
        allowed_countries: ['IT', 'US', 'GB', 'CH', 'DE', 'FR', 'ES'], // Limitato ai mercati internazionali d'élite
      }
    };

    return sessionData;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HazrTransactionManager;
}
