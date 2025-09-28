
import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config"

// init arcjet
export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"], 
    rules: [
        // shield protects ur app from common attacks e.g SQL injection, XSS, CSRF, attacks
        shield({mode: "LIVE"}), 
        detectBot({
            mode: "LIVE",
            // Исправлено: используем deny вместо allows
            deny: [
                "CATEGORY:AI",
                "CATEGORY:SCRAPER"
            ]
            // Или используйте allow:
            // allow: ["CATEGORY:SEARCH_ENGINE"]
        }),

        // rate limiting
        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10, 
            capacity: 10,
        })
    ]
})