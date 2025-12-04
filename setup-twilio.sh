#!/bin/bash

# Twilio Setup Script for Netlify
# This script helps you set Twilio environment variables in Netlify

echo "=========================================="
echo "Twilio WhatsApp Setup for Netlify"
echo "=========================================="
echo ""

# Check if netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI is not installed."
    echo "Install it with: npm install -g netlify-cli"
    exit 1
fi

echo "Please provide your Twilio credentials:"
echo ""

# Get Account SID
read -p "Enter your Twilio Account SID (starts with AC...): " TWILIO_ACCOUNT_SID

# Validate Account SID format
if [[ ! $TWILIO_ACCOUNT_SID =~ ^AC[a-zA-Z0-9]{32}$ ]]; then
    echo "⚠️  Warning: Account SID format looks incorrect. It should start with 'AC' and be 34 characters long."
    read -p "Continue anyway? (y/n): " continue_anyway
    if [ "$continue_anyway" != "y" ]; then
        exit 1
    fi
fi

# Get Auth Token
read -p "Enter your Twilio Auth Token: " TWILIO_AUTH_TOKEN

# Get WhatsApp From number
read -p "Enter your Twilio WhatsApp number (e.g., whatsapp:+14155238886): " TWILIO_WHATSAPP_FROM

# Validate WhatsApp number format
if [[ ! $TWILIO_WHATSAPP_FROM =~ ^whatsapp:\+[0-9]+$ ]]; then
    echo "⚠️  Warning: WhatsApp number format looks incorrect. Should be like: whatsapp:+14155238886"
    read -p "Continue anyway? (y/n): " continue_anyway
    if [ "$continue_anyway" != "y" ]; then
        exit 1
    fi
fi

echo ""
echo "Setting environment variables in Netlify..."
echo ""

# Set environment variables
netlify env:set TWILIO_ACCOUNT_SID "$TWILIO_ACCOUNT_SID"
netlify env:set TWILIO_AUTH_TOKEN "$TWILIO_AUTH_TOKEN"
netlify env:set TWILIO_WHATSAPP_FROM "$TWILIO_WHATSAPP_FROM"

echo ""
echo "✅ Environment variables set successfully!"
echo ""
echo "Next steps:"
echo "1. Redeploy your site: netlify deploy --prod --dir ."
echo "2. Test the signup flow on your website"
echo "3. Make sure your WhatsApp number is added to Twilio sandbox"
echo ""
echo "To verify variables are set, run: netlify env:list"

