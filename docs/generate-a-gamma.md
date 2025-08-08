# Gamma API: Generate a Gamma

- Method: POST
- Endpoint: https://public-api.gamma.app/v0.2/generations
- Description: Create a gamma using this endpoint.

## Authentication and Headers
- X-API-KEY: required. Your Gamma API key.
- Content-Type: application/json
- Accept: application/json

## Request Body Parameters

- inputText (string, required): Text used to generate your gamma. Can be a few words or pages of text. Character limits: 1–750,000. Example: “Pitch deck on deep sea exploration.”
- textMode (string, default: generate): How to modify inputText. One of: generate, condense, preserve.
- format (string, default: presentation): The artifact type. One of: presentation, document, social.
- themeName (string): Name of the Gamma theme to use. If omitted, the workspace’s default theme is used.
- numCards (integer, default: 10): Number of cards when cardSplit is auto. Any integer between 1 and 60.
- cardSplit (string, default: auto): How to divide the content. One of: auto, inputTextBreaks.
- additionalInstructions (string): Extra specifications for desired content and layouts. Character limits: 1–500. Example: “Make the titles catchy.”
- exportAs (string): Additional export types. One of: pdf, pptx.

### textOptions (object)
Attributes for the text to generate, e.g.:
- amount
- language

See “Output Language Accepted Values” for the complete list of supported languages:
https://developers.gamma.app/reference/output-language-accepted-values

### imageOptions (object)
Attributes for generated images, if any, e.g.:
- source
- model

See “Image Model Accepted Values” for supported image model options:
https://developers.gamma.app/reference/image-model-accepted-values

### cardOptions (object)
Attributes of the cards you want to generate (related to the format parameter).

### sharingOptions (object)
Determines how the generated gamma is shared with others.

## Example (cURL)

```bash
curl --request POST \
  --url https://public-api.gamma.app/v0.2/generations \
  --header 'Content-Type: application/json' \
  --header 'accept: application/json' \
  --header "X-API-KEY: $GAMMA_API_KEY" \
  --data '{
    "textMode": "generate",
    "format": "presentation",
    "numCards": "10",
    "cardSplit": "auto",
    "textOptions": {
      "amount": "medium",
      "language": "en"
    },
    "imageOptions": {
      "source": "aiGenerated"
    }
  }'
```

## Success Response (200)
```json
{
  "generationId": "xxxxxxxxxxx"
}
```

## Related
- Image Model Accepted Values: https://developers.gamma.app/reference/image-model-accepted-values
- Output Language Accepted Values: https://developers.gamma.app/reference/output-language-accepted-values
- Receive generated file URLs (GET): https://developers.gamma.app/reference/get-gamma-file-urls
- Error Codes and Warnings: https://developers.gamma.app/reference/error-codes
